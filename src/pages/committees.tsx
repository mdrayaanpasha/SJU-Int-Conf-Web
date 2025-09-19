"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/ui/header";

// Step 1: Import all the images from your assets folder
import RevSwebertDSilvaSJ from "../assets/IMAGES/Rev Fr Swebert D'Silva SJ .png";
import RevVictorLoboSJ from "../assets/IMAGES/Rev Fr (Dr) Victor Lobo SJ .png";
import RevDenzilLoboSJ from "../assets/IMAGES/Rev Fr Denzil Lobo SJ.png";
import DrAMBojamma from "../assets/IMAGES/Dr A M Bojamma .png";
import DrJayatiBhadra from "../assets/IMAGES/Dr Jayati Bhadra.png";
import DrPrashanthiBG from "../assets/IMAGES/Dr Prashanthi B G.png";
import DrAshaK from "../assets/IMAGES/Dr Asha K.png";
import DrSanjayDutta from "../assets/IMAGES/Dr Sanjay Dutta.png";
import DrMrinmoyeeBhatacharya from "../assets/IMAGES/Dr Mrinmoyee Bhatacharya.png";
import DrShamalaSubramaniam from "../assets/IMAGES/Dr Shamala Subramaniam.png";
import DrShameerKhader from "../assets/IMAGES/Dr Shameer Khader.png";
import DrSagnikDakshit from "../assets/IMAGES/Dr Sagnik Dakshit.png";
import DrXiaoZhiGao from "../assets/IMAGES/Dr Xiao-Zhi Gao.png";
import DrSrinivasBhogle from "../assets/IMAGES/Dr Srinivas Bhogle.png";
import DrMonikaAggarwal from "../assets/IMAGES/Dr Monika Aggarwal.png";
import DrSaurabhRGandhi from "../assets/IMAGES/Dr Saurabh R Gandhi.png";
import DrDeepakDSouza from "../assets/IMAGES/Dr Deepak D’Souza.png";
import DrNarahari from "../assets/IMAGES/Dr Narahari.png";
import DrJayanthiSivaswamy from "../assets/IMAGES/Dr Jayanthi Sivaswamy.png";
import DrHanumanthappa from "../assets/IMAGES/Dr Hanumanthappa.png";
import DrMuralidharaBL from "../assets/IMAGES/Dr Muralidhara B L.png";
import DrSomashekaraMT from "../assets/IMAGES/Dr Somashekara M T.png";
import DrKAVenkatesh from "../assets/IMAGES/Dr K A Venkatesh.png";
import DrMadhuSNair from "../assets/IMAGES/Dr Madhu S Nair.png";
import DrPiyushKumarPareek from "../assets/IMAGES/Dr. Piyush Kumar Pareek.png";
import DrBhaskarReddy from "../assets/IMAGES/Dr Bhaskar Reddy.png";
import DrShivakannan from "../assets/IMAGES/Dr. Shivakannan.png";
import DrFrancis from "../assets/IMAGES/Dr. Francis.png";
import DrPuneethS from "../assets/IMAGES/Dr. Puneeth S.png";
import DrNithya from "../assets/IMAGES/Dr. Nithya.png";
import DrShashikala from "../assets/IMAGES/Dr. Shashikala.png";
// Note: Dr. Puneeth appears twice in your original list, add an image if you have one.
import DrPerisamy from "../assets/IMAGES/Dr. Perisamy.png";
import DrDeepaNagalavi from "../assets/IMAGES/Dr. Deepa Nagalavi.png";
import DrSelvaPerumal from "../assets/IMAGES/Dr. Selva Perumal.png";
import DrManivannan from "../assets/IMAGES/Dr. Manivannan.png";
import DrShivKumar from "../assets/IMAGES/Dr. Shiv Kumar.png";


// Step 2: Update the data structure to include the imported images
const leadership = [
  { name: "Rev Fr Swebert D'Silva SJ", title: "Chief Patron", image: RevSwebertDSilvaSJ },
  { name: "Rev Fr (Dr) Victor Lobo SJ", title: "Patron", image: RevVictorLoboSJ },
  { name: "Rev Fr Denzil Lobo SJ", title: "Conference Chair", image: RevDenzilLoboSJ },
  { name: "Dr A M Bojamma", title: "Conference Chair", image: DrAMBojamma },
  { name: "Dr Jayati Bhadra", title: "Organizing Chair", image: DrJayatiBhadra },
  { name: "Dr Prashanthi B G", title: "Organizing Chair", image: DrPrashanthiBG },
  { name: "Dr Asha K", title: "Conference Convenor", image: DrAshaK },
  { name: "Dr Sanjay Dutta", title: "Conference Co-Convenor", image: DrSanjayDutta },
  { name: "Dr Mrinmoyee Bhatacharya", title: "Conference Co-Convenor", image: DrMrinmoyeeBhatacharya },
];

const internationalCommitteeMembers = [
  { name: "Dr Shamala Subramaniam", title: "Universiti of Putra, Malaysia", image: DrShamalaSubramaniam },
  { name: "Dr Shameer Khader", title: "Sanofi, Cambridge MA, USA", image: DrShameerKhader },
  { name: "Dr Sagnik Dakshit", title: "University of Texas at Tyler, USA", image: DrSagnikDakshit },
  { name: "Dr Xiao-Zhi Gao", title: "University of Eastern Finland", image: DrXiaoZhiGao },
];

