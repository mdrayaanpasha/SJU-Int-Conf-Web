
// --- SVG Icon Components for Visual Enhancement ---
const BrainCircuitIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 5a3 3 0 1 0-5.993.142"/><path d="M18 5a3 3 0 1 0-5.993.142"/><path d="M12 19a3 3 0 1 0 5.993-.142"/><path d="M6 19a3 3 0 1 0 5.993-.142"/><path d="M12 12a3 3 0 1 0-5.993.142"/><path d="M18 12a3 3 0 1 0-5.993.142"/><path d="M12 5a3 3 0 1 0-5.993.142"/><path d="m14.5 6.5 1-1"/><path d="m7.5 6.5-1-1"/><path d="m14.5 17.5 1 1"/><path d="m7.5 17.5-1 1"/><path d="M6 12H5"/><path d="M18 12h1"/><path d="M12 19v1"/><path d="M12 5V4"/></svg>
);
const ChartBarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M3 3v18h18"/><path d="M7 12v4h4v-4Z"/><path d="M12 8v8h4V8Z"/><path d="M17 4v12h4V4Z"/></svg>
);
const ShieldCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
);
const CloudDataIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 16.5V22"/><path d="M20 14.5V22"/><path d="M8 19h.01"/><path d="M12 17h.01"/><path d="M4.6 11.2A5.5 5.5 0 0 1 15 8.6V8a4 4 0 0 0-8 0c0 .9.3 1.8.8 2.5"/><path d="M12.5 14.5A2.5 2.5 0 0 0 15 12a2.5 2.5 0 0 0-2.5-2.5c-1 0-1.9.6-2.3 1.5"/><path d="M20 17.8a2.4 2.4 0 0 0-2.2-2.3"/><path d="M16 14.5a2.4 2.4 0 0 0-2.2-2.3"/></svg>
);
const FunctionIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M5 12h14"/><path d="M5 12L9 8"/><path d="M5 12L9 16"/><path d="M19 12l-4 4"/><path d="M19 12l-4-4"/><path d="M12 19s-2-3-2-5 2-5 2-5"/><path d="M12 5s2 3 2 5-2 5-2 5"/></svg>
);
const SparklesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/><path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/></svg>
);
const ClipboardCheckIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="8" height="4" x="8" y="2" rx="1" ry="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/></svg>
);
const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><rect width="18" height="18" x="3" y="4" rx="2" ry="2"/><line x1="16" x2="16" y1="2" y2="6"/><line x1="8" x2="8" y1="2" y2="6"/><line x1="3" x2="21" y1="10" y2="10"/></svg>
);


// --- Updated researchAreas with icons ---
const researchAreas = [
  {
    icon: <BrainCircuitIcon className="h-8 w-8 text-sky-500" />,
    title: "Machine Learning & Deep Learning",
    description: "Innovations in image processing, reinforcement learning, computer vision, AR/VR, and signal processing.",
  },
  {
    icon: <ChartBarIcon className="h-8 w-8 text-sky-500" />,
    title: "Artificial Intelligence & Data Science",
    description: "AI in healthcare, business intelligence, bioinformatics, and advanced AI algorithms.",
  },
  {
    icon: <ShieldCheckIcon className="h-8 w-8 text-sky-500" />,
    title: "Networks & Cyber Security",
    description: "Wireless networks, IoT applications, network security, cryptography, and blockchain technologies.",
  },
  {
    icon: <CloudDataIcon className="h-8 w-8 text-sky-500" />,
    title: "Data Mining & Cloud Computing",
    description: "Distributed computing, quantum computing, large-scale data mining, and sustainable technologies.",
  },
  {
    icon: <FunctionIcon className="h-8 w-8 text-sky-500" />,
    title: "Fuzzy Logic & Mathematical Modelling",
    description: "Fuzzy graph models, optimization-based modelling, predictive fuzzy systems, and hybrid optimization.",
  },
  {
    icon: <SparklesIcon className="h-8 w-8 text-sky-500" />,
    title: "Emerging Technologies",
    description: "Blockchain, Edge/Fog Computing, Smart Systems, HCI, Augmented Reality, and Digital Twins.",
  },
];


export default function CallForPapersComponent() {
  return (
    <section id="call-for-papers"className="bg-white text-slate-800 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- Header Section --- */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-sky-600 to-cyan-500">
            Call For Papers
          </h2>
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-slate-600">
            ICRAC-2026 invites original, unpublished research on the foundations and applications of modern computing. Share your work and shape the future of technology.
          </p>
        </div>

        {/* --- Research Areas Grid --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
          {researchAreas.map((area) => (
            // REFACTORED CARD: Added icon and improved structure
            <div key={area.title} className="bg-slate-50 border border-slate-200/80 rounded-xl p-6 transition-all duration-300 hover:shadow-xl hover:border-sky-300 hover:-translate-y-1">
              <div className="mb-4">
                {area.icon}
              </div>
              <h3 className="text-lg sm:text-xl font-bold text-slate-900">{area.title}</h3>
              <p className="mt-2 text-slate-600 text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        {/* --- Important Dates & Submission Info --- */}
        <div className="bg-slate-100/70 border border-slate-200/80 rounded-xl p-8 mb-12 md:mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
                {/* REFACTORED INFO BLOCK: Now a two-column grid with icons */}
                <div className="flex items-start gap-4">
                    <ClipboardCheckIcon className="h-8 w-8 text-sky-500 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-slate-900">Rigorous Peer Review</h4>
                        <p className="text-sm text-slate-600 mt-1">Submissions must be original and will be reviewed by international experts.</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <CalendarIcon className="h-8 w-8 text-sky-500 flex-shrink-0 mt-1" />
                    <div>
                        <h4 className="text-lg font-semibold text-slate-900">Submission Deadline</h4>
                        <p className="mt-1 text-base sm:text-lg font-mono bg-sky-100 text-sky-800 px-3 py-1 rounded-md inline-block">
                            15th December 2025
                        </p>
                    </div>
                </div>
            </div>
        </div>


        {/* --- Final Call to Action --- */}
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold text-slate-900">Ready to Contribute?</h3>
          <p className="mt-2 max-w-2xl mx-auto text-base text-slate-600">
            Join us in advancing the frontiers of technology. We look forward to your innovative contributions.
          </p>
          <a
            href="#submit"
            className="inline-block mt-8 bg-gradient-to-r from-sky-500 to-cyan-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-lg shadow-sky-500/30"
          >
            Submit Paper
          </a>
        </div>

      </div>
    </section>
  );
}

