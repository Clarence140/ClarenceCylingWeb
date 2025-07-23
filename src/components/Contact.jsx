"use client";

import { useState, useEffect } from "react";
import { Facebook, Music, Activity } from "lucide-react";

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("contact");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id="contact"
      className={`section contact-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "25%",
            right: "18%",
            width: "120px",
            height: "120px",
            background:
              "radial-gradient(circle, rgba(0, 212, 170, 0.08), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "30%",
            left: "15%",
            width: "90px",
            height: "90px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          Contact
        </h2>
        <div
          className={`contact-content animate-on-scroll animate-delay-2 ${
            isVisible ? "animate" : ""
          }`}
        >
          <p className="contact-text">
            For cycling-related messages or collaborations, reach out via
            Facebook Messenger.
          </p>
          <div
            className={`social-links animate-on-scroll animate-delay-3 ${
              isVisible ? "animate" : ""
            }`}
          >
            <a
              href="https://www.facebook.com/cl4rence14/"
              className="social-link"
              aria-label="Facebook"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://www.tiktok.com/@clarence.cycling"
              className="social-link"
              aria-label="TikTok"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Music size={24} />
            </a>
            <a
              href="https://www.strava.com/athletes/102169790"
              className="social-link"
              aria-label="Strava"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Activity size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
