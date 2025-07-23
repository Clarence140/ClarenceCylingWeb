"use client";

import { useState, useEffect } from "react";
import { Phone, Mail, Facebook } from "lucide-react";

const Owner = () => {
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

    const element = document.getElementById("owner");
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
      id="owner"
      className={`section owner-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "18%",
            left: "8%",
            width: "100px",
            height: "100px",
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.08), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "22%",
            right: "12%",
            width: "75px",
            height: "75px",
            background:
              "radial-gradient(circle, rgba(0, 212, 170, 0.06), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          Owner
        </h2>
        <div className="owner-content">
          <div
            className={`owner-image-container animate-on-scroll-left ${
              isVisible ? "animate" : ""
            }`}
          >
            <img
              src="/public/images/ProfilePicandLuna/ProfilePic.jpg"
              alt="Clarence D. Sumagang"
              className="owner-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=300&width=300";
              }}
            />
          </div>
          <div
            className={`owner-description animate-on-scroll-right animate-delay-2 ${
              isVisible ? "animate" : ""
            }`}
          >
            <h3>Clarence D. Sumagang</h3>
            <p>
              An aspiring web developer and passionate cyclist. I love building
              clean, purposeful websites and exploring new places with LUNA.
              This site is where my two passions meet: code and the open road.
            </p>

            <div
              className={`contact-recovery-icons animate-on-scroll animate-delay-3 ${
                isVisible ? "animate" : ""
              }`}
            >
              <h4>Contact for bike recovery / lost-and-found</h4>
              <p className="recovery-subtitle">
                If you find this bike or need to reach me:
              </p>
              <div className="contact-icons-row">
                <a href="tel:+639692234028" className="contact-icon-item">
                  <Phone size={18} className="contact-icon" />
                  <span>09692234028</span>
                </a>
                <a
                  href="mailto:clarencesumagang0509@gmail.com"
                  className="contact-icon-item"
                >
                  <Mail size={18} className="contact-icon" />
                  <span>clarencesumagang0509@gmail.com</span>
                </a>
                <a
                  href="https://www.facebook.com/cl4rence14/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-icon-item"
                >
                  <Facebook size={18} className="contact-icon" />
                  <span>Clarence D. Sumagang</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;
