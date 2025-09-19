"use client";

import { motion, useMotionValue, useTransform } from "framer-motion";
import Navbar from "../components/ui/header";
import { FiFileText, FiUsers, FiClock, FiCpu, FiGitMerge, FiLock, FiCloud, FiDivideCircle, FiPackage } from "react-icons/fi";

const researchAreas = [
    {
        icon: <FiGitMerge />,
        title: "Machine Learning & Deep Learning",
        description: "Innovations in image processing, reinforcement learning, computer vision, AR/VR, and signal processing.",
    },
    {
        icon: <FiCpu />,
        title: "Artificial Intelligence & Data Science",
        description: "AI in healthcare, business intelligence, bioinformatics, and advanced AI algorithms.",
    },
    {
        icon: <FiLock />,
        title: "Networks & Cyber Security",
        description: "Wireless networks, IoT applications, network security, cryptography, and blockchain technologies.",
    },
    {
        icon: <FiCloud />,
        title: "Data Mining & Cloud Computing",
        description: "Distributed computing, quantum computing, large-scale data mining, and sustainable technologies.",
    },
    {
        icon: <FiDivideCircle />,
        title: "Fuzzy Logic & Mathematical Modelling",
        description: "Fuzzy graph models, optimization-based modelling, predictive fuzzy systems, and hybrid optimization frameworks.",
    },
    {
        icon: <FiPackage />,
        title: "Emerging Technologies",
        description: "Blockchain, Edge/Fog Computing, Smart Systems, HCI, Augmented Reality, and Digital Twins.",
    },
];

const additionalInfo = [
    {
        title: "Original Research",
        description: "Submissions must present original, unpublished work.",
        icon: <FiFileText />,
    },
    {
        title: "Peer Review",
        description: "A rigorous review process by international experts.",
        icon: <FiUsers />,
    },
    {
        title: "Important Dates",
        description: "Submission deadline is 15th December 2025.",
        icon: <FiClock />,
    },
];

// A new component for the "good looking" static card with a spotlight hover effect
const ResearchCard = ({ icon, title, description }:any) => {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const handleMouseMove = ({ currentTarget, clientX, clientY }:any) => {
        const { left, top } = currentTarget.getBoundingClientRect();
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    };
    
    // Create a radial gradient style that follows the mouse
    const spotlightStyle = useTransform(
        [mouseX, mouseY],
        ([x, y]) => `radial-gradient(circle at ${x}px ${y}px, rgba(139, 92, 246, 0.15), transparent 80%)`
    );

    return (
        <motion.div
            onMouseMove={handleMouseMove}
            onMouseLeave={() => { mouseX.set(150); mouseY.set(150); }}
            className="relative p-8 h-full bg-neutral-900/50 border border-white/10 rounded-2xl overflow-hidden"
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 }
            }}
        >
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 transition-opacity duration-300"
                style={{ background: spotlightStyle }}
            />
            <div className="text-4xl text-indigo-300 mb-4">{icon}</div>
            <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
            <p className="text-neutral-400 text-sm leading-relaxed">{description}</p>
        </motion.div>
    );
};


export default function CallForPapers() {
    return (
        <div className="min-h-screen bg-black text-white bg-dot-white/[0.1]">
            <Navbar />
            
            {/* --- Hero Section --- */}
            <div className="relative h-[80vh] flex flex-col items-center justify-center text-center px-4 z-10 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-b from-black via-black/80 to-transparent z-0"></div>
                <div className="absolute pointer-events-none inset-0 bg-[radial-gradient(ellipse_at_center,rgba(129,140,248,0.15),transparent_60%)]"></div>
                
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="relative text-5xl md:text-7xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                >
                    Call For Papers
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="relative mt-4 max-w-3xl text-base md:text-lg text-neutral-400"
                >
                    ICRAC-2026 invites original research papers on the foundations and applications of modern computing. Share your work and shape the future of technology.
                </motion.p>
            </div>

            {/* --- Static Card Grid Section for Research Areas --- */}
            <div className="w-full py-24 px-4 sm:px-6 md:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.8 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-3xl md:text-4xl font-bold text-neutral-200">Research Areas</h2>
                    <p className="text-neutral-400 mt-2">We invite submissions across a range of cutting-edge topics.</p>
                </motion.div>
                
                <motion.div
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.1 }}
                    className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {researchAreas.map((area, index) => (
                        <ResearchCard key={index} {...area} />
                    ))}
                </motion.div>
            </div>

            {/* --- Key Info & CTA Section --- */}
            <div className="py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-5xl mx-auto text-center">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16"
                    >
                        {additionalInfo.map((info, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, y: 20 },
                                    visible: { opacity: 1, y: 0 }
                                }}
                                className="p-6 bg-neutral-900/50 border border-white/10 rounded-xl"
                            >
                                <div className="text-rose-400 text-4xl mb-4 inline-block">{info.icon}</div>
                                <h4 className="text-xl font-semibold text-white mb-2">{info.title}</h4>
                                <p className="text-neutral-400 text-sm">{info.description}</p>
                            </motion.div>
                        ))}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-3xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                            Ready to Contribute?
                        </h3>
                        <p className="text-neutral-400 max-w-2xl mx-auto mb-8">
                            Join us in advancing the frontiers of technology. We look forward to your innovative contributions.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold py-3 px-8 rounded-lg transition-all shadow-lg shadow-indigo-500/30"
                            >
                                Submit Your Paper
                            </motion.button>
                            <motion.button
                                whileHover={{ scale: 1.05, y: -2 }}
                                whileTap={{ scale: 0.95 }}
                                className="bg-transparent border-2 border-neutral-600 hover:border-white text-white font-semibold py-3 px-8 rounded-lg transition-all"
                            >
                                View Guidelines
                            </motion.button>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    );
}