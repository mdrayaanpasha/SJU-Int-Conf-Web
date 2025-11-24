import React, { useState, useEffect, memo } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Terminal,
  Server,
  Menu,
  X
} from "lucide-react";

// --- DATA ---
const navItems = [
  { name: "ABOUT", to: "#about" },
  { name: "CALL FOR PAPERS", to: "#call-for-papers" },
  { name: "PUBLICATION", to: "#submission" },
  { name: "COMMITTEES", to: "#committees" },
  { name: "CONTACT", to: "#contact" },
];

// --- NAVBAR COMPONENT (Fixed: Submission Button Removed) ---
export const Navbar: FC<{ isOpen: boolean; onToggle: () => void; scrolled: boolean }> = memo(({ isOpen, onToggle, scrolled }) => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-neutral-200/50' : 'bg-transparent'
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <motion.a 
          href="/" 
          className="flex items-center space-x-3"
          whileHover={{ scale: 1.05 }}
        >
          <div className={`text-2xl font-black ${scrolled ? 'text-neutral-900' : 'text-white'}`}>
            <span className="bg-gradient-to-r from-electric-600 to-violet-600 bg-clip-text text-transparent">ICRAC</span>
            <span className="text-electric-600">2026</span>
          </div>
        </motion.a>

        {/* Desktop Navigation - Button Removed */}
        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.to}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                scrolled ? 'text-neutral-700 hover:text-electric-600' : 'text-white/90 hover:text-white'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.div 
                className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-electric-500 to-violet-500 rounded-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        {/* Mobile menu button */}
        <motion.button
          className={`lg:hidden p-3 rounded-2xl transition-colors ${
            scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-white hover:bg-white/10'
          }`}
          onClick={onToggle}
          whileTap={{ scale: 0.9 }}
          aria-label="Toggle navigation menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      {/* Mobile Navigation - Button Removed */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl rounded-3xl mt-2 overflow-hidden border border-neutral-200/50 shadow-2xl"
          >
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.to}
                  className="block px-6 py-4 text-neutral-700 font-semibold hover:bg-electric-50 hover:text-electric-600 transition-colors rounded-xl mx-2"
                  onClick={onToggle}
                  whileHover={{ x: 8 }}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.nav>
));

// --- REUSABLE COMPONENTS FOR SUBMISSION SECTION ---

