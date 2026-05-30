import React, { useState } from "react";
import { Award, Layers, Percent, Flame, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { SkillItem } from "../types";

interface SkillsProps {
  skills: SkillItem[];
}

export default function Skills({ skills }: SkillsProps) {
  const [activeTab, setActiveTab] = useState<"All" | "Design Software" | "Core Strengths" | "AI & Modern Tools">("All");

  const tabs: Array<"All" | "Design Software" | "Core Strengths" | "AI & Modern Tools"> = [
    "All",
    "Design Software",
    "Core Strengths",
    "AI & Modern Tools"
  ];

  const filteredSkills = skills.filter((skill) => {
    if (activeTab === "All") return true;
    return skill.category === activeTab;
  });

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="skills">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <Award className="h-3.5 w-3.5" />
            <span>02 . Professional Skills</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            Expertly Crafted Digital Armament
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-sans">
            A precise alignment of print-focused vector grids, image retouch layers, and generative AI systems.
          </p>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-5 py-2.5 rounded-2xl text-xs font-bold font-sans uppercase tracking-wider transition-all duration-200 cursor-pointer ${
                activeTab === tab
                  ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950 shadow-md shadow-slate-950/10"
                  : "bg-slate-50 text-slate-500 hover:text-slate-900 hover:bg-slate-100 dark:bg-slate-900/50 dark:text-slate-400 dark:hover:text-white dark:hover:bg-slate-800"
              }`}
              id={`skill-tab-${tab.replace(/\s+/g, '-').toLowerCase()}`}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                layout
                key={skill.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.25, delay: index * 0.04 }}
                className="group relative p-6 rounded-3xl border border-slate-200/50 dark:border-slate-800/60 bg-white dark:bg-slate-900/40 hover:bg-slate-50 dark:hover:bg-slate-900/80 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between overflow-hidden"
              >
                {/* Background decorative ring and gradients */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-indigo-500/5 via-transparent to-transparent pointer-events-none group-hover:scale-125 transition-transform" />

                <div className="space-y-4">
                  {/* Title and Badge */}
                  <div className="flex justify-between items-start gap-4">
                    <div>
                      <span className="font-mono text-[9px] uppercase tracking-[0.15em] text-indigo-500 dark:text-indigo-400 font-bold px-2 py-0.5 rounded bg-indigo-500/5 border border-indigo-500/15 inline-block mb-1.5">
                        {skill.category}
                      </span>
                      <h3 className="font-sans font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                        {skill.name}
                      </h3>
                    </div>
                    {/* Level Badge representation */}
                    <div className="flex flex-col items-end font-mono">
                      <span className="text-sm font-extrabold text-slate-800 dark:text-slate-200">
                        {skill.level}%
                      </span>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold flex items-center gap-0.5">
                        <Flame className="h-2.5 w-2.5 text-amber-500 animate-pulse" />
                        <span>Level</span>
                      </span>
                    </div>
                  </div>

                  {/* Level progress meter bar with tooltips */}
                  <div className="space-y-1">
                    <div className="w-full h-2 bg-slate-100 dark:bg-slate-950 rounded-full overflow-hidden border border-slate-200/20 dark:border-slate-800/20">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.level}%` }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        viewport={{ once: true }}
                        className="h-full bg-gradient-to-r from-indigo-600 via-indigo-455 to-amber-400 rounded-full"
                      />
                    </div>
                  </div>
                </div>

                {/* Bottom stats: Projects count */}
                <div className="mt-5 pt-4 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-mono text-slate-400">
                  <span className="uppercase tracking-widest font-bold">Project Deliveries:</span>
                  <span className="text-slate-700 dark:text-slate-300 font-bold px-2 py-0.5 rounded bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-800">
                    {skill.projectsCount}+ Projects
                  </span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
