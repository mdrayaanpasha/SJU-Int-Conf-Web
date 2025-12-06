// Converted to TSX
import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Users,
  Cpu,
  Monitor,
  Megaphone,
  DollarSign,
  Coffee,
  Globe,
  Server,
  MapPin,
  Heart,
  Award,
  FileText,
  Mic,
  Star,
  ChevronRight,
  ShieldCheck,
  ClipboardList
} from "lucide-react";

import { Navbar, Footer } from "../pages/home";

type Committee = {
  title: string;
  icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  members: string[];
};

const committeesData: Committee[] = [
  {
    title: "Technical Program Committee",
    icon: Cpu,
    members: [
      "Dr. Francis Densil Raj (Coordinator)",
      "Dr. Sanjay (Coordinator)",
      "Dr. Sivakannan S",
      "Dr. Asha K",
      "Dr. Puneeth S",
      "Dr. B Nithya",
      "Dr. Mrinmoyee",
      "Dr. Shashikala",
      "Dr. Annie Syrien",
      "Dr. Puneeth Kumar B S",
      "Dr. Deepa Nagalavi",
      "Dr. Periyasamy P",
      "Dr. Manivannan T",
      "Dr. P Selvaperumal",
      "Dr. Shiv Kumar",
      "Dr. Harish"
    ]
  },
  {
    title: "Session Track Monitoring",
    icon: Monitor,
    members: [
      "Dr. Mrinmoyee (Sending acceptance)",
      "Dr. Sanjay (Plagiarism check)",
      "Dr. Asha (Model slides)"
    ]
  },
  {
    title: "Registration Committee",
    icon: ClipboardList,
    members: [
      "Ms. Jeshma (Coordinator)",
      "Ms. Sruthi Surendran P",
      "Dr. Deepa Nagalavi (Online registration)"
    ]
  },
  {
    title: "Publicity & Certificate",
    icon: Megaphone,
    members: [
      "Mr. Melwyn Amrithraj (Coordinator)",
      "Ms. Saranya M",
      "Ms. Shalini S"
    ]
  },
  {
    title: "Finance Committee",
    icon: DollarSign,
    members: [
      "Dr. Shashikala",
      "Ms. Jeshma Nishitha Dsouza (Coordinator)",
      "Ms. Pooja A"
    ]
  },
  {
    title: "Hospitality Committee",
    icon: Coffee,
    members: [
      "Mr. Selwyn Paul (Coordinator)",
      "Mr. Mueen Pasha",
      "Ms. Junaida"
    ]
  },
  {
    title: "Brochure & Website",
    icon: Globe,
    members: ["Mr. Aaran Lawrence (Coordinator)", "Dr. Manivannan", "Mr. Anand"]
  },
  {
    title: "IT & Infrastructure",
    icon: Server,
    members: [
      "Dr. Puneeth Kumar B S (Coordinator)",
      "Dr. Francis Densil Raj",
      "Ms. Banu M"
    ]
  },
  {
    title: "Venue & Logistics",
    icon: MapPin,
    members: ["Ms. Sara Kutty (Coordinator)", "Dr. Puneeth S"]
  },
  {
    title: "Volunteer Management",
    icon: Heart,
    members: ["Mr. Prasad C N (Coordinator)", "Mr. Timothy Paul"]
  },
  {
    title: "Sponsorship & Exhibition",
    icon: Award,
    members: [
      "Dr. Annie Syrien (Coordinator)",
      "Mr. Prem Sagar",
      "Dr. Jayati Bhadra",
      "Dr. Prashanthi",
      "Dr. Mrinmoyee"
    ]
  },
  {
    title: "Feedback & Evaluation",
    icon: ShieldCheck,
    members: ["Ms. Mary Merline Rani (Coordinator)", "Dr. Sivakannan S", "Dr. Periyasamy"]
  },
  {
    title: "Inauguration & Valedictory",
    icon: Mic,
    members: ["Ms. Sandhya N (Coordinator)", "Mr. Aaran Lawrence", "Ms. Prakruthi Thapa"]
  },
  {
    title: "Food & Refreshments",
    icon: Coffee,
    members: ["Dr. Puneeth S (Coordinator)", "Mr. Selwyn Paul"]
  },
  {
    title: "Documentation",
    icon: FileText,
    members: ["Ms. Prakruthi Thapa (Coordinator)", "Ms. Pooja A", "Ms. Junaida"]
  },
  {
    title: "Resource Persons",
    icon: Users,
    members: ["Core Committee"]
  }
];

