import React, { memo } from "react";
import { motion } from "framer-motion";
import { Star, ChevronRight, User, Award, Layers, Globe } from "lucide-react";
// Assuming you have a Navbar and Footer component, otherwise we can inline them
import { Navbar,Footer } from "./home";

// --- TYPES ---
interface CommitteeMember {
  name: string;
  affiliation: string;
  image?: string; // Optional: URL to image
}

interface CommitteeCategory {
  title: string;
  icon: React.ElementType;
  members: CommitteeMember[];
}

// --- DATA: FILL YOUR MEMBERS HERE ---
const committeeData: CommitteeCategory[] = [
  {
    title: "Chief Patrons",
    icon: Award,
    members: [
      { name: "Rev. Dr. Victor Lobo SJ", affiliation: "Vice Chancellor, St. Joseph’s University" },
    ],
  },
  {
    title: "Patrons",
    icon: Star,
    members: [
      { name: "Dr Syed Wajeed ", affiliation: "Registrar, St. Joseph’s University" },
      { name: "Rev. Fr. Denzil Lobo SJ", affiliation: "Director of IT, SJU" },
    ],
  },
  {
    title: "General Chairs",
    icon: Layers,
    members: [
      { name: "Dr.", affiliation: "Dean, School of IT, SJU" },
      { name: "Dr. Sasikumar M", affiliation: "Professor, IIT Roorkee" },
    ],
  },
  {
    title: "Advisory Committee",
    icon: Globe,
    members: [
      { name: "Dr. Narahari", affiliation: "Professor, IISc, Bengaluru" },
      { name: "Dr. Deepak D'Souza", affiliation: "Professor, IISc, Bengaluru" },
      { name: "Dr. Shamala Subramaniam", affiliation: "Universiti of Putra, Malaysia" },
      { name: "Dr. Xiao-Zhi Gao", affiliation: "University of Eastern Finland" },
      { name: "Dr. Madhu S Nair", affiliation: "CUSAT, Kerala" },
      { name: "Dr. Srinivas Bhogle", affiliation: "CSIR Lab, Delhi" },
    ],
  },
  {
    title: "Organizing Committee",
    icon: User,
    members: [
      { name: "Prof. Johnson", affiliation: "St. Joseph’s University" },
      { name: "Prof. Rekha", affiliation: "St. Joseph’s University" },
      { name: "Prof. Karthik", affiliation: "St. Joseph’s University" },
      { name: "Prof. Sarah", affiliation: "St. Joseph’s University" },
    ],
  },
];

// --- COMPONENTS ---

const HeaderInfo = memo(() => (
  <div className="text-center pb-12 pt-4 px-4">
    <motion.h3 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      className="text-electric-300 font-bold tracking-widest text-xs md:text-sm uppercase mb-2"
    >
      St. Joseph’s University, Bengaluru
    </motion.h3>
    <motion.p 
      initial={{ opacity: 0 }} 
      animate={{ opacity: 1 }}
      transition={{ delay: 0.1 }}
      className="text-white/60 text-xs md:text-sm max-w-2xl mx-auto"
    >
      A Public-Private Partnership University under RUSA 2.0 of MHRD (GOI)
    </motion.p>
  </div>
));

const MemberCard: React.FC<{ member: CommitteeMember; index: number }> = memo(({ member, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5 }}
    className="group relative bg-white rounded-2xl p-6 border border-neutral-100 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    {/* Gradient Border Bottom */}
    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 rounded-b-2xl" />
    
    <div className="flex items-start gap-4">
      {/* Avatar / Icon */}
      <div className="shrink-0 w-12 h-12 rounded-xl bg-gradient-to-br from-electric-50 to-violet-50 flex items-center justify-center text-electric-600 group-hover:bg-electric-500 group-hover:text-white transition-colors duration-300">
        {member.image ? (
          <img src={member.image} alt={member.name} className="w-full h-full object-cover rounded-xl" />
        ) : (
          <User size={20} />
        )}
      </div>
      
      {/* Details */}
      <div>
        <h4 className="text-lg font-bold text-neutral-900 group-hover:text-electric-700 transition-colors leading-tight mb-1">
          {member.name}
        </h4>
        <p className="text-sm text-neutral-500 font-medium leading-relaxed">
          {member.affiliation}
        </p>
      </div>
    </div>
  </motion.div>
));

const CategorySection: React.FC<{ category: CommitteeCategory; index: number }> = memo(({ category, index }) => {
  const Icon = category.icon;
  return (
    <div className="mb-20 last:mb-0">
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-4 mb-8"
      >
        <div className="p-3 rounded-2xl bg-gradient-to-br from-electric-500 to-violet-600 text-white shadow-lg">
          <Icon size={24} />
        </div>
        <h2 className="text-3xl md:text-4xl font-black text-neutral-900 tracking-tight">
          {category.title}
        </h2>
        <div className="h-px flex-grow bg-gradient-to-r from-neutral-200 to-transparent ml-4" />
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {category.members.map((member, idx) => (
          <MemberCard key={`${member.name}-${idx}`} member={member} index={idx} />
        ))}
      </div>
    </div>
  );
});

export default function CommitteesPage() {
  // Using simplified state for navbar toggle just for structure
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white">
      {/* Reuse your existing Navbar here */}
      <Navbar isOpen={isOpen} onToggle={() => setIsOpen(!isOpen)} scrolled={true} />

      <main className="pt-24">
        {/* HERO SECTION */}
        <section className="relative bg-gradient-to-br from-neutral-900 via-electric-900 to-violet-900 py-20 overflow-hidden">
          {/* Background Decor */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-electric-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-violet-500/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <HeaderInfo />
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <div className="inline-flex items-center gap-3 text-electric-400 font-bold text-sm uppercase tracking-widest mb-4 bg-white/5 border border-white/10 rounded-full px-4 py-1 backdrop-blur-md">
                <Star size={14} /> ICRAC 2026 Committee
              </div>
              <h1 className="text-5xl md:text-7xl font-black text-white mb-6 tracking-tight">
                Leadership & <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-400 to-violet-400">Vision</span>
              </h1>
              <p className="text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                The distinguished academics, researchers, and industry leaders guiding the 2nd International Conference on Recent Trends in Advanced Computing.
              </p>
            </motion.div>
          </div>
        </section>

        {/* COMMITTEE LIST SECTION */}
        <section className="relative py-24 bg-gradient-to-b from-white to-neutral-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            {committeeData.map((category, index) => (
              <CategorySection key={category.title} category={category} index={index} />
            ))}
          </div>
        </section>

        {/* JOIN CTA */}
        <section className="py-20 bg-white border-t border-neutral-100">
          <div className="max-w-4xl mx-auto text-center px-4">
            <h2 className="text-3xl font-bold text-neutral-900 mb-6">Want to be part of the committee?</h2>
            <p className="text-neutral-600 mb-8 text-lg">
              We are always looking for dedicated reviewers and session chairs to join our growing community.
            </p>
            <motion.a 
              href="#contact" 
              className="inline-flex items-center gap-2 bg-neutral-900 text-white font-bold py-4 px-8 rounded-2xl hover:bg-electric-600 transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Contact Organizing Chair <ChevronRight size={20} />
            </motion.a>
          </div>
        </section>
      </main>

      {/* Reuse your existing Footer here */}
      <Footer />
    </div>
  );
}