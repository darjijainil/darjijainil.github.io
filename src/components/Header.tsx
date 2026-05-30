import React, { useState } from "react";
import { Menu, X, Sun, Moon, Award, Sparkles, Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface HeaderProps {
  designerName: string;
  isDarkMode: boolean;
  onToggleTheme: () => void;
  onOpenCms: () => void;
}

export default function Header({ designerName, isDarkMode, onToggleTheme, onOpenCms }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Process", href: "#process" },
    { name: "Contact", href: "#contact" },
  ];

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setIsOpen(false);
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 w-full backdrop-blur-md border-b bg-white/70 dark:bg-slate-900/70 border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <motion.a
            href="#"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-2 group cursor-pointer"
          >
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-indigo-600 text-white font-black text-lg tracking-tighter shadow-md shadow-indigo-600/20 group-hover:bg-indigo-700 transition-transform">
              JD
            </div>
            <div className="flex flex-col">
              <span className="font-display font-black text-lg tracking-tighter text-slate-900 dark:text-slate-100 uppercase leading-none">
                {designerName.toUpperCase()}
              </span>
              <span className="font-mono text-[9px] uppercase tracking-[0.25em] text-indigo-500 dark:text-indigo-400 font-bold leading-none mt-0.5">
                Creative Studio
              </span>
            </div>
          </motion.a>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            {navLinks.map((link, idx) => (
              <motion.a
                key={link.name}
                href={link.href}
                onClick={(e) => handleScroll(e, link.href)}
                initial={{ opacity: 0, y: -5 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className="font-sans text-xs font-bold uppercase tracking-wider text-slate-600 hover:text-indigo-600 dark:text-slate-300 dark:hover:text-amber-400 transition-colors relative group py-2"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-indigo-600 dark:bg-amber-400 group-hover:w-full transition-all duration-300" />
              </motion.a>
            ))}
          </nav>

          {/* Controls & Mini action button */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme toggle */}
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 hover:text-indigo-600 dark:hover:text-amber-400 transition-all active:scale-95 border border-slate-200/50 dark:border-slate-700/50"
              title="Toggle theme"
              id="theme-toggle"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            {/* CTA action */}
            <a
              href="#contact"
              onClick={(e) => handleScroll(e, "#contact")}
              className="px-5 py-2 text-xs font-bold uppercase tracking-widest text-white bg-indigo-600 hover:bg-slate-900 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 rounded-full transition-all shadow-md active:scale-95 flex items-center gap-1"
              id="cta-nav-hire"
            >
              <span>Hire Me</span>
              <Award className="h-3.5 w-3.5" />
            </a>
          </div>

          {/* Mobile bar button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={onToggleTheme}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
              id="mobile-theme"
            >
              {isDarkMode ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 border border-slate-200/50 dark:border-slate-700/50"
              id="mobile-menu-trigger"
            >
              {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile panel menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden border-t border-slate-200 dark:border-slate-800 bg-white dark:bg-slate-900 transition-colors duration-300"
          >
            <div className="space-y-1 px-4 pb-4 pt-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => handleScroll(e, link.href)}
                  className="block px-3 py-2 rounded-xl text-base font-semibold text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-slate-900 dark:hover:text-white"
                >
                  {link.name}
                </a>
              ))}
              <div className="pt-4 pb-2 border-t border-slate-100 dark:border-slate-800 flex flex-col gap-2">
                <a
                  href="#contact"
                  onClick={(e) => handleScroll(e, "#contact")}
                  className="w-full text-center py-2.5 rounded-xl bg-indigo-600 text-white font-bold text-sm shadow-md shadow-indigo-600/10"
                >
                  Hire Me Now
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
