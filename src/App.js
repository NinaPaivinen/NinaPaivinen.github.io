import React, { useState, useEffect } from "react";
import Preloader from "./components/PreLoader/Pre.js";
import Footer from "./components/Footer/Footer.js";
import ClockTimer from "./components/ClockTimer/ClockTimer.js";
import Home from "./components/Home/Home";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import "./style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  const [load, updateLoad] = useState(true);  // Fixed typo "upadateLoad"

  useEffect(() => {
    const timer = setTimeout(() => {
      updateLoad(false);
    }, 1200);

    return () => clearTimeout(timer);
  }, []);

  return (
    <Router>
      <Preloader load={load} />
      <div className="App" id={load ? "no-scroll" : "scroll"}>
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
