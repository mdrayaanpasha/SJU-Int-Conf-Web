import React, { useEffect, useRef, useState, memo, useCallback } from "react";
import type { FC } from "react";
// CORRECTED: Switched to <a> for in-page links instead of react-router's Link
import { useScroll, useTransform, motion, AnimatePresence } from "framer-motion";

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
  
} from "react-icons/fi";


// --- ASSET IMPORTS ---
// For larger projects, consider creating an index.ts in the IMAGES folder
// to export all images from a single file for cleaner imports.
import SpringerLogo from "../assets/IMAGES/springer.png";
import DrShamalaSubramaniam from "../assets/IMAGES/Dr Shamala Subramaniam.png";
import DrShameerKhader from "../assets/IMAGES/Dr Shameer Khader.png";
import DrSrinivasBhogle from "../assets/IMAGES/Dr Srinivas Bhogle.png";
import DrMonikaAggarwal from "../assets/IMAGES/Dr Monika Aggarwal.png";
import DrDeepakDSouza from "../assets/IMAGES/Dr Deepak D’Souza.png";
import DrNarahari from "../assets/IMAGES/Dr Narahari.png";
import DrJayanthiSivaswamy from "../assets/IMAGES/Dr Jayanthi Sivaswamy.png";
import DrXiaoZhiGao from "../assets/IMAGES/Dr Xiao-Zhi Gao.png";
import RevVictorLoboSJ from "../assets/IMAGES/Rev Fr (Dr) Victor Lobo SJ .png";
import DrAMBojamma from "../assets/IMAGES/Dr A M Bojamma .png";
import DrJayatiBhadra from "../assets/IMAGES/Dr Jayati Bhadra.png";
import DrMadhuSNair from "../assets/IMAGES/Dr Madhu S Nair.png";
import uttyler from "../assets/IMAGES/uttyler.jpg";
import acmMeerut from "../assets/IMAGES/ACM merrut.png"

// --- TYPE DEFINITIONS ---
interface NavItem { name: string; to: string; }
interface Academic { name: string; title: string; image: string; }
interface MarqueeProps { items: Academic[]; direction?: 'left' | 'right'; }

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
  { name: "ABOUT", to: "#about" },
  { name: "CALL FOR PAPERS", to: "#call-for-papers" },
  { name: "PUBLICATION", to: "#submission" },
  { name: "COMMITTEES", to: "#committees" },
  { name: "CONTACT", to: "#contact" },
];
const researchAreas = [
    { icon: BrainCircuit, title: "Machine Learning & Deep Learning", description: "Innovations in image processing, reinforcement learning, computer vision, AR/VR, and signal processing.", color: "from-electric-500 to-violet-600" },
    { icon: ChartBar, title: "Artificial Intelligence & Data Science", description: "AI in healthcare, business intelligence, bioinformatics, and advanced AI algorithms.", color: "from-emerald-500 to-electric-600" },
    { icon: ShieldCheck, title: "Networks & Cyber Security", description: "Wireless networks, IoT applications, network security, cryptography, and blockchain technologies.", color: "from-amber-500 to-emerald-600" },
    { icon: CloudData, title: "Data Mining & Cloud Computing", description: "Distributed computing, quantum computing, large-scale data mining, and sustainable technologies.", color: "from-violet-500 to-electric-600" },
    { icon: Sparkles, title: "Emerging Technologies", description: "Blockchain, Edge/Fog Computing, Smart Systems, HCI, Augmented Reality, and Digital Twins.", color: "from-amber-400 to-amber-600" },
];


const venue = {
  name: "St. Joseph's University",
  address: "36, Lal Bagh Main Rd, Bengaluru, Karnataka 560027",
  mapLink: "https://www.openstreetmap.org/?mlat=12.9616&mlon=77.5978#map=17/12.9616/77.5978",
};

