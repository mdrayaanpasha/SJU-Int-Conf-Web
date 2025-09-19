import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import CallForPapers from "./pages/callforpapers";
import Committees from "./pages/committees";
import Publication from "./pages/submission";
import Contact from "./pages/contact";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/callforpapers" element={<CallForPapers />} />
          <Route path="/committees" element={<Committees />} />
          <Route path="/submission" element={<Publication />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </>
  );
}
