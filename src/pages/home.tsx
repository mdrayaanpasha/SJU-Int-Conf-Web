import { HeroGeometric } from "../components/ui/shape-landing-hero";
import Navbar from "../components/ui/header";
import { Timeline } from "../components/ui/timeline";
import FeaturedSpeakersSection from "../components/ui/featured-section";
import CallForPapersComponent from "../components/ui/areas";
import { motion } from "framer-motion";
import { FiMail, FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";
import Footer from "../components/ui/footer";
// --- Contact Information ---
const contactDetails = [
  {
    icon: <FiMail />,
    title: "General Inquiries",
    contact: "icrac2026@gmail.com",
    href: "mailto:icrac2026@gmail.com",
  },
  {
    icon: <FiPhone />,
    title: "Phone Support",
    contact: "+91 9207483215 , +91 9774335503", // Added other numbers
    href: "tel:+919207483215",
  },
  {
    icon: <FiGlobe />,
    title: "Website",
    contact: "icrac2026.com", // Replace with your actual domain
    href: "#", // Replace with your actual URL
  },
];

const venue = {
    name: "St. Joseph's University",
    address: "36, Lal Bagh Main Rd, Bengaluru, Karnataka 560027",
    // OpenStreetMap URL for sharing/linking
    mapLink: "https://www.openstreetmap.org/?mlat=12.9616&mlon=77.5978#map=17/12.9616/77.5978",
};

export default function Home() {
 const data = [
  {
    title: "ICRAC 2026",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          The 2nd International Conference on Recent Trends in Advanced Computing (ICRAC 2026) 
          will be hosted by the School of Information Technology, St. Joseph’s University, 
          Bengaluru, Karnataka, India, on February 20–21, 2026, in Hybrid Mode.
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          ICRAC provides a global forum for researchers, industry professionals, and students to 
          exchange research, ideas, and practical insights in Data Science and Computer Science. 
          Selected papers will be considered for publication in Scopus-indexed proceedings.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://sju.edu.in/uploads/banners/banner/1625904120_2025-08-26_01-12-10.webp"
            alt="St. Joseph's University Campus"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://sju.edu.in/uploads/banners/banner/134513161_2025-08-25_09-03-29.webp"
            alt="ICRAC 2024 Session"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "St. Joseph’s University",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          Established in 1882, St. Joseph’s University in Bengaluru is a premier higher education 
          institution with a long tradition of academic excellence, social commitment, and innovation. 
          Recognised by the UGC, it offers diverse programmes in Arts, Science, Commerce, and Technology.
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          The university has been accredited with the highest grades by NAAC and fosters a dynamic 
          environment that blends global perspectives with local values.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://sju.edu.in/uploads/banners/banner/1576666974_2025-08-25_08-59-47.webp"
            alt="St. Joseph's University Main Building"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://www.sju.edu.in/uploads/course/medium/2134136033_2024-08-05_08-53-02.jpg"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
  {
    title: "School of Information Technology",
    content: (
      <div>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          The School of IT at St. Joseph’s University is dedicated to fostering research, innovation, 
          and excellence in computer science and technology. It offers undergraduate, postgraduate, 
          and research programmes tailored to meet industry demands and emerging trends.
        </p>
        <p className="text-white text-xs md:text-sm font-normal mb-8">
          With state-of-the-art labs, industry collaborations, and experienced faculty, the school 
          empowers students with the skills and knowledge to excel in areas such as AI, Data Science, 
          Cybersecurity, and Cloud Computing.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img
            src="https://sju.edu.in/library/uploads/news/medium/5.png"
            alt="School of IT Lab"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
          <img
            src="https://www.sju.edu.in/uploads/photogallery/medium/1520280259_2023-05-18_11-52-40.jpg"
            alt="IT Conference at SoIT"
            width={500}
            height={500}
            className="rounded-lg object-cover h-20 md:h-44 lg:h-60 w-full shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
          />
        </div>
      </div>
    ),
  },
];


  return (
    <>
      <Navbar />
      <HeroGeometric badge="ICRAC 2026" title1="Elevate Your" title2="Tech Vision" />
        <Timeline data={data} />
        <FeaturedSpeakersSection/>
        <CallForPapersComponent />
        <div className="bg-black py-16 px-4 sm:px-6 md:px-8">
                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        
                  {/* Contact Cards */}
                  <motion.div 
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ staggerChildren: 0.15 }}
                    className="w-full flex flex-col gap-6"
                  >
                    <h2 className="text-3xl font-bold text-white mb-4">Contact Information</h2>
                    {contactDetails.map((item) => (
                      <motion.a
                        key={item.title}
                        href={item.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        variants={{
                            hidden: { opacity: 0, x: -30 },
                            visible: { opacity: 1, x: 0 }
                        }}
                        whileHover={{ scale: 1.02 }}
                        className="flex items-center gap-6 p-6 bg-neutral-900/ ৫০ border border-white/10 rounded-2xl transition-all hover:border-indigo-500/50 hover:bg-neutral-900"
                      >
                        <div className="text-2xl text-indigo-400">{item.icon}</div>
                        <div>
                          <h3 className="font-semibold text-white">{item.title}</h3>
                          <p className="text-neutral-400 text-sm mt-1">{item.contact}</p>
                        </div>
                      </motion.a>
                    ))}
                  </motion.div>
        
                  {/* --- Map Section (Now using OpenStreetMap) --- */}
                  <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.3 }}
                    transition={{ duration: 0.7 }}
                    className="w-full h-[500px] lg:h-full p-6 bg-neutral-900/50 border border-white/10 rounded-2xl"
                  >
                    <div className="flex items-center gap-3 mb-4">
                      <FiMapPin className="text-rose-400 text-2xl"/>
                      <div>
                        <h3 className="font-semibold text-white">{venue.name}</h3>
                        <p className="text-neutral-500 text-xs">{venue.address}</p>
                      </div>
                    </div>
                    <a href={venue.mapLink} target="_blank" rel="noopener noreferrer" className="block w-full h-[calc(100%-52px)] rounded-lg overflow-hidden group">
                      <iframe
                        title="OpenStreetMap Location"
                        width="100%"
                        height="100%"
                        style={{ border: 0 }}
                        loading="lazy"
                        src="https://www.openstreetmap.org/export/embed.html?bbox=77.5951,12.9599,77.6005,12.9633&amp;layer=mapnik&amp;marker=12.9616,77.5978"
                        className="grayscale group-hover:grayscale-0 transition-all duration-300"
                      ></iframe>
                    </a>
                  </motion.div>
        
                </div>
        </div>
        <Footer></Footer>
      
    </>
  );
}
