import React, { useEffect, useRef, useState, memo, useCallback } from "react";
import type { FC } from "react";
// CORRECTED: Switched to <a> for in-page links instead of react-router's Link
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";
import { ArrowRight, FileText, UserPlus } from "lucide-react"; // Import icons
// --- ICON IMPORTS ---
// Using lucide-react for general icons
import { Menu, X, ArrowUp,   MapPin, ExternalLink,Calendar } from "lucide-react";
// Using react-icons for specific themed icons
import {
  FiMail,
  FiPhone,
  FiGlobe,
  FiClock,
  FiFileText,
  FiEdit3,
  FiCheckCircle,


  FiArrowRight
  
} from "react-icons/fi";
import { Link } from "react-router-dom";

// --- ASSET IMPORTS ---
// For larger projects, consider creating an index.ts in the IMAGES folder
// to export all images from a single file for cleaner imports.

import uttyler from "../assets/IMAGES/uttyler.jpg";
import acmMeerut from "../assets/IMAGES/ACM merrut.png"
import ictimage from "../assets/IMAGES/ICT-IMAGES.png";
import serb from "../assets/IMAGES/SERB-500x500-removebg-preview.png"
import soit from "../assets/IMAGES/SOIT.jpg"
import SJU from "../assets/IMAGES/SJU.png"
import Marquee from "react-fast-marquee";

// --- TYPE DEFINITIONS ---
interface NavItem { name: string; to: string; }
// interface Academic { name: string; title: string; image: string; }
// interface MarqueeProps { items: Academic[]; direction?: 'left' | 'right'; }


// IMPROVEMENT: Moved Marquee component out of FeaturedSpeakers to prevent re-declaration on renders.
// const Marquee: FC<MarqueeProps> = ({ items, direction = 'left' }) => (
//     <motion.div 
//         className="flex gap-8 py-8"
//         animate={{ x: direction === 'left' ? '-100%' : '0%' }}
//         transition={{ 
//             x: { 
//                 repeat: Infinity, 
//                 duration: 40, 
//                 ease: "linear" 
//             } 
//         }}
//         initial={{ x: direction === 'left' ? '0%' : '-100%' }}
//     >
//         {[...items, ...items].map((item, index) => (
//             <motion.div 
//                 key={`${item.name}-${index}`}
//                 whileHover={{ scale: 1.05, y: -8 }}
//                 className="flex-shrink-0 flex flex-col items-center text-center w-56 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl"
//             >
//                 <div className="relative mb-4">
//                     <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
//                         <img 
//                             src={item.image} 
//                             alt={item.name} 
//                             className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
//                             loading="lazy" 
//                         />
//                     </div>
//                     <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-electric-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
//                         <Star className="w-3 h-3 text-white" />
//                     </div>
//                 </div>
//                 <p className="font-bold text-white text-lg mb-2 leading-tight">{item.name}</p>
//                 <p className="text-white/80 text-sm leading-relaxed">{item.title}</p>
//             </motion.div>
//         ))}
//     </motion.div>
// );

const EmergingTechIcon = () => (
  <div className="p-3 bg-gradient-to-br from-emerald-500 to-violet-600 rounded-2xl">
    {/* We use the raw SVG here to ensure it matches the size/style of the others exactly */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
      <polyline points="23 6 13.5 15.5 8.5 10.5 1 18"></polyline>
      <polyline points="17 6 23 6 23 12"></polyline>
    </svg>
  </div>
);

// --- CUSTOM SVG ICONS ---
// These are custom components for visually distinct icons.
const BrainCircuit = () => (
  <div className="p-3 bg-gradient-to-br from-electric-500 to-violet-600 rounded-2xl">
    {/* FIXED: Added text-white to make the SVG visible */}
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="M12 5a3 3 0 1 0-5.993.142"/><path d="M18 5a3 3 0 1 0-5.993.142"/><path d="M12 19a3 3 0 1 0 5.993-.142"/><path d="M6 19a3 3 0 1 0 5.993-.142"/><path d="M12 12a3 3 0 1 0-5.993.142"/><path d="M18 12a3 3 0 1 0-5.993.142"/>
    </svg>
  </div>
);

const ChartBar = () => (
  <div className="p-3 bg-gradient-to-br from-emerald-500 to-electric-600 rounded-2xl">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="M3 3v18h18"/><path d="M7 12v4h4v-4Z"/><path d="M12 8v8h4V8Z"/><path d="M17 4v12h4V4Z"/>
    </svg>
  </div>
);

const ShieldCheck = () => (
  <div className="p-3 bg-gradient-to-br from-amber-500 to-emerald-600 rounded-2xl">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/>
    </svg>
  </div>
);

const CloudData = () => (
  <div className="p-3 bg-gradient-to-br from-violet-500 to-electric-600 rounded-2xl">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="M16 16.5V22"/><path d="M20 14.5V22"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M4.6 11.2A5.5 5.5 0 0 1 15 8.6V8a4 4 0 0 0-8 0c0 .9.3 1.8.8 2.5"/>
    </svg>
  </div>
);

const Sparkles = () => (
  <div className="p-3 bg-gradient-to-br from-amber-400 to-amber-600 rounded-2xl">
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-white">
      <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    </svg>
  </div>
);


// --- DATA & CONSTANTS ---
const navItems: NavItem[] = [
    { name: "HOME", to: "./" },

  { name: "ABOUT", to: "#about" },
  { name: "CALL FOR PAPERS", to: "#call-for-papers" },
  { name: "PUBLICATION", to: "#submission" },
  { name: "COMMITTEES", to: "#committees" },
  { name: "CONTACT", to: "#contact" },
  {name:"MICROSOFT CMT",to:"https://cmt3.research.microsoft.com/ICRAC2026"}
];
const researchAreas = [
  {
    icon: BrainCircuit,
    title: "Machine Learning and Deep Learning",
    description: "Topics include neural networks, model optimization, pattern recognition and intelligent automation.",
    color: "from-electric-500 to-violet-600"
  },
  {
    icon: ChartBar,
    title: "Artificial Intelligence & Data Science",
    description: "Covers AI applications, predictive analytics, data visualization and intelligent decision systems.",
    color: "from-emerald-500 to-electric-600"
  },
  {
    icon: ShieldCheck,
    title: "Networks and Cyber Security",
    description: "Focus on secure communication, IoT systems, cryptographic methods and resilient network design.",
    color: "from-amber-500 to-emerald-600"
  },
  {
    icon: CloudData,
    title: "Data Mining and Cloud Computing",
    description: "Includes scalable computing, cloud architectures, data warehousing and large scale analytics.",
    color: "from-violet-500 to-electric-600"
  },
  {
    icon: Sparkles,
    title: "Fuzzy Logic and Mathematical Modelling",
    description: "Centred on fuzzy systems, optimization models, simulation techniques and intelligent control.",
    color: "from-amber-400 to-amber-600"
  },
  {
    // UPDATED HERE
    icon: EmergingTechIcon, 
    title: "Emerging Technologies & Business Analytics",
    description: "Explores new age technologies, strategic analytics, digital transformation and smart solutions.",
    color: "from-emerald-500 to-violet-600"
  }
];



const venue = {
  name: "St  Joseph's University",
  address: "36, Lal Bagh Main Rd, Bengaluru, Karnataka 560027",
  mapLink: "https://www.openstreetmap.org/?mlat=12.9616&mlon=77.5978#map=17/12.9616/77.5978",
};



// --- REUSABLE UI COMPONENTS ---
const SectionHeader: FC<{ title: string; subtitle: string; className?: string }> = memo(({ title, subtitle, className }) => (
  <div className={`text-center mb-20 ${className}`}>
    
    <motion.h2 
      className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-neutral-900 to-electric-700 bg-clip-text text-transparent mb-8"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      {title}
    </motion.h2>
    <motion.p 
      className="max-w-3xl mx-auto text-xl text-neutral-600 leading-relaxed"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1 }}
    >
      {subtitle}
    </motion.p>
  </div>
));

