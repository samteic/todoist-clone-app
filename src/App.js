import react from "react"
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./pages/Home"
import Features from "./pages/Features"
import Forteams from "./pages/Forteams"
import Pricing from "./pages/Pricing"
import Resources from "./pages/Resources"
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Inbox from "./pages/DashboardPages/Inbox";
import Upcoming from "./pages/DashboardPages/Upcoming";
import Filters from "./pages/DashboardPages/Filters";
import MyProjects from "./pages/DashboardPages/MyProjects";
import Notifications from "./pages/DashboardPages/Notifications";
import Today from "./pages/DashboardPages/Today";

function App() {
  return (
    <div className="">
      <Router>
      
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/features" element={<Features/>} />
      <Route path="/forteams" element={<Forteams/>} />
      <Route path="/pricing" element={<Pricing/>} />
      <Route path="/resources" element={<Resources/>} />
      <Route path="/signup" element={<SignUp/>} />
      <Route path="/login" element={<Login/>} />
      <Route path="/inbox" element={<Inbox/>} />
      <Route path="/upcoming" element={<Upcoming/>} />
      <Route path="/filters" element={<Filters/>} />
      <Route path="/myprojects" element={<MyProjects/>} />
      <Route path="/notifications" element={<Notifications/>} />
      <Route path="/today" element={<Today/>} />



      </Routes>
   
      </Router>
     

    </div>
  );
}

export default App;
