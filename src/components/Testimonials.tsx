import React, { useState } from "react";
import { MessageSquare, Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { TestimonialItem } from "../types";

interface TestimonialsProps {
  testimonials: TestimonialItem[];
}

export default function Testimonials({ testimonials }: TestimonialsProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!testimonials || testimonials.length === 0) {
    return (
      <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="testimonials">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section Heading */}
          <div className="text-center max-w-3xl mx-auto mb-8">
            <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
              <MessageSquare className="h-3.5 w-3.5" />
              <span>07 . Client Testimonials</span>
            </h2>
            <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
              Trusted by Creators & Businesses
            </p>
            <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          </div>

          <div className="max-w-4xl mx-auto px-8 text-center py-10 bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-850 rounded-3xl">
            <Quote className="h-8 w-8 text-indigo-500/10 dark:text-indigo-500/5 mx-auto mb-4 rotate-180" />
            <p className="font-sans text-sm sm:text-base text-slate-500 dark:text-slate-400 italic">
              "No client testimonials yet. Ready to embark on our first creative project together! Send a message below to get started."
            </p>
          </div>
        </div>
      </section>
    );
  }

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300" id="testimonials">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <MessageSquare className="h-3.5 w-3.5" />
            <span>07 . Client Testimonials</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            Trusted by Creators & Businesses
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        {/* Carousel block */}
        <div className="max-w-4xl mx-auto relative px-8">
          <div className="overflow-hidden bg-slate-50 dark:bg-slate-900/30 border border-slate-200/50 dark:border-slate-850 rounded-3xl p-6 sm:p-10 text-left relative min-h-[220px]">
            {/* Decors */}
            <Quote className="absolute top-6 right-6 h-12 w-12 text-indigo-500/10 dark:text-indigo-500/5 rotate-180" />

            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.25 }}
                className="space-y-6"
              >
                {/* Visual Stars */}
                <div className="flex gap-1 text-amber-400">
                  {Array.from({ length: testimonials[currentIndex].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-amber-400 text-amber-400" />
                  ))}
                </div>

                {/* Review Text */}
                <p className="font-sans text-sm sm:text-base leading-relaxed text-slate-600 dark:text-slate-300 italic font-medium">
                  "{testimonials[currentIndex].feedback}"
                </p>

                {/* Account info and tags */}
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pt-6 border-t border-slate-200/50 dark:border-slate-800">
                  <div className="flex gap-3.5 items-center">
                    <img
                      src={testimonials[currentIndex].avatar}
                      alt={testimonials[currentIndex].name}
                      className="h-10 w-10 sm:h-12 sm:w-12 rounded-full object-cover border border-slate-250 dark:border-slate-700"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                    />
                    <div>
                      <p className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                        {testimonials[currentIndex].name}
                      </p>
                      <p className="font-mono text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                        {testimonials[currentIndex].role} — <strong>{testimonials[currentIndex].company}</strong>
                      </p>
                    </div>
                  </div>

                  <span className="font-mono text-[9px] uppercase tracking-wider text-indigo-500 dark:text-indigo-400 font-bold px-3 py-1 rounded-full bg-indigo-500/5 border border-indigo-500/15">
                    Category: {testimonials[currentIndex].projectType}
                  </span>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Carousel Arrows */}
          <button
            onClick={handlePrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all shadow-sm cursor-pointer z-10 active:scale-90"
            id="testimonial-prev-arrow"
          >
            <ChevronLeft className="h-4 w-4" />
          </button>
          <button
            onClick={handleNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-slate-400 hover:text-indigo-500 dark:hover:text-indigo-400 transition-all shadow-sm cursor-pointer z-10 active:scale-90"
            id="testimonial-next-arrow"
          >
            <ChevronRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
export { Testimonials };
