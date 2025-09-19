import { motion } from "framer-motion";
import Navbar from "../components/ui/header";
import { HeroGeometric } from "../components/ui/shape-landing-hero";

export default function About() {
    const sectionVariants = {
        hidden: { opacity: 0, scale: 0.95, y: 50 },
        visible: {
            opacity: 1,
            scale: 1,
            y: 0,
            transition: {
                duration: 0.8,
                delay: 0,
                ease: [0.6, -0.05, 0.01, 0.9] as [number, number, number, number],
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, x: -20 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6,
                delay: 0,
                ease: "easeOut" as const,
            },
        },
    };

    return (
        <>
            <Navbar />
            <HeroGeometric
                badge="About ICRAC 2026"
                title1="Our Mission,"
                title2="Our Story"
            />

            <div className="min-h-screen bg-gradient-to-b from-neutral-950 via-neutral-900 to-neutral-950 text-white py-24 px-4 sm:px-6 md:px-8">
                <div className="max-w-6xl mx-auto">
                    {/* ICRAC 2026 Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                        custom={0}
                        className="relative mb-24 rounded-3xl bg-neutral-900/50 backdrop-blur-lg border border-cyan-500/20 p-8 shadow-2xl shadow-cyan-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 opacity-50 rounded-3xl" />
                        <motion.h2
                            variants={cardVariants}
                            custom={0}
                            className="relative text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 z-10"
                        >
                            ICRAC 2026
                        </motion.h2>
                        <motion.p
                            variants={cardVariants}
                            custom={1}
                            className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed z-10 relative"
                        >
                            The 2nd International Conference on Recent Trends in Advanced Computing (ICRAC)-2026 will be organized by the School of Information Technology, St. Joseph’s University, Bengaluru, Karnataka, India, during February 20-21, 2026 (Hybrid Mode). ICRAC-2026 continues the legacy of a premier global platform for researchers and practitioners to share groundbreaking research findings, innovative ideas, and practical experiences in the fields of Data Science and Computer Science fostering collaboration, advancing knowledge, and shaping the future of technology-driven solutions worldwide.
                        </motion.p>
                        <motion.p
                            variants={cardVariants}
                            custom={2}
                            className="text-gray-200 text-base md:text-lg leading-relaxed z-10 relative"
                        >
                            The conference proposes publishing research papers on advanced engineering, science and technology techniques, experimental analysis and theoretical reviews. This conference will serve as a platform for academicians, industrialists, and students to learn more about the latest technologies in data science. Selected papers at the conference will be considered for Scopus indexed conference proceedings.
                        </motion.p>
                    </motion.section>

                    {/* St. Joseph's University Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                        custom={1}
                        className="relative mb-24 rounded-3xl bg-neutral-900/50 backdrop-blur-lg border border-blue-500/20 p-8 shadow-2xl shadow-blue-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10 opacity-50 rounded-3xl" />
                        <motion.h2
                            variants={cardVariants}
                            custom={0}
                            className="relative text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-indigo-400 to-blue-300 z-10"
                        >
                            St. Joseph's University
                        </motion.h2>
                        <motion.p
                            variants={cardVariants}
                            custom={1}
                            className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed z-10 relative"
                        >
                            St. Joseph's University (SJU) is a Jesuit University at the heart of Bengaluru, the Silicon City of India established in 1882 by Paris Foreign Fathers, the college management was handed over to the Jesuit Order (Society of Jesus) in 1937. The college was first affiliated with the University of Madras and later with the Mysore and Bangalore Universities.
                        </motion.p>
                        <motion.p
                            variants={cardVariants}
                            custom={2}
                            className="text-gray-200 text-base md:text-lg leading-relaxed z-10 relative"
                        >
                            In 1986, St. Joseph's College became the first affiliated college in Karnataka to offer postgraduate courses. In 1988, it became the first college in Karnataka to get a research center, and in 2005, it was one of the five colleges in Karnataka that was awarded academic autonomy. In February 2021, the St. Joseph’s University bill was presented in the Karnataka Legislative Council. The college received its university status on 2nd July 2022 and was inaugurated as India's first Public-Private-Partnership University by the Hon'ble President of India, Smt. Droupadi Murmu on 27th September 2022.
                        </motion.p>
                    </motion.section>

                    {/* School of Information Technology Section */}
                    <motion.section
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true }}
                        variants={sectionVariants}
                        custom={2}
                        className="relative rounded-3xl bg-neutral-900/50 backdrop-blur-lg border border-emerald-500/20 p-8 shadow-2xl shadow-emerald-500/10"
                    >
                        <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/10 to-green-500/10 opacity-50 rounded-3xl" />
                        <motion.h2
                            variants={cardVariants}
                            custom={0}
                            className="relative text-4xl md:text-6xl font-extrabold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 via-green-400 to-teal-400 z-10"
                        >
                            School of Information Technology
                        </motion.h2>
                        <motion.p
                            variants={cardVariants}
                            custom={1}
                            className="text-gray-200 text-base md:text-lg mb-6 leading-relaxed z-10 relative"
                        >
                            The School of Information Technology (SIT) offers programs related to data analytics, computer science, computer applications, and domain-specific applications. SIT focuses on holistic learning that help students make major contributions to the IT industry and serve society at large.
                        </motion.p>
                        <motion.p
                            variants={cardVariants}
                            custom={2}
                            className="text-gray-200 text-base md:text-lg leading-relaxed z-10 relative"
                        >
                            The SIT has more than 2000 students and 40 committed faculty members, besides many visiting professors and working professionals from industry, research and development organizations. Faculty members are highly motivated to do pioneering research and excel in teaching and learning processes. They provide students with the opportunity to apply acquired knowledge to solve real-world problems and gain research experience. The placement record of SIT is always exceptional.
                        </motion.p>
                    </motion.section>
                </div>
            </div>
        </>
    );
}
