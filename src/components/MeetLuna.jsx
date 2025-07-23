"use client";

import { useState, useEffect } from "react";

const MeetLuna = () => {
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

    const element = document.getElementById("meet-luna");
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
      id="meet-luna"
      className={`section meet-luna-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "15%",
            right: "10%",
            width: "120px",
            height: "120px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.08), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "20%",
            left: "8%",
            width: "90px",
            height: "90px",
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
          Meet LUNA
        </h2>
        <div className="meet-luna-content">
          <div
            className={`luna-image-container animate-on-scroll-left ${
              isVisible ? "animate" : ""
            }`}
          >
            <img
              src="/public/images/May 2025 Rides/ProfilePicandLuna/LunasProfile.jpg"
              alt="LUNA - 月翔 (Moon Flyer)"
              className="luna-image"
              loading="lazy"
              onError={(e) => {
                e.target.src = "/placeholder.svg?height=500&width=600";
              }}
            />
          </div>
          <div
            className={`luna-description animate-on-scroll-right animate-delay-2 ${
              isVisible ? "animate" : ""
            }`}
          >
            <h3>
              LUNA – 月翔 <span>(Yue Xiang / Moon Flyer)</span>
            </h3>
            <p>Purchased May 2025, Toseek R Type V2 Disc Series.</p>
            <p>
              LUNA is my road bike and adventure companion. Her pure glossy
              white frame reflects the elegance of moonlight cutting through the
              night. The name 月翔, meaning 'Moon Flyer' in Chinese, symbolizes
              speed, grace, and boundless exploration.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MeetLuna;
