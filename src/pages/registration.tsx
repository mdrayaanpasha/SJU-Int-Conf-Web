import { useState, useEffect, useCallback, memo } from "react";
import type { FC } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { 
  Menu, 
  X, 
  Users, 
  ArrowRight,
  Tag,
  Building2,
  QrCode,
  
  CheckCircle2
} from "lucide-react";


import qrimage from "../assets/IMAGES/QR.png"

// --- TYPES ---
interface NavbarProps {
  isOpen: boolean;
  onToggle: () => void;
  scrolled: boolean;
}

interface PricingRow {
  category: string;
  price: string;
}

// --- DATA ---
const navItems = [
  { name: "ABOUT", to: "/#about" },
  { name: "CALL FOR PAPERS", to: "/#call-for-papers" },
  { name: "REGISTRATION", to: "#registration" },
  { name: "COMMITTEES", to: "/#committees" },
  { name: "CONTACT", to: "/#contact" },
];

const pricingData: PricingRow[] = [
  { category: "Industry (Online/Offline)", price: "₹ 6000" },
  { category: "Faculty / Academicians", price: "₹ 2500" },
  { category: "Research Scholar", price: "₹ 2000" },
  { category: "PG Students", price: "₹ 1000" },
  { category: "Foreign Participants", price: "$ 100" },
  { category: "Online", price: "₹ 3000" },
];

// Bank Data Dictionary for easy mapping
const bankDetails = [
  { label: "Account Name", value: "ST JOSEPHS UNIVERSITY COLLECTION ACCOUNT" },
  { label: "Account Number", value: "0964073000000053", highlight: true },
  { label: "Bank Name", value: "South Indian Bank" },
  { label: "Branch", value: "0964 Langford Road Branch" },
  { label: "Account Type", value: "Savings Bank" },
  { label: "IFS Code", value: "SIBL0000964", mono: true },
  { label: "MICR Code", value: "560059032", mono: true },
  { label: "SWIFT Code", value: "SOININ55XXX", mono: true },
];

// --- COMPONENTS ---