interface InfoCardProps {
  icon: FC;
  title: string;
  description: string;
  color: string;
}

const InfoCard: FC<InfoCardProps> = memo(({ icon: Icon, title, description, color }) => (
  <motion.div 
    className="group relative bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-2xl hover:shadow-3xl transition-all duration-700 hover:-translate-y-3"
    whileHover={{ scale: 1.02 }}
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
  >
    <div className="absolute inset-0 bg-gradient-to-br from-white to-neutral-50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    <div className="relative z-10">
      <div className="mb-6 transform group-hover:scale-110 transition-transform duration-500">
        <Icon />
      </div>
      <h3 className="text-2xl font-bold text-neutral-900 mb-4 group-hover:text-electric-700 transition-colors duration-300">{title}</h3>
      <p className="text-neutral-600 leading-relaxed text-lg">{description}</p>
    </div>
    <div className={`absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r ${color} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-full`} />
  </motion.div>
));

// const CountdownTimer: FC = memo(() => {
//     const calculateTimeLeft = useCallback(() => {
//         const difference = +new Date('2025-12-15T23:59:59') - +new Date();
//         if (difference <= 0) return {};
//         return {
//             days: Math.floor(difference / (1000 * 60 * 60 * 24)),
//             hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
//             minutes: Math.floor((difference / 1000 / 60) % 60),
//             seconds: Math.floor((difference / 1000) % 60)
//         };
//     }, []);
//     const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());
//     useEffect(() => {
//         const timer = setInterval(() => setTimeLeft(calculateTimeLeft()), 1000);
//         return () => clearInterval(timer);
//     }, [calculateTimeLeft]);
    
//     const timerComponents = Object.entries(timeLeft).map(([interval, value]) => (
//         <motion.div 
//           key={interval}
//           className="text-center"
//           whileHover={{ scale: 1.05 }}
//         >
//             <div className="bg-white/20 backdrop-blur-lg rounded-2xl p-6 border border-white/30 shadow-2xl">
//                 <span className="text-4xl md:text-5xl font-black text-white block mb-2">{String(value).padStart(2, '0')}</span>
//                 <span className="text-white/90 text-sm font-semibold uppercase tracking-widest">{interval}</span>
//             </div>
//         </motion.div>
//     ));
    
//     return (
//         <div className="flex justify-center items-center gap-6 md:gap-8">
//             {timerComponents.length ? timerComponents : 
//                 <div className="text-2xl font-bold text-white bg-white/20 backdrop-blur-lg rounded-2xl p-8 border border-white/30">
//                     The deadline has passed!
//                 </div>
//             }
//         </div>
//     );
// });

const ScrollToTop: FC = memo(() => {
    const [isVisible, setIsVisible] = useState(false);
    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };
    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-50 bg-gradient-to-br from-electric-500 to-violet-600 text-white p-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-300"
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                >
                    <ArrowUp size={24} />
                </motion.button>
            )}
        </AnimatePresence>
    );
});



// --- PAGE SECTIONS ---
const Navbar: FC<{ isOpen: boolean; onToggle: () => void; scrolled: boolean }> = memo(({ isOpen, onToggle, scrolled }) => (
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
            <span className="text-electric-600">ICRAC </span>
            <span className="text-electric-600">2026</span>
          </div>
        </motion.a>

        {/* Desktop Navigation */}
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

        {/* CTA Button */}
        <div className="hidden lg:flex">
          <motion.a 
            href="./#submission" // FIXED: Pointed to the correct submission section
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-electric-500 to-violet-600 text-white shadow-lg hover:shadow-xl' 
                : 'bg-white text-neutral-900 shadow-2xl hover:bg-neutral-100'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMISSION GUIDELINES
          </motion.a>
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

      {/* Mobile Navigation */}
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
              <div className="px-6 py-4 border-t border-neutral-200/50 mt-2">
                <motion.a
                  href="#submission" // FIXED: Pointed to the correct submission section
                  className="block w-full bg-gradient-to-r from-electric-500 to-violet-600 text-white text-center py-4 rounded-2xl font-bold hover:shadow-xl transition-all"
                  onClick={onToggle}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  SUBMIT PAPER
                </motion.a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.nav>
));





// --- IMPORT YOUR IMAGES HERE ---
// import uttyler from "../assets/IMAGES/uttyler.jpg";
// import acmMeerut from "../assets/IMAGES/ACM merrut.png";
// import partner3Image from "../assets/IMAGES/partner3.png"; // <--- Add import
// import partner4Image from "../assets/IMAGES/partner4.png"; // <--- Add import