const featuredAcademics: Academic[] = [
    { name: "Rev Fr (Dr) Victor Lobo SJ", title: "Patron", image: RevVictorLoboSJ }, 
    { name: "Dr Deepak D'Souza", title: "Professor, IISc, Bengaluru", image: DrDeepakDSouza }, 
    { name: "Dr Monika Aggarwal", title: "Professor, IIT, Delhi", image: DrMonikaAggarwal }, 
    { name: "Dr Shamala Subramaniam", title: "Universiti of Putra, Malaysia", image: DrShamalaSubramaniam }, 
    { name: "Dr Narahari", title: "Professor, IISc, Bengaluru", image: DrNarahari }, 
    { name: "Dr Shameer Khader", title: "Sanofi, Cambridge MA, USA", image: DrShameerKhader }, 
    { name: "Dr Jayanthi Sivaswamy", title: "Professor Emeritus, IIIT, Hyderabad", image: DrJayanthiSivaswamy }, 
    { name: "Dr A M Bojamma", title: "Conference Chair", image: DrAMBojamma }, 
    { name: "Dr Jayati Bhadra", title: "Organizing Chair", image: DrJayatiBhadra }, 
    { name: "Dr Srinivas Bhogle", title: "Scientist, CSIR Lab, Delhi", image: DrSrinivasBhogle }, 
    { name: "Dr Xiao-Zhi Gao", title: "University of Eastern Finland", image: DrXiaoZhiGao }, 
    { name: "Dr Madhu S Nair", title: "Professor, CUSAT, Kerala", image: DrMadhuSNair },
];

