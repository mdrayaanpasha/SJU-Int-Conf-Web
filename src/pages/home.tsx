import { HeroGeometric } from "../components/ui/shape-landing-hero";
import Navbar from "../components/ui/header";
import { Timeline } from "../components/ui/timeline";

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
      
    </>
  );
}
