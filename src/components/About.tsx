import React, { useState } from "react";
import { User, Award, GraduationCap, Calendar, Download, Briefcase, MapPin, CheckCircle, FileText, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface EducationItem {
  degree: string;
  institution: string;
  year: string;
}

interface AboutProps {
  designerName: string;
  bio: string;
  yearsOfExperience: string;
  location: string;
  resumeDetails: {
    aboutSummary: string;
    education: EducationItem[];
    certifications: string[];
  };
  skillsList: Array<{ name: string; level: number; projectsCount: number }>;
}

export default function About({ designerName, bio, yearsOfExperience, location, resumeDetails, skillsList }: AboutProps) {
  const [showCvModal, setShowCvModal] = useState(false);

  const handlePrint = () => {
    window.print();
  };

  return (
    <section className="py-20 dark:bg-slate-900 bg-slate-50 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <User className="h-3.5 w-3.5" />
            <span>01 . About Me</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white tracking-tighter uppercase">
            Creative Mind & Technical Precision
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Block: Biography Narrative with Core Goals */}
          <div className="lg:col-span-7 space-y-6">
            <div className="border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl shadow-sm space-y-4">
              <h3 className="font-sans font-bold text-xl text-slate-800 dark:text-slate-100">
                Visual communication is the heartbeat of marketing assets.
              </h3>
              <p className="font-sans text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                {bio}
              </p>
              <p className="font-sans text-slate-600 dark:text-slate-300 leading-relaxed text-base">
                I approach design not just as aesthetic arrangements, but as structured packaging and visual grids that directly convert prospects. Whether setting up folded package dielines in <strong className="text-slate-800 dark:text-white">CorelDRAW</strong> or compositing multi-image layers inside <strong className="text-slate-800 dark:text-white">Photoshop</strong>, I focus heavily on execution guidelines, exact margins, and high-fidelity output.
              </p>

              {/* Personal meta elements */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4 border-t border-slate-100 dark:border-slate-900">
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <MapPin className="h-4 w-4 text-indigo-500 flex-shrink-0" />
                  <span><strong>HQ Location:</strong> {location}</span>
                </div>
                <div className="flex items-center gap-2.5 text-xs text-slate-500 dark:text-slate-400">
                  <Briefcase className="h-4 w-4 text-amber-500 flex-shrink-0" />
                  <span><strong>Experience:</strong> {yearsOfExperience}</span>
                </div>
              </div>
            </div>

            {/* Resume actions */}
            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setShowCvModal(true)}
                className="px-6 py-3 rounded-2xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-950 dark:hover:bg-slate-100 text-white font-bold text-sm shadow-md transition-all active:scale-95 flex items-center gap-2 cursor-pointer"
                id="view-cv-btn"
              >
                <FileText className="h-4 w-4" />
                <span>View My Interactive CV</span>
              </button>
            </div>
          </div>

          {/* Right Block: Dynamic Certifications & Credentials Grid */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Certifications Card */}
            <div className="border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
              <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-950">
                <Award className="h-4 w-4 text-amber-500" />
                <span>Selected Credentials & Certs</span>
              </h3>
              
              <ul className="space-y-3">
                {resumeDetails.certifications.map((cert, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: 10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.08 }}
                    viewport={{ once: true }}
                    className="flex items-start gap-2.5 text-xs text-slate-600 dark:text-slate-300 leading-relaxed"
                  >
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                    <span className="font-medium">{cert}</span>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Academic timelines */}
            <div className="border border-slate-200/60 dark:border-slate-800/60 bg-white dark:bg-slate-950 p-6 sm:p-8 rounded-3xl shadow-sm space-y-5">
              <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 flex items-center gap-2 pb-3 border-b border-slate-100 dark:border-slate-955">
                <GraduationCap className="h-5 w-5 text-indigo-500" />
                <span>Technical Background Study</span>
              </h3>
              
              <div className="space-y-4">
                {resumeDetails.education.map((edu, index) => (
                  <div key={index} className="flex gap-3 text-xs">
                    <div className="flex-shrink-0 flex flex-col items-center">
                      <div className="w-2 h-2 rounded-full bg-indigo-500" />
                      <div className="w-0.5 h-10 bg-slate-200 dark:bg-slate-800 last:hidden" />
                    </div>
                    <div className="space-y-1">
                      <p className="font-sans font-bold text-slate-800 dark:text-slate-200 leading-tight">
                        {edu.degree}
                      </p>
                      <p className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wide">
                        {edu.institution}
                      </p>
                      <span className="inline-block px-1.5 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-100 dark:border-slate-800 font-mono text-[9px] text-slate-500">
                        {edu.year}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>
        </div>
      </div>

      {/* CV Interactive Overlay Modal */}
      <AnimatePresence>
        {showCvModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center print:bg-white print:p-0"
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-800 print:max-h-full print:border-none print:shadow-none print:p-0"
            >
              {/* Close icon */}
              <button
                onClick={() => setShowCvModal(false)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer print:hidden"
                id="close-cv-modal"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Printable Résumé Document Layout */}
              <div className="space-y-8 text-left text-slate-900 dark:text-slate-100" id="printable-cv-area">
                {/* Header */}
                <div className="border-b-2 border-indigo-600 pb-6 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
                  <div>
                    <h1 className="font-display font-black text-3xl text-slate-900 dark:text-white uppercase tracking-tight">
                      {designerName}
                    </h1>
                    <p className="font-mono text-xs text-indigo-600 dark:text-indigo-400 uppercase tracking-[0.2em] font-bold">
                      Creative Graphic Designer & content Specialist
                    </p>
                  </div>
                  <div className="font-mono text-xs text-slate-400 space-y-1">
                    <p>Email: {resumeDetails.aboutSummary ? "jainildarji2709@gmail.com" : ""}</p>
                    <p>HQ: {location}</p>
                  </div>
                </div>

                {/* Sub narrative block */}
                <div className="space-y-2">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">Biography Summary</h2>
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                    {resumeDetails.aboutSummary} {bio}
                  </p>
                </div>

                {/* Skills columns */}
                <div className="space-y-2">
                  <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold">Technical Competency Set</h2>
                  <div className="flex flex-wrap gap-2 pt-1">
                    {skillsList.map((skill) => (
                      <span key={skill.name} className="px-3 py-1 bg-slate-100 dark:bg-slate-800 border border-slate-200/50 dark:border-slate-700 rounded-lg text-xs font-mono font-medium text-slate-600 dark:text-slate-300">
                        {skill.name} ({skill.level}%)
                      </span>
                    ))}
                  </div>
                </div>

                {/* Grid for timeline/education */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
                  <div className="space-y-4">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-1">
                      <GraduationCap className="h-4 w-4 text-indigo-500" />
                      <span>Education Timeline</span>
                    </h2>
                    <div className="space-y-4">
                      {resumeDetails.education.map((edu, idx) => (
                        <div key={idx} className="space-y-1">
                          <p className="text-sm font-bold text-slate-900 dark:text-white leading-tight">
                            {edu.degree}
                          </p>
                          <p className="text-xs text-slate-500 dark:text-slate-400">{edu.institution}</p>
                          <span className="font-mono text-[10px] text-rose-500">{edu.year}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-4">
                    <h2 className="font-mono text-xs uppercase tracking-widest text-slate-400 font-bold flex items-center gap-1.5 border-b border-slate-100 dark:border-slate-800 pb-1">
                      <Briefcase className="h-4 w-4 text-amber-500" />
                      <span>Certified Track</span>
                    </h2>
                    <ul className="space-y-2">
                      {resumeDetails.certifications.map((cert, idx) => (
                        <li key={idx} className="text-xs text-slate-600 dark:text-slate-300 flex items-start gap-1.5">
                          <span className="text-emerald-500 font-bold">✓</span>
                          <span>{cert}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer and Print call to action */}
                <div className="pt-8 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4 items-center justify-between print:hidden">
                  <p className="text-xs text-slate-400">
                    Press Print to download as local PDF file or send to printer.
                  </p>
                  <div className="flex gap-2">
                    <button
                      onClick={handlePrint}
                      className="px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs shadow-md transition-all active:scale-95 flex items-center gap-1.5 cursor-pointer"
                      id="print-cv-btn"
                    >
                      <Download className="h-4 w-4" />
                      <span>Print/Save PDF</span>
                    </button>
                    <button
                      onClick={() => setShowCvModal(false)}
                      className="px-5 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 font-bold text-xs border border-slate-200/50 dark:border-slate-700 transition-all cursor-pointer"
                    >
                      Close Preview
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