const nationalCommitteeMembers = [
    { name: "Dr Srinivas Bhogle", title: "Scientist, CSIR Lab, Delhi", image: DrSrinivasBhogle },
    { name: "Dr Monika Aggarwal", title: "Professor, IIT, Delhi", image: DrMonikaAggarwal },
    { name: "Dr Saurabh R Gandhi", title: "IIT, Jodhpur", image: DrSaurabhRGandhi },
    { name: "Dr Deepak D’Souza", title: "Professor, IISc, Bengaluru", image: DrDeepakDSouza },
    { name: "Dr Narahari", title: "Professor, IISc, Bengaluru", image: DrNarahari },
    { name: "Dr Jayanthi Sivaswamy", title: "Professor Emeritus, IIIT, Hyderabad", image: DrJayanthiSivaswamy },
    { name: "Dr Hanumanthappa", title: "Professor, Bangalore University", image: DrHanumanthappa },
    { name: "Dr Muralidhara B L", title: "Professor, Bangalore University", image: DrMuralidharaBL },
    { name: "Dr Somashekara M T", title: "Professor, Bangalore University", image: DrSomashekaraMT },
    { name: "Dr K A Venkatesh", title: "Professor, Alliance University", image: DrKAVenkatesh },
    { name: "Dr Madhu S Nair", title: "Professor, CUSAT, Kerala", image: DrMadhuSNair },
    { name: "Dr. Piyush Kumar Pareek", title: "Professor, Nitte Meenakshi Institute", image: DrPiyushKumarPareek },
    { name: "Dr Bhaskar Reddy", title: "Professor, S K University", image: DrBhaskarReddy },
];

const technicalProgramCommitteeMembers = [
    { name: "Dr. Shivakannan", title: "Professor", image: DrShivakannan },
    { name: "Dr. Francis", title: "Professor", image: DrFrancis },
    { name: "Dr. Puneeth S", title: "Professor", image: DrPuneethS },
    { name: "Dr. Nithya", title: "Professor", image: DrNithya },
    { name: "Dr. Shashikala", title: "Professor", image: DrShashikala },
    { name: "Dr. Perisamy", title: "Professor", image: DrPerisamy },
    { name: "Dr. Deepa Nagalavi", title: "Professor", image: DrDeepaNagalavi },
    { name: "Dr. Selva Perumal", title: "Professor", image: DrSelvaPerumal },
    { name: "Dr. Manivannan", title: "Professor", image: DrManivannan },
    { name: "Dr. Shiv Kumar", title: "Professor", image: DrShivKumar },
];

const committees = [
  ...leadership.map((m) => ({ ...m, type: "Leadership" })),
  ...internationalCommitteeMembers.map((m) => ({ ...m, type: "International" })),
  ...nationalCommitteeMembers.map((m) => ({ ...m, type: "National" })),
  ...technicalProgramCommitteeMembers.map((m) => ({ ...m, type: "Technical" })),
];

const filters = ["Leadership", "International", "National", "Technical"];


export default function Committees() {
  const [activeFilter, setActiveFilter] = useState("Leadership");

  const filteredCommittees = committees.filter((c) => c.type === activeFilter);

  return (
    <div className="min-h-screen bg-black text-white bg-dot-white/[0.1]">
      <Navbar />
      
      {/* --- Hero Section --- */}
      <div className="relative h-[60vh] flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
        <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.15),transparent_60%)]"></div>
        
        <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            className="relative text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
        >
            Meet the Visionaries
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="relative mt-4 max-w-2xl text-base md:text-lg text-neutral-400"
        >
            The driving force behind ICRAC-2026. A collective of esteemed leaders and experts dedicated to advancing the future of technology.
        </motion.p>
      </div>

      {/* --- Animated Filter Tabs --- */}
      <div className="flex justify-center mb-12 px-4">
        <div className="flex space-x-2 p-1.5 bg-neutral-900/80 backdrop-blur-sm rounded-xl border border-white/10">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`relative px-4 py-2 text-sm font-semibold rounded-lg transition-colors ${
                activeFilter === filter ? "text-white" : "text-neutral-400 hover:text-white"
              }`}
            >
              {activeFilter === filter && (
                <motion.div
                  layoutId="active-filter-highlight"
                  className="absolute inset-0 bg-indigo-600/50 rounded-lg"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
              <span className="relative z-10">{filter}</span>
            </button>
          ))}
        </div>
      </div>

      {/* --- Committee Members Grid --- */}
      <motion.div
        layout
        className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-8 px-8 pb-24"
      >
        <AnimatePresence>
          {filteredCommittees.map((member) => (
            <motion.div
              key={member.name}
              layout
              initial={{ opacity: 0, y: 20, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.95 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="text-center"
            >
              <motion.div
                whileHover={{ scale: 1.03, y: -5 }}
                className="relative bg-neutral-900 p-4 rounded-2xl border border-white/10 group"
              >
                <div className="aspect-square rounded-lg overflow-hidden mb-4">
                  <img src={member.image} alt={member.name} className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-300" />
                </div>
                <h3 className="font-bold text-white text-base leading-tight">{member.name}</h3>
                <p className="text-neutral-400 text-xs mt-1">{member.title}</p>
              </motion.div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </div>
  );
}