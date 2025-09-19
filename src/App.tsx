import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import About from "./pages/about";
import CallForPapers from "./pages/callforpapers"; // import the correct component

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/callforpapers" element={<CallForPapers />} />
        </Routes>
      </Router>
    </>
  );
}
