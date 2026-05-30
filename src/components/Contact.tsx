import React, { useState } from "react";
import { Mail, MapPin, Send, MessageCircle, AlertCircle, CheckCircle, Smartphone } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface ContactProps {
  designerName: string;
  whatsappNumber: string;
  email: string;
  location: string;
}

export default function Contact({ designerName, whatsappNumber, email, location }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Packaging Design",
    budget: "₹1,999 - ₹4,999 ($65 - $150)",
    message: ""
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitSuccess, setIsSubmitSuccess] = useState(false);

  const budgetOptions = [
    "₹499 - ₹1,999 ($15 - $65)",
    "₹1,999 - ₹4,999 ($65 - $150)",
    "₹4,999 - ₹9,999 ($150 - $320)",
    "₹9,999+ ($320+)"
  ];

  const projectTypes = [
    "Social Media Posts & Campaigns",
    "Product Packaging Design",
    "Corporate Identity & Logos",
    "Print Media Advertising",
    "AI-Augmented Marketing Graphics",
    "Custom Editorial Catalogues",
    "Other Creative Illustration"
  ];

  const validateForm = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = "Full name is required";
    if (!formData.email.trim()) {
      tempErrors.email = "Email address is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      tempErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) tempErrors.message = "Please describe your project concept or query";
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Simulate successful API submission
    setIsSubmitSuccess(true);
  };

  const handleSendToWhatsApp = () => {
    const textMsg = `Hi ${designerName}, I submitted an inquiry through your portfolio website!
*Name:* ${formData.name}
*Email:* ${formData.email}
*Phone:* ${formData.phone || "Not specified"}
*Project Details:* ${formData.projectType}
*Est Budget:* ${formData.budget}
*Brief:* ${formData.message}`;

    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encoded}`, "_blank", "referrerPolicy=no-referrer");
  };

  const handleResetForm = () => {
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Packaging Design",
      budget: "₹1,999 - ₹4,999 ($65 - $150)",
      message: ""
    });
    setIsSubmitSuccess(false);
  };

  // WhatsApp click handler for floating bar
  const handleFloatingClick = () => {
    const textMsg = `Hi ${designerName}! I'm looking at your creative design portfolio and would love to chat regarding a freelance brand project.`;
    const encoded = encodeURIComponent(textMsg);
    window.open(`https://wa.me/${whatsappNumber.replace(/[^0-9]/g, "")}?text=${encoded}`, "_blank", "referrerPolicy=no-referrer");
  };

  return (
    <section className="py-20 bg-white dark:bg-slate-950 transition-colors duration-300 relative" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-mono text-[10px] text-indigo-500 dark:text-indigo-400 font-extrabold uppercase tracking-[0.25em] mb-2 flex items-center justify-center gap-1.5">
            <Smartphone className="h-3.5 w-3.5" />
            <span>06 . Contact & Hire</span>
          </h2>
          <p className="font-display font-black text-4xl sm:text-5xl text-slate-800 dark:text-white uppercase tracking-tighter">
            Trigger Creative Engagement
          </p>
          <div className="mt-4 h-1 w-12 bg-indigo-500 mx-auto rounded-full" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Block: Direct Coordinate metadata info */}
          <div className="lg:col-span-4 space-y-6 lg:sticky lg:top-24">
            <h3 className="font-sans font-extrabold text-xl text-slate-800 dark:text-white uppercase tracking-tight">
              Let's Make Something Striking
            </h3>
            
            <p className="font-sans text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
              Available immediately globally for comprehensive freelance, contract, or full-time remote visual designer roles. Let's optimize your brand's narrative together.
            </p>

            {/* Direct coordinate blocks */}
            <div className="space-y-4 pt-4">
              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-850 rounded-2xl items-start">
                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                  <Mail className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Email Address</p>
                  <a href={`mailto:${email}`} className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200 hover:text-indigo-600 transition-colors">
                    {email}
                  </a>
                </div>
              </div>

              <div className="flex gap-4 p-5 bg-slate-50 dark:bg-slate-900/40 border border-slate-200/50 dark:border-slate-850 rounded-2xl items-start">
                <div className="p-3 bg-indigo-500/10 text-indigo-500 rounded-xl">
                  <MapPin className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-mono text-[9px] uppercase tracking-wider text-slate-400 font-bold">Service Location</p>
                  <p className="font-sans font-bold text-sm text-slate-800 dark:text-slate-200">
                    {location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Block: Lead Generation Validation Form */}
          <div className="lg:col-span-8">
            <div className="border border-slate-200/60 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/30 p-6 sm:p-10 rounded-3xl relative">
              <AnimatePresence mode="wait">
                {!isSubmitSuccess ? (
                  <motion.form
                    key="contact-form"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-6 text-left"
                    id="designer-lead-form"
                    noValidate
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Name input */}
                      <div className="space-y-1.5 align-left">
                        <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                          Your Full Name <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-slate-100 dark:border-slate-800 ${
                            errors.name ? "border-rose-500 focus:ring-indigo-600" : "border-slate-200/60"
                          }`}
                          placeholder="e.g. Suresh Patel"
                        />
                        {errors.name && (
                          <p className="text-[11px] text-rose-500 font-mono font-medium flex items-center gap-0.5 mt-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.name}
                          </p>
                        )}
                      </div>

                      {/* Email input */}
                      <div className="space-y-1.5 align-left">
                        <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                          Email Address <span className="text-rose-500">*</span>
                        </label>
                        <input
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-slate-100 dark:border-slate-800 ${
                            errors.email ? "border-rose-500 focus:ring-indigo-600" : "border-slate-200/60"
                          }`}
                          placeholder="e.g. suresh@aromafoods.com"
                        />
                        {errors.email && (
                          <p className="text-[11px] text-rose-500 font-mono font-medium flex items-center gap-0.5 mt-1">
                            <AlertCircle className="h-3 w-3" />
                            {errors.email}
                          </p>
                        )}
                      </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                      {/* Phone input */}
                      <div className="space-y-1.5 align-left">
                        <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                          Contact Phone Number
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-slate-100"
                          placeholder="e.g. +91 98765 43210"
                        />
                      </div>

                      {/* Project Type */}
                      <div className="space-y-1.5 align-left">
                        <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                          Select Project Type
                        </label>
                        <select
                          value={formData.projectType}
                          onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                          className="w-full px-4 py-3 bg-white dark:bg-slate-950 border border-slate-200/60 dark:border-slate-800 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-slate-100"
                        >
                          {projectTypes.map((type) => (
                            <option key={type} className="dark:bg-slate-950 dark:text-slate-200" value={type}>{type}</option>
                          ))}
                        </select>
                      </div>
                    </div>

                    {/* Budget slider choices */}
                    <div className="space-y-1.5 align-left">
                      <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                        Estimated Budget Bracket
                      </label>
                      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                        {budgetOptions.map((opt) => (
                          <button
                            key={opt}
                            type="button"
                            onClick={() => setFormData({ ...formData, budget: opt })}
                            className={`px-3 py-2.5 rounded-xl border text-xs font-mono font-medium text-center transition-all cursor-pointer ${
                              formData.budget === opt
                                ? "bg-slate-900 border-slate-900 text-white dark:bg-white dark:text-slate-950"
                                : "bg-white border-slate-200/60 text-slate-500 hover:bg-slate-100 hover:text-slate-800 dark:bg-slate-950 dark:border-slate-800 dark:text-slate-450 dark:hover:bg-slate-900"
                            }`}
                          >
                            {opt.split(" ")[0]}
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Brief text box */}
                    <div className="space-y-1.5 align-left">
                      <label className="font-sans text-xs font-bold text-slate-650 dark:text-slate-350">
                        Project Brief Details <span className="text-rose-500">*</span>
                      </label>
                      <textarea
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        rows={4}
                        className={`w-full px-4 py-3 bg-white dark:bg-slate-950 border rounded-xl text-sm placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-indigo-600 dark:text-slate-100 dark:border-slate-800 ${
                          errors.message ? "border-rose-500 focus:ring-indigo-600" : "border-slate-200/60"
                        }`}
                        placeholder="e.g. Dieline adjustments and brand labels design for a luxury snack bottle packaging profile..."
                      />
                      {errors.message && (
                        <p className="text-[11px] text-rose-500 font-mono font-medium flex items-center gap-0.5 mt-1">
                          <AlertCircle className="h-3 w-3" />
                          {errors.message}
                        </p>
                      )}
                    </div>

                    {/* Submit buttons */}
                    <div className="flex flex-wrap gap-4 pt-3.5">
                      <button
                        type="button"
                        onClick={handleSendToWhatsApp}
                        className="px-8 py-4 rounded-2xl bg-emerald-500 hover:bg-emerald-600 text-white font-extrabold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2 flex-grow sm:flex-grow-0 cursor-pointer"
                        id="submit-form-whatsapp"
                      >
                        <MessageCircle className="h-5 w-5 fill-white/10" />
                        <span>Chat & Share on WhatsApp</span>
                      </button>
                    </div>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success-card"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="p-8 text-center space-y-6"
                  >
                    <div className="h-16 w-16 mx-auto bg-emerald-100 dark:bg-emerald-500/10 text-emerald-500 rounded-full flex items-center justify-center shadow-inner">
                      <CheckCircle className="h-8 w-8" />
                    </div>
                    <div className="space-y-2">
                      <h3 className="font-sans font-extrabold text-2xl text-slate-800 dark:text-white">
                        Inquiry Received Flawlessly!
                      </h3>
                      <p className="font-sans text-sm text-slate-500 dark:text-slate-400 max-w-lg mx-auto">
                        Thank you for reaching out, <strong>{formData.name}</strong>. Your corporate concept brief is locked. Let's start the conversational process instantly by clicking the WhatsApp button below!
                      </p>
                    </div>

                    <div className="flex flex-col sm:flex-row gap-3.5 justify-center pt-4">
                      <button
                        onClick={handleSendToWhatsApp}
                        className="px-6 py-3.5 rounded-xl bg-emerald-500 hover:bg-emerald-600 text-white font-bold text-sm shadow-md transition-all flex items-center justify-center gap-2 cursor-pointer"
                      >
                        <MessageCircle className="h-4 active:scale-95 w-4 fill-emerald-500/15" />
                        <span>Instant WhatsApp Followup</span>
                      </button>

                      <button
                        onClick={handleResetForm}
                        className="px-6 py-3.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 text-slate-600 dark:text-slate-300 font-bold text-sm transition-all cursor-pointer"
                      >
                        Reset Inquiry Form
                      </button>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

        </div>
      </div>

      {/* Floating Action Button WhatsApp */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.button
          onClick={handleFloatingClick}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="h-14 w-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg shadow-emerald-500/30 hover:bg-emerald-600 border border-emerald-450 z-50 cursor-pointer relative"
          id="floating-whatsapp-fab"
          title="Direct WhatsApp Chat"
        >
          {/* Subtle pulse background animation */}
          <span className="absolute inset-0 rounded-full border-2 border-emerald-500 animate-ping opacity-35" />
          <MessageCircle className="h-6 w-6 fill-white/10" />
        </motion.button>
      </div>
    </section>
  );
}
export { Contact };
