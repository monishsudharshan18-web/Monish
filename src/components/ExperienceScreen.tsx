import React, { useState } from 'react';
import { GraduationCap, Calendar, MapPin, CheckCircle2, Award, ChevronRight, BookOpen, Code2, Sparkles } from 'lucide-react';
import { CAREER_ROLES, TECHNICAL_RFCS, DEVELOPER_PROFILE } from '../data/portfolioData';

export const ExperienceScreen: React.FC = () => {
  return (
    <div className="mx-auto max-w-[1200px] px-6 py-12 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#3B82F6]">
          <GraduationCap className="h-3.5 w-3.5 text-[#3B82F6]" />
          <span>REVA University · Computer Science & Engineering</span>
        </div>
        <h1 className="text-3xl font-extrabold tracking-tight text-[#F8FAFC]">
          About Monish & Technical Expertise
        </h1>
        <p className="font-mono text-sm text-[#94A3B8] max-w-2xl leading-relaxed">
          I am Monish, a student studying at REVA University in Bengaluru. I developed this platform project so students and budget-conscious individuals can get essential electronics, college clothes, and gear at a lesser, subsidized rate.
        </p>
      </div>

      {/* Mission & Vision Callout Banner */}
      <div className="glass-panel-elevated rounded-2xl p-6 sm:p-8 border border-[#3B82F6]/30 bg-[#13192B]/70 relative overflow-hidden">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
          <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-[#3B82F6] to-[#8B5CF6] flex items-center justify-center text-white shrink-0 shadow-lg shadow-[#3B82F6]/30">
            <Sparkles className="h-6 w-6" />
          </div>
          <div className="space-y-1">
            <h2 className="text-lg font-bold text-[#F8FAFC]">
              The Core Problem & Student Mission
            </h2>
            <p className="font-mono text-xs text-[#DFE2EF] leading-relaxed">
              "Students often struggle with the high commercial retail price of engineering calculators, laptops, audio study equipment, and university wear. CampusMart was created to eliminate unnecessary middleman margins and offer students 35%–50% discounted pricing with campus-based fulfillment."
            </p>
          </div>
        </div>
      </div>

      {/* Skills Matrix strictly highlighting the 5 requested skills */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC] font-mono flex items-center gap-2">
            <Code2 className="h-5 w-5 text-[#3B82F6]" />
            <span>01. Technical Skills Matrix</span>
          </h2>
          <p className="font-mono text-xs text-[#94A3B8]">
            Core languages and frameworks applied across the e-commerce marketplace and systems coursework:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 font-mono text-xs">
          {DEVELOPER_PROFILE.skillsMatrix.map((matrix, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 space-y-4 font-mono text-xs"
            >
              <h3 className="font-bold text-[#F8FAFC] text-sm border-b border-white/[0.08] pb-2">
                {matrix.category}
              </h3>

              <div className="space-y-3">
                {matrix.items.map((item, iIdx) => (
                  <div key={iIdx} className="space-y-1">
                    <div className="flex justify-between">
                      <span className="font-semibold text-[#DFE2EF]">{item.name}</span>
                      <span className="text-[#3B82F6] font-bold tabular-nums">{item.level}%</span>
                    </div>

                    <div className="h-1.5 rounded-full bg-white/[0.06] overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-[#3B82F6] to-[#8B5CF6]"
                        style={{ width: `${item.level}%` }}
                      />
                    </div>

                    <div className="text-[10px] text-[#64748B]">{item.note}</div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Education & Experience Timeline Section */}
      <div className="space-y-8">
        <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC] font-mono">
          02. Academic Institution & Platform Milestones
        </h2>

        <div className="space-y-6">
          {CAREER_ROLES.map((role, idx) => (
            <div
              key={idx}
              className="glass-card rounded-xl p-6 sm:p-8 space-y-6 relative overflow-hidden"
            >
              {/* Top ambient highlight */}
              <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-[#3B82F6]/40 to-transparent" />

              {/* Role Header */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-white/[0.08] pb-4">
                <div>
                  <h3 className="text-xl font-bold text-[#F8FAFC]">
                    {role.role}
                  </h3>
                  <div className="flex items-center gap-2 font-mono text-xs text-[#3B82F6] mt-0.5">
                    <span className="font-semibold text-base text-[#F8FAFC]">{role.company}</span>
                    <span>·</span>
                    <span className="flex items-center gap-1 text-[#94A3B8]">
                      <MapPin className="h-3 w-3" />
                      {role.location}
                    </span>
                  </div>
                </div>

                <div className="font-mono text-xs text-[#64748B] flex items-center gap-1.5 self-start sm:self-auto bg-[#090D16] px-3 py-1 rounded border border-white/[0.06]">
                  <Calendar className="h-3.5 w-3.5 text-[#3B82F6]" />
                  <span>{role.period}</span>
                </div>
              </div>

              {/* Quantifiable Impact Metrics */}
              <div className="space-y-3 font-mono text-xs">
                <div className="text-xs font-semibold text-[#3B82F6] uppercase tracking-wider">
                  Platform & Academic Highlights
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                  {role.impactMetrics.map((metric, mIdx) => (
                    <div
                      key={mIdx}
                      className="rounded-lg border border-white/[0.06] bg-[#090D16] p-3 text-[#DFE2EF] leading-relaxed flex items-start gap-2.5"
                    >
                      <CheckCircle2 className="h-4 w-4 text-emerald-400 shrink-0 mt-0.5" />
                      <span>{metric}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Achievements */}
              <div className="space-y-2 font-mono text-xs">
                <div className="text-xs font-semibold text-[#8B5CF6] uppercase tracking-wider">
                  Engineering Contributions
                </div>
                <ul className="space-y-1.5 text-[#94A3B8]">
                  {role.systemAchievements.map((ach, aIdx) => (
                    <li key={aIdx} className="flex items-start gap-2">
                      <ChevronRight className="h-3.5 w-3.5 text-[#8B5CF6] shrink-0 mt-0.5" />
                      <span>{ach}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tech Stack Chips */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {role.technologies.map((t) => (
                  <span
                    key={t}
                    className="tag-tech"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Technical Specifications & Documentation */}
      <div className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-xl font-bold tracking-tight text-[#F8FAFC] font-mono">
            03. Student Project Architecture Specs
          </h2>
          <p className="font-mono text-xs text-[#94A3B8]">
            Technical specifications designed by Monish for the CampusMart platform and C/C++ data structures.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {TECHNICAL_RFCS.map((rfc) => (
            <div
              key={rfc.id}
              className="glass-card rounded-xl p-5 space-y-3 relative overflow-hidden"
            >
              <div className="flex items-center justify-between font-mono text-xs">
                <span className="text-[#3B82F6] font-bold">{rfc.id}</span>
                <span className="tag-tech text-[10px] text-emerald-400 border-emerald-500/30 bg-emerald-500/10">
                  {rfc.status}
                </span>
              </div>

              <h4 className="text-sm font-bold text-[#F8FAFC] leading-snug">
                {rfc.title}
              </h4>

              <p className="font-mono text-xs text-[#94A3B8] leading-relaxed">
                {rfc.summary}
              </p>

              <div className="pt-2 flex items-center justify-between font-mono text-[11px] text-[#64748B] border-t border-white/[0.06]">
                <span>{rfc.date}</span>
                <span className="text-[#3B82F6]">REVA University</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};
