"use client";

import { useState, useEffect } from "react";
import Aurora from "./Aurora";

const Home = () => {
  const [typedText, setTypedText] = useState("");
  const [isVisible, setIsVisible] = useState(false);
  const fullText = "Exploring new roads with LUNA — 月翔 (Moon Flyer)";

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("home");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      let i = 0;
      const typingInterval = setInterval(() => {
        if (i < fullText.length) {
          setTypedText(fullText.slice(0, i + 1));
          i++;
        } else {
          clearInterval(typingInterval);
        }
      }, 80);

      return () => clearInterval(typingInterval);
    }
  }, [isVisible]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className={`home-section ${isVisible ? "animate" : ""}`}>
      <Aurora />
      <div className="floating-elements">
        <div
          className="floating-element"
          style={{
            top: "20%",
            left: "10%",
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(0, 212, 170, 0.1), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            top: "60%",
            right: "15%",
            width: "80px",
            height: "80px",
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.08), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "30%",
            left: "20%",
            width: "60px",
            height: "60px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <div className="home-content">
          <h1
            className={`home-title animate-on-scroll ${
              isVisible ? "animate" : ""
            }`}
          >
            Clarence Cycling Adventures
          </h1>
          <h2
            className={`home-subtitle animate-on-scroll animate-delay-2 ${
              isVisible ? "animate" : ""
            }`}
          >
            {typedText}
            <span className="cursor">|</span>
          </h2>
          <p
            className={`home-text animate-on-scroll animate-delay-3 ${
              isVisible ? "animate" : ""
            }`}
          >
            Welcome to my cycling showcase. Documenting LUNA's journeys from May
            2025 onward.
          </p>
          <div
            className={`home-buttons animate-on-scroll animate-delay-4 ${
              isVisible ? "animate" : ""
            }`}
          >
            <button
              onClick={() => scrollToSection("meet-luna")}
              className="btn btn-primary"
            >
              Meet LUNA
            </button>
            <button
              onClick={() => scrollToSection("adventures")}
              className="btn btn-secondary"
            >
              View Adventures
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