// --- REUSABLE UI COMPONENTS ---
const SectionHeader: FC<{ title: string; subtitle: string; className?: string }> = memo(({ title, subtitle, className }) => (
  <div className={`text-center mb-20 ${className}`}>
    <motion.div 
      className="inline-flex items-center gap-4 text-electric-600 font-semibold text-sm uppercase tracking-widest mb-6"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <Star className="w-4 h-4" />
      PREMIER CONFERENCE
      <Star className="w-4 h-4" />
    </motion.div>
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

// IMPROVEMENT: Moved Marquee component out of FeaturedSpeakers to prevent re-declaration on renders.
const Marquee: FC<MarqueeProps> = ({ items, direction = 'left' }) => (
    <motion.div 
        className="flex gap-8 py-8"
        animate={{ x: direction === 'left' ? '-100%' : '0%' }}
        transition={{ 
            x: { 
                repeat: Infinity, 
                duration: 40, 
                ease: "linear" 
            } 
        }}
        initial={{ x: direction === 'left' ? '0%' : '-100%' }}
    >
        {[...items, ...items].map((item, index) => (
            <motion.div 
                key={`${item.name}-${index}`}
                whileHover={{ scale: 1.05, y: -8 }}
                className="flex-shrink-0 flex flex-col items-center text-center w-56 bg-white/10 backdrop-blur-lg rounded-3xl p-6 border border-white/20 hover:border-white/40 transition-all duration-500 shadow-2xl hover:shadow-3xl"
            >
                <div className="relative mb-4">
                    <div className="w-36 h-36 rounded-2xl overflow-hidden border-4 border-white/20 shadow-2xl">
                        <img 
                            src={item.image} 
                            alt={item.name} 
                            className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                            loading="lazy" 
                        />
                    </div>
                    <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-br from-electric-500 to-violet-600 rounded-full flex items-center justify-center shadow-lg">
                        <Star className="w-3 h-3 text-white" />
                    </div>
                </div>
                <p className="font-bold text-white text-lg mb-2 leading-tight">{item.name}</p>
                <p className="text-white/80 text-sm leading-relaxed">{item.title}</p>
            </motion.div>
        ))}
    </motion.div>
);

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
            <span className="bg-gradient-to-r from-electric-600 to-violet-600 bg-clip-text text-transparent">ICRAC</span>
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
            href="#submission" // FIXED: Pointed to the correct submission section
            className={`px-6 py-3 rounded-2xl font-bold text-sm transition-all duration-300 ${
              scrolled 
                ? 'bg-gradient-to-r from-electric-500 to-violet-600 text-white shadow-lg hover:shadow-xl' 
                : 'bg-white text-neutral-900 shadow-2xl hover:bg-neutral-100'
            }`}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            SUBMIT PAPER
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


// Using memo for performance optimization, preventing re-renders if props don't change.
const Hero: FC = memo(() => {
    const containerRef = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });
    
    // Applying parallax effects based on scroll progress
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return (
        // Restoring your original section with gradient, parallax, and animations
        <motion.section 
            ref={containerRef}
            id="home" 
            className="relative min-h-screen flex items-center justify-center pt-24 overflow-hidden bg-gradient-to-br from-neutral-900 via-electric-900 to-violet-900"
            style={{ y, opacity }}
        >
            {/* All original animated background elements are preserved */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl animate-pulse"></div>
                <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 w-64 h-64 bg-amber-400/10 rounded-full blur-2xl animate-pulse delay-500"></div>
                
                {/* Floating Elements */}
                <motion.div
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-20 left-20 w-8 h-8 bg-electric-400/30 rounded-lg"
                />
                <motion.div
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-32 right-32 w-6 h-6 bg-violet-400/30 rounded-full"
                />
                <motion.div
                    animate={{ y: [0, -15, 0], rotate: [0, 8, 0] }}
                    transition={{ duration: 7, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                    className="absolute top-1/3 right-1/4 w-4 h-4 bg-amber-300/30 rounded-lg"
                />
            </div>

            {/* Original Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

            <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                
                {/* UPDATED CONTENT: Conference Title */}
                <motion.h2
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8 }}
                  className="text-xl sm:text-2xl font-semibold text-gray-200 tracking-wide uppercase"
                >
                  2nd International Conference on
                </motion.h2>

                <motion.h1 
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                    className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white mt-2 mb-4"
                >
                    <span className="block bg-gradient-to-r from-white via-electric-200 to-violet-200 bg-clip-text text-transparent">
                      Recent Trends in Advanced Computing
                    </span>
                </motion.h1>

                <motion.p
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter text-white/90 mb-6"
                >
                    ICRAC 2026
                </motion.p>
                
                {/* UPDATED CONTENT: Date, Venue, and Mode */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.6 }}
                    className="text-lg sm:text-xl text-white/80"
                >
                    <p>February 20-21, 2026 | St. Joseph’s University</p>
                    <p className="font-semibold">(Hybrid Mode)</p>
                </motion.div>

                {/* UPDATED CONTENT: Collaborating Partners */}
                <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-16"
                >
                    <h3 className="text-sm font-bold text-white/60 tracking-widest uppercase mb-6">
                        Collaborating Partners
                    </h3>
                    <div className="flex justify-center items-center gap-8 sm:gap-12">
                        <div className="text-center">
                            <img src={uttyler} alt="UTTylor Logo" className="h-10 sm:h-12 mx-auto mb-2 opacity-80" />
                            <p className="text-xs sm:text-sm text-white/70">UTTylor, USA</p>
                        </div>
                        <div className="h-12 w-px bg-white/20"></div>
                        <div className="text-center">
                            <img src={acmMeerut} alt="ACM Meerut Logo" className="h-10 sm:h-12 mx-auto mb-2 opacity-80" />
                            <p className="text-xs sm:text-sm text-white/70">ACM Meerut</p>
                        </div>
                    </div>
                </motion.div>
            </div>

           
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
const FiAward = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="8" r="7"/><path d="M15.4 12.97a3 3 0 010 4.06c-.88.88-2.3.88-3.18 0l-1.42-1.42a3 3 0 010-4.06c.88-.88 2.3-.88 3.18 0L14 11.55"/><path d="M8.6 11.03a3 3 0 000-4.06c.88-.88 2.3-.88 3.18 0l1.42 1.42a3 3 0 000 4.06c-.88.88-2.3.88-3.18 0L10 12.45"/></svg>;
const FiUsers = (props: React.SVGProps<SVGSVGElement>) => <svg {...props} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>;
// End Placeholder components/icons

const AboutUs: FC = memo(() => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    // ... (sections data remains the same)
    {
      id: 0,
      title: "ICRAC 2026",
      icon: "🎯",
      color: "from-electric-500 to-violet-600",
      bgColor: "bg-gradient-to-br from-electric-50 to-violet-100",
      content: `The 2nd International Conference on Recent Trends in Advanced Computing (ICRAC)-2026 will be organized by the School of Information Technology, St. Joseph's University, Bengaluru, Karnataka, India, during February 20-21, 2026 (Hybrid Mode). ICRAC-2026 continues the legacy of a premier global platform for researchers and practitioners to share groundbreaking research findings, innovative ideas, and practical experiences in the fields of Data Science and Computer Science fostering collaboration, advancing knowledge, and shaping the future of technology-driven solutions worldwide. The conference proposes publishing research papers on advanced engineering, science and technology techniques, experimental analysis and theoretical reviews. This conference will serve as a platform for academicians, industrialists, and students to learn more about the latest technologies in data science. Selected papers at the conference will be considered for Scopus indexed conference proceedings.`
    },
    {
      id: 1,
      title: "St. Joseph's University",
      icon: "🏛️",
      color: "from-emerald-500 to-electric-600",
      bgColor: "bg-gradient-to-br from-emerald-50 to-electric-100",
      content: `St. Joseph's University (SJU) is a Jesuit University at the heart of Bengaluru, the Silicon City of India established in 1882 by Paris Foreign Fathers, the college management was handed over to the Jesuit Order (Society of Jesus) in 1937. The college was first affiliated with the University of Madras and later with the Mysore and Bangalore Universities. In 1986, St. Joseph's College became the first affiliated college in Karnataka to offer postgraduate courses. In 1988, it became the first college in Karnataka to get a research center, and in 2005, it was one of the five colleges in Karnataka that was awarded academic autonomy. In February 2021, the St. Joseph's University bill was presented in the Karnataka Legislative Council. The college received its university status on 2nd July 2022 and was inaugurated as India's first Public-Private-Partnership University by the Hon'ble President of India, Smt. Droupadi Murmu on 27th September 2022.`
    },
    {
      id: 2,
      title: "School of Information Technology",
      icon: "💻",
      color: "from-violet-500 to-electric-600",
      bgColor: "bg-gradient-to-br from-violet-50 to-electric-100",
      content: `The School of Information Technology (SIT) offers programs related to data analytics, computer science, computer applications, and domain-specific applications. SIT focuses on holistic learning that help students make major contributions to the IT industry and serve society at large. The SIT has more than 2000 students and 40 committed faculty members, besides many visiting professors and working professionals from industry, research and development organizations. Faculty members are highly motivated to do pioneering research and excel in teaching and learning processes. They provide students with the opportunity to apply acquired knowledge to solve real-world problems and gain research experience. The placement record of SIT is always exceptional.`
    }
  ];

  return (
    <section id="about" className="relative min-h-screen bg-gradient-to-br from-white via-neutral-50 to-electric-50 py-16 md:py-32 overflow-hidden">
      {/* Animated Background Elements - Reduced size and blur for smaller screens */}
      <div className="absolute top-0 left-0 w-64 h-64 md:w-96 md:h-96 bg-electric-200/20 rounded-full blur-2xl md:blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 md:w-96 md:h-96 bg-violet-200/20 rounded-full blur-2xl md:blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12 md:mb-20"
        >
          <div className="inline-flex items-center gap-4 text-electric-600 font-semibold text-xs md:text-sm uppercase tracking-widest mb-4 md:mb-6">
            <Star className="w-3 h-3 md:w-4 md:h-4" />
            ABOUT THE CONFERENCE
            <Star className="w-3 h-3 md:w-4 md:h-4" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight bg-gradient-to-r from-neutral-900 to-electric-700 bg-clip-text text-transparent mb-4 md:mb-8">
            Our Story
          </h2>
          <p className="max-w-3xl mx-auto text-base md:text-xl text-neutral-600 leading-relaxed px-2">
            Discover the institutions and vision behind Asia's premier computing conference
          </p>
        </motion.div>

        {/* Interactive Navigation Tabs */}
        {/* KEY CHANGE: Use flex-col and space-y-3 on small screens, then wrap/center on medium screens */}
        <motion.div 
          className="flex flex-col sm:flex-row flex-wrap justify-center gap-3 md:gap-4 mb-8 md:mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {sections.map((section, index) => (
            <motion.button
              key={section.id}
              onClick={() => setActiveSection(index)}
              className={`w-full sm:w-auto px-6 py-3 md:px-8 md:py-4 rounded-xl md:rounded-2xl font-bold text-base md:text-lg text-left transition-all duration-500 ${
                activeSection === index
                  ? `bg-gradient-to-r ${section.color} text-white shadow-xl md:shadow-2xl scale-[1.02] sm:scale-105`
                  : 'bg-white text-neutral-600 hover:text-electric-600 border border-neutral-200 hover:border-electric-300 hover:shadow-lg'
              }`}
              whileHover={{ scale: 1.02 }} // Slightly less scaling on hover for mobile
              whileTap={{ scale: 0.98 }} // Slightly less scaling on tap for mobile
            >
              <span className="mr-3">{section.icon}</span>
              {section.title}
            </motion.button>
          ))}
        </motion.div>

        {/* Main Content Area */}
        {/* KEY CHANGE: Use standard grid-cols-1 on small screens, then lg:grid-cols-3 on large screens */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:gap-8 items-start">
          {/* Left Side - Visual Timeline / Navigation on Desktop */}
          {/* KEY CHANGE: Hide this section on small screens to de-clutter, as the content is displayed below. Only show on medium/large screens. */}
          <motion.div 
            className="hidden md:block lg:col-span-1 space-y-6 md:space-y-8"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {sections.map((section, index) => (
              <motion.div
                key={section.id}
                className={`p-4 md:p-6 rounded-2xl md:rounded-3xl border-2 transition-all duration-500 cursor-pointer ${
                  activeSection === index
                    ? `border-electric-500 bg-white shadow-2xl scale-105`
                    : 'border-neutral-200 bg-white/50 hover:bg-white hover:shadow-lg'
                }`}
                onClick={() => setActiveSection(index)}
                whileHover={{ scale: 1.02 }}
              >
                <div className="flex items-center gap-4">
                  <div className={`w-10 h-10 md:w-12 md:h-12 rounded-xl md:rounded-2xl bg-gradient-to-r ${section.color} flex items-center justify-center text-white text-lg md:text-xl font-bold`}>
                    {section.icon}
                  </div>
                  <div>
                    <h3 className="font-black text-neutral-900 text-base md:text-lg">{section.title}</h3>
                    <div className="flex items-center gap-2 mt-1">
                      <div className={`w-2 h-2 rounded-full ${activeSection === index ? 'bg-electric-500' : 'bg-neutral-300'}`}></div>
                      <span className="text-xs md:text-sm text-neutral-500">Click to explore</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Stats Card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-gradient-to-br from-electric-500 to-violet-600 rounded-2xl md:rounded-3xl p-6 text-white shadow-2xl"
            >
              <h4 className="font-black text-lg mb-4">Conference Highlights</h4>
              <div className="space-y-3">
                <div className="flex justify-between items-center">
                  <span className="text-electric-100">Edition</span>
                  <span className="font-black text-xl md:text-2xl">2nd</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-electric-100">Students</span>
                  <span className="font-black text-xl md:text-2xl">2000+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-electric-100">Faculty</span>
                  <span className="font-black text-xl md:text-2xl">40+</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-electric-100">Legacy</span>
                  <span className="font-black text-xl md:text-2xl">140+ yrs</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Side - Content Display */}
          <motion.div 
            className="lg:col-span-2"
            key={activeSection}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Reduced padding on small screens */}
            <div className={`rounded-2xl md:rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-xl md:shadow-2xl ${sections[activeSection].bgColor}`}>
              {/* Header */}
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                {/* Reduced icon size */}
                <div className={`w-12 h-12 md:w-16 md:h-16 rounded-xl md:rounded-2xl bg-gradient-to-r ${sections[activeSection].color} flex items-center justify-center text-xl md:text-2xl text-white`}>
                  {sections[activeSection].icon}
                </div>
                <div>
                  {/* Reduced header size */}
                  <h3 className="text-2xl md:text-4xl font-black text-neutral-900 mb-1 md:mb-2">{sections[activeSection].title}</h3>
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-electric-500 animate-pulse"></div>
                    <span className="text-sm md:text-base text-electric-600 font-semibold">Currently Viewing</span>
                  </div>
                </div>
              </div>

              {/* Content */}
              {/* KEY CHANGE: Adjusted prose classes for better mobile readability */}
              <div className="prose max-w-none">
                <div className="text-neutral-700 leading-relaxed text-base md:text-lg space-y-4">
                  {sections[activeSection].content.split('. ').map((sentence, index, array) => (
                    <motion.p
                      key={index}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1 }}
                      className="text-justify"
                    >
                      {sentence}{index < array.length - 1 ? '.' : ''}
                    </motion.p>
                  ))}
                </div>

                {/* Highlight Boxes - Reduced padding/text size for mobile */}
                {activeSection === 0 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-l-4 border-electric-500 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FiAward className="w-5 h-5 md:w-6 md:h-6 text-electric-500" />
                      <span className="font-black text-sm md:text-base text-electric-700">Scopus Indexed Publications</span>
                    </div>
                    <p className="text-electric-800 mt-2 font-medium text-sm">
                      Selected papers will be considered for prestigious Scopus indexed conference proceedings
                    </p>
                  </motion.div>
                )}

                {activeSection === 2 && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 }}
                    className="mt-6 md:mt-8 p-4 md:p-6 bg-white rounded-xl md:rounded-2xl border-l-4 border-violet-500 shadow-lg"
                  >
                    <div className="flex items-center gap-3">
                      <FiUsers className="w-5 h-5 md:w-6 md:h-6 text-violet-500" />
                      <span className="font-black text-sm md:text-base text-violet-700">Exceptional Placement Record</span>
                    </div>
                    <p className="text-violet-800 mt-2 font-medium text-sm">
                      School of IT maintains outstanding placement opportunities for all students
                    </p>
                  </motion.div>
                )}
              </div>
            </div>

            {/* Navigation Dots - Still present for easy content switching on mobile */}
            <div className="flex justify-center gap-3 mt-6 md:mt-8">
              {sections.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSection(index)}
                  className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                    activeSection === index 
                      ? 'bg-electric-500 scale-125' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>
          {/* KEY CHANGE: Display Stats Card at the bottom on mobile/tablet */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="md:hidden lg:col-span-1 bg-gradient-to-br from-electric-500 to-violet-600 rounded-2xl p-6 text-white shadow-2xl mt-8"
          >
            <h4 className="font-black text-lg mb-4">Conference Highlights</h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center">
                <span className="text-electric-100">Edition</span>
                <span className="font-black text-2xl">2nd</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-electric-100">Students</span>
                <span className="font-black text-2xl">2000+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-electric-100">Faculty</span>
                <span className="font-black text-2xl">40+</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-electric-100">Legacy</span>
                <span className="font-black text-2xl">140+ yrs</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 md:mt-20"
        >
          <motion.a
            href="#call-for-papers"
            // Reduced padding/text size for mobile
            className="group inline-flex items-center bg-gradient-to-r from-electric-500 to-violet-600 text-white font-black py-4 px-8 md:py-5 md:px-12 rounded-xl md:rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500 text-base md:text-lg"
            whileHover={{ scale: 1.05, y: -4 }}
            whileTap={{ scale: 0.95 }}
          >
            Join ICRAC 2026
            <ChevronRight className="w-5 h-5 md:w-6 md:h-6 ml-2 md:ml-3 group-hover:translate-x-2 transition-transform duration-300" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
});


