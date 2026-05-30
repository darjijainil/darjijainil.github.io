import React, { useState, useRef } from "react";
import { FolderGit2, Search, SlidersHorizontal, ArrowUpRight, MessageSquare, Check, X, HardDrive, ShieldAlert, Sparkles, HelpCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { PortfolioProject } from "../types";
import FlyerDesign from "./FlyerDesign";

interface PortfolioProps {
  projects: PortfolioProject[];
  designerName: string;
}

export default function Portfolio({ projects, designerName }: PortfolioProps) {
  const [selectedCategory, setSelectedCategory] = useState<string>("All");
  const [searchQuery, setSearchQuery] = useState("");
  const [hoveredProjectId, setHoveredProjectId] = useState<string | null>(null);
  const [activeProjectPopup, setActiveProjectPopup] = useState<PortfolioProject | null>(null);

  const categories = [
    "All",
    "Social Media",
    "Packaging",
    "Branding",
    "Print Media",
    "Logo Design",
    "AI Creative Solutions"
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
    const matchesKeyword = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                           project.tools.some(t => t.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesKeyword;
  });

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="portfolio">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <FolderGit2 className="h-3.5 w-3.5" />
            <span>04 . Portfolio Gallery</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            Proof of Practical Craftsmanship
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Filters and Search Bar Row */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 mb-12">
          {/* Scrollable Filters */}
          <div className="flex items-center gap-2 overflow-x-auto w-full md:w-auto pb-3 md:pb-0 scrollbar-none">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-2xl text-xs font-bold font-sans uppercase tracking-wider transition-all duration-150 cursor-pointer whitespace-nowrap ${
                  selectedCategory === cat
                    ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md shadow-slate-950/10"
                    : "bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
                }`}
                id={`portfolio-filter-${cat.replace(/\s+/g, '-').toLowerCase()}`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative w-full md:w-80">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <input
              type="text"
              placeholder="Search by tool, title, description..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2.5 rounded-2xl bg-slate-50 border border-slate-200/60 text-xs text-slate-700 placeholder-slate-400 dark:bg-slate-900/50 dark:border-slate-800 focus:outline-none focus:ring-2 focus:ring-rose-500 dark:text-slate-200"
              id="portfolio-search-input"
            />
          </div>
        </div>

        {/* Masonry-style Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                key={project.id}
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="group relative cursor-pointer overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40"
                onClick={() => setActiveProjectPopup(project)}
                onMouseEnter={() => setHoveredProjectId(project.id)}
                onMouseLeave={() => setHoveredProjectId(null)}
              >
                {/* Product Image area */}
                <div className="aspect-video sm:aspect-square relative overflow-hidden w-full h-full">
                  <FlyerDesign id={project.id} />
                  {/* Subtle hover overlay details */}
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-slate-950/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-6">
                    <p className="font-mono text-[9px] uppercase tracking-wider text-amber-400 font-extrabold mb-1">
                      {project.category}
                    </p>
                    <h3 className="font-sans font-extrabold text-base text-white tracking-tight">
                      {project.title}
                    </h3>
                    <p className="text-slate-300 text-xs font-sans line-clamp-2 mt-1.5 font-medium leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1 mt-3">
                      {project.tools.map((tool) => (
                        <span key={tool} className="px-2 py-0.5 bg-white/10 backdrop-blur-md rounded text-[9px] font-mono text-slate-100">
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Footer details card always visible for ease of browsing on mobile */}
                <div className="p-5 bg-white dark:bg-slate-900/80 border-t border-slate-100 dark:border-slate-850 flex items-center justify-between">
                  <div>
                    <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold block mb-0.5">
                      {project.category}
                    </span>
                    <h4 className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200 line-clamp-1">
                      {project.title}
                    </h4>
                  </div>
                  <div className="h-8 w-8 rounded-full bg-slate-50 dark:bg-slate-850 text-slate-400 dark:text-slate-500 flex items-center justify-center border border-slate-200/50 dark:border-slate-800 group-hover:bg-indigo-600 group-hover:text-white group-hover:scale-105 transition-all">
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case-Study Detailed Overlay Popup */}
      <AnimatePresence>
        {activeProjectPopup && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 overflow-y-auto bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center cursor-default"
            onClick={() => setActiveProjectPopup(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-4xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setActiveProjectPopup(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                id="close-project-popup-btn"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Popup Content */}
              <div className="space-y-8 text-left text-slate-900 dark:text-slate-100">
                {/* Header title */}
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-500 dark:text-indigo-400 font-extrabold block mb-1">
                    Category: {activeProjectPopup.category}
                  </span>
                  <h2 className="font-sans font-extrabold text-2xl sm:text-3xl text-slate-900 dark:text-white tracking-tight">
                    {activeProjectPopup.title}
                  </h2>
                </div>

                {/* Big Preview Image */}
                <div className="aspect-square max-w-sm sm:max-w-md mx-auto w-full rounded-2xl overflow-hidden shadow-md">
                  <FlyerDesign id={activeProjectPopup.id} />
                </div>

                {/* Scope & Details section */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Specs column */}
                  <div className="md:col-span-8 space-y-6">
                    <div className="space-y-2">
                       <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b pb-1 dark:border-slate-800">
                        Design Objective & Scope
                       </h3>
                       <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {activeProjectPopup.caseStudy?.objective || activeProjectPopup.description}. Built with absolute alignment tolerances.
                       </p>
                    </div>

                    <div className="space-y-2">
                       <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b pb-1 dark:border-slate-800">
                        The Professional Work Flow
                       </h3>
                       <ul className="space-y-3 pt-1">
                        {(activeProjectPopup.caseStudy?.process || [
                          "Concept analysis and grid alignment",
                          "Drawing base vectors assets inside CorelDRAW or Illustrator",
                          "Color profiling and layout structure check",
                          "Rendering high-quality proof file representations"
                        ]).map((step, idx) => (
                          <li key={idx} className="flex gap-2.5 text-xs text-slate-600 dark:text-slate-300">
                            <span className="h-5 w-5 rounded-full bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 font-mono font-bold flex-shrink-0 flex items-center justify-center text-[10px]">
                              {idx + 1}
                            </span>
                            <span className="leading-relaxed font-sans">{step}</span>
                          </li>
                        ))}
                       </ul>
                    </div>

                    <div className="space-y-2">
                      <h3 className="font-mono text-xs uppercase tracking-wider text-slate-400 font-bold border-b pb-1 dark:border-slate-800">
                        Work Outcome & Result
                      </h3>
                      <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
                        {activeProjectPopup.caseStudy?.result || "The client reported outstanding engagement metrics, allowing fast retail roll-out and smooth printing transitions with zero mechanical offset faults."}
                      </p>
                    </div>
                  </div>

                  {/* Right Specs sidebar */}
                  <div className="md:col-span-4 space-y-6 p-5 sm:p-6 bg-slate-50 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 rounded-2xl">
                    <div className="space-y-1">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Client Account/Context</p>
                      <p className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                        {activeProjectPopup.clientName || "Practice Lab Concept"}
                      </p>
                    </div>

                    <div className="space-y-1.5 border-t border-slate-200 dark:border-slate-800 pt-3">
                      <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Tools Configured</p>
                      <div className="flex flex-wrap gap-1">
                        {activeProjectPopup.tools.map((t) => (
                          <span key={t} className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 font-mono text-[9px] text-slate-600 dark:text-slate-400 font-semibold uppercase">
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Client feedback inside popup */}
                    {activeProjectPopup.feedback && (
                      <div className="border-t border-slate-200 dark:border-slate-800 pt-3 space-y-1.5">
                        <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-0.5">
                          <MessageSquare className="h-3 w-3 text-indigo-500" />
                          <span>Client Feedback:</span>
                        </p>
                        <p className="font-sans text-[11px] text-slate-500 dark:text-slate-400 italic leading-relaxed">
                          "{activeProjectPopup.feedback}"
                        </p>
                      </div>
                    )}
                  </div>
                </div>

                {/* Bottom line CTA */}
                <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-end gap-3">
                  <a
                    href="#contact"
                    onClick={() => setActiveProjectPopup(null)}
                    className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-extrabold text-[11px] uppercase tracking-wider transition-all shadow-sm"
                  >
                    Discuss Similar Project
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
