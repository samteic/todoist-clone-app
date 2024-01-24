import react from "react"
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Features from "./pages/Features"
import Forteams from "./pages/Forteams"
import Pricing from "./pages/Pricing"
import Resources from "./pages/Resources"

function App() {
  return (
    <div className="">
      <Router>
      <Navbar/>
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/forteams" element={<Forteams/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/resources" element={<Resources/>} />

      </Routes>
      </Router>
     

    </div>
  );
}

export default App;
