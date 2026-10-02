
// src/App.jsx

import { useEffect, useState } from 'react';

import Preloader from './components/Elements/Pre/Pre.jsx';
import Navbar from './components/Elements/Navbar/Navbar.jsx';
import Footer from './components/Elements/Footer/Footer.jsx';

import Home from './components/Home/Home.jsx';
import Mina from './components/AboutMe/main.jsx';
import Version from './components/Version/Version.jsx';
import Contact from './components/Contact/Contact.jsx';

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => window.clearTimeout(timer);
  }, []);

  useEffect(() => {
    document.body.classList.toggle('is-loading', loading);

    return () => {
      document.body.classList.remove('is-loading');
    };
  }, [loading]);

  return (
    <div className="app">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Navbar />

          <main className="page">
            <section id="home">
              <Home />
            </section>

            <section id="about">
              <Mina />
            </section>

            <section id="version">
              <Version />
            </section>

            <section id="contact">
              <Contact />
            </section>
          </main>

          <Footer />
        </>
      )}
    </div>
  );
}

export default App;