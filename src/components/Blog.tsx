import React, { useState } from "react";
import { BookOpen, Calendar, Clock, ArrowRight, X, Sparkles, CheckCircle } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { BlogPost } from "../types";

interface BlogProps {
  posts: BlogPost[];
}

export default function Blog({ posts }: BlogProps) {
  const [activePost, setActivePost] = useState<BlogPost | null>(null);

  return (
    <section className="py-20 bg-slate-50 dark:bg-slate-900 border-y border-slate-200/50 dark:border-slate-800/50 transition-colors duration-300" id="blog">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <BookOpen className="h-3.5 w-3.5" />
            <span>08 . Creative Insights</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            The Design Editorial Hub
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
          <p className="mt-4 text-sm text-slate-500 dark:text-slate-400 font-sans">
            Technical dielines tutorials, prompt guides, and digital composition principles designed to boost indexing and educational client value.
          </p>
        </div>

        {/* Blog Post Card Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article
              layout
              key={post.id}
              initial={{ opacity: 0, scale: 0.96 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              className="group cursor-pointer overflow-hidden rounded-3xl border border-slate-200/50 dark:border-slate-800 bg-white dark:bg-slate-950 hover:bg-slate-50 dark:hover:bg-slate-900/40 hover:border-slate-300 dark:hover:border-slate-700 transition-all shadow-sm flex flex-col justify-between"
              onClick={() => setActivePost(post)}
            >
              {/* Cover Image */}
              <div className="aspect-video relative overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover group-hover:scale-103 transition-transform duration-500"
                  loading="lazy"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 z-10 px-3 py-1 font-mono text-[9px] font-bold text-white uppercase bg-indigo-600 rounded-md shadow-sm">
                  {post.category}
                </div>
              </div>

              {/* Text Card content */}
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div className="space-y-3">
                  <div className="flex items-center gap-3 text-[10px] font-mono text-slate-400 font-bold uppercase">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                      {post.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-slate-400" />
                      {post.readTime}
                    </span>
                  </div>

                  <h3 className="font-sans font-bold text-base text-slate-800 dark:text-slate-100 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors line-clamp-2 leading-snug">
                    {post.title}
                  </h3>

                  <p className="font-sans text-xs sm:text-sm text-slate-600 dark:text-slate-400 line-clamp-3 leading-relaxed">
                    {post.summary}
                  </p>
                </div>

                {/* Tags row and arrow */}
                <div className="mt-6 pt-4 border-t border-slate-100 dark:border-slate-900 flex items-center justify-between text-xs font-mono">
                  <div className="flex gap-1">
                    {post.tags.slice(0, 2).map((tg) => (
                      <span key={tg} className="px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-900 border border-slate-200/50 dark:border-slate-800 text-[10px] text-slate-500 dark:text-slate-400">
                        #{tg}
                      </span>
                    ))}
                  </div>
                  <span className="text-indigo-600 dark:text-indigo-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                    <span>Read Article</span>
                    <ArrowRight className="h-3.5 w-3.5" />
                  </span>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Blog Overlay Modal */}
      <AnimatePresence>
        {activePost && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-sm p-4 sm:p-6 lg:p-8 flex items-center justify-center cursor-default"
            onClick={() => setActivePost(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 15 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 15 }}
              className="relative w-full max-w-3xl bg-white dark:bg-slate-900 rounded-3xl shadow-2xl p-6 sm:p-10 overflow-hidden max-h-[90vh] overflow-y-auto border border-slate-200/50 dark:border-slate-800"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setActivePost(null)}
                className="absolute top-4 right-4 p-2 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 transition-colors cursor-pointer"
                id="close-blog-popup-btn"
              >
                <X className="h-5 w-5" />
              </button>

              {/* Render dynamic markup blog article */}
              <div className="space-y-6 text-left text-slate-900 dark:text-slate-100">
                <div>
                  <span className="font-mono text-xs uppercase tracking-widest text-indigo-600 dark:text-indigo-400 font-extrabold block mb-1">
                    Category: {activePost.category}
                  </span>
                  <h2 className="font-sans font-extrabold text-xl sm:text-2xl text-slate-900 dark:text-white tracking-tight leading-snug">
                    {activePost.title}
                  </h2>
                  <div className="flex items-center gap-4 text-[10px] font-mono text-slate-400 font-bold uppercase mt-3">
                    <span className="flex items-center gap-1">
                      <Calendar className="h-3.5 w-3.5 text-indigo-400" />
                      {activePost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5 text-indigo-400" />
                      {activePost.readTime}
                    </span>
                  </div>
                </div>

                <div className="aspect-video w-full rounded-2xl overflow-hidden shadow-sm">
                  <img
                    src={activePost.image}
                    alt={activePost.title}
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                </div>

                {/* Formatted body article content */}
                <div className="prose dark:prose-invert max-w-none pt-4 border-t border-slate-100 dark:border-slate-800/85">
                  <p className="font-sans text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-semibold">
                    {activePost.summary}
                  </p>
                  
                  {/* Process markdown body segments simply with native render layout */}
                  <div className="space-y-4 mt-6 text-sm sm:text-base font-sans text-slate-600 dark:text-slate-300 leading-relaxed">
                    {activePost.content.split("\n\n").map((para, i) => {
                      if (para.startsWith("###")) {
                        return (
                          <h4 key={i} className="font-sans font-extrabold text-lg text-slate-800 dark:text-white pt-2">
                            {para.replace("###", "").trim()}
                          </h4>
                        );
                      }
                      if (para.startsWith("####")) {
                        return (
                          <h5 key={i} className="font-sans font-bold text-base text-slate-800 dark:text-white pt-1">
                            {para.replace("####", "").trim()}
                          </h5>
                        );
                      }
                      if (para.startsWith("```")) {
                        return (
                          <pre key={i} className="font-mono text-xs p-4 rounded-xl bg-slate-100 dark:bg-slate-950 border border-slate-200/50 dark:border-slate-850 text-indigo-600 dark:text-indigo-400 overflow-x-auto">
                            <code>{para.replace(/```[a-z]*/, "").replace("```", "").trim()}</code>
                          </pre>
                        );
                      }
                      return <p key={i}>{para}</p>;
                    })}
                  </div>
                </div>

                {/* Footer and Tags */}
                <div className="flex flex-wrap gap-1.5 pt-6 border-t border-slate-100 dark:border-slate-800">
                  {activePost.tags.map((tg) => (
                    <span key={tg} className="px-3 py-1 rounded bg-slate-100 dark:bg-slate-800 border border-slate-250 dark:border-slate-700 font-mono text-[10px] text-slate-500">
                      #{tg}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
export { Blog };
