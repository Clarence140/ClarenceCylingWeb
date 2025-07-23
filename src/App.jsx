"use client";

import { useEffect } from "react";
import "./styles/variables.css";
import "./styles/globals.css";
import "./styles/animations.css";
import "./styles/components.css";

import Header from "./components/Header";
import Home from "./components/Home";
import MeetLuna from "./components/MeetLuna";
import Adventures from "./components/Adventures";
import Gallery from "./components/Gallery";
import BikeSpecs from "./components/BikeSpecs";
import Owner from "./components/Owner";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  useEffect(() => {
    // Force scroll to top on page load and disable scroll restoration
    window.scrollTo(0, 0);
    if ("scrollRestoration" in history) {
      history.scrollRestoration = "manual";
    }

    // Remove preload class after initial load
    document.body.classList.add("preload");
    setTimeout(() => {
      document.body.classList.remove("preload");
    }, 500);

    // Prevent scroll restoration on refresh
    const handleBeforeUnload = () => {
      window.scrollTo(0, 0);
    };

    window.addEventListener("beforeunload", handleBeforeUnload);

    return () => {
      window.removeEventListener("beforeunload", handleBeforeUnload);
    };
  }, []);

  return (
    <div className="App">
      <Header />
      <main>
        <Home />
        <MeetLuna />
        <Adventures />
        <Gallery />
        <BikeSpecs />
        <Owner />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
