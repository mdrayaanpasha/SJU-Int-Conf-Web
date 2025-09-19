"use client";

import { motion } from "framer-motion";
import Navbar from "../components/ui/header";
import { FiMail, FiPhone, FiGlobe, FiMapPin } from "react-icons/fi";

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


export default function Contact() {
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
            Get In Touch
        </motion.h1>
        <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeInOut" }}
            className="relative mt-4 max-w-2xl text-base md:text-lg text-neutral-400"
        >
            We're here to help. Reach out with any questions or inquiries, and our team will get back to you shortly.
        </motion.p>
      </div>

      {/* --- Contact Details & Map Section --- */}
      <div className="py-16 px-4 sm:px-6 md:px-8">
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
    </div>
  );
}