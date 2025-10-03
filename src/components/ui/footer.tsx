import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-white/10 text-black/70">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        {/* --- Copyright Information --- */}
        <div className="text-center sm:text-left">
          <p className="text-sm font-semibold text-black/70">ICRAC 2026</p>
          {/* ADJUSTED: Added the year for completeness */}
          <p className="text-xs text-neutral-500">
            &copy; 2026 St. Joseph's University, Bengaluru.
          </p>
        </div>

        {/* --- Navigation Links --- */}
        {/* ADJUSTED: Added flex-wrap and responsive justification for robustness on all screen sizes */}
        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-sm font-medium">
          <Link to="/callforpapers" className="hover:text-black transition-colors">
            Call for Papers
          </Link>
          <Link to="/committees" className="hover:text-black transition-colors">
            Committees
          </Link>
          <Link to="/submission" className="hover:text-black transition-colors">
            Publication
          </Link>
          <Link to="/contact" className="hover:text-black transition-colors">
            Contact
          </Link>
        </nav>

      </div>
    </footer>
  );
}