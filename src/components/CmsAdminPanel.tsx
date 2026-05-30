import React, { useState } from "react";
import { X, Save, RefreshCw, Layers, Sparkles, AlertCircle, FileText, Settings, Key, UserCheck } from "lucide-react";
import { motion } from "motion/react";
import { PortfolioCMS } from "../types";

interface CmsAdminPanelProps {
  isOpen: boolean;
  onClose: () => void;
  currentCMS: PortfolioCMS;
  onSaveCMS: (newCMS: PortfolioCMS) => void;
  onResetCMS: () => void;
}

export default function CmsAdminPanel({ isOpen, onClose, currentCMS, onSaveCMS, onResetCMS }: CmsAdminPanelProps) {
  // Local editable form states
  const [name, setName] = useState(currentCMS.personalInfo.name);
  const [title, setTitle] = useState(currentCMS.personalInfo.title);
  const [subtitle, setSubtitle] = useState(currentCMS.personalInfo.subtitle);
  const [bio, setBio] = useState(currentCMS.personalInfo.bio);
  const [whatsapp, setWhatsapp] = useState(currentCMS.personalInfo.whatsappNumber);
  const [email, setEmail] = useState(currentCMS.personalInfo.email);
  const [location, setLocation] = useState(currentCMS.personalInfo.location);
  const [projectsCount, setProjectsCount] = useState(currentCMS.personalInfo.completedProjectsCount);
  const [clientsCount, setClientsCount] = useState(currentCMS.personalInfo.happyClientsCount);

  // Resume summary edit state
  const [resumeSummary, setResumeSummary] = useState(currentCMS.personalInfo.resumeDetails.aboutSummary);

  const [saveStatus, setSaveStatus] = useState<"idle" | "saved" | "reset">("idle");

  if (!isOpen) return null;

  const handleCMSFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedCMS: PortfolioCMS = {
      ...currentCMS,
      personalInfo: {
        ...currentCMS.personalInfo,
        name,
        title,
        subtitle,
        bio,
        whatsappNumber: whatsapp,
        email,
        location,
        completedProjectsCount: Number(projectsCount),
        happyClientsCount: Number(clientsCount),
        resumeDetails: {
          ...currentCMS.personalInfo.resumeDetails,
          aboutSummary: resumeSummary
        }
      }
    };

    onSaveCMS(updatedCMS);
    setSaveStatus("saved");
    setTimeout(() => {
      setSaveStatus("idle");
      onClose();
    }, 1500);
  };

  const handleResetToFactory = () => {
    onResetCMS();
    setSaveStatus("reset");
    
    // Refresh local form state from defaultCMS props via resets
    setTimeout(() => {
      setName(currentCMS.personalInfo.name);
      setTitle(currentCMS.personalInfo.title);
      setSubtitle(currentCMS.personalInfo.subtitle);
      setBio(currentCMS.personalInfo.bio);
      setWhatsapp(currentCMS.personalInfo.whatsappNumber);
      setEmail(currentCMS.personalInfo.email);
      setLocation(currentCMS.personalInfo.location);
      setProjectsCount(currentCMS.personalInfo.completedProjectsCount);
      setClientsCount(currentCMS.personalInfo.happyClientsCount);
      setResumeSummary(currentCMS.personalInfo.resumeDetails.aboutSummary);
      setSaveStatus("idle");
      onClose();
    }, 1000);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center">
      <motion.div
        initial={{ scale: 0.95, y: 15 }}
        animate={{ scale: 1, y: 0 }}
        className="relative w-full max-w-2xl bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 rounded-3xl shadow-2xl overflow-hidden max-h-[85vh] overflow-y-auto"
      >
        {/* Banner header */}
        <div className="bg-indigo-605 bg-indigo-600 p-6 sm:p-8 text-white flex justify-between items-start">
          <div className="space-y-1.5 text-left">
            <h2 className="font-sans font-extrabold text-xl sm:text-2xl flex items-center gap-2">
              <Settings className="h-5 w-5 animate-spin" style={{ animationDuration: '4s' }} />
              <span>Portfolio CMS Editor</span>
            </h2>
            <p className="text-xs text-white/80 font-sans">
              Update personal settings, metrics, biography assets, and WhatsApp direct parameters in real-time.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer"
            id="close-cms-modal"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {/* CMS Configuration form fields */}
        <form onSubmit={handleCMSFormSubmit} className="p-6 sm:p-8 space-y-6 text-left" id="cms-editor-form">
          {/* Status logs */}
          {saveStatus === "saved" && (
            <div className="p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 text-emerald-500 text-xs font-semibold flex items-center gap-1.5">
              <UserCheck className="h-4.5 w-4.5" />
              <span>CMS values persisted in local storage successfully! Reloading...</span>
            </div>
          )}

          {saveStatus === "reset" && (
            <div className="p-4 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 text-xs font-semibold flex items-center gap-1.5">
              <RefreshCw className="h-4.5 w-4.5 animate-spin" />
              <span>Resetting visual assets to default factory values...</span>
            </div>
          )}

          {/* Core Personal detail segments */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 uppercase font-extrabold pb-1 border-b dark:border-slate-850">
              Personal Information
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-650 dark:text-slate-350 font-sans">Designer Name</label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-650 dark:text-slate-350 font-sans">Role Headline Title</label>
                <input
                  type="text"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-650 dark:text-slate-350 font-sans">Short Subtitle Summary</label>
              <input
                type="text"
                value={subtitle}
                onChange={(e) => setSubtitle(e.target.value)}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-650 dark:text-slate-350 font-sans">Detailed Biography</label>
              <textarea
                value={bio}
                onChange={(e) => setBio(e.target.value)}
                rows={3}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
              />
            </div>
          </div>

          {/* Context direct coordinates */}
          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 uppercase font-extrabold pb-1 border-b dark:border-slate-850">
              Direct Contact & Socials
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans flex items-center gap-1">
                  <span>WhatsApp Number (For instant Chat CTAs)</span>
                  <span className="text-[10px] text-indigo-500 dark:text-indigo-400 font-bold">*</span>
                </label>
                <input
                  type="text"
                  value={whatsapp}
                  onChange={(e) => setWhatsapp(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
                <p className="text-[10px] text-slate-400 font-mono leading-none">Complete digit parameters (e.g. 919000000000 with country code, no "+" signs)</p>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans">Design Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans">HQ Location Location</label>
                <input
                  type="text"
                  value={location}
                  onChange={(e) => setLocation(e.target.value)}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans">Completed Projects Counter</label>
                <input
                  type="number"
                  value={projectsCount}
                  onChange={(e) => setProjectsCount(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans">Happy Clients Counter</label>
                <input
                  type="number"
                  value={clientsCount}
                  onChange={(e) => setClientsCount(Number(e.target.value))}
                  className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-800 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
                />
              </div>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 uppercase font-extrabold pb-1 border-b dark:border-slate-850">
              Interactive Résumé Summary
            </h3>

            <div className="space-y-1.5">
              <label className="text-xs font-bold text-slate-655 dark:text-slate-350 font-sans">Professional Outline</label>
              <textarea
                value={resumeSummary}
                onChange={(e) => setResumeSummary(e.target.value)}
                rows={2}
                className="w-full px-3 py-2 text-xs bg-slate-50 border border-slate-200 dark:bg-slate-950 dark:border-slate-850 rounded-lg focus:ring-2 focus:ring-indigo-600 focus:outline-none dark:text-slate-200"
              />
            </div>
          </div>

          {/* Action Row */}
          <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-col sm:flex-row gap-3 justify-between items-center">
            {/* Reset Factory values */}
            <button
              type="button"
              onClick={handleResetToFactory}
              className="px-4 py-2.5 rounded-xl border border-slate-200 hover:border-indigo-550 hover:text-indigo-600 dark:border-slate-800 dark:hover:border-indigo-400 dark:text-slate-400 font-bold text-xs transition-colors cursor-pointer flex items-center gap-1.5"
              id="cms-factory-reset-btn"
            >
              <RefreshCw className="h-3.5 w-3.5" />
              <span>Reset to Default Template</span>
            </button>

            {/* Save Values */}
            <div className="flex gap-2 w-full sm:w-auto">
              <button
                type="submit"
                className="w-full sm:w-auto px-6 py-3 rounded-xl bg-slate-950 hover:bg-slate-800 dark:bg-white dark:text-slate-955 dark:hover:bg-slate-105 text-white font-bold text-xs uppercase tracking-wide transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                id="cms-save-btn"
              >
                <Save className="h-4 w-4" />
                <span>Save Modifications</span>
              </button>
            </div>
          </div>
        </form>
      </motion.div>
    </div>
  );
}
