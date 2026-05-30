import React, { useState, useEffect } from "react";
import { defaultPortfolioData } from "./data/portfolioContent";
import { PortfolioCMS } from "./types";
import Header from "./components/Header";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Services from "./components/Services";
import Portfolio from "./components/Portfolio";
import { Process } from "./components/Process";
import { ReusableStats } from "./components/Stats";
import { Testimonials } from "./components/Testimonials";
import { Blog } from "./components/Blog";
import { Contact } from "./components/Contact";
import CmsAdminPanel from "./components/CmsAdminPanel";
import { Sparkles, ArrowUp, Instagram, Linkedin, Mail, Heart, ExternalLink, MessageSquare, Settings } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function App() {
  // Load CMS data from LocalStorage or default
  const [cmsData, setCmsData] = useState<PortfolioCMS>(() => {
    const saved = localStorage.getItem("jainil_portfolio_cms");
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        return defaultPortfolioData;
      }
    }
    return defaultPortfolioData;
  });

  // Load dark mode preference (starts default true for luxury dark visual vibe)
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem("jainil_portfolio_dark");
    return saved !== null ? saved === "true" : true;
  });

  const [isCmsOpen, setIsCmsOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Sync dark theme class with outer document
  useEffect(() => {
    const root = window.document.documentElement;
    if (isDarkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("jainil_portfolio_dark", String(isDarkMode));
  }, [isDarkMode]);

  // Handle scroll stats
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // inject Schema.org Person metadata markup for flawless technical SEO indexation
  useEffect(() => {
    const existingScript = document.getElementById("structured-seo-markup");
    if (existingScript) {
      existingScript.remove();
    }

    const schemaObj = {
      "@context": "https://schema.org",
      "@type": "Person",
      "name": cmsData.personalInfo.name,
      "jobTitle": cmsData.personalInfo.title,
      "email": cmsData.personalInfo.email,
      "address": {
        "@type": "PostalAddress",
        "addressCountry": "India"
      },
      "description": cmsData.personalInfo.bio,
      "knowsAbout": cmsData.skills.map(s => s.name),
      "url": window.location.href,
      "sameAs": [
        cmsData.personalInfo.linkedinUrl,
        cmsData.personalInfo.behanceUrl,
        cmsData.personalInfo.instagramUrl,
        cmsData.personalInfo.githubUrl
      ]
    };

    const script = document.createElement("script");
    script.id = "structured-seo-markup";
    script.type = "application/ld+json";
    script.innerHTML = JSON.stringify(schemaObj);
    document.head.appendChild(script);

    return () => {
      const liveScript = document.getElementById("structured-seo-markup");
      if (liveScript) {
        liveScript.remove();
      }
    };
  }, [cmsData]);

  const handleSaveCMS = (newData: PortfolioCMS) => {
    setCmsData(newData);
    localStorage.setItem("jainil_portfolio_cms", JSON.stringify(newData));
  };

  const handleResetCMS = () => {
    setCmsData(defaultPortfolioData);
    localStorage.removeItem("jainil_portfolio_cms");
  };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const pInfo = cmsData.personalInfo;

  return (
    <div className={isDarkMode ? "dark text-slate-100 bg-slate-950 font-sans min-h-screen selection:bg-indigo-600 selection:text-white" : "text-slate-950 bg-slate-50 font-sans min-h-screen selection:bg-indigo-600 selection:text-white"}>
      
      {/* Search Spider / Static SEO Assist labels - hidden from view but indexes neatly */}
      <div className="sr-only" aria-hidden="true">
        <h1>{pInfo.name} — Graphic Designer Portfolio Website</h1>
        <h2>Expertise: CorelDRAW, Photoshop, Illustrator, Packaging Design, Print Media & Branding</h2>
        <p>{pInfo.bio}</p>
        <p>Location: {pInfo.location}</p>
        <nav>
          <a href="#about">About Jainil</a>
          <a href="#skills">Technical Skills Matrix</a>
          <a href="#services">Packaging & Creative Services Prices</a>
          <a href="#portfolio">Design Portfolio Gallery</a>
          <a href="#process">Creative Process Timeline</a>
          <a href="#contact">Hire Remote Freelance Graphic Designer</a>
        </nav>
      </div>

      {/* Primary Header/Menu */}
      <Header
        designerName={pInfo.name}
        isDarkMode={isDarkMode}
        onToggleTheme={() => setIsDarkMode(!isDarkMode)}
        onOpenCms={() => setIsCmsOpen(true)}
      />

      {/* Active page sections */}
      <main className="transition-colors duration-300">
        
        {/* HERO BANNER SECTION */}
        <Hero
          name={pInfo.name}
          title={pInfo.title}
          subtitle={pInfo.subtitle}
          whatsappNumber={pInfo.whatsappNumber}
        />

        {/* ABOUT ME EXPLANATION SECTION */}
        <About
          designerName={pInfo.name}
          bio={pInfo.bio}
          yearsOfExperience={pInfo.yearsOfExperience}
          location={pInfo.location}
          resumeDetails={pInfo.resumeDetails}
          skillsList={cmsData.skills}
        />

        {/* INTERACTIVE SKILLS GRID */}
        <Skills skills={cmsData.skills} />

        {/* DESIGN OFFERINGS & PRICING PACKAGES */}
        <Services
          services={cmsData.services}
          designerName={pInfo.name}
          whatsappNumber={pInfo.whatsappNumber}
        />

        {/* PORTFOLIO MASONRY GALLERY */}
        <Portfolio
          projects={cmsData.projects}
          designerName={pInfo.name}
        />

        {/* SYSTEM ENHANCEMENT STATS */}
        <ReusableStats
          completedProjectsCount={pInfo.completedProjectsCount}
          happyClientsCount={pInfo.happyClientsCount}
        />

        {/* TIMELINE WORKFLOW DEPICTION */}
        <Process />

        {/* CUSTOMER TESTIMONIALS SLIDER */}
        <Testimonials testimonials={cmsData.testimonials} />

        {/* TECHNICAL BLOG HUB */}
        <Blog posts={cmsData.blogPosts} />

        {/* HIGH-CONVERSION CONTACT LEAD FORM */}
        <Contact
          designerName={pInfo.name}
          whatsappNumber={pInfo.whatsappNumber}
          email={pInfo.email}
          location={pInfo.location}
        />

      </main>

      {/* COHESIVE AGENCY FOOTER */}
      <footer className="border-t border-slate-200/50 dark:border-slate-850 bg-slate-100 dark:bg-slate-950/80 pt-16 pb-8 transition-colors duration-300">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8 text-left">
          
          {/* Col 1 Brand Brief */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-600 text-white shadow shadow-indigo-650/15">
                <Sparkles className="h-4.5 w-4.5" />
              </div>
              <span className="font-sans font-extrabold text-base tracking-tight text-slate-800 dark:text-slate-100 leading-none">
                {pInfo.name} Creative
              </span>
            </div>
            <p className="font-sans text-xs text-slate-500 leading-relaxed max-w-sm">
              Premium tailored graphic designer assets built strictly to industrial tolerances. Armed with advanced AI systems and CorelDRAW precision drafting.
            </p>
            {/* Social icons */}
            <div className="flex gap-3 pt-2">
              <a href={pInfo.instagramUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-250 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-450 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all">
                <Instagram className="h-4 w-4" />
              </a>
              <a href={pInfo.linkedinUrl} target="_blank" rel="noopener noreferrer" className="p-2 rounded-lg bg-slate-250 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-450 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all">
                <Linkedin className="h-4 w-4" />
              </a>
              <a href={`mailto:${pInfo.email}`} className="p-2 rounded-lg bg-slate-250 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-450 hover:text-indigo-600 dark:hover:text-indigo-400 hover:scale-105 transition-all">
                <Mail className="h-4 w-4" />
              </a>
            </div>
          </div>

          {/* Col 2 Quick Index Navigation */}
          <div className="md:col-span-2 space-y-3.5">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-extrabold pb-1">Index Map</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#about" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Biography</a></li>
              <li><a href="#skills" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Core Software</a></li>
              <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Offerings</a></li>
              <li><a href="#portfolio" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Design Cases</a></li>
            </ul>
          </div>

          {/* Col 3 Technical Core Services links */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-extrabold pb-1">Core Deliveries</h4>
            <ul className="space-y-2 text-xs font-medium text-slate-500 dark:text-slate-400">
              <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Product Packaging Dielines</a></li>
              <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Social Posts & Reels Covers</a></li>
              <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Corporate Logo Guideline</a></li>
              <li><a href="#services" className="hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors">Brochure & CMYK Print Banners</a></li>
            </ul>
          </div>

          {/* Col 4 Direct Coordination */}
          <div className="md:col-span-3 space-y-3.5">
            <h4 className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-extrabold pb-1">Direct Coordination</h4>
            <div className="space-y-2 text-xs font-semibold text-slate-655 dark:text-slate-350">
              <p>Email: <a href={`mailto:${pInfo.email}`} className="text-indigo-600 dark:text-indigo-400 font-extrabold group-hover:underline">{pInfo.email}</a></p>
              <p>Hiring HQ: {pInfo.location}</p>
            </div>
          </div>
        </div>

        {/* Footer Sub bottom */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8 mt-8 border-t border-slate-200/40 dark:border-slate-900/60 flex flex-col sm:flex-row justify-between items-center gap-4 text-[11px] text-slate-450 dark:text-slate-500 font-mono font-medium uppercase tracking-wide">
          <p>© 2026 {pInfo.name}. All Rights Reservable.</p>
          <p className="flex items-center gap-1 justify-center">
            <span>Crafted with</span>
            <Heart className="h-3 w-3 fill-indigo-600 text-indigo-600 dark:fill-indigo-400 dark:text-indigo-400 animate-pulse" />
            <span>& AI precision efficiency tools</span>
          </p>
        </div>
      </footer>

      {/* Floating Scroll Top Trigger */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            onClick={handleScrollToTop}
            className="fixed bottom-24 right-6 z-40 p-3 bg-slate-950 dark:bg-white text-white dark:text-slate-950 rounded-full border border-slate-200 dark:border-slate-800 shadow-md hover:scale-105 active:scale-95 transition-all cursor-pointer"
            id="scroll-to-top-fab"
            title="Scroll back to top"
          >
            <ArrowUp className="h-4 w-4" />
          </motion.button>
        )}
      </AnimatePresence>

      {/* INTERACTIVE CMS POPUP DRAWER */}
      <CmsAdminPanel
        isOpen={isCmsOpen}
        onClose={() => setIsCmsOpen(false)}
        currentCMS={cmsData}
        onSaveCMS={handleSaveCMS}
        onResetCMS={handleResetCMS}
      />

    </div>
  );
}
