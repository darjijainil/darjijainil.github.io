import React, { useState } from "react";
import { ListTodo, Search, Palette, PenTool, CheckCircle, Ship, Compass, Sparkles } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ProcessStep {
  id: string;
  step: string;
  title: string;
  desc: string;
  scope: string[];
}

export default function Process() {
  const [activeStep, setActiveStep] = useState(0);

  const stepsDetails: ProcessStep[] = [
    {
      id: "pstep1",
      step: "01",
      title: "Requirement Gathering",
      desc: "Comprehensive brief formulation, scale parameters audit, and targeted branding objectives checklist.",
      scope: ["Reviewing dimension requirements (package, dieline scale, pixel counts).", "Cataloging mandatory copy assets, compliance symbols, and logo materials.", "Specifying printing press profile parameters (CMYK rules, bleed boundaries, paper stock grains)."]
    },
    {
      id: "pstep2",
      step: "02",
      title: "Research & Strategy",
      desc: "Analyzing national competitor shelf placements, active digital feed aesthetic trends, and typography moods.",
      scope: ["Conducting physical grid walk-through of competing snack bar, label, or logo designs.", "Assembling conceptual color swatches, font families alternatives.", "Formulating moodboard panels to align directly with client expectations."]
    },
    {
      id: "pstep3",
      step: "03",
      title: "Concept Formulation",
      desc: "Drafting draft flat geometries, structural dielines nodes, and exploring generative AI reference grids.",
      scope: ["Designing multiple distinctive path boundaries for alternative logo tracks.", "Drafting standard folding structures in CorelDRAW to establish box proportions.", "Evaluating composition balances using AI mockup grids for faster prototyping."]
    },
    {
      id: "pstep4",
      step: "04",
      title: "Design Development",
      desc: "Layer composition, full CMYK color mapping, vector refining, and detailed 3D photorealistic visualization rendering.",
      scope: ["Compositing detailed product layers inside Adobe Photoshop.", "Exporting sharp vector silhouettes and alignment lines in Illustrator.", "Creating beautiful, tactile wood/matte packaging and label mockups in Blender and Dimension."]
    },
    {
      id: "pstep5",
      step: "05",
      title: "Collaborative Revisions",
      desc: "Polishing pixel lines, tweaking copy placements, and correcting vector nodes based on direct client feedback.",
      scope: ["Sharing detailed visual PDF portfolios for layout review cycles.", "Adjusting individual typographic weights, tracking values, and stroke alignments.", "Iterating on alternative color theme formulations (light/dark setups)."]
    },
    {
      id: "pstep6",
      step: "06",
      title: "Final Delivery",
      desc: "Exporting pre-flight print-ready offsets, original layered source archives, and high-fidelity social assets.",
      scope: ["Saving high-resolutions vector archives (AI, EPS, SVG, CDR 2024 files).", "Structuring separate administrative folders containing fonts and mock representations.", "Configuring complete CMYK color profiles with custom die-cut crop vectors."]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <Compass className="h-3.5 w-3.5" />
            <span>06 . Professional Workflow</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            The Design Process Timeline
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-sans">
            A highly predictable, reliable visual timeline ensuring complete transparency and zero printing offset errors.
          </p>
        </div>

        {/* Timeline Slider bar indicator */}
        <div className="relative mb-12 select-none overflow-x-auto pb-4">
          <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-slate-100 dark:bg-slate-850 -translate-y-1/2" />
          
          <div className="flex justify-between min-w-[640px] px-8 relative">
            {stepsDetails.map((step, idx) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(idx)}
                className="flex flex-col items-center relative gap-2 focus:outline-none cursor-pointer"
                id={`timeline-node-${idx}`}
              >
                {/* Visual node ball */}
                <div className={`h-8 w-8 rounded-full border-2 flex items-center justify-center text-[10px] font-mono font-bold transition-all ${
                  activeStep === idx
                    ? "bg-indigo-600 text-white border-transparent scale-110 shadow-lg shadow-indigo-600/25"
                    : "bg-white border-slate-200 text-slate-400 hover:text-slate-700 hover:border-slate-350 dark:bg-slate-900 dark:border-slate-800 dark:text-slate-500 dark:hover:text-white"
                }`}>
                  {step.step}
                </div>
                {/* Horizontal label */}
                <span className={`font-sans font-bold text-[10px] uppercase tracking-wider ${
                  activeStep === idx ? "text-indigo-600 dark:text-indigo-400 font-extrabold" : "text-slate-400 dark:text-slate-500"
                }`}>
                  {step.title.split(" ")[0]}
                </span>
              </button>
            ))}
          </div>
        </div>

        {/* Detailed Workflow Panel for selection step */}
        <div className="max-w-4xl mx-auto border border-slate-200/50 dark:border-slate-850 bg-slate-50 dark:bg-slate-900/30 rounded-3xl p-6 sm:p-10 min-h-[280px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start text-left"
            >
              {/* Left summary info */}
              <div className="md:col-span-5 space-y-4">
                <span className="font-mono text-xs text-indigo-500 dark:text-indigo-400 font-extrabold px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/15 inline-block uppercase">
                  TIMELINE PHASE 0{activeStep + 1}
                </span>

                <h3 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-800 dark:text-white leading-tight">
                  {stepsDetails[activeStep].title}
                </h3>

                <p className="font-sans text-xs sm:text-sm text-slate-500 dark:text-slate-400 leading-relaxed">
                  {stepsDetails[activeStep].desc}
                </p>
              </div>

              {/* Right technical list scope */}
              <div className="md:col-span-7 space-y-4">
                <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">
                  DEDICATED DELIVERABLES CHECKLIST:
                </p>
                <div className="space-y-3.5">
                  {stepsDetails[activeStep].scope.map((item, index) => (
                    <div key={index} className="flex gap-2.5 items-start text-xs sm:text-sm text-slate-700 dark:text-slate-300">
                      <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0 mt-0.5" />
                      <span className="font-sans leading-relaxed">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

      </div>
    </section>
  );
}
export { Process };
