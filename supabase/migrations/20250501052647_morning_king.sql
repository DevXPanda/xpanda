/*
  # Create contacts table

  1. New Tables
    - `contacts`
      - `id` (uuid, primary key)
      - `name` (text, required)
      - `email` (text, required)
      - `subject` (text)
      - `message` (text, required)
      - `created_at` (timestamp with timezone)

  2. Security
    - Enable RLS on contacts table
    - Add policy to allow public form submissions
*/

CREATE TABLE IF NOT EXISTS contacts (
  id uuid PRIMARY KEY DEFAULT gen_random_uuid(),
  name text NOT NULL,
  email text NOT NULL,
  subject text,
  message text NOT NULL,
  created_at timestamptz DEFAULT now()
);

-- Enable RLS
ALTER TABLE contacts ENABLE ROW LEVEL SECURITY;

-- Allow public form submissions
CREATE POLICY "Allow public form submissions" ON contacts
  FOR INSERT
  TO public
  WITH CHECK (true);

-- Create notification function
CREATE OR REPLACE FUNCTION notify_new_contact()
RETURNS TRIGGER AS $$
BEGIN
  PERFORM net.http_post(
    url := 'https://api.resend.com/emails',
    headers := jsonb_build_object(
      'Authorization', 'Bearer ' || current_setting('app.settings.resend_api_key'),
      'Content-Type', 'application/json'
    ),
    body := jsonb_build_object(
      'from', 'Contact Form <no-reply@satyampandey.com>',
      'to', 'satyamkumarpandey4567@gmail.com',
      'subject', 'New Contact Form Submission: ' || NEW.subject,
      'html', format(
        'New contact form submission:<br><br>' ||
        'Name: %s<br>' ||
        'Email: %s<br>' ||
        'Subject: %s<br>' ||
        'Message: %s',
        NEW.name,
        NEW.email,
        NEW.subject,
        NEW.message
      )
    )
  );
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SECURITY DEFINER;

-- Create trigger for notifications
CREATE TRIGGER notify_new_contact_trigger
  AFTER INSERT ON contacts
  FOR EACH ROW
  EXECUTE FUNCTION notify_new_contact();