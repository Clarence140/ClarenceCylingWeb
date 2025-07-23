"use client";

import { useState, useEffect } from "react";

const BikeSpecs = () => {
  const [isVisible, setIsVisible] = useState(false);

  const specs = [
    {
      component: "Frame",
      specification: "6061-T6 Aero Aluminum Alloy, internal cabling",
      futureUpgrade: "Carbon fiber frame",
    },
    {
      component: "Color",
      specification: "Glossy White",
      futureUpgrade: "Custom paint job",
    },
    {
      component: "Brake System",
      specification: "Toseek mechanical disc brakes",
      futureUpgrade: "Hydraulic disc brakes",
    },
    {
      component: "Wheelset",
      specification: "700c double-wall aluminum aero rims",
      futureUpgrade: "Carbon fiber wheels",
    },
    {
      component: "Drivetrain",
      specification: "2×9-speed Shimano-compatible",
      futureUpgrade: "Shimano 105 or Ultegra groupset",
    },
    {
      component: "Fork",
      specification: "Alloy aero fork",
      futureUpgrade: "Carbon fiber fork",
    },
    {
      component: "Handlebar",
      specification: "Integrated alloy bar/stem",
      futureUpgrade: "Carbon fiber handlebar",
    },
    {
      component: "Seatpost",
      specification: "Aero alloy seatpost",
      futureUpgrade: "Carbon fiber seatpost",
    },
    {
      component: "Tires",
      specification: "700x25c road tires",
      futureUpgrade: "700x28c for more comfort",
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const element = document.getElementById("bike-specs");
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
      id="bike-specs"
      className={`section bike-specs-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "12%",
            right: "15%",
            width: "85px",
            height: "85px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.06), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "18%",
            left: "12%",
            width: "95px",
            height: "95px",
            background:
              "radial-gradient(circle, rgba(0, 180, 255, 0.05), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          Bike Specifications
        </h2>
        <div
          className={`specs-table-container animate-on-scroll-scale animate-delay-2 ${
            isVisible ? "animate" : ""
          }`}
        >
          <table className="specs-table">
            <thead>
              <tr>
                <th>Component</th>
                <th>Specification</th>
                <th>Future Upgrades</th>
              </tr>
            </thead>
            <tbody>
              {specs.map((spec, index) => (
                <tr
                  key={spec.component}
                  className={`animate-on-scroll animate-delay-${Math.min(
                    index + 3,
                    6
                  )} ${isVisible ? "animate" : ""}`}
                  style={{ "--row-index": index + 1 }}
                >
                  <td>{spec.component}</td>
                  <td>{spec.specification}</td>
                  <td>{spec.futureUpgrade}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default BikeSpecs;
