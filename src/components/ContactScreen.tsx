import React, { useState } from 'react';
import { Mail, Terminal, Copy, Check, Send, Shield, Key, Github, Linkedin, GraduationCap } from 'lucide-react';
import { DEVELOPER_PROFILE } from '../data/portfolioData';

export const ContactScreen: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    organization: '',
    scope: 'CampusMart Platform Inquiry',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [copiedGpg, setCopiedGpg] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitted(true);
    }, 1000);
  };

  const handleCopyGpg = () => {
    navigator.clipboard.writeText(DEVELOPER_PROFILE.gpgFingerprint);
    setCopiedGpg(true);
    setTimeout(() => setCopiedGpg(false), 2000);
  };

  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
          <Mail className="h-3.5 w-3.5 text-[#3B82F6]" />
          <span>Connect with Monish · REVA University</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
          Get in Touch & Collaborate
        </h1>
        <p className="font-mono text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          Open to discussions about the CampusMart student goods platform, software engineering internships, collaborative student tech initiatives, and projects in HTML, C, C++, Python, and JavaScript.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        {/* Left Column: Form Elements & Terminal Inputs per spec */}
        <div className="lg:col-span-7">
          <div className="glass-card rounded-xl p-6 sm:p-8 space-y-6">
            <div className="flex items-center justify-between border-b border-white/[0.08] pb-4">
              <div className="flex items-center gap-2">
                <Terminal className="h-4 w-4 text-[#3B82F6]" />
                <span className="font-mono text-xs font-semibold text-[#F8FAFC]">
                  Send Message to Monish
                </span>
              </div>
              <span className="font-mono text-[11px] text-emerald-400">
                ● Direct Message
              </span>
            </div>

            {submitted ? (
              <div className="rounded-lg border border-emerald-500/30 bg-emerald-950/20 p-6 text-center space-y-3 font-mono text-xs animate-fadeIn">
                <div className="h-10 w-10 rounded-full bg-emerald-500/20 text-emerald-400 mx-auto flex items-center justify-center">
                  <Check className="h-5 w-5" />
                </div>
                <div className="text-base font-bold text-[#F8FAFC]">Message Sent Successfully</div>
                <p className="text-[#94A3B8] max-w-md mx-auto">
                  Thank you, <span className="text-[#F8FAFC]">{formData.name}</span>. Monish has received your inquiry regarding <span className="text-[#3B82F6]">{formData.scope}</span>. A reply will be sent to <span className="text-[#F8FAFC]">{formData.email}</span> shortly.
                </p>
                <button
                  onClick={() => {
                    setSubmitted(false);
                    setFormData({ name: '', email: '', organization: '', scope: 'CampusMart Platform Inquiry', message: '' });
                  }}
                  className="btn-secondary text-xs"
                >
                  Send Another Message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 font-mono text-xs">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#94A3B8]">Your Name</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Rahul Sharma"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="input-terminal w-full px-3.5 py-2.5 text-xs text-[#F8FAFC]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#94A3B8]">Your Email</label>
                    <input
                      type="email"
                      required
                      placeholder="your.email@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="input-terminal w-full px-3.5 py-2.5 text-xs text-[#F8FAFC]"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-[#94A3B8]">College / Organization</label>
                    <input
                      type="text"
                      placeholder="e.g. REVA University / Tech Company"
                      value={formData.organization}
                      onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                      className="input-terminal w-full px-3.5 py-2.5 text-xs text-[#F8FAFC]"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-[#94A3B8]">Subject / Interest</label>
                    <select
                      value={formData.scope}
                      onChange={(e) => setFormData({ ...formData, scope: e.target.value })}
                      className="input-terminal w-full px-3.5 py-2.5 text-xs text-[#F8FAFC]"
                    >
                      <option value="CampusMart Platform Inquiry">CampusMart Platform Feedback</option>
                      <option value="Software Internship Opportunity">Software Internship Opportunity</option>
                      <option value="Student Project Collaboration">Student Project Collaboration</option>
                      <option value="Coding & Tech Discussion">Coding & Tech Discussion (C++/Python/JS)</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label className="text-[#94A3B8]">Message Content</label>
                  <textarea
                    rows={4}
                    required
                    placeholder="Write your message, project idea, or questions about the student platform..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="input-terminal w-full p-3 text-xs text-[#F8FAFC] resize-none"
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full btn-primary py-3 text-xs"
                >
                  <Send className="h-3.5 w-3.5" />
                  <span>{isSubmitting ? 'Sending Message...' : 'Send Message to Monish'}</span>
                </button>
              </form>
            )}
          </div>
        </div>

        {/* Right Column: Direct Coordinates */}
        <div className="lg:col-span-5 space-y-6 font-mono text-xs">
          {/* University Profile Card */}
          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="flex items-center gap-2 text-[#3B82F6] font-bold text-sm">
              <GraduationCap className="h-5 w-5" />
              <span>Academic Details</span>
            </div>
            <div className="space-y-1.5 text-[#DFE2EF]">
              <div><span className="text-[#64748B]">Student:</span> Monish</div>
              <div><span className="text-[#64748B]">University:</span> REVA University</div>
              <div><span className="text-[#64748B]">Location:</span> Bengaluru, Karnataka, India</div>
              <div><span className="text-[#64748B]">Major:</span> Computer Science & Engineering</div>
            </div>
            <p className="text-[11px] text-[#94A3B8] pt-2 border-t border-white/[0.06]">
              "Building practical software that solves real student financial needs through affordable goods."
            </p>
          </div>

          {/* Email Coordinates Card */}
          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="flex items-center justify-between text-[#94A3B8]">
              <span className="flex items-center gap-2 font-semibold text-[#F8FAFC]">
                <Mail className="h-4 w-4 text-[#3B82F6]" />
                <span>Primary Email</span>
              </span>
            </div>
            <div className="rounded bg-[#090D16] p-3 border border-white/[0.08] text-[#3B82F6] font-mono break-all select-all">
              {DEVELOPER_PROFILE.email}
            </div>
            <p className="text-[11px] text-[#64748B]">
              Direct inbox for internship offers, platform feedback, and student queries.
            </p>
          </div>

          {/* Skills Checklist Card */}
          <div className="glass-card rounded-xl p-6 space-y-3">
            <div className="font-semibold text-[#F8FAFC]">Technical Stack</div>
            <div className="flex flex-wrap gap-2">
              {['HTML', 'C', 'C++', 'Python', 'JavaScript'].map((s) => (
                <span key={s} className="tag-tech text-[#3B82F6] font-semibold border-[#3B82F6]/30 bg-[#3B82F6]/10">
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