const TemplateCard = ({ title, type, icon: Icon, color }: any) => (
  <motion.div 
    whileHover={{ y: -5 }}
    className="group relative bg-white rounded-2xl p-6 border border-neutral-200 shadow-xl overflow-hidden"
  >
    <div className={`absolute top-0 right-0 w-24 h-24 bg-gradient-to-br ${color} opacity-10 rounded-bl-full -mr-4 -mt-4 transition-transform group-hover:scale-110`} />
    
    <div className="relative z-10">
      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center text-white mb-4 shadow-lg`}>
        <Icon size={24} />
      </div>
      
      <h4 className="text-xl font-bold text-neutral-900 mb-2">{title}</h4>
      <p className="text-neutral-500 text-sm mb-6">Official Springer {type} template for manuscript preparation.</p>
      
      <button className="flex items-center gap-2 text-sm font-bold uppercase tracking-wide text-neutral-900 group-hover:text-electric-600 transition-colors">
        <Download size={16} />
        Download Template
      </button>
    </div>
  </motion.div>
);

// --- MASSIVE ACKNOWLEDGMENT BANNER ---
const CmtAcknowledgmentBanner = () => (
  <motion.div 
    initial={{ opacity: 0, scale: 0.95, y: 20 }}
    whileInView={{ opacity: 1, scale: 1, y: 0 }}
    viewport={{ once: true }}
    className="relative w-full mb-24 overflow-hidden rounded-3xl bg-white border border-neutral-200 shadow-[0_0_60px_-15px_rgba(37,99,235,0.2)]"
  >
    {/* Top Highlight Bar - Microsoft Blue/Azure Gradient */}
    <div className="absolute top-0 left-0 right-0 h-3 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-700" />
    
    {/* Subtle Background Pattern */}
    <div className="absolute inset-0 bg-[radial-gradient(#3b82f6_1px,transparent_1px)] [background-size:20px_20px] opacity-[0.03]"></div>

    <div className="relative z-10 p-10 md:p-16 flex flex-col items-center text-center">
      
      {/* Icon Badge */}
      <div className="w-20 h-20 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-8 shadow-inner ring-4 ring-blue-50/50">
        <Server size={40} strokeWidth={1.5} />
      </div>

      {/* Big Title matching the image style */}
      <h3 className="text-3xl md:text-5xl font-black text-neutral-900 mb-8 uppercase tracking-wider">
        CMT Acknowledgment
      </h3>
      
      {/* Divider */}
      <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-400 rounded-full mb-8"></div>

      {/* The Text */}
      <p className="max-w-5xl mx-auto text-lg md:text-2xl text-neutral-600 font-medium leading-relaxed">
        <span className="text-blue-700 font-bold">CMT ACKNOWLEDGMENT:</span> The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
      </p>
    </div>
  </motion.div>
);

// --- SUBMISSION PORTAL COMPONENT ---
const SubmissionPortal = memo(() => {
  return (
    <section className="relative bg-neutral-50 pt-20 pb-32 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      <div className="absolute right-0 top-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. THE BIG ACKNOWLEDGMENT BANNER (First thing) */}
        <CmtAcknowledgmentBanner />

        {/* 2. Header & Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16 mt-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-electric-100 text-electric-700 text-xs font-bold uppercase tracking-widest mb-6">
              <span className="w-2 h-2 rounded-full bg-electric-600 animate-pulse" />
              Submission Portal
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-neutral-900 mb-6 leading-tight">
              Ready to submit <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 to-violet-600">
                your research?
              </span>
            </h2>
            <p className="text-lg text-neutral-600 mb-8 leading-relaxed">
              Authors are invited to submit research or review papers. Accepted and registered papers will be presented during the conference and published in the proceedings.
            </p>

            {/* Crucial Notes */}
            <div className="bg-white rounded-2xl p-6 border-l-4 border-amber-500 shadow-lg space-y-4">
              <div className="flex gap-4">
                <AlertCircle className="w-6 h-6 text-amber-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">Review Process</h4>
                  <p className="text-sm text-neutral-600 mt-1">Acceptance of a full-length submission is strictly based on the reviewers’ comments.</p>
                </div>
              </div>
              <div className="w-full h-px bg-neutral-100" />
              <div className="flex gap-4">
                <CheckCircle className="w-6 h-6 text-emerald-500 flex-shrink-0 mt-1" />
                <div>
                  <h4 className="font-bold text-neutral-900">Registration Policy</h4>
                  <p className="text-sm text-neutral-600 mt-1">At least one author of an accepted paper needs to register for the conference and present the paper.</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* 3. Download Templates */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 sm:grid-cols-2 gap-6"
          >
             {/* Word Template */}
            <TemplateCard 
              title="Word Template" 
              type="DOCX" 
              icon={FileText} 
              color="from-blue-500 to-blue-600" 
            />
            {/* Latex Template */}
            <TemplateCard 
              title="LaTeX Template" 
              type="TeX" 
              icon={Terminal} 
              color="from-neutral-700 to-neutral-900" 
            />
          </motion.div>
        </div>

        {/* 4. Main CMT Action Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative rounded-3xl overflow-hidden shadow-2xl"
        >
          <div className="absolute inset-0 bg-gradient-to-r from-neutral-900 via-electric-900 to-violet-900" />
          
          {/* Decorative grid */}
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:32px_32px] opacity-30" />

          <div className="relative z-10 p-8 md:p-12 text-center">
            <h3 className="text-3xl md:text-4xl font-black text-white mb-6">
              Submit via Microsoft CMT
            </h3>
            <p className="max-w-2xl mx-auto text-neutral-300 text-lg mb-10">
              All submissions must be made through the Conference Management Toolkit (CMT). Please ensure your manuscript follows the Springer guidelines before uploading.
            </p>
            
            <motion.a 
              href="https://cmt3.research.microsoft.com/ICRAC2026"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 bg-white text-neutral-900 font-bold px-10 py-5 rounded-2xl text-lg shadow-2xl hover:bg-electric-50 transition-colors"
            >
              Go to Submission Portal
              <ExternalLink size={20} />
            </motion.a>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

export default SubmissionPortal;