type CommitteeCardProps = Committee & { index: number };

const CommitteeCard: React.FC<CommitteeCardProps> = ({ title, icon: Icon, members, index }) => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.05 }}
    whileHover={{ y: -5 }}
    className="group relative bg-white rounded-3xl p-6 md:p-8 border border-neutral-200 shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300"
  >
    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-electric-50 to-violet-50 rounded-bl-full opacity-50 group-hover:scale-110 transition-transform duration-500" />

    <div className="relative z-10">
      <div className="flex items-center gap-4 mb-6">
        <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-electric-500 to-violet-600 flex items-center justify-center shadow-lg group-hover:rotate-6 transition-transform duration-300">
          <Icon className="text-white w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-neutral-900 leading-tight group-hover:text-electric-600 transition-colors">
          {title}
        </h3>
      </div>

      <ul className="space-y-3">
        {members.map((member, i) => {
          const isCoordinator = member.toLowerCase().includes("coordinator");
          const [name] = member.split("(");

          return (
            <li key={i} className="flex items-start gap-3 text-sm md:text-base text-neutral-600">
              <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-electric-400 shrink-0" />
              <span className={isCoordinator ? "font-bold text-neutral-800" : ""}>
                {isCoordinator ? (
                  <>
                    {name}
                    <span className="text-electric-600 text-xs font-bold uppercase tracking-wider ml-1 block sm:inline sm:ml-2">
                      (Coordinator)
                    </span>
                  </>
                ) : (
                  member
                )}
              </span>
            </li>
          );
        })}
      </ul>
    </div>

    <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-electric-500 to-violet-600 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500" />
  </motion.div>
);

const CommitteesPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans selection:bg-electric-200 selection:text-electric-900">
      <Navbar isOpen={isOpen} onToggle={toggleMenu} scrolled={scrolled} />

      <section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-neutral-900">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-electric-600/20 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-violet-600/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/2"></div>
          <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 text-electric-400 font-bold text-sm uppercase tracking-[0.2em] mb-6"
          >
            <Star className="w-4 h-4" />
            <span>Behind the Scenes</span>
            <Star className="w-4 h-4" />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-7xl font-black text-white tracking-tight mb-8"
          >
            Committee <span className="bg-gradient-to-r from-electric-400 to-violet-400 bg-clip-text text-transparent">Members</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="max-w-2xl mx-auto text-xl text-neutral-400 leading-relaxed"
          >
            The dedicated team of professors, experts, and volunteers working tirelessly to make ICRAC 2026 a grand success.
          </motion.p>
        </div>
      </section>

      <section className="relative py-20 md:py-32 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-16 text-center">
            <h2 className="text-3xl md:text-4xl font-black text-neutral-900 mb-4">Core Organizing Teams</h2>
            <div className="w-24 h-1.5 bg-gradient-to-r from-electric-500 to-violet-600 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {committeesData.map((committee, index) => (
              <CommitteeCard key={index} index={index} {...committee} />
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mt-24 bg-neutral-900 rounded-3xl p-8 md:p-12 text-center relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-electric-500/20 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>

            <div className="relative z-10">
              <h2 className="text-3xl md:text-4xl font-black text-white mb-6">Interested in Volunteering?</h2>
              <p className="text-neutral-400 text-lg mb-8 max-w-2xl mx-auto">
                Be a part of this prestigious international conference. Join us in organizing events, managing logistics, and guiding participants.
              </p>
              <a href="#contact" className="inline-flex items-center gap-2 bg-white text-neutral-900 px-8 py-4 rounded-xl font-bold hover:bg-electric-50 transition-colors">
                Contact Us
                <ChevronRight className="w-5 h-5" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CommitteesPage;
