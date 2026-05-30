import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowDown, MessageCircle, Eye, Sparkles, Code2, PenTool, Layout, Palette, Send } from "lucide-react";

interface HeroProps {
  name: string;
  title: string;
  subtitle: string;
  whatsappNumber: string;
}

export default function Hero({ name, title, subtitle, whatsappNumber }: HeroProps) {
  const roles = [
    "Graphic Designer",
    "Social Media Designer",
    "Packaging Designer",
    "Print Media Expert",
    "AI Creative Designer",
    "Visual Content Creator"
  ];

  const [roleIdx, setRoleIdx] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setRoleIdx((prev) => (prev + 1) % roles.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const formattedWhatsapp = `https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=Hi%20${encodeURIComponent(name)},%20I%20viewed%20your%20design%20portfolio%20and%20would%20like%20to%20collaborate%20on%20a%20project!`;

  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden py-16 dark:bg-slate-950 bg-white" id="home">
      {/* Background visual graphics - dotted grids, canvas guidelines and blur spheres */}
      <div className="absolute inset-0 z-0 opacity-40 dark:opacity-60">
        <div className="absolute top-10 left-10 w-72 h-72 bg-rose-400/20 rounded-full blur-[100px] animate-pulse" />
        <div className="absolute bottom-10 right-10 w-80 h-80 bg-amber-400/20 rounded-full blur-[120px]" />
        
        {/* CAD/Designer guidelines background vector */}
        <svg className="absolute inset-0 w-full h-full stroke-slate-200 dark:stroke-slate-900/50 [mask-image:radial-gradient(ellipse_at_center,white,transparent_80%)]" fill="none">
          <defs>
            <pattern id="grid-pattern" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" strokeWidth="1" />
              <circle cx="40" cy="40" r="1.5" className="fill-slate-300 dark:fill-slate-800" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid-pattern)" />
        </svg>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Heading and CTA */}
        <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6">
          
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            className="flex items-center gap-1.5 px-4 py-1.5 rounded-md border border-indigo-500/20 bg-indigo-500/10 text-indigo-500 dark:text-indigo-400 text-[10px] font-mono tracking-[0.2em] font-extrabold uppercase"
          >
            <Sparkles className="h-3.5 w-3.5 animate-spin text-indigo-500" style={{ animationDuration: '4s' }} />
            <span>Open for Freelance Projects</span>
          </motion.div>

          <div className="space-y-3">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-5xl sm:text-7xl md:text-8xl font-black font-display leading-[0.85] tracking-tighter uppercase text-slate-900 dark:text-white text-left"
            >
              Crafting<br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-amber-500">
                Visual
              </span><br />
              Impact.
            </motion.h1>

            {/* Dynamic role slider */}
            <div className="h-10 sm:h-12 flex items-center justify-center lg:justify-start overflow-hidden pt-1">
              <span className="font-mono text-xs uppercase tracking-widest text-slate-400 dark:text-slate-500 mr-2.5 font-bold">
                PRO CREATIVE
              </span>
              <div className="relative h-full flex items-center">
                <AnimatePresence mode="wait">
                  <motion.div
                    key={roleIdx}
                    initial={{ y: 24, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -24, opacity: 0 }}
                    transition={{ duration: 0.35, ease: "easeOut" }}
                    className="font-display text-sm sm:text-base font-black uppercase text-indigo-600 dark:text-amber-400 border border-slate-200 dark:border-slate-800 tracking-wider px-3 py-1 bg-slate-50 dark:bg-slate-900/80 rounded-md"
                  >
                    {roles[roleIdx]}
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          </div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-600 dark:text-slate-300 max-w-xl text-sm sm:text-base leading-relaxed font-sans"
          >
            {subtitle}. I configure professional branding, packaging, and high-impact social layouts. Armed with core Adobe & CorelDRAW suites + Generative Design tools for speedy production.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 25 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <button
              onClick={() => handleScrollTo("#portfolio")}
              className="px-8 py-4 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold text-xs uppercase tracking-widest shadow-xl shadow-indigo-600/20 hover:shadow-indigo-600/30 transition-all flex items-center justify-center gap-2 group cursor-pointer"
              id="hero-cta-portfolio"
            >
              <span>Explore My Designs</span>
              <Eye className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <a
              href={formattedWhatsapp}
              target="_blank"
              referrerPolicy="no-referrer"
              rel="noopener noreferrer"
              className="px-8 py-4 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-indigo-500/50 dark:hover:border-indigo-500/40 bg-white/50 dark:bg-slate-900/50 text-slate-800 dark:text-slate-200 hover:text-indigo-600 dark:hover:text-indigo-400 font-bold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
              id="hero-cta-whatsapp"
            >
              <MessageCircle className="h-5 w-5 fill-emerald-500/10 text-emerald-500" />
              <span>WhatsApp Chat</span>
            </a>
          </motion.div>

          {/* Core tools ticker icons */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="w-full pt-8 flex flex-wrap items-center justify-center lg:justify-start gap-5 text-xs font-mono text-slate-400 font-semibold uppercase"
          >
            <span>Core Tool Sets:</span>
            <div className="flex flex-wrap items-center gap-3.5">
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">CorelDRAW</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">Photoshop</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">Illustrator</span>
              <span className="px-3 py-1.5 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800/50 hover:border-slate-400 dark:hover:border-slate-600 transition-colors">AI Prompting</span>
            </div>
          </motion.div>
        </div>

        {/* Right Column: Designer Interactive Graphic */}
        <div className="lg:col-span-5 relative flex justify-center items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, type: "spring" }}
            className="relative w-full max-w-[380px] aspect-square rounded-3xl p-1 bg-gradient-to-tr from-amber-500 via-rose-500 to-indigo-500"
          >
            {/* Glass container representing active workspace canvas */}
            <div className="w-full h-full rounded-[20px] bg-slate-50 dark:bg-slate-900/90 backdrop-blur-xl p-6 overflow-hidden flex flex-col justify-between relative shadow-2xl">
              
              {/* CAD Guidelines & Coordinates indicator overlay */}
              <div className="absolute top-0 right-0 p-2 font-mono text-[9px] text-slate-400/80">
                W: 1080px × H: 1080px [300 DPI]
              </div>

              {/* Graphical nodes & layout tools mockup */}
              <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-20 dark:opacity-30">
                <PenTool className="h-44 w-44 text-rose-500" />
                <div className="absolute border border-dashed border-rose-500/50 w-64 h-64 rounded-full animate-spin" style={{ animationDuration: '24s' }} />
                <div className="absolute border border-dashed border-indigo-500/40 w-44 h-44 rounded-md rotate-45" />
              </div>

              {/* Upper Section of Card */}
              <div className="relative">
                <div className="flex justify-between items-center mb-3">
                  <div className="flex gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-500" />
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500" />
                  </div>
                  <span className="font-mono text-[10px] text-rose-500/80 uppercase font-bold tracking-widest bg-rose-500/5 border border-rose-500/10 px-2 py-0.5 rounded-md">
                    VECTOR INTERACTION
                  </span>
                </div>

                <div className="space-y-1">
                  <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 uppercase">
                    CorelDRAW LABS
                  </h3>
                  <p className="font-mono text-xs text-slate-400 uppercase">
                    Node Grid / Active Precision
                  </p>
                </div>
              </div>

              {/* Mid Layer Visual Representation */}
              <div className="relative flex flex-col items-center justify-center border-y border-slate-200/50 dark:border-slate-800/50 py-5 my-2">
                <div className="flex items-center gap-1">
                  {/* Floating geometric interactive color swatches */}
                  {["#F59E0B", "#EF4444", "#EC4899", "#8B5CF6", "#3B82F6", "#10B981"].map((color) => (
                    <div
                      key={color}
                      className="w-7 h-7 rounded-lg shadow-sm border border-white dark:border-slate-800 cursor-pointer hover:scale-110 active:scale-95 transition-transform"
                      style={{ backgroundColor: color }}
                      title={`Active: ${color}`}
                    />
                  ))}
                </div>
                <div className="mt-4 flex items-center justify-between w-full text-left bg-slate-100 dark:bg-slate-950 p-2.5 rounded-xl border border-slate-200/50 dark:border-slate-800/50">
                  <div className="flex items-center gap-2">
                    <Palette className="h-4 w-4 text-amber-500" />
                    <span className="font-mono text-[11px] font-bold text-slate-600 dark:text-slate-300">CMYK Coated Profile</span>
                  </div>
                  <span className="font-mono text-[10px] text-indigo-500 font-bold">100% OK</span>
                </div>
              </div>

              {/* Bottom Layer representing active project counts preview */}
              <div className="flex items-center justify-between relative mt-2">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-full bg-indigo-600 text-white flex items-center justify-center">
                    <Layout className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="text-[11px] font-mono text-slate-400">CURRENT DRIBBBLE CAMPAIGN</p>
                    <p className="font-sans font-bold text-xs text-slate-800 dark:text-slate-200">Packaging dielines, labels</p>
                  </div>
                </div>
              </div>

              {/* Interactive Vector Anchor Points */}
              <div className="absolute top-1/2 left-8 w-2 h-2 bg-indigo-500 border border-white dark:border-slate-900 rounded-sm cursor-move shadow-sm hover:scale-150 transition-transform" />
              <div className="absolute top-1/3 right-8 w-2 h-2 bg-indigo-600 border border-white dark:border-slate-900 rounded-sm cursor-move shadow-sm hover:scale-150 transition-transform" />
              <div className="absolute bottom-1/4 left-1/2 w-2 h-2 bg-amber-500 border border-white dark:border-slate-900 rounded-sm cursor-move shadow-sm hover:scale-150 transition-transform" />
            </div>

            {/* Glowing orb embellishment */}
            <div className="absolute -bottom-4 -left-4 w-12 h-12 rounded-2xl bg-indigo-600 shadow-lg text-white flex items-center justify-center text-xs font-mono font-bold">
              AI+
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating scroll trigger button */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center z-10">
        <button
          onClick={() => handleScrollTo("#about")}
          className="p-2.5 rounded-full border border-slate-200 dark:border-slate-800 hover:border-indigo-500 dark:hover:border-indigo-500 bg-white/80 dark:bg-slate-900/80 text-slate-400 hover:text-indigo-500 dark:text-slate-500 dark:hover:text-indigo-400 transition-all shadow-sm cursor-pointer animate-bounce"
        >
          <ArrowDown className="h-4 w-4" />
        </button>
      </div>
    </section>
  );
}