const Hero: FC = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, 100]);
    const opacity = useTransform(scrollYProgress, [0, 0.5], [1, 0]);

    return (
        <motion.section 
            ref={containerRef}
            id="home" 
            className="relative h-[100dvh] w-full flex flex-col items-center justify-center overflow-hidden bg-neutral-950 selection:bg-electric-500/30"
            style={{ opacity }}
        >
            {/* --- BACKGROUND ELEMENTS --- */}
            <div className="absolute inset-0 bg-gradient-to-b from-neutral-950 via-neutral-900 to-violet-950/50"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
            <motion.div 
                animate={{ opacity: [0.3, 0.5, 0.3], scale: [1, 1.1, 1] }}
                transition={{ duration: 8, repeat: Infinity }}
                className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] bg-violet-600/20 rounded-[100%] blur-[120px] pointer-events-none"
            />

            {/* --- MAIN CONTENT CONTAINER --- */}
            <motion.div 
                style={{ y }}
                className="relative z-10 w-full max-w-7xl mx-auto px-4 flex flex-col items-center text-center h-full justify-center pt-12 sm:pt-0"
            >
                
                {/* 1. Badge */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                    className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md mb-4"
                >
                    <span className="relative flex h-2 w-2">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-electric-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-electric-500"></span>
                    </span>
                    <span className="text-[10px] sm:text-xs font-medium text-white tracking-wider uppercase">
                        2nd International Conference
                    </span>
                </motion.div>

                {/* 2. Main Title */}
                <motion.h1 
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="text-6xl sm:text-8xl font-black tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-white via-white to-white/40 mb-2 leading-none"
                >
                    ICRAC 2026
                </motion.h1>

                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-lg sm:text-2xl md:text-3xl font-light text-neutral-300 max-w-3xl mx-auto mb-6 sm:mb-8"
                >
                    Recent Trends in <span className="text-electric-300 font-semibold">Advanced Computing</span>
                </motion.h2>
                
                {/* 3. Date & Venue Card */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.3 }}
                    className="flex flex-wrap justify-center gap-3 sm:gap-6 text-xs sm:text-sm text-neutral-300 bg-white/5 border border-white/10 px-6 py-3 rounded-2xl backdrop-blur-sm mb-6"
                >
                    <div className="flex items-center gap-2">
                        <Calendar className="text-electric-400" size={16} />
                        <span className="font-medium">Feb 20-21, 2026</span>
                    </div>
                    <div className="w-px h-5 bg-white/10 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <MapPin className="text-electric-400" size={16} />
                        <span>St. Joseph’s University</span>
                    </div>
                    <div className="w-px h-5 bg-white/10 hidden sm:block"></div>
                    <div className="flex items-center gap-2">
                        <Globe className="text-electric-400" size={16} />
                        <span className="bg-electric-500/20 text-electric-200 px-1.5 py-0.5 rounded text-[10px] font-bold uppercase">Hybrid</span>
                    </div>
                </motion.div>

                {/* 4. PARTNERS SECTION (Updated: 4 Logos in Row) */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.4 }}
                    className="mb-8 w-full max-w-6xl" // INCREASED max-width to fit 4 items
                >
                    <p className="text-[10px] font-bold text-neutral-500 uppercase tracking-[0.2em] mb-4">
                        In Association With
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                        
                        {/* --- Partner 1 --- */}
                        <div className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 bg-neutral-800/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-electric-500/30 transition-colors p-4">
                                {/* Replace with your 4th image variable */}
                                <img src={serb} alt="Partner 4" className="h-16 sm:h-24 w-auto object-contain" />
                                {/* <span className="text-white/20 font-bold">Logo 4</span> */}
                            </div>
                            <span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">SERB</span>
                        </div>


                        <div className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 bg-neutral-800/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-electric-500/30 transition-colors p-4">
                                {/* Use your actual image variable */}
                                <img src={uttyler} alt="UT Tyler" className="h-16 sm:h-24 w-auto object-contain" /> 
                            </div>
                            <span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">UT Tyler, USA</span>
                        </div>

                        {/* Divider (Hidden on mobile) */}
                        <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                        {/* --- Partner 2 --- */}
                        <div className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 bg-neutral-800/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-electric-500/30 transition-colors p-4">
                                {/* Use your actual image variable */}
                                <img src={acmMeerut} alt="ACM" className="h-16 sm:h-24 w-auto object-contain" />
                            </div>
                            <span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">ACM Meerut</span>
                        </div>

                         {/* Divider (Hidden on mobile) */}
                         <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                        {/* --- Partner 3 (NEW) --- */}
                        <div className="flex flex-col items-center gap-3 group cursor-pointer">
                            <div className="h-24 w-24 sm:h-32 sm:w-32 bg-neutral-800/50 rounded-2xl flex items-center justify-center border border-white/5 group-hover:border-electric-500/30 transition-colors p-4">
                                {/* Replace with your 3rd image variable */}
                                <img src={ictimage} alt="Partner 3" className="h-16 sm:h-24 w-auto object-contain" />
                                {/* <span className="text-white/20 font-bold">Logo 3</span>  */}
                            </div>
                            <span className="text-xs text-neutral-400 group-hover:text-white transition-colors font-medium">ICT Academy</span>
                        </div>

                         {/* Divider (Hidden on mobile) */}
                         <div className="h-16 w-px bg-white/10 hidden md:block"></div>

                        {/* --- Partner 4 (NEW) --- */}
                        

                    </div>
                </motion.div>

                {/* 5. CALL TO ACTIONS */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.5 }}
                    className="flex flex-col sm:flex-row gap-4 w-full justify-center"
                >
                    <motion.a
                        href="./registration"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-neutral-950 rounded-xl font-bold text-base sm:text-lg shadow-[0_0_30px_-10px_rgba(255,255,255,0.3)] hover:shadow-[0_0_40px_-5px_rgba(255,255,255,0.5)] transition-all"
                    >
                        <FileText size={18} className="group-hover:-rotate-12 transition-transform duration-300" />
                        Register Now
                    </motion.a>

                    <motion.a
                        href="./submission"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/20 text-white rounded-xl font-bold text-base sm:text-lg hover:bg-white/10 transition-all backdrop-blur-sm"
                    >
                        <UserPlus size={18} />
                        Submit Paper
                        <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                    </motion.a>
                </motion.div>

            </motion.div>
        </motion.section>
    );
});
// Assuming 'motion' is from 'framer-motion' and icons (Star, ChevronRight, FiAward, FiUsers) are imported
// from a library like 'lucide-react' or 'react-icons'

// Placeholder components/icons for reference

const Star = (props: React.SVGProps<SVGSVGElement>) => (
  <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"/>
  </svg>
);
const ChevronRight = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>;
// const FiAward = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M15.4 12.97a3 3 0 010 4.06c-.88.88-2.3.88-3.18 0l-1.42-1.42a3 3 0 010-4.06c.88-.88 2.3-.88 3.18 0L14 11.55"/><path d="M8.6 11.03a3 3 0 000-4.06c.88-.88 2.3-.88 3.18 0l1.42 1.42a3 3 0 000 4.06c-.88.88-2.3.88-3.18 0L10 12.45"/></svg>;
const FiUsers = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
// End Placeholder components/icons

