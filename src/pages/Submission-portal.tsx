import React, { memo } from "react";
import { motion } from "framer-motion";
import { 
  Download, 
  ExternalLink, 
  FileText, 
  CheckCircle, 
  AlertCircle, 
  Terminal,
  ArrowRight
} from "lucide-react";

// --- REUSABLE COMPONENTS FOR THIS SECTION ---

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

const SubmissionPortal = memo(() => {
  return (
    <section className="relative bg-neutral-50 py-24 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-neutral-300 to-transparent" />
      <div className="absolute right-0 top-1/4 w-64 h-64 bg-violet-500/5 rounded-full blur-3xl" />
      <div className="absolute left-0 bottom-1/4 w-64 h-64 bg-electric-500/5 rounded-full blur-3xl" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* 1. Header & Rules */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-16">
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

          {/* 2. Download Templates */}
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

        {/* 3. Main CMT Action Card */}
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

            <p className="mt-8 text-white/40 text-xs max-w-3xl mx-auto border-t border-white/10 pt-6">
              The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
});

export default SubmissionPortal;
