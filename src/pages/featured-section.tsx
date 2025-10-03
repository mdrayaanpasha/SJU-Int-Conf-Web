import { motion } from "framer-motion";

// --- Define types for better code quality ---
interface Academic {
  name: string;
  title: string;
  image: string;
}

interface MarqueeProps {
  items: Academic[];
  direction?: 'left' | 'right';
}

import DrShamalaSubramaniam from "../../assets/IMAGES/Dr Shamala Subramaniam.png";
import DrShameerKhader from "../../assets/IMAGES/Dr Shameer Khader.png";
import DrSrinivasBhogle from "../../assets/IMAGES/Dr Srinivas Bhogle.png";
import DrMonikaAggarwal from "../../assets/IMAGES/Dr Monika Aggarwal.png";
import DrDeepakDSouza from "../../assets/IMAGES/Dr Deepak D’Souza.png";
import DrNarahari from "../../assets/IMAGES/Dr Narahari.png";
import DrJayanthiSivaswamy from "../../assets/IMAGES/Dr Jayanthi Sivaswamy.png";
import DrXiaoZhiGao from "../../assets/IMAGES/Dr Xiao-Zhi Gao.png";
import RevVictorLoboSJ from "../../assets/IMAGES/Rev Fr (Dr) Victor Lobo SJ .png";
import DrAMBojamma from "../../assets/IMAGES/Dr A M Bojamma .png";
import DrJayatiBhadra from "../../assets/IMAGES/Dr Jayati Bhadra.png";
import DrMadhuSNair from "../../assets/IMAGES/Dr Madhu S Nair.png";


// --- Data using placeholder images to resolve build errors ---
// --- Data using real imported images ---
const featuredAcademics: Academic[] = [
    { name: "Rev Fr (Dr) Victor Lobo SJ", title: "Patron", image: RevVictorLoboSJ },
    { name: "Dr Deepak D’Souza", title: "Professor, IISc, Bengaluru", image: DrDeepakDSouza },
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


// --- Reusable Marquee Component ---
const Marquee = ({ items, direction = 'left' }: MarqueeProps) => {
  const marqueeVariants = {
    animate: {
      x: direction === 'left' ? [0, '-100%'] : ['-100%', 0],
      transition: {
        x: {
          repeat: Infinity,
          repeatType: "loop" as const,
          duration: 50,
          ease: "linear" as const,
        },
      },
    },
  };

  return (
    <div className="w-full overflow-hidden">
      <motion.div
        className="flex gap-6 sm:gap-8"
        variants={marqueeVariants}
        animate="animate"
      >
        {[...items, ...items].map((item, index) => (
          <div key={index} className="flex-shrink-0 flex flex-col items-center text-center w-32 sm:w-40">
            <div className="w-24 h-24 sm:w-28 sm:h-28 rounded-full overflow-hidden border-2 border-slate-200/80 p-1 bg-white">
              <img src={item.image} alt={item.name} className="w-full h-full object-cover rounded-full" />
            </div>
            <p className="mt-3 text-sm font-semibold text-slate-800 truncate w-full">{item.name}</p>
            <p className="text-xs text-slate-500 truncate w-full">{item.title}</p>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

// --- Main Component ---
export default function FeaturedSpeakersSection() {
  return (
    <section className="relative w-full flex flex-col items-center justify-center bg-slate-50 bg-dot-black/[0.1] text-slate-800 overflow-hidden py-24">
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center bg-slate-50 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,white)]"></div>
      <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(ellipse_at_top,rgba(14,165,233,0.1),transparent_70%)]"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="text-center z-10 mb-12 px-4"
      >
        <h2 className="text-4xl md:text-6xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-500">
          Featuring World-Class Academics
        </h2>
        <p className="mt-3 max-w-2xl mx-auto text-base md:text-lg text-slate-600">
          Meet the brilliant minds and esteemed experts guiding ICRAC-2026.
        </p>
      </motion.div>

      <div className="w-full max-w-screen-2xl flex flex-col gap-8 z-10">
        <Marquee items={featuredAcademics.slice(0, 6)} direction="left" />
        <Marquee items={featuredAcademics.slice(6, 12)} direction="right" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
        className="mt-12 z-10"
      >
        <motion.a
          href="/committees"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.95 }}
          className="bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold py-3 px-6 sm:py-3 sm:px-8 text-sm sm:text-base rounded-lg transition-all shadow-lg shadow-sky-500/30"
        >
          Meet All the Committees
        </motion.a>
      </motion.div>
    </section>
  );
}

