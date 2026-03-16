import React, { useState } from 'react';
import { Mail, Phone, MapPin, CheckCircle, AlertCircle, Loader2, Sparkles, Send } from 'lucide-react';
import { socialLinks } from '../data';

const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbwSuQI3N53k0FLvs0H2K9jr4CMmAMGNBNUI16yxXRrPawitA4vSQT5OQ_2nGJyrjpyyBQ/exec";

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  
  const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!WEB_APP_URL) {
      setStatus('error');
      setErrorMessage('Communication relay not initialized.');
      return;
    }

    setStatus('loading');

    try {
      const params = new URLSearchParams();
      params.append('name', formData.name);
      params.append('email', formData.email);
      params.append('phone', formData.phone);
      params.append('subject', formData.subject);
      params.append('message', formData.message);

      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: params.toString(),
      });

      setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
      setStatus('success');
      setTimeout(() => setStatus('idle'), 5000);
    } catch (error) {
      console.error('Relay error:', error);
      setStatus('error');
      setErrorMessage('Signal lost. Please try the direct lines.');
    }
  };

  return (
    <section id="contact" className="py-32 relative overflow-hidden bg-transparent transition-colors duration-700">
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center mb-24">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] font-black uppercase tracking-[0.2em] mb-8">
            <Sparkles size={12} className="animate-spin-slow" />
            Direct Transmission
          </div>
          <h2 className="text-6xl md:text-8xl font-black tracking-tighter text-gray-950 dark:text-white leading-[0.85] mb-8">
            Get In <span className="text-gradient">Touch</span>
          </h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-xl font-medium tracking-tight">
             Open for high-impact collaborations and <span className="text-gray-900 dark:text-white italic">AI-driven architecture</span> deployments. Reach out to coordinate.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid lg:grid-cols-[1fr_1.5fr] gap-12 items-stretch">
          {/* --- LEFT PANEL: MAGNETIC INFO CARDS --- */}
          <div className="space-y-6">
            <div className="premium-glass p-8 group relative overflow-hidden h-full flex flex-col justify-between">
              {/* Dynamic Glow Border */}
              <div className="absolute inset-0 border-2 border-transparent bg-gradient-to-br from-blue-500/20 via-transparent to-emerald-500/20 [mask-image:linear-gradient(white,white)_padding-box,linear-gradient(white,white)_border-box] [mask-composite:exclude] opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"></div>

              <div>
                <h3 className="text-sm font-black text-gray-400 uppercase tracking-[0.4em] mb-12">Core_Parameters</h3>
                
                <div className="space-y-10">
                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-2xl shadow-blue-500/20 border border-black/5 dark:border-white/10 flex items-center justify-center text-blue-600 dark:text-blue-400 transition-transform group-hover:scale-110">
                      <Mail size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Email_Link</span>
                      <p className="text-lg font-black text-gray-900 dark:text-white lowercase tracking-tighter">satyamkumarpandey4567@gmail.com</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-2xl shadow-emerald-500/20 border border-black/5 dark:border-white/10 flex items-center justify-center text-emerald-600 dark:text-emerald-400 transition-transform group-hover:scale-110">
                      <Phone size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Secure_Line</span>
                      <p className="text-lg font-black text-gray-900 dark:text-white tracking-tighter">+91 9936968762</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-6">
                    <div className="w-14 h-14 rounded-2xl bg-white dark:bg-white/5 shadow-2xl shadow-indigo-500/20 border border-black/5 dark:border-white/10 flex items-center justify-center text-indigo-600 dark:text-indigo-400 transition-transform group-hover:scale-110">
                      <MapPin size={24} />
                    </div>
                    <div>
                      <span className="block text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">Geo_Station</span>
                      <p className="text-lg font-black text-gray-900 dark:text-white tracking-tighter">Prayagraj, UP, India</p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="mt-16 pt-8 border-t border-black/5 dark:border-white/5 relative z-20">
                <div className="flex gap-4">
                  {socialLinks.map((link) => {
                    const Icon = link.icon;
                    return (
                      <a
                        key={link.name}
                        href={link.url}
                        target={link.url.startsWith('http') ? "_blank" : undefined}
                        rel={link.url.startsWith('http') ? "noopener noreferrer" : undefined}
                        className="w-12 h-12 rounded-xl bg-gray-50 dark:bg-white/5 border border-black/5 dark:border-white/10 flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-blue-600 dark:hover:text-white hover:bg-white dark:hover:bg-blue-600 transition-all duration-300 shadow-md hover:-translate-y-1 relative z-30"
                      >
                        <Icon size={18} />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT PANEL: NEON-GLASS INPUT HUB --- */}
          <div className="premium-glass p-10 lg:p-12 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/5 dark:bg-emerald-500/10 blur-[80px] -mr-32 -mt-32 pointer-events-none"></div>
            
            <form onSubmit={handleSubmit} className="relative z-10 space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black text-gray-400 group-focus-within:text-blue-600 transition-colors uppercase tracking-[0.2em] ml-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Username</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                    <input
                      type="text"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Identified As"
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-transparent group-focus-within:border-blue-500/50 text-gray-950 dark:text-white font-black outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 relative z-10"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    />
                  </div>
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black text-gray-400 group-focus-within:text-emerald-600 transition-colors uppercase tracking-[0.2em] ml-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Email Relay</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-emerald-500/5 dark:bg-emerald-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                    <input
                      type="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Response Address"
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-transparent group-focus-within:border-emerald-500/50 text-gray-950 dark:text-white font-black outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 relative z-10"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              <div className="grid md:grid-cols-2 gap-8">
                <div className="group space-y-2">
                  <label className="text-[10px] font-black text-gray-400 group-focus-within:text-indigo-600 transition-colors uppercase tracking-[0.2em] ml-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Active Line</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-indigo-500/5 dark:bg-indigo-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 000..."
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-transparent group-focus-within:border-indigo-500/50 text-gray-950 dark:text-white font-black outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 relative z-10"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    />
                  </div>
                </div>
                <div className="group space-y-2">
                  <label className="text-[10px] font-black text-gray-400 group-focus-within:text-purple-600 transition-colors uppercase tracking-[0.2em] ml-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Mission Subject</label>
                  <div className="relative">
                    <div className="absolute inset-0 bg-purple-500/5 dark:bg-purple-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                    <input
                      type="text"
                      name="subject"
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Objective"
                      className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-transparent group-focus-within:border-purple-500/50 text-gray-950 dark:text-white font-black outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 relative z-10"
                      style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                    />
                  </div>
                </div>
              </div>

              <div className="group space-y-2">
                <label className="text-[10px] font-black text-gray-400 group-focus-within:text-blue-600 transition-colors uppercase tracking-[0.2em] ml-2" style={{ fontFamily: '"Space Grotesk", sans-serif' }}>Encrypted Data</label>
                <div className="relative">
                  <div className="absolute inset-0 bg-blue-500/5 dark:bg-blue-500/10 rounded-2xl blur-lg opacity-0 group-focus-within:opacity-100 transition-opacity duration-500"></div>
                  <textarea
                    name="message"
                    required
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter Transmission Space..."
                    className="w-full px-6 py-4 rounded-2xl bg-white/50 dark:bg-white/5 border-2 border-transparent group-focus-within:border-blue-500/50 text-gray-950 dark:text-white font-black outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-600 relative z-10 resize-none"
                    style={{ fontFamily: '"Space Grotesk", sans-serif' }}
                  ></textarea>
                </div>
              </div>

              <div className="relative pt-4">
                <button
                  type="submit"
                  disabled={status === 'loading'}
                  className={`w-full py-5 rounded-2xl font-black text-xs uppercase tracking-[0.4em] flex items-center justify-center gap-3 transition-all duration-500 shadow-2xl ${
                    status === 'loading'
                      ? 'bg-gray-100 dark:bg-white/5 text-gray-400 cursor-not-allowed'
                      : 'bg-black dark:bg-white text-white dark:text-black hover:scale-[1.02] active:scale-95 shadow-blue-500/20'
                  }`}
                >
                  {status === 'loading' ? (
                    <Loader2 className="animate-spin" size={20} />
                  ) : (
                    <>
                      <Send size={18} />
                      Log Transmission
                    </>
                  )}
                </button>

                {/* Status Feedback Animations */}
                {status === 'success' && (
                  <div className="mt-6 flex items-center gap-3 p-5 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 animate-in zoom-in duration-300">
                    <CheckCircle size={20} className="animate-bounce" />
                    <span className="text-xs font-black uppercase tracking-wider">Transmission Secured. Proceed.</span>
                  </div>
                )}
                {status === 'error' && (
                  <div className="mt-6 flex items-center gap-3 p-5 rounded-2xl bg-red-500/10 text-red-600 dark:text-red-400 border border-red-500/20 animate-in slide-in-from-top-4">
                    <AlertCircle size={20} />
                    <span className="text-xs font-black uppercase tracking-wider">{errorMessage}</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
