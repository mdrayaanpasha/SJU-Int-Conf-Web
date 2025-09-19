"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/ui/header";
import CommitteesCard from "../components/ui/committeescards";

const leadership = [
  { name: "Rev Fr Swebert D'Silva SJ ", title: "Chief Patron" },
  { name: "Rev Fr (Dr) Victor Lobo SJ ", title: "Patron" },
  { name: "Rev Fr Denzil Lobo SJ", title: "Conference Chair" },
  { name: "Dr A M Bojamma ", title: "Conference Chair" },
  { name: "Dr Jayati Bhadra", title: "Organizing Chair" },
  { name: "Dr Prashanthi B G", title: "Organizing Chair" },
  { name: "Dr Asha K", title: "Conference Convenor" },
  { name: "Dr Sanjay Dutta", title: "Conference Co-Convenor" },
  { name: "Dr Mrinmoyee Bhatacharya", title: "Conference Co-Convenor" },
];

const internationalCommitteeMembers = [
  {
    name: "Dr Shamala Subramaniam ",
    title: "Professor, Universiti of Putra, Malaysia",
  },
  {
    name: "Dr Shameer Khader",
    title: "Executive Director, Sanofi, Cambridge MA, USA",
  },
  { name: "Dr Sagnik Dakshit", title: "University of Texas at Tyler, USA" },
  {
    name: "Dr Xiao-Zhi Gao",
    title: "Professor, University of Eastern Finland.",
  },
];
const nationalCommitteeMembers = [
  { name: "Dr Srinivas Bhogle", title: "Scientist, CSIR Lab, Delhi" },
  {
    name: "Dr Monika Aggarwal",
    title: "Professor, Indian Institute of Technology, Delhi",
  },
  {
    name: "Dr Saurabh R Gandhi",
    title: "Indian Institute of Technology, Jodhpur.",
  },
  {
    name: "Dr Deepak D’Souza",
    title: "Professor Indian Institute of Science ,Bengaluru.",
  },
  {
    name: "Dr Narahari",
    title: "Professor Indian Institute of Science ,Bengaluru.",
  },
  {
    name: "Dr Jayanthi Sivaswamy",
    title:
      "Professor Emeritus, International Institute of Information Technology, Hyderabad.",
  },
  {
    name: "Dr Hanumanthappa",
    title: "Professor Bangalore University ,Bengaluru , Karnataka",
  },
  {
    name: "Dr Muralidhara B L",
    title: "Professor Bangalore University ,Bengaluru , Karnataka",
  },
  {
    name: "Dr Somashekara M T",
    title: "Professor Bangalore University ,Bengaluru , Karnataka",
  },
  {
    name: "Dr K A Venkatesh ",
    title: "Professor, Alliance University, Bengaluru",
  },
  {
    name: "Dr Madhu S Nair",
    title: "Professor, Cochin University of Science and Technology, Kerala.",
  },
  {
    name: "Dr. Piyush Kumar Pareek",
    title: "Professor  Nitte Meenakshi Institute of Technology, Bengaluru. ",
  },
  { name: "Dr Bhaskar Reddy", title: "Professor, S K University" },
];
const technicalProgramCommitteeMembers = [
  { name: "Dr. Shivakannan", title: "Professor" },
  { name: "Dr. Francis", title: "Professor" },
  { name: "Dr. Puneeth S", title: "Professor" },
  { name: "Dr. Nithya", title: "Professor" },
  { name: "Dr. Shashikala", title: "Professor" },
  { name: "Dr. Puneeth", title: "Professor" },
  { name: "Dr. Perisamy", title: "Professor" },
  { name: "Dr. Deepa Nagalavi", title: "Professor" },
  { name: "Dr. Selva Perumal", title: "Professor" },
  { name: "Dr. Manivannan", title: "Professor" },
  { name: "Dr. Shiv Kumar", title: "Professor" },
];

const committees = [
  ...leadership.map((m) => ({ ...m, type: "Leaderships" })),
  ...internationalCommitteeMembers.map((m) => ({
    ...m,
    type: "International",
  })),
  ...nationalCommitteeMembers.map((m) => ({ ...m, type: "National" })),
  ...technicalProgramCommitteeMembers.map((m) => ({ ...m, type: "Technical" })),
];

const filters = ["Leaderships", "International", "National", "Technical"];

export default function Committees() {
  const [activeFilter, setActiveFilter] = useState("Leaderships");

  const filteredCommittees = committees.filter((c) => c.type === activeFilter);

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 text-white px-4 sm:px-6 md:px-8 py-12">
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-12 mt-15"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            Our Committees
          </h1>
          <p className="text-gray-400 text-base sm:text-lg">
            Meet the experts who guide and shape our vision across national and
            international platforms.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="flex flex-wrap justify-center gap-3 mb-10"
        >
          {filters.map((filter) => (
            <motion.button
              key={filter}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 sm:px-5 py-2 rounded-full font-semibold transition-all text-sm sm:text-base
                ${
                  activeFilter === filter
                    ? "bg-cyan-500 text-white shadow-lg shadow-cyan-500/40"
                    : "bg-neutral-800 text-gray-300 hover:bg-neutral-700"
                }`}
            >
              {filter}
            </motion.button>
          ))}
        </motion.div>

        <motion.div
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {filteredCommittees.map((member, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="w-full"
              >
                <CommitteesCard name={member.name} title={member.title} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}
