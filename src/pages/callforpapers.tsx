"use client";

import { motion, AnimatePresence } from "framer-motion";
import Navbar from "../components/ui/header";

const researchAreas = [
  {
    title: "Machine Learning and Deep Learning",
    description:
      "Innovations in Image processing, Signal Processing, reinforcement learning, computer vision, augmented reality, virtual reality. Computer Vision & Image Processing.",
  },
  {
    title: "Artificial Intelligence & Data Science",
    description:
      "AI and Healthcare data analytics, AI and business intelligence, bio informatics, and AI algorithms.",
  },
  {
    title: "Networks and Cyber Security",
    description:
      "Wireless networks, Internet of Things and big data applications, Network security and cryptography, blockchain.",
  },
  {
    title: "Data Mining and Cloud Computing",
    description: "Distributed computing, quantum computing, data mining, sustainable technologies.",
  },
  {
    title: "Fuzzy Logic and Mathematical Modelling",
    description:
      "Fuzzy graph Models, optimization-based mathematical modelling, predictive fuzzy systems, network analysis using graph theory, advanced optimization techniques through hybrid fuzzy, optimization frameworks for complex problem solving.",
  },
  {
    title: "Emerging Technologies",
    description:
      "Blockchain and Decentralized Applications, Edge and Fog Computing, Internet of Things (IoT) and Smart Systems, Human–Computer Interaction and Augmented Reality, Digital Twins and Simulation Technologies.",
  },
];

const additionalInfo = [
  {
    title: "Original Research",
    description: "All submissions must present original, unpublished research work",
    icon: "document",
  },
  {
    title: "Peer Review",
    description: "Rigorous peer review process by international experts",
    icon: "users",
  },
  {
    title: "Important Dates",
    description: "Check submission deadlines and conference dates",
    icon: "clock",
  },
];

export default function CallForPapers() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-neutral-950 text-white px-4 sm:px-6 md:px-8 py-12">
        {/* Header Section */}
        <motion.div
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto mb-12 mt-15"
        >
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text">
            CALL FOR PAPERS
          </h1>
          <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-300">
            ICRAC-2026
          </h2>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed">
            ICRAC-2026 solicits original research papers contributing to the foundations 
            and applications of Data Analytics, Machine Learning, Artificial Intelligence, 
            Computer Science and in the following broad areas, but are not limited to:
          </p>
        </motion.div>

        {/* Research Areas */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16"
        >
          <AnimatePresence>
            {researchAreas.map((area, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="bg-neutral-800 rounded-lg p-6 shadow-lg hover:shadow-cyan-500/20 transition-all border border-neutral-700 w-full"
              >
                <div className="flex items-center mb-4">
                  <motion.div
                    className="w-1 h-8 bg-gradient-to-b from-cyan-400 to-purple-500 mr-4 rounded"
                    initial={{ height: 0 }}
                    animate={{ height: 32 }}
                    transition={{ delay: 0.8 + index * 0.15, duration: 0.4, ease: "easeOut" }}
                  />
                  <motion.h3
                    className="text-xl font-bold text-cyan-400"
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.9 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                  >
                    {area.title}
                  </motion.h3>
                </div>
                <motion.p
                  className="text-gray-300 leading-relaxed text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  {area.description}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Call to Action Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.6, ease: "easeOut" }}
          className="max-w-4xl mx-auto bg-neutral-800 rounded-lg p-8 text-center border border-neutral-700 mb-12"
        >
          <motion.h3
            className="text-3xl font-bold mb-6 bg-gradient-to-r from-cyan-400 to-purple-500 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.8, duration: 0.5, ease: "easeOut" }}
          >
            Ready to Submit Your Research?
          </motion.h3>
          <motion.p
            className="text-gray-400 text-base sm:text-lg mb-8 leading-relaxed"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.0, duration: 0.5, ease: "easeOut" }}
          >
            Join researchers from around the world in advancing the frontiers of 
            technology and innovation. Share your groundbreaking work with the ICRAC-2026 community.
          </motion.p>
          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3.2, duration: 0.5, ease: "easeOut" }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-cyan-500 hover:bg-cyan-600 text-white font-semibold py-3 px-8 rounded-full transition-all shadow-lg shadow-cyan-500/40"
            >
              Submit Paper
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="border-2 border-purple-500 hover:bg-purple-500 text-purple-400 hover:text-white font-semibold py-3 px-8 rounded-full transition-all"
            >
              View Guidelines
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Additional Info Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5, duration: 0.5 }}
          layout
          className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          <AnimatePresence>
            {additionalInfo.map((info, index) => (
              <motion.div
                key={index}
                layout
                initial={{ opacity: 0, y: 30, scale: 0.9 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 30, scale: 0.9 }}
                transition={{ duration: 0.6, delay: 3.7 + index * 0.15, ease: "easeOut" }}
                whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                className="text-center p-6 bg-neutral-800 rounded-lg border border-neutral-700 w-full"
              >
                <motion.div
                  className="w-16 h-16 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 opacity-80"
                  initial={{ scale: 0, rotate: -180 }}
                  animate={{ scale: 1, rotate: 0 }}
                  transition={{ delay: 4.0 + index * 0.15, duration: 0.6, type: "spring", stiffness: 200 }}
                >{/*The svg here is generated with ai*/}
                  {info.icon === "document" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                      />
                    </svg>
                  )}
                  {info.icon === "users" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                      />
                    </svg>
                  )}
                  {info.icon === "clock" && (
                    <svg
                      className="w-8 h-8 text-white"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  )}
                </motion.div>
                <motion.h4
                  className="text-xl font-bold text-cyan-400 mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 4.2 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  {info.title}
                </motion.h4>
                <motion.p
                  className="text-gray-400 text-sm"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 4.4 + index * 0.15, duration: 0.5, ease: "easeOut" }}
                >
                  {info.description}
                </motion.p>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </>
  );
}