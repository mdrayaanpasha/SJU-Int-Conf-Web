import { motion, useMotionValue, useTransform } from "framer-motion";
import { FiArrowDown } from "react-icons/fi";
import { SiFuturelearn } from "react-icons/si";
import { FaUniversity, FaLaptopCode } from "react-icons/fa";
import Navbar from "../components/ui/header"; // Assuming you still want these
// import { HeroGeometric } from "../components/ui/shape-landing-hero"; // No longer needed

// Content for the grid sections
const aboutContent = [
    {
        icon: <SiFuturelearn />,
        title: "ICRAC 2026",
        description: "The 2nd International Conference on Recent Trends in Advanced Computing is a premier global platform for researchers to share groundbreaking findings in Data Science and Computer Science, shaping the future of technology.",
        className: "md:col-span-2 md:row-span-2",
        bgColor: "bg-indigo-900/10",
        borderColor: "border-indigo-500/30",
    },
    {
        icon: <FaUniversity />,
        title: "St. Joseph's University",
        description: "Established in 1882, SJU is a Jesuit University at the heart of Bengaluru. It was inaugurated as India's first Public-Private-Partnership University in 2022.",
        className: "md:col-span-1 md:row-span-1",
        bgColor: "bg-rose-900/10",
        borderColor: "border-rose-500/30",
    },
    {
        icon: <FaLaptopCode />,
        title: "School of Information Technology",
        description: "With over 2000 students, SIT focuses on holistic learning in data analytics and computer science, boasting an exceptional and consistent placement record.",
        className: "md:col-span-1 md:row-span-1",
        bgColor: "bg-sky-900/10",
        borderColor: "border-sky-500/30",
    },
];

export default function About() {
    // For the interactive aurora background
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const backgroundX = useTransform(mouseX, [0, window.innerWidth], ["-25%", "25%"]);
    const backgroundY = useTransform(mouseY, [0, window.innerHeight], ["-25%", "25%"]);
    
    const handleMouseMove = (e:any) => {
        mouseX.set(e.clientX);
        mouseY.set(e.clientY);
    };

    return (
        <div onMouseMove={handleMouseMove} className="bg-neutral-950 text-white overflow-x-hidden">
            <Navbar />
            
            {/* Interactive Aurora Background */}
            <motion.div
                className="pointer-events-none fixed inset-0 z-0 opacity-20"
                style={{
                    background: `radial-gradient(400px at ${backgroundX} ${backgroundY}, rgba(129, 140, 248, 0.3), transparent 80%)`,
                }}
            />
            <motion.div
                 className="pointer-events-none fixed inset-0 z-0 opacity-20"
                style={{
                    background: `radial-gradient(500px at 80% 90%, rgba(225, 29, 72, 0.15), transparent 80%)`,
                }}
            />

            {/* --- New Hero Section --- */}
            <div className="relative h-screen flex flex-col items-center justify-center text-center px-4 z-10">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300"
                >
                    Vision. Legacy. Future.
                </motion.h1>
                <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
                    className="mt-4 max-w-2xl text-base md:text-lg text-neutral-400"
                >
                    Discover the driving forces behind ICRAC 2026—a convergence of pioneering research, academic excellence, and technological innovation.
                </motion.p>
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1, delay: 0.8 }}
                    className="absolute bottom-10"
                >
                    <FiArrowDown className="text-3xl text-neutral-500 animate-bounce" />
                </motion.div>
            </div>

            {/* --- New Bento Grid Layout --- */}
            <div className="relative min-h-screen py-24 px-4 sm:px-6 md:px-8 z-10">
                <div className="max-w-6xl mx-auto">
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.3 }}
                        transition={{ staggerChildren: 0.2 }}
                        className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-6"
                    >
                        {aboutContent.map((item, index) => (
                            <motion.div
                                key={index}
                                variants={{
                                    hidden: { opacity: 0, scale: 0.95 },
                                    visible: { opacity: 1, scale: 1, transition: { duration: 0.5 } }
                                }}
                                className={`group relative p-8 rounded-2xl border backdrop-blur-md overflow-hidden ${item.className} ${item.bgColor} ${item.borderColor}`}
                            >
                                {/* Subtle animated glow on hover */}
                                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                                <div className="relative z-10">
                                    <div className="text-3xl mb-4 text-white">
                                        {item.icon}
                                    </div>
                                    <h3 className="text-2xl font-bold mb-3 bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
                                        {item.title}
                                    </h3>
                                    <p className="text-neutral-300 leading-relaxed">
                                        {item.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </motion.div>
                </div>
            </div>
        </div>
    );
}