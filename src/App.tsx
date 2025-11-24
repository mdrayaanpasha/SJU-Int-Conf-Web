import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SubmissionPortal from "./pages/Submission-portal"

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submission" element={<SubmissionPortal/>} />

        </Routes>
      </Router>
    </>
  );
}