// Updated AboutUs component with one full row layout
// Please paste your existing imports above
const AboutUs: FC = memo(() => {
  const [activeSection, setActiveSection] = useState(0);

const sections = [
  {
    id: 0,
    title: "ICRAC 2026",
    iconType: "emoji",
    iconValue: "📘", // book icon
    color: "from-electric-500 to-violet-600",
    bgColor: "bg-gradient-to-br from-electric-50 to-violet-100",
    content:
      "The 2nd International Conference on Recent Trends in Advanced Computing (ICRAC)-2026 will be organized by the School of Information Technology, St Joseph's University, Bengaluru, Karnataka, India, during February 20-21, 2026 (Hybrid Mode). ICRAC-2026 continues the legacy of a premier global platform for researchers and practitioners to share groundbreaking research findings, innovative ideas, and practical experiences in the fields of Data Science and Computer Science fostering collaboration, advancing knowledge, and shaping the future of technology-driven solutions worldwide. The conference proposes publishing research papers on advanced engineering, science and technology techniques, experimental analysis and theoretical reviews. This conference will serve as a platform for academicians, industrialists, and students to learn more about the latest technologies in data science. Selected papers at the conference will be considered for Scopus indexed conference proceedings."
  },
  {
    id: 1,
    title: "St Joseph's University",
    iconType: "image",
    iconValue: SJU, // SJU logo
    color: "from-emerald-500 to-electric-600",
    bgColor: "bg-gradient-to-br from-emerald-50 to-electric-100",
    content:
      "St Joseph's University (SJU) is a Jesuit University at the heart of Bengaluru established in 1882 by Paris Foreign Fathers and handed over to the Jesuit Order in 1937. It was affiliated with the University of Madras and later with Mysore and Bangalore Universities. In 1986, it became the first affiliated college in Karnataka to offer postgraduate courses. In 1988, it became the first in Karnataka to receive a research center and in 2005 received academic autonomy. In 2021 the university bill was placed in the Karnataka Legislative Council and it was inaugurated as India's first Public Private Partnership University on 27 September 2022.",
    links: [
      { text: "Visit St. Joseph's University", url: "https://www.sju.edu.in/" }
    ]
  },
  {
    id: 2,
    title: "School of Information Technology",
    iconType: "image",
    iconValue: soit, // SOIT logo
    color: "from-violet-500 to-electric-600",
    bgColor: "bg-gradient-to-br from-violet-50 to-electric-100",
    content:
      "The School of IT consists of the Department of Computer Science and the Department of Advanced Computing. SIT offers programs in data analytics, computer science, computer applications and domain specific applications. The school focuses on holistic learning and supports more than 2000 students guided by 40 faculty members along with visiting researchers and industry professionals. Students solve real world problems and gain research experience. Its placement record remains exceptional.",
    links: [
      { text: "School of Information Technology", url: "https://www.sju.edu.in/academics/st-joseph-university/school--of-information-technology" },
      { text: "Department of Advanced Computing", url: "https://www.sju.edu.in/departments/st-joseph-university/school--of-information-technology/advanced-computing" },
      { text: "Department of Computer Science", url: "https://www.sju.edu.in/departments/st-joseph-university/school--of-information-technology/computer-science-and-computer-application" }
    ]
  }
];



  return (
    <section id="about"  className="relative min-h-screen bg-gradient-to-br from-white via-neutral-50 to-electric-50 py-16 md:py-32 overflow-hidden">
      <div  className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div className="text-center mb-12 md:mb-20" initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
         
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-neutral-900 to-electric-700 bg-clip-text text-transparent mb-4 md:mb-8">
            About Us
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-neutral-600 leading-relaxed px-2">
            Discover the institutions and vision behind Asia's premier computing conference
          </p>
        </motion.div>

        {/* Full Row Tabs */}
        <motion.div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-10" initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`w-full px-6 py-5 rounded-xl font-bold text-lg transition-all duration-500 text-center ${
                activeSection === index
                  ? `bg-gradient-to-r ${section.color} text-white shadow-xl scale-[1.02]`
                  : "bg-white text-neutral-600 border border-neutral-200 hover:text-electric-600 hover:border-electric-300 hover:shadow-lg"
              }`}
              whileHover={{ scale: 1.02 }}
            >
<span className="mr-2 flex items-center justify-center">
  {section.iconType === "emoji" ? (
    <span className="text-xl">{section.iconValue}</span>
  ) : (
    <img
      src={section.iconValue}
      alt={section.title}
      className="w-6 h-6 object-contain"
    />
  )}
</span>
              {section.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Content */}
        <motion.div key={activeSection} initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
          <div className={`rounded-2xl p-8 border border-neutral-200 shadow-xl ${sections[activeSection].bgColor}`}>
            <h3 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4 flex items-center gap-3">
<div
  className={`w-14 h-14 rounded-xl bg-gradient-to-r ${sections[activeSection].color} flex items-center justify-center`}
>
  {sections[activeSection].iconType === "emoji" ? (
    <span className="text-2xl text-white">
      {sections[activeSection].iconValue}
    </span>
  ) : (
    <img
      src={sections[activeSection].iconValue}
      alt={sections[activeSection].title}
      className="w-9 h-9 object-contain"
    />
  )}
</div>
              {sections[activeSection].title}
            </h3>

            <div className="text-neutral-700 text-lg leading-relaxed space-y-4">
              {sections[activeSection].content.split('. ').map((sentence, i, arr) => (
                <p key={i} className="text-justify">{sentence}{i < arr.length - 1 ? '.' : ''}</p>
              ))}
              {sections[activeSection].links && (
                <div className="mt-6 pt-6 border-t border-neutral-300/50">
                  <p className="text-sm font-semibold text-neutral-600 mb-3">Learn More:</p>
                  <div className="flex flex-wrap gap-3">
                    {sections[activeSection].links.map((link, idx) => (
                      <a
                        key={idx}
                        href={link.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-2 px-4 py-2 bg-white/80 hover:bg-white border border-neutral-300 hover:border-electric-500 rounded-lg text-sm font-medium text-neutral-700 hover:text-electric-600 transition-all duration-200 shadow-sm hover:shadow-md"
                      >
                        {link.text}
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
});




const CallForPapers: FC = memo(() => {
  // Extracted data from the uploaded image
  const importantDates = [
    { event: "Extended Date For Paper Submission", date: "30th January 2026" },
    { event: "Notifications of paper acceptance", date: "25th January 2026" },
    { event: "Last date of registration", date: "26th January 2026" },
    { event: "Last date of camera ready submission", date: "8th February 2026" },
    { event: "Conference Date", date: "20th – 21st February 2026" },
  ];

  return (
    <section id="call-for-papers" className="relative bg-gradient-to-br from-neutral-50 via-white to-electric-50 py-32 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-electric-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeader 
          title="Call For Papers" 
          subtitle="Join the forefront of technological innovation. ICRAC 2026 invites groundbreaking research that will shape the future of computing and digital transformation." 
        />

        {/* --- SECTION 1: IMPORTANT DATES (Added Here as requested) --- */}
        <div className="max-w-4xl mx-auto mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-white rounded-3xl shadow-xl border border-neutral-100 overflow-hidden"
          >
            {/* Table Header */}
            <div className="grid grid-cols-1 md:grid-cols-2 bg-gradient-to-r from-electric-600 to-violet-600 p-6">
              <h3 className="text-xl font-bold text-white tracking-wide uppercase">Event</h3>
              <h3 className="hidden md:block text-xl font-bold text-white tracking-wide uppercase text-right">Date</h3>
            </div>

            {/* Table Body */}
            <div className="divide-y divide-neutral-100">
              {importantDates.map((item, index) => (
                <motion.div 
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="grid grid-cols-1 md:grid-cols-2 p-6 hover:bg-neutral-50 transition-colors duration-300 group"
                >
                  <div className="flex items-center">
                    <span className="font-semibold text-neutral-700 text-lg group-hover:text-electric-600 transition-colors">
                      {item.event}
                    </span>
                  </div>
                  <div className="flex items-center md:justify-end mt-2 md:mt-0">
                    <span className="font-bold text-lg text-violet-600 bg-violet-50 px-4 py-1 rounded-full border border-violet-100">
                      {item.date}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 2: RESEARCH AREAS (Moved below table) --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {researchAreas.map((area, index) => (
            <motion.div
              key={area.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <InfoCard {...area} />
            </motion.div>
          ))}
        </div>
        
        {/* --- SECTION 3: FOOTER ELEMENTS (CMT + Button) --- */}
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/* Microsoft CMT Acknowledgement */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto mb-16 bg-sky-50 border border-sky-200 rounded-3xl p-6 shadow-sm relative overflow-hidden text-left"
          >
             {/* Decorative Azure element */}
            <div className="absolute top-0 right-0 w-24 h-24 bg-sky-200/40 rounded-full blur-xl translate-x-10 -translate-y-10"></div>
            
            <div className="flex flex-col md:flex-row gap-5 items-start md:items-center relative z-10">
                <div className="p-3 bg-white rounded-xl shadow-sm shrink-0">
                   <FiCheckCircle className="w-6 h-6 text-sky-600" />
                </div>
                <div>
                    <h3 className="text-lg font-bold text-sky-900 mb-1">Microsoft CMT Acknowledgement</h3>
                    <p className="text-sky-800/90 text-sm leading-relaxed">
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                </div>
            </div>
          </motion.div>

          {/* Submit Button */}
          <motion.a 
            href="./submission" 
            className="group inline-flex items-center bg-gradient-to-r from-electric-500 to-violet-600 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Submit Paper
            <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>

        </motion.div>
      </div>
    </section>
  );
});

import {   Globe,  User, Award } from 'lucide-react';

// --- 1. DATA STRUCTURES (Text Only) ---

const internationalCommittee = [
  { name: "Dr. Sagnik Dakshit", role: "University of Texas at Tyler, USA" },
  { name: "Dr. Shameer Khader", role: "Sanofi, Cambridge MA, USA" },
  { name: "Dr. Xiao-Zhi Gao", role: "University of Eastern Finland" },
  { name: "Dr. Rajasekaran S", role: "University of Tech & Applied Sciences, Oman" },
  { name: "Dr. Christopher Vas", role: "South East Corridor Councils Alliance, Australia" },
  { name: "Dr. Mary Immaculate Sheela", role: "Pentecost University, Ghana" },
  { name: "Dr. N. Pratheesh", role: "Eastern University, Sri Lanka" },
  { name: "Dr. Dileep Kumar M", role: "Hensard University, Nigeria" },
  { name: "Dr. Karthikeyan K", role: "AMBO University, Ethiopia" },
  { name: "Dr. Sultan Senan Mahde", role: "Albaydha University, Yemen" },
  { name: "Dr. Shadi Ibrahim Khalaf", role: "Ministry of Education, Palestine" }
];

const nationalCommittee = [
  { name: "Dr. Srinivas Bhogle", role: "Scientist, CSIR-4PI, Delhi" },
  { name: "Dr. Deepak D’Souza", role: "IISc, Bengaluru" },
  { name: "Dr. Bibhas Ghoshal", role: "IIIT Allahabad, Prayagraj" },
  { name: "Dr. Narahari", role: "IISc, Bengaluru" },
  { name: "Dr. Prathosh A. P", role: "IIT Delhi" },
  { name: "Dr. Hanumanthappa H", role: "Bangalore University" },
  { name: "Dr. Sharmila Kumari M", role: "PA Engineering College, Mangalore" },
  { name: "Dr. Muralidhara B L", role: "Bangalore University" },
  { name: "Dr. Somashekara M T", role: "Bangalore University" },
  { name: "Dr. Tuhin Utsab Paul", role: "St. Xavier’s University, Kolkata" },
  { name: "Dr. Piyush Kumar Pareek", role: "NMIT, Bengaluru" },
  { name: "Dr. T. Bhaskar Reddy", role: "S. K. University, Anantapur" }
];

// --- 2. TEXT CARD COMPONENT ---
const CommitteeCard = ({ name, role, variant = "neutral" }: { name: string, role: string, variant?: "neutral" | "electric" }) => (
  <div className={`
    w-80 mx-4 p-6 rounded-2xl border backdrop-blur-md transition-all duration-300 group
    ${variant === 'electric' 
      ? 'bg-electric-900/20 border-electric-500/30 hover:bg-electric-900/40 hover:border-electric-400' 
      : 'bg-white/5 border-white/10 hover:bg-white/10 hover:border-white/20'
    }
  `}>
    <div className="flex items-start gap-4">
      <div className={`
        mt-1 p-2 rounded-lg shrink-0
        ${variant === 'electric' ? 'bg-electric-500/20 text-electric-300' : 'bg-violet-500/20 text-violet-300'}
      `}>
        <User className="w-5 h-5" />
      </div>
      <div>
        <h4 className="text-lg font-bold text-white mb-1 group-hover:text-electric-300 transition-colors">
          {name}
        </h4>
        <div className="flex items-start gap-1.5 text-sm text-neutral-400">
          <MapPin className="w-3.5 h-3.5 mt-0.5 shrink-0 opacity-70" />
          <span className="leading-snug">{role}</span>
        </div>
      </div>
    </div>
  </div>
);

// --- 3. MAIN COMPONENT ---

const FeaturedSpeakers: FC = memo(() => {
  return (
    <section id="committees" className="relative w-full bg-neutral-900 py-24 sm:py-32 overflow-hidden">
        {/* Background Gradients */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-600/10 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
        </div>

      <div className="relative z-10">
        
        {/* Header */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 text-center">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
            >
                <div className="inline-flex items-center gap-2 text-electric-400 font-bold text-sm uppercase tracking-wider mb-4">
                    <Award className="w-4 h-4" />
                    <span>Advisory Board</span>
                </div>
                <h2 className="text-4xl md:text-6xl font-black text-white mb-6">
                    Distinguished <span className="text-transparent bg-clip-text bg-white">Committees</span>
                </h2>
                <p className="max-w-2xl mx-auto text-neutral-400 text-lg">
                    Guided by world-renowned academics and pioneering researchers from top institutions across the globe.
                </p>
            </motion.div>
        </div>

        {/* --- INTERNATIONAL TRACK (Left Scroll) --- */}
        <div className="mb-16">
            <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center gap-3">
                <div className="p-2 bg-electric-500/10 rounded-lg">
                    <Globe className="w-6 h-6 text-electric-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">International Advisory Committee</h3>
            </div>
            
            <Marquee gradient={true} gradientColor="rgb(23, 23, 23)" speed={40}>
                {internationalCommittee.map((member, index) => (
                    <CommitteeCard key={index} {...member} variant="electric" />
                ))}
            </Marquee>
        </div>

        {/* --- NATIONAL TRACK (Right Scroll) --- */}
        <div className="mb-16">
             <div className="max-w-7xl mx-auto px-4 mb-8 flex items-center gap-3 justify-end md:justify-start">
                <div className="p-2 bg-violet-500/10 rounded-lg">
                    <MapPin className="w-6 h-6 text-violet-400" />
                </div>
                <h3 className="text-2xl font-bold text-white">National Advisory Committee</h3>
            </div>

            <Marquee gradient={true} gradientColor="rgb(23, 23, 23)" speed={40} direction="right">
                {nationalCommittee.map((member, index) => (
                    <CommitteeCard key={index} {...member} variant="neutral" />
                ))}
            </Marquee>
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
            <motion.a 
                href="/committees"
                className="inline-flex items-center gap-2 text-neutral-400 hover:text-white transition-colors duration-300 font-semibold border-b border-transparent hover:border-electric-500 pb-1"
                whileHover={{ x: 5 }}
            >
                View Full Committee List
                <ChevronRight className="w-4 h-4" />
            </motion.a>
        </div>

      </div>
    </section>
  );
});

 // Keep your existing import

const Submission: FC = memo(() => {
  const [activeStep, setActiveStep] = useState(0);

const steps = [
  { 
    icon: FiFileText, 
    title: "Original Research", 
    description: "Papers must be original and not previously published.",
    color: "from-electric-500 to-blue-600"
  },
  { 
    icon: FiEdit3, 
    title: "IEEE Format", 
    description: (
      <span>
        Manuscripts must use the IEEE LaTeX class: 
        {/* <code className="bg-neutral-100 px-1 mx-1 rounded text-electric-600 font-mono text-sm">
          {"\\documentclass[conference]{IEEEtran}"}
        </code>.  */}
        Get the template at <a href="https://www.overleaf.com/gallery/tagged/ieee-official" target="_blank" rel="noreferrer" className="text-electric-600 underline hover:text-electric-700">Overleaf IEEE Gallery</a>.
      </span>
    ),
    color: "from-emerald-500 to-green-600"
  },
  { 
    icon: FiUsers, 
    title: "Rigorous Peer-Review", 
    description: "Strict peer-review process by domain experts.",
    color: "from-amber-500 to-orange-600"
  },
];

  return (
    <section id="submission" className="relative bg-gradient-to-br from-white via-neutral-50 to-electric-50 py-24 overflow-hidden">
      {/* --- Original Animated Background Elements --- */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/4 left-1/4 w-6 h-6 bg-electric-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 15, 0], x: [0, -5, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-1/3 right-1/3 w-4 h-4 bg-violet-400/30 rounded-full"
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* --- Header --- */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-4 text-electric-600 font-semibold text-sm uppercase tracking-widest mb-6">
            <Star className="w-4 h-4" />
            PUBLICATION & SUBMISSION
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-neutral-900 to-electric-700 bg-clip-text text-transparent mb-6">
            Submission Process
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-neutral-600 leading-relaxed">
            Selected papers at the conference will be considered for Scopus indexed conference proceedings.
          </p>
        </motion.div>

        {/* --- Microsoft Acknowledgement --- */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.98 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-full bg-sky-50 border border-sky-200 rounded-3xl p-8 mb-12 shadow-sm relative overflow-hidden"
        >
            <div className="absolute top-0 right-0 w-32 h-32 bg-sky-200/30 rounded-full blur-2xl translate-x-10 -translate-y-10"></div>
            
            <div className="flex flex-col md:flex-row gap-6 items-start md:items-center relative z-10">
                <div className="p-4 bg-white rounded-2xl shadow-sm shrink-0">
                    <FiCheckCircle className="w-8 h-8 text-sky-600" />
                </div>
                <div>
                    <h3 className="text-xl font-bold text-sky-900 mb-2">Microsoft CMT Acknowledgement</h3>
                    <p className="text-sky-800/90 text-base leading-relaxed">
                        The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
                    </p>
                </div>
            </div>
        </motion.div>

        {/* --- Main Content Grid --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-neutral-900 px-2">Steps to Publish</h3>
            
            <div className="flex gap-3 overflow-x-auto pb-2 no-scrollbar">
              {steps.map((step, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`whitespace-nowrap px-6 py-3 rounded-xl text-sm font-bold transition-all duration-300 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-lg`
                      : 'bg-white text-neutral-600 border border-neutral-200 hover:border-electric-300'
                  }`}
                >
                  Step {index + 1}
                </button>
              ))}
            </div>

            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200 shadow-xl min-h-[240px] flex flex-col justify-center"
            >
              <div className="flex items-center gap-5 mb-5">
                <div className={`w-14 h-14 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white text-2xl shadow-md`}>
                  {React.createElement(steps[activeStep].icon)}
                </div>
                <h3 className="text-2xl font-black text-neutral-900">{steps[activeStep].title}</h3>
              </div>
              <div className="text-lg text-neutral-600 leading-relaxed mb-6">
                {steps[activeStep].description}
              </div>
              
              <div className="w-full bg-neutral-100 rounded-full h-2">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                  className={`h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`}
                />
              </div>
            </motion.div>
          </div>

          <div className="space-y-6 lg:pt-14">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
               <div className="bg-white rounded-3xl p-6 border border-neutral-200 shadow-lg flex flex-col items-center justify-center text-center hover:scale-[1.02] transition-transform">
                  <span className="px-3 py-1 bg-electric-50 text-electric-700 rounded-lg text-xs font-bold uppercase tracking-wide">
                    Scopus Indexed
                  </span>
               </div>

               <div className="bg-gradient-to-br from-electric-600 to-violet-700 rounded-3xl p-6 text-white shadow-lg hover:scale-[1.02] transition-transform">
                  <div className="flex items-center gap-2 mb-4 opacity-90">
                    <FiClock className="w-5 h-5" />
                    <span className="font-bold text-sm uppercase tracking-wider">Deadlines</span>
                  </div>
                  <div className="space-y-3">
                     <div className="flex justify-between items-center text-sm border-b border-white/20 pb-2">
                       <span>Paper Submission</span>
                       <span className="font-bold text-lg">Jan 15</span>
                     </div>
                     <div className="flex justify-between items-center text-sm pt-1">
                       <span>Conference Dates</span>
                       <span className="font-bold text-lg">Feb 20 & 21</span>
                     </div>
                  </div>
               </div>
            </div>

            <Link to="/submission" className="block group">
              <motion.div 
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="relative bg-neutral-900 rounded-3xl p-1 shadow-2xl overflow-hidden"
              >
                 <div className="relative bg-neutral-900 rounded-[22px] px-8 py-6 flex items-center justify-between z-10">
                    <div>
                        <h4 className="text-white font-black text-xl mb-1 group-hover:text-electric-300 transition-colors">Submit Paper</h4>
                        <p className="text-neutral-400 text-sm">View guidelines & templates</p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-electric-500 group-hover:text-white text-white transition-all duration-300">
                        <FiArrowRight className="w-6 h-6" />
                    </div>
                 </div>
                 <div className="absolute inset-0 bg-gradient-to-r from-electric-600 to-violet-600 opacity-0 group-hover:opacity-20 transition-opacity duration-500" />
              </motion.div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
});



