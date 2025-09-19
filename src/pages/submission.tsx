"use client";

import { motion } from "framer-motion";
import Navbar from "../components/ui/header";
// Make sure to add the Springer logo to your assets and update the path
import { FiFileText, FiEdit3, FiUsers, FiAward, FiClock } from "react-icons/fi";
import SpringerLogo from "../assets/IMAGES/springer.png"
// --- Data for Publication Process ---
const processSteps = [
    {
        icon: <FiFileText />,
        title: "Original Research",
        description: "Papers must be original and not previously published or under consideration elsewhere.",
    },
    {
        icon: <FiEdit3 />,
        title: "Springer Format",
        description: "The full manuscript must be submitted in the official Springer format.",
    },
    {
        icon: <FiUsers />,
        title: "Rigorous Peer-Review",
        description: "All submitted papers will undergo a strict peer-review process by experts.",
    },
    {
        icon: <FiAward />,
        title: "Scopus Indexed Publication",
        description: "Selected papers will be published in a Scopus indexed Springer book series (subject to approval).",
    },
];


export default function Publication() {
  return (
    <div className="min-h-screen bg-black text-white bg-dot-white/[0.1]">
      <Navbar />
      
      {/* --- Hero Section --- */}
      <div className="relative h-[70vh] flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
        <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.15),transparent_60%)]"></div>
        
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
        >
            Publication & Guidelines
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="relative mt-4 max-w-2xl text-base md:text-lg text-neutral-400"
        >
            Share your research with the global community through our prestigious publishing partner.
        </motion.p>
      </div>

      {/* --- Partner & Process Section --- */}
      <div className="py-16 px-4 sm:px-6 md:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Publishing Partner Card */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="p-8 bg-neutral-900/50 border border-white/10 rounded-2xl text-center"
          >
            <h2 className="text-sm font-semibold text-neutral-400 tracking-widest uppercase mb-6">
              Publishing Partner
            </h2>
            <img src={SpringerLogo} alt="Springer Logo" className="h-16 mx-auto mb-4 " />
            <p className="text-neutral-300">
                Enhancing scientific discovery through a trusted and respected global publisher.
            </p>
          </motion.div>
          
          {/* Process Steps */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            transition={{ staggerChildren: 0.15 }}
            className="space-y-6"
          >
            {processSteps.map((step) => (
              <motion.div
                key={step.title}
                variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 }
                }}
                className="flex items-start gap-4"
              >
                <div className="flex-shrink-0 text-2xl text-rose-400 bg-rose-900/20 p-3 rounded-lg">
                  {step.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-white">{step.title}</h3>
                  <p className="text-neutral-400 text-sm mt-1">{step.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* --- Submission Guidelines "Coming Soon" --- */}
      <div className="py-24 px-4 sm:px-6 md:px-8">
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center p-12 bg-indigo-900/20 border border-indigo-500/30 rounded-2xl"
        >
          <FiClock className="mx-auto text-5xl text-indigo-400 mb-6" />
          <h2 className="text-3xl font-bold text-white mb-3">
            Submission Guidelines
          </h2>
          <p className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-neutral-400 animate-pulse">
            Coming Soon!
          </p>
          <p className="text-indigo-200/70 mt-4">
            Detailed instructions for manuscript preparation and submission will be available shortly. Please check back soon.
          </p>
        </motion.div>
      </div>
    </div>
  );
}