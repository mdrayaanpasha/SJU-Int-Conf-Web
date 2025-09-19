// --- The researchAreas array remains the same ---
const researchAreas = [
  {
    title: "Machine Learning & Deep Learning",
    description: "Innovations in image processing, reinforcement learning, computer vision, AR/VR, and signal processing.",
  },
  {
    title: "Artificial Intelligence & Data Science",
    description: "AI in healthcare, business intelligence, bioinformatics, and advanced AI algorithms.",
  },
  {
    title: "Networks & Cyber Security",
    description: "Wireless networks, IoT applications, network security, cryptography, and blockchain technologies.",
  },
  {
    title: "Data Mining & Cloud Computing",
    description: "Distributed computing, quantum computing, large-scale data mining, and sustainable technologies.",
  },
  {
    title: "Fuzzy Logic & Mathematical Modelling",
    description: "Fuzzy graph models, optimization-based modelling, predictive fuzzy systems, and hybrid optimization.",
  },
  {
    title: "Emerging Technologies",
    description: "Blockchain, Edge/Fog Computing, Smart Systems, HCI, Augmented Reality, and Digital Twins.",
  },
];


export default function CallForPapersComponent() {
  return (
    // ADJUSTED: Vertical padding is now responsive
    <section className="bg-black text-neutral-300 py-16 md:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">

        {/* --- Header Section --- */}
        {/* ADJUSTED: Bottom margin is now responsive */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-black tracking-tighter bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 via-white/90 to-rose-300">
            Call For Papers
          </h2>
          {/* ADJUSTED: Font size is now responsive */}
          <p className="mt-4 max-w-3xl mx-auto text-base md:text-lg text-neutral-400">
            ICRAC-2026 invites original, unpublished research on the foundations and applications of modern computing. Share your work and shape the future of technology.
          </p>
        </div>

        {/* --- Research Areas Grid --- */}
        {/* ADJUSTED: Bottom margin is now responsive */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12 md:mb-16">
          {researchAreas.map((area) => (
            <div key={area.title} className="bg-white/5 border border-white/10 rounded-lg p-6 hover:border-indigo-400/50 transition-colors duration-300">
              {/* ADJUSTED: Card title font size is now responsive */}
              <h3 className="text-lg sm:text-xl font-bold text-white">{area.title}</h3>
              <p className="mt-2 text-neutral-400 text-sm">{area.description}</p>
            </div>
          ))}
        </div>

        {/* --- Important Dates & Submission Info --- */}
        {/* ADJUSTED: Padding, gap, and bottom margin are now responsive */}
        <div className="bg-black border border-white/10 rounded-lg p-6 md:p-8 flex flex-col md:flex-row justify-around items-center gap-6 md:gap-8 text-center mb-12 md:mb-16">
            <div>
                <h4 className="font-semibold text-white">Rigorous Peer Review</h4>
                <p className="text-sm">Submissions must be original and will be reviewed by international experts.</p>
            </div>
            {/* Vertical divider for larger screens */}
            <div className="hidden md:block h-16 w-px bg-white/10"></div>
            <div>
                <h4 className="font-semibold text-white">Submission Deadline</h4>
                {/* ADJUSTED: Font size is now responsive */}
                <p className="mt-2 text-base sm:text-lg font-mono bg-rose-500/20 text-rose-300 px-4 py-2 rounded-md inline-block">
                    15th December 2025
                </p>
            </div>
        </div>

        {/* --- Final Call to Action --- */}
        <div className="text-center">
          {/* ADJUSTED: Font size is now responsive */}
          <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Contribute?</h3>
          <p className="mt-2 max-w-2xl mx-auto text-base text-neutral-400">
            Join us in advancing the frontiers of technology. We look forward to your innovative contributions.
          </p>
          <a
            href="#submit"
            className="inline-block mt-8 bg-gradient-to-r from-indigo-500 to-rose-500 text-white font-semibold py-3 px-8 rounded-lg transition-transform hover:scale-105 shadow-lg shadow-indigo-500/30"
          >
            Submit Paper
          </a>
        </div>

      </div>
    </section>
  );
}