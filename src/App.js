import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader/Pre.js";
import Navbar from "./components/Navbar/Navbar.js";
import Footer from "./components/Footer/Footer.js";
import ClockTimer from "./components/ClockTimer/ClockTimer.js";

import Home from "./components/Home/Home";
import {
  HashRouter as Router,  // Muutettu BrowserRouter -> HashRouter
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, upadateLoad] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      upadateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} /> 
      <div className="App" id={load ? "no-scroll" : "scroll"}>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/clock_timer" element={<ClockTimer />} />
            
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