const Contact: FC = memo(() => {
  const [activeContact, setActiveContact] = useState(0);
  const [isMapHovered, setIsMapHovered] = useState(false);
  const [showContactForm, setShowContactForm] = useState(false);

  const contactMethods = [
    { 
      icon: FiMail, 
      title: "General Inquiries", 
      contact: "icrac2026@office.sju.edu.in", 
      href: "mailto:icrac2026@office.sju.edu.in",
      description: "For general questions about the conference, registration, and participation",
      color: "from-electric-500 to-blue-600"
    },
    { 
      icon: FiPhone, 
      title: "Phone Support", 
      contact: "Dr. Asha K: +91 9207483215  +91 9774335503", 
      href: "tel:+919207483215",
      description: "Direct contact with organizing committee members for urgent matters",
      color: "from-emerald-500 to-green-600"
    },
    { 
      icon: FiGlobe, 
      title: "Website & Social", 
      contact: "icrac2026.com", 
      href: "#",
      description: "Visit our website and follow us on social media for updates",
      color: "from-violet-500 to-purple-600"
    }
  ];

  const quickLinks = [
    { name: "Call for Papers", href: "#call-for-papers" },
    { name: "Submission Guidelines", href: "#submission" },
    { name: "Committees", href: "#committees" },
    {name:"Microsoft CMT", href:"#"}
  ];

  return (
    <section id="contact" className="relative bg-gradient-to-br from-neutral-900 via-electric-900 to-violet-900 py-32 overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -15, 0], rotate: [0, 5, 0] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 left-20 w-4 h-4 bg-electric-400/30 rounded-full"
        />
        <motion.div
          animate={{ y: [0, 10, 0], rotate: [0, -3, 0] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-32 right-32 w-3 h-3 bg-violet-400/30 rounded-full"
        />
      </div>

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.02)_25%,rgba(255,255,255,0.02)_50%,transparent_50%,transparent_75%,rgba(255,255,255,0.02)_75%)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Enhanced Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <div className="inline-flex items-center gap-4 text-electric-400 font-semibold text-sm uppercase tracking-widest mb-6">
            <Star className="w-4 h-4" />
            GET IN TOUCH
            <Star className="w-4 h-4" />
          </div>
          <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white to-electric-300 bg-clip-text text-transparent mb-6">
            Contact Us
          </h2>
          <p className="max-w-3xl mx-auto text-xl text-neutral-300 leading-relaxed">
            Reach out to the ICRAC 2026 organizing committee for inquiries, support, or collaboration opportunities
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {/* Left Column - Contact Methods */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            {/* Contact Navigation */}
            <div className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10">
              <h3 className="font-black text-white text-xl mb-4">Contact Methods</h3>
              <div className="space-y-3">
                {contactMethods.map((method, index) => (
                  <motion.button
                    key={index}
                    onClick={() => setActiveContact(index)}
                    className={`w-full text-left p-4 rounded-2xl transition-all duration-500 ${
                      activeContact === index
                        ? `bg-gradient-to-r ${method.color} text-white shadow-lg`
                        : 'bg-white/5 text-neutral-300 hover:text-white hover:bg-white/10'
                    }`}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <div className="flex items-center gap-3">
                      <method.icon className={`w-5 h-5 ${activeContact === index ? 'text-white' : 'text-electric-400'}`} />
                      <span className="font-semibold text-sm">{method.title}</span>
                    </div>
                  </motion.button>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-6 border border-white/10"
            >
              <h3 className="font-black text-white text-xl mb-4">Quick Links</h3>
              <div className="space-y-3">
                {quickLinks.map((link, index) => (
                  <motion.a
                    key={index}
                    href={link.href}
                    className="flex items-center justify-between p-3 text-neutral-300 hover:text-white hover:bg-white/5 rounded-xl transition-all duration-300 group"
                    whileHover={{ x: 5 }}
                  >
                    <span className="font-medium text-sm">{link.name}</span>
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

   
          </motion.div>

          {/* Middle Column - Active Contact Details */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              key={activeContact}
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="bg-white/5 backdrop-blur-lg rounded-3xl p-8 border border-white/10 h-full"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${contactMethods[activeContact].color} flex items-center justify-center text-white text-2xl mb-6`}>
                {React.createElement(contactMethods[activeContact].icon)}
              </div>
              <h3 className="text-2xl font-black text-white mb-4">{contactMethods[activeContact].title}</h3>
              <p className="text-neutral-300 leading-relaxed mb-6">{contactMethods[activeContact].description}</p>
              
              
<div className="flex flex-wrap gap-4">

  <motion.a
                href={contactMethods[activeContact].href}
                className="inline-flex items-center bg-white/10 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Dr. Asha K (Convener) <br />
                +91 9207483215
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>

  {/* Dr. Sanjay Dutta */}
  <motion.a
    href="#" // Add link here (e.g., mailto: or profile link)
    className="inline-flex items-center bg-white/10 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Dr. Sanjay Dutta (Co-Convener) <br />
    +91 9774335503
    <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>

  {/* Dr. Mrinmoyee Bhattacharya */}
  <motion.a
    href="#" // Add link here
    className="inline-flex items-center bg-white/10 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
  >
    Dr. Mrinmoyee Bhattacharya (Co-Convener) <br />
    +91 99023 24482
    <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
  </motion.a>
</div>
              

              {/* Additional Info */}
              <div className="mt-8 pt-6 border-t border-white/10">
                <div className="flex items-center gap-2 text-sm text-neutral-400">
                  <FiClock className="w-4 h-4" />
                  <span>Response time: Within 24 hours</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Column - Venue Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-1"
          >
            <motion.div
              onHoverStart={() => setIsMapHovered(true)}
              onHoverEnd={() => setIsMapHovered(false)}
              className="bg-white/5 backdrop-blur-lg rounded-3xl overflow-hidden border border-white/10 hover:border-electric-400/50 transition-all duration-500 shadow-2xl h-full"
            >
              {/* Map Header */}
              <div className="p-6 border-b border-white/10">
                <div className="flex items-center gap-4">
                  <MapPin className="text-electric-400 text-2xl flex-shrink-0"/>
                  <div>
                    <h3 className="font-black text-white text-xl">{venue.name}</h3>
                    <p className="text-white/70 text-sm font-medium">{venue.address}</p>
                  </div>
                </div>
              </div>

              {/* Interactive Map */}
              <div className="relative h-80">
                <motion.a 
                  href={venue.mapLink} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="block w-full h-full relative group"
                  whileHover={{ scale: 1.02 }}
                >
                  <iframe 
                    title="OpenStreetMap Location" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy" 
                    src="https://www.openstreetmap.org/export/embed.html?bbox=77.5951,12.9599,77.6005,12.9633&amp;layer=mapnik&amp;marker=12.9616,77.5978"
                    className={`transition-all duration-500 ${isMapHovered ? 'brightness-110 saturate-150' : ''}`}
                  />
                  
                  {/* Map Overlay */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center p-4"
                    animate={isMapHovered ? { opacity: 1 } : { opacity: 0 }}
                  >
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl p-3 shadow-lg">
                      <p className="text-neutral-900 font-black text-sm flex items-center gap-2">
                        <ExternalLink className="w-4 h-4" />
                        View on OpenStreetMap
                      </p>
                    </div>
                  </motion.div>

                  {/* Custom Marker */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                    animate={isMapHovered ? { scale: [1, 1.2, 1] } : { scale: 1 }}
                    transition={{ duration: 1, repeat: isMapHovered ? Infinity : 0 }}
                  >
                    <div className="w-6 h-6 bg-electric-500 rounded-full border-2 border-white shadow-lg flex items-center justify-center">
                      <div className="w-2 h-2 bg-white rounded-full"></div>
                    </div>
                  </motion.div>
                </motion.a>
              </div>

              {/* Map Footer */}
              <div className="p-4 bg-white/5 border-t border-white/10">
                <div className="flex items-center justify-between text-sm text-neutral-400">
                  <span>Bengaluru, Karnataka</span>
                  <span>12.9616°N, 77.5978°E</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Conference Info Cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <Calendar className="w-8 h-8 text-electric-400 mx-auto mb-3" />
            <h4 className="font-black text-white text-lg mb-2">Conference Dates</h4>
            <p className="text-neutral-300">February 20-21, 2026</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <FiClock className="w-8 h-8 text-emerald-400 mx-auto mb-3" />
            <h4 className="font-black text-white text-lg mb-2">Submission Deadline</h4>
            <p className="text-neutral-300">January 15, 2026</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <MapPin className="w-8 h-8 text-violet-400 mx-auto mb-3" />
            <h4 className="font-black text-white text-lg mb-2">Venue</h4>
            <p className="text-neutral-300">St Joseph's University, 36, Lalbagh Road, Bengaluru-560027 </p>
          </div>
        </motion.div>
      </div>

      {/* Contact Form Modal */}
      <AnimatePresence>
        {showContactForm && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
            onClick={() => setShowContactForm(false)}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="bg-gradient-to-br from-neutral-800 to-neutral-900 rounded-3xl p-8 max-w-md w-full border border-white/10 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between mb-6">
                <h3 className="text-2xl font-black text-white">Send us a Message</h3>
                <button
                  onClick={() => setShowContactForm(false)}
                  className="text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-electric-500 transition-colors"
                />
                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-electric-500 transition-colors"
                />
                <textarea
                  placeholder="Your Message"
                  rows={4}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-2xl text-white placeholder-neutral-400 focus:outline-none focus:border-electric-500 transition-colors resize-none"
                />
              
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
});

const Footer: FC = memo(() => (
  <footer className="relative bg-neutral-950 text-white overflow-hidden">
    <div className="absolute top-0 left-0 w-96 h-96 bg-electric-500/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
    <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-500/5 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto py-20 px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        <div>
          <h3 className="text-3xl font-black mb-6 bg-gradient-to-r from-white to-electric-200 bg-clip-text text-transparent">ICRAC 2026</h3>
          <p className="text-white/60 text-lg leading-relaxed mb-6 font-medium">
            2nd International Conference on Recent Trends in Advanced Computing
          </p>
          <div className="flex space-x-3">
            {[1, 2, 3].map((i) => (
              <motion.div
                key={i}
                className="w-2 h-2 bg-electric-500 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-white text-lg mb-6">Quick Links</h4>
          <nav className="flex flex-col space-y-4">
            {navItems.map((item) => (
              <a 
                key={item.name}
                href={item.to} 
                className="text-white/60 hover:text-electric-300 transition-colors duration-300 text-lg font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>
        </div>
        
        <div>
          <h4 className="font-black text-white text-lg mb-6">Important Dates</h4>
          <div className="text-white/60 text-lg space-y-4">
            <div className="flex justify-between items-center">
              <span className="font-medium">Submission Deadline:</span>
              <span className="font-black text-electric-400">Jan 15, 2026</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="font-medium">Conference Dates:</span>
              <span className="font-black text-electric-400">Feb 20-21, 2026</span>
            </div>
          </div>
        </div>
        
        <div>
          <h4 className="font-black text-white text-lg mb-6">Contact</h4>
          <div className="text-white/60 text-lg space-y-3 font-medium">
            <p>icrac2026@office.sju.edu.in</p>
            <p>St  Joseph's University</p>
            <p>Bengaluru, Karnataka, India</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center space-y-4">
        <p className="text-white/40 text-lg font-medium">
          &copy; 2026 ICRAC -{' '}
          <a 
            href="https://www.sju.edu.in/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-electric-400 transition-colors underline inline-flex items-center gap-1"
          >
            St. Joseph's University
            <ExternalLink className="w-3 h-3" />
          </a>
          , Bengaluru. All rights reserved.
        </p>
        <p className="text-white/40 text-sm max-w-3xl mx-auto">
          The Microsoft CMT service was used for managing the peer reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
        </p>
      </div>
    </div>
  </footer>
));


// --- MAIN PAGE COMPONENT ---
export default function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white overflow-x-hidden"> {/* Added overflow-x-hidden for safety */}
      <Navbar isOpen={isOpen} onToggle={toggleMenu} scrolled={scrolled} />
      <main>
        <Hero />
        <AboutUs/>
        <CallForPapers />
        <FeaturedSpeakers />
        <Submission />
        <Contact />
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}


export {Navbar,Footer};