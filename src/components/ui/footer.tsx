import { Link } from 'react-router-dom';

export default function Footer() {
  return (
    <footer className="bg-white border-t border-white/10 text-black/70">
      <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
        
        <div className="text-center sm:text-left max-w-lg">
          <p className="text-sm font-semibold text-black/70">ICRAC 2026</p>
          <p className="text-xs text-neutral-500">&copy; 2026 St. Joseph's University, Bengaluru.</p>
          <p className="text-xs text-neutral-500 mt-2">
            The Microsoft CMT service was used for managing the peer-reviewing process for this conference. This service was provided for free by Microsoft and they bore all expenses, including costs for Azure cloud services as well as for software development and support.
          </p>
        </div>

        <nav className="flex flex-wrap items-center justify-center sm:justify-end gap-x-6 gap-y-2 text-sm font-medium">
          <Link to="/callforpapers" className="hover:text-black transition-colors">Call for Papers</Link>
          <Link to="/committees" className="hover:text-black transition-colors">Committees</Link>
          <Link to="/submission" className="hover:text-black transition-colors">Publication</Link>
          <Link to="/contact" className="hover:text-black transition-colors">Contact</Link>
        </nav>

      </div>
    </footer>
  );
}