const CallForPapers: FC = memo(() => (
  <section id="call-for-papers" className="relative bg-gradient-to-br from-neutral-50 via-white to-electric-50 py-32 overflow-hidden">
    {/* Background Elements */}
    <div className="absolute top-0 right-0 w-96 h-96 bg-electric-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
    <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-200/30 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
    
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <SectionHeader 
        title="Call For Papers" 
        subtitle="Join the forefront of technological innovation. ICRAC 2026 invites groundbreaking research that will shape the future of computing and digital transformation." 
      />
      
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
      
      <motion.div 
        className="text-center"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.a 
          href="#submission" 
          className="group inline-flex items-center bg-gradient-to-r from-electric-500 to-violet-600 text-white font-black py-5 px-12 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 text-lg"
          whileHover={{ scale: 1.05, y: -4 }}
          whileTap={{ scale: 0.95 }}
        >
          Submit Your Research
          <ChevronRight className="w-6 h-6 ml-3 group-hover:translate-x-2 transition-transform duration-300" />
        </motion.a>
      </motion.div>
    </div>
  </section>
));

const FeaturedSpeakers: FC = memo(() => {
    // Combine all speakers into one list for a single, long marquee flow
    const allAcademics = featuredAcademics; 
    
    return (
        <section id="committees" className="relative w-full bg-gradient-to-br from-neutral-900 via-electric-900 to-violet-900 py-24 sm:py-32 overflow-hidden">
            {/* Animated Background - Reduced opacity for a cleaner look */}
            <div className="absolute inset-0">
                <div className="absolute top-0 left-0 w-full h-20 bg-gradient-to-b from-white/5 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full h-20 bg-gradient-to-t from-white/5 to-transparent"></div>
            </div>
            
            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <div className="inline-flex items-center gap-4 text-electric-400 font-semibold text-sm uppercase tracking-widest mb-6">
                        <Star className="w-4 h-4 text-white" />
                        <p className="text-white">DISTINGUISHED COMMITTEES</p>
                        <Star className="w-4 h-4 text-white" />
                    </div>
                    <h2 className="text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-white to-electric-300 bg-clip-text text-transparent mb-6">
                        Meet Our Experts
                    </h2>
                    <p className="max-w-3xl mx-auto text-xl text-neutral-300 leading-relaxed">
                        World-renowned academics, pioneering researchers, and industry visionaries guiding ICRAC 2026 towards excellence.
                    </p>
                </motion.div>
                {/* Single, unified view of all committees in one Marquee */}
                <div className="relative pt-8">
                    {/* Removed the fake filter gradient overlays for a full-width look */}
                    
                    <div className="flex overflow-hidden">
                        {/* Use the entire list in one Marquee. Direction set to left (default). */}
                        <Marquee items={allAcademics} direction="left" />
                    </div>
                </div>
                
                {/* CTA Button remains */}
                <motion.div 
                    className="text-center mt-16"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <motion.a 
                        href="/committees"
                        whileHover={{ scale: 1.05, y: -4 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center bg-white text-neutral-900 font-black py-4 px-8 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500 group"
                    >
                        View Complete Committees
                        <ChevronRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform duration-300" />
                    </motion.a>
                </motion.div>
            </div>
        </section>
    );
});

const Submission: FC = memo(() => {
  const [activeStep, setActiveStep] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const steps = [
    { 
      icon: FiFileText, 
      title: "Original Research", 
      description: "Papers must be original and not previously published or under consideration elsewhere.",
      color: "from-electric-500 to-blue-600"
    },
    { 
      icon: FiEdit3, 
      title: "Springer Format", 
      description: "The full manuscript must be submitted in the official Springer format.",
      color: "from-emerald-500 to-green-600"
    },
    { 
      icon: FiUsers, 
      title: "Rigorous Peer-Review", 
      description: "All submitted papers will undergo a strict peer-review process by experts.",
      color: "from-amber-500 to-orange-600"
    },
    { 
      icon: FiAward, 
      title: "Scopus Indexed Publication", 
      description: "Selected papers will be published in a Scopus indexed Springer book series (subject to approval).",
      color: "from-violet-500 to-purple-600"
    }
  ];

  return (
    <section id="submission" className="relative bg-gradient-to-br from-white via-neutral-50 to-electric-50 py-32 overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-96 h-96 bg-electric-200/20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-violet-200/20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2 animate-pulse delay-1000"></div>
        {/* Floating Elements */}
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
        
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
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
            Follow our streamlined process to get your research published in prestigious Springer proceedings
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-20">
          
          {/* Left Side - Interactive Process Steps */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Process Navigation */}
            <div className="flex gap-4 mb-8">
              {steps.map((step, index) => (
                <motion.button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`flex-1 py-4 rounded-2xl font-bold transition-all duration-500 ${
                    activeStep === index
                      ? `bg-gradient-to-r ${step.color} text-white shadow-2xl scale-105`
                      : 'bg-white text-neutral-600 hover:text-electric-600 border border-neutral-200 hover:border-electric-300 hover:shadow-lg'
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Step {index + 1}
                </motion.button>
              ))}
            </div>

            {/* Active Step Display */}
            <motion.div
              key={activeStep}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-2xl"
            >
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${steps[activeStep].color} flex items-center justify-center text-white text-2xl mb-6`}>
                {React.createElement(steps[activeStep].icon)}
              </div>
              <h3 className="text-3xl font-black text-neutral-900 mb-4">{steps[activeStep].title}</h3>
              <p className="text-neutral-600 leading-relaxed text-lg">{steps[activeStep].description}</p>
              
              {/* Progress Bar */}
              <div className="mt-8">
                <div className="flex justify-between text-sm text-neutral-500 mb-2">
                  <span>Progress</span>
                  <span>{Math.round(((activeStep + 1) / steps.length) * 100)}%</span>
                </div>
                <div className="w-full bg-neutral-200 rounded-full h-2">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${((activeStep + 1) / steps.length) * 100}%` }}
                    transition={{ duration: 0.5 }}
                    className={`h-2 rounded-full bg-gradient-to-r ${steps[activeStep].color}`}
                  />
                </div>
              </div>
            </motion.div>

            {/* Step Indicators */}
            <div className="flex justify-center gap-3">
              {steps.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveStep(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    activeStep === index 
                      ? 'bg-electric-500 scale-125' 
                      : 'bg-neutral-300 hover:bg-neutral-400'
                  }`}
                />
              ))}
            </div>
          </motion.div>

          {/* Right Side - Publishing Partner & Timeline */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            {/* Springer Partner Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-white rounded-3xl p-8 border border-neutral-200/80 shadow-2xl hover:shadow-3xl transition-all duration-500 text-center"
            >
              <div className="inline-flex items-center gap-4 text-electric-600 font-semibold text-sm uppercase tracking-widest mb-6">
                <Star className="w-4 h-4" />
                Publishing Partner
                <Star className="w-4 h-4" />
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <img src={SpringerLogo} alt="Springer Logo" className="h-20 mx-auto mb-6 filter brightness-110" />
              </motion.div>
              <p className="text-neutral-600 text-lg leading-relaxed font-medium mb-4">
                Partnering with Springer for prestigious, high-impact publications in their renowned computing series.
              </p>
              <div className="flex gap-2 justify-center">
                <span className="px-3 py-1 bg-electric-500/10 text-electric-600 rounded-full text-sm font-semibold">Scopus Indexed</span>
                <span className="px-3 py-1 bg-violet-500/10 text-violet-600 rounded-full text-sm font-semibold">Global Reach</span>
              </div>
            </motion.div>

            {/* Timeline Card */}
            <motion.div
              whileHover={{ scale: 1.02, y: -4 }}
              className="bg-gradient-to-br from-electric-500 to-violet-600 rounded-3xl p-8 text-white shadow-2xl hover:shadow-3xl transition-all duration-500"
            >
              <div className="flex items-center gap-4 mb-6">
                <FiClock className="w-8 h-8 text-white/90" />
                <h3 className="text-2xl font-black">Important Dates</h3>
              </div>
              <div className="space-y-4">
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold">Submission Deadline</span>
                  <span className="font-black">Dec 15, 2025</span>
                </div>
                <div className="flex justify-between items-center py-3 border-b border-white/20">
                  <span className="font-semibold">Review Period</span>
                  <span className="font-black">Dec 2025 - Jan 2026</span>
                </div>
                <div className="flex justify-between items-center py-3">
                  <span className="font-semibold">Conference Dates</span>
                  <span className="font-black">Feb 20-21, 2026</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>

        {/* Coming Soon CTA */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <motion.div
            onHoverStart={() => setIsHovered(true)}
            onHoverEnd={() => setIsHovered(false)}
            className="relative bg-gradient-to-br from-electric-500 via-violet-500 to-electric-600 rounded-3xl p-12 text-center text-white shadow-2xl hover:shadow-3xl transition-all duration-500 overflow-hidden"
          >
            {/* Animated Background */}
            <motion.div
              animate={isHovered ? { scale: 1.1 } : { scale: 1 }}
              className="absolute inset-0 bg-gradient-to-br from-electric-600 via-violet-600 to-electric-700 opacity-50"
            />
            
            <div className="relative z-10">
              <motion.div
                animate={isHovered ? { rotate: 360 } : { rotate: 0 }}
                transition={{ duration: 2, ease: "linear" }}
              >
                <FiClock className="mx-auto text-6xl mb-8 text-white/90" />
              </motion.div>
              <h2 className="text-4xl lg:text-5xl font-black mb-6">Detailed Guidelines</h2>
              <motion.p
                animate={isHovered ? { scale: 1.05 } : { scale: 1 }}
                className="text-6xl lg:text-7xl font-black mb-6 animate-pulse"
              >
                Coming Soon!
              </motion.p>
              <p className="text-white/90 text-xl leading-relaxed font-medium">
                Complete manuscript preparation and submission instructions will be available shortly.
                <br />Stay tuned for the official announcement and template downloads.
              </p>
              
           
            </div>
          </motion.div>
        </motion.div>
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
      contact: "icrac2026@gmail.com", 
      href: "mailto:icrac2026@gmail.com",
      description: "For general questions about the conference, registration, and participation",
      color: "from-electric-500 to-blue-600"
    },
    { 
      icon: FiPhone, 
      title: "Phone Support", 
      contact: "+91 9207483215 , +91 9774335503", 
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
    { name: "Registration", href: "#" },
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

            {/* CTA Button */}
            <motion.button
              onClick={() => setShowContactForm(true)}
              className="w-full bg-gradient-to-r from-electric-500 to-violet-600 text-white font-black py-4 rounded-2xl shadow-2xl hover:shadow-3xl transition-all duration-500"
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
            >
              Send Message
            </motion.button>
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
              
              <motion.a
                href={contactMethods[activeContact].href}
                className="inline-flex items-center bg-white/10 text-white font-semibold py-3 px-6 rounded-2xl hover:bg-white/20 transition-all duration-300 group"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {contactMethods[activeContact].contact}
                <ExternalLink className="w-4 h-4 ml-2 group-hover:scale-110 transition-transform duration-300" />
              </motion.a>

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
            <p className="text-neutral-300">December 15, 2025</p>
          </div>
          <div className="bg-white/5 backdrop-blur-lg rounded-2xl p-6 border border-white/10 text-center">
            <MapPin className="w-8 h-8 text-violet-400 mx-auto mb-3" />
            <h4 className="font-black text-white text-lg mb-2">Venue</h4>
            <p className="text-neutral-300">St. Joseph's University</p>
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
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full bg-gradient-to-r from-electric-500 to-violet-600 text-white font-bold py-3 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  Send Message
                </motion.button>
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
            Premier International Conference on Recent Trends in Advanced Computing
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
              <span className="font-black text-electric-400">Dec 15, 2025</span>
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
            <p>icrac2026@gmail.com</p>
            <p>St. Joseph's University</p>
            <p>Bengaluru, India</p>
          </div>
        </div>
      </div>
      
      <div className="border-t border-white/10 pt-8 text-center space-y-4">
        <p className="text-white/40 text-lg font-medium">
          &copy; 2026 ICRAC - St. Joseph's University, Bengaluru. All rights reserved.
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