// Navbar
const Navbar: FC<NavbarProps> = memo(({ isOpen, onToggle, scrolled }) => (
  <motion.nav 
    initial={{ y: -100 }}
    animate={{ y: 0 }}
    className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? 'bg-white/95 backdrop-blur-xl shadow-2xl border-b border-neutral-200/50' : 'bg-transparent'
    }`}
  >
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex justify-between items-center py-4">
        <motion.a href="/" className="flex items-center space-x-3" whileHover={{ scale: 1.05 }}>
          <div className={`text-2xl font-black ${scrolled ? 'text-neutral-900' : 'text-neutral-900'}`}>
            <span className="bg-gradient-to-r from-electric-600 to-violet-600 bg-clip-text text-transparent">ICRAC</span>
            <span className="text-electric-600">2026</span>
          </div>
        </motion.a>

        <div className="hidden lg:flex items-center space-x-8">
          {navItems.map((item) => (
            <motion.a
              key={item.name}
              href={item.to}
              className={`text-sm font-semibold transition-all duration-300 relative ${
                scrolled ? 'text-neutral-700 hover:text-electric-600' : 'text-neutral-600 hover:text-electric-600'
              }`}
              whileHover={{ y: -2 }}
            >
              {item.name}
              <motion.div 
                className="absolute -bottom-2 left-0 w-0 h-1 bg-gradient-to-r from-electric-500 to-violet-500 rounded-full"
                whileHover={{ width: '100%' }}
                transition={{ duration: 0.3 }}
              />
            </motion.a>
          ))}
        </div>

        <motion.button
          className={`lg:hidden p-3 rounded-2xl transition-colors ${
            scrolled ? 'text-neutral-700 hover:bg-neutral-100' : 'text-neutral-700 hover:bg-neutral-100'
          }`}
          onClick={onToggle}
          whileTap={{ scale: 0.9 }}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </motion.button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl rounded-3xl mt-2 overflow-hidden border border-neutral-200/50 shadow-2xl"
          >
            <div className="py-4 space-y-1">
              {navItems.map((item) => (
                <motion.a
                  key={item.name}
                  href={item.to}
                  className="block px-6 py-4 text-neutral-700 font-semibold hover:bg-electric-50 hover:text-electric-600 transition-colors rounded-xl mx-2"
                  onClick={onToggle}
                >
                  {item.name}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  </motion.nav>
));

// Pricing Row
const PricingTableRow = ({ item, index }: { item: PricingRow; index: number }) => (

  <motion.tr 
    initial={{ opacity: 0, y: 10 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className={`group border-b border-neutral-100 hover:bg-blue-50/30 transition-colors ${
      index === pricingData.length - 1 ? "border-none" : ""
    }`}
  >
    <td className="py-6 pl-8 pr-4 w-2/3">
      <div className="flex items-center gap-4">
        <div className="w-12 h-12 rounded-2xl bg-electric-50 border border-electric-100 flex items-center justify-center text-electric-600 group-hover:bg-electric-600 group-hover:text-white group-hover:shadow-lg group-hover:scale-110 transition-all duration-300">
          <Users size={20} />
        </div>
        <div>
          <span className="font-bold text-neutral-800 text-lg block">{item.category}</span>
        </div>
      </div>
    </td>
    <td className="py-6 px-4 text-center pr-8 w-1/3">
      <span className="inline-flex items-center justify-center font-black text-2xl text-neutral-800 bg-white border border-neutral-200 px-6 py-3 rounded-2xl shadow-sm group-hover:shadow-xl group-hover:border-electric-200 group-hover:scale-105 transition-all duration-300 min-w-[140px]">
        {item.price}
      </span>
    </td>
  </motion.tr>
);

// New Component: Bank Detail Row
const BankDetailRow = ({ label, value, mono, highlight }: any) => (
  <div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline py-3 border-b border-neutral-100 last:border-0">
    <span className="text-sm font-semibold text-neutral-400 uppercase tracking-wider">{label}</span>
    <span className={`text-right font-bold mt-1 sm:mt-0 ${
      highlight ? 'text-electric-600 text-lg' : 'text-neutral-800'
    } ${mono ? 'font-mono' : ''}`}>
      {value}
    </span>
  </div>
);

// --- MAIN PAGE ---
export default function RegistrationPage() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = useCallback(() => setIsOpen(prev => !prev), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-neutral-50 font-sans text-neutral-900">
      <Navbar isOpen={isOpen} onToggle={toggleMenu} scrolled={scrolled} />

      <main className="pt-32 pb-32">
        {/* Background Decor */}
        <div className="fixed right-0 top-0 w-1/2 h-1/2 bg-gradient-to-b from-blue-50/50 to-transparent -z-10 blur-3xl" />
        <div className="fixed left-0 bottom-0 w-96 h-96 bg-violet-100/30 rounded-full blur-3xl -z-10" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* 1. Header Section */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-electric-100 text-electric-700 text-sm font-bold uppercase tracking-widest mb-6"
            >
              <Tag size={14} />
              Conference Fees
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-4xl md:text-5xl font-black text-neutral-900 mb-6"
            >
              Registration & <br/>
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-electric-600 to-violet-600">
                Payment Details
              </span>
            </motion.h1>
          </div>

          {/* 2. Pricing Table Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative rounded-[2.5rem] bg-white shadow-2xl overflow-hidden border border-neutral-200 mb-16"
          >
            <div className="h-2 bg-gradient-to-r from-electric-500 via-violet-500 to-electric-600" />
            <div className="overflow-x-auto">
              <table className="w-full min-w-[700px] border-collapse">
                <thead>
                  <tr className="bg-neutral-50/50 border-b border-neutral-200">
                    <th className="py-8 pl-8 text-left text-xs font-black text-neutral-400 uppercase tracking-widest w-2/3">
                      Participant Category
                    </th>
                    <th className="py-8 text-center pr-8 text-xs font-black text-electric-600 uppercase tracking-widest w-1/3">
                      <span className="flex items-center justify-center gap-2">
                         Registration Fee
                      </span>
                    </th>
                  </tr>
                </thead>
               <tbody>
  {pricingData.map((item, idx) => (
    <PricingTableRow key={idx} item={item} index={idx} />
  ))}

  {/* Note Section Row */}
  <tr className="bg-neutral-50 border-t-2 border-dashed border-neutral-200">
    <td colSpan={2} className="py-4 px-6 text-center">
      <div className="inline-flex items-center gap-2 text-neutral-600 text-sm font-medium">
        <span className="w-5 h-5 rounded-full bg-electric-100 text-electric-600 flex items-center justify-center text-xs font-bold">
          !
        </span>
        <span>
          Additional certificates will be issued to co-authors upon payment of an extra amount of <span className="text-neutral-900 font-black text-base ml-1">₹ 1000 </span> per certificate
        </span>
      </div>
    </td>
  </tr>
</tbody>
              </table>
            </div>
          </motion.div>

          {/* 3. NEW: Bank Details & QR Section */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid lg:grid-cols-5 gap-8 mb-24"
          >
            {/* Left Col: Bank Details Text */}
            <div className="lg:col-span-3 bg-white rounded-[2.5rem] p-8 md:p-10 border border-neutral-200 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-2 h-full bg-electric-500"></div>
               
               <div className="flex items-center gap-3 mb-8">
                 <div className="p-3 bg-electric-50 rounded-xl text-electric-600">
                    <Building2 size={24} />
                 </div>
                 <h3 className="text-2xl font-black text-neutral-900">Bank Transfer Details</h3>
               </div>

               <div className="space-y-1">
                 {bankDetails.map((detail, idx) => (
                   <BankDetailRow key={idx} {...detail} />
                 ))}
               </div>
               
               <div className="mt-8 pt-6 border-t border-neutral-100 flex items-start gap-3">
                  <CheckCircle2 className="text-emerald-500 w-5 h-5 flex-shrink-0 mt-0.5" />
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    Please mention your <strong>Paper ID</strong> or <strong>Name</strong> in the transaction remarks. Keep the screenshot of the payment receipt safe for the next step.
                  </p>
               </div>
            </div>

            {/* Right Col: QR Code Card */}
            <div className="lg:col-span-2 bg-gradient-to-br from-neutral-900 to-neutral-800 rounded-[2.5rem] p-8 md:p-10 text-white shadow-2xl flex flex-col items-center justify-center text-center relative overflow-hidden">
               {/* Decorative Background */}
               <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent" />
               
               <div className="mb-6 relative z-10">
                 <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/20">
                    <QrCode size={32} />
                 </div>
                 <h3 className="text-2xl font-black">Scan to Pay</h3>
                 <p className="text-neutral-400 text-sm mt-2">Use any UPI app to make the payment</p>
               </div>

               {/* QR IMAGE PLACEHOLDER */}
               <div className="relative z-10 p-4 bg-white rounded-2xl shadow-lg transform transition-transform hover:scale-105 duration-300">
                  {/* REPLACE src below with your actual QR code image path */}
                  <img 
                    src={qrimage} 
                    alt="Payment QR Code" 
                    className="w-48 h-48 object-contain"
                  />
               </div>

               <p className="relative z-10 text-xs text-neutral-500 mt-6 uppercase tracking-widest font-bold">
                 St Josephs University
               </p>
            </div>
          </motion.div>

          {/* 4. Final CTA */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center"
          >
             <h3 className="text-2xl font-bold text-neutral-900 mb-4">Payment Completed?</h3>
             <p className="text-neutral-600 mb-8 max-w-lg mx-auto">
               Once you have completed the bank transfer or UPI payment, please fill out the registration form.
             </p>

             <motion.a 
               href="https://forms.gle/v17vsmBTvynJ7Hay9" 
               target="_blank"
               rel="noopener noreferrer"
               whileHover={{ scale: 1.05 }}
               whileTap={{ scale: 0.95 }}
               className="inline-flex items-center gap-3 bg-black text-white px-10 py-4 rounded-2xl font-bold text-lg hover:bg-electric-700 transition-all shadow-xl shadow-electric-500/30"
             >
               Fill Registration Form
               <ArrowRight size={20} />
             </motion.a>
          </motion.div>

        </div>
      </main>
    </div>
  );
}