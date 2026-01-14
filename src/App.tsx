import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import SubmissionPortal from "./pages/Submission-portal"
import CommitteesPage from "./pages/comm-page";
import RegistrationPage from "./pages/registration";

export default function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/submission" element={<SubmissionPortal/>} />
          <Route path="/committees" element={<CommitteesPage/>} />
          <Route path="/registration" element={<RegistrationPage/>} />


        </Routes>
      </Router>
    </>
  );
}
