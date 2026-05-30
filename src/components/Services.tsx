import React from "react";
import { Layers, MessageSquare, CheckCircle, Package, Timer, Sparkles, MessageCircle } from "lucide-react";
import { motion } from "motion/react";
import { ServiceItem } from "../types";
import { DynamicIcon } from "./DynamicIcon";

interface ServicesProps {
  services: ServiceItem[];
  designerName: string;
  whatsappNumber: string;
}

export default function Services({ services, designerName, whatsappNumber }: ServicesProps) {
  
  const handleInquire = (serviceTitle: string) => {
    const textMsg = `Hi ${designerName}, I want to inquire about your professional services for "${serviceTitle}". Please share more details!`;
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encoded}`, "_blank", "referrerPolicy=no-referrer");
  };

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <Layers className="h-3.5 w-3.5" />
            <span>03 . Professional Services</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            Comprehensive Design Offerings
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-sans">
            Clear visual offerings tailored for small businesses, agencies, and retail products. Transparent timelines and print-ready results.
          </p>
        </div>

        {/* Services Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              layout
              key={service.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.35, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group p-6 sm:p-8 rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between"
            >
              <div className="space-y-6">
                {/* Header info */}
                <div className="flex items-center justify-between gap-4">
                  <div className="h-12 w-12 rounded-2xl bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border border-indigo-500/25 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
                    <DynamicIcon name={service.icon} className="h-5 w-5" />
                  </div>
                  <div className="text-right">
                    <p className="font-mono text-[9px] uppercase tracking-widest text-slate-400 font-bold">Price range</p>
                    <p className="font-mono text-sm font-extrabold text-indigo-600 dark:text-indigo-400">
                      {service.startingPrice}
                    </p>
                  </div>
                </div>

                <div className="space-y-2">
                  <h3 className="font-sans font-bold text-lg text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-amber-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {service.description}
                  </p>
                </div>

                {/* Scope items / deliverables list */}
                <div className="space-y-3 pt-4 border-t border-slate-100 dark:border-slate-900">
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold flex items-center gap-1">
                    <Package className="h-3 w-3 text-indigo-500" />
                    <span>Exact File Deliverables:</span>
                  </p>
                  <ul className="space-y-2">
                    {service.deliverables.map((item, idx) => (
                      <li key={idx} className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-300 leading-tight">
                        <CheckCircle className="h-3.5 w-3.5 text-emerald-500 flex-shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Order Info & Call To Action */}
              <div className="mt-8 pt-4 border-t border-slate-100 dark:border-slate-900 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
                  <Timer className="h-3.5 w-3.5 text-amber-500" />
                  <span>Delivery: <strong>{service.deliveryTime}</strong></span>
                </div>

                <button
                  onClick={() => handleInquire(service.title)}
                  className="w-full sm:w-auto px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-slate-900 dark:bg-amber-400 dark:text-slate-950 dark:hover:bg-amber-300 text-white text-[10px] font-bold uppercase tracking-widest transition-all flex items-center justify-center gap-1.5 cursor-pointer"
                  id={`srv-cta-btn-${service.id}`}
                >
                  <MessageCircle className="h-3.5 w-3.5 fill-emerald-500/10 text-emerald-400" />
                  <span>Book Service</span>
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
