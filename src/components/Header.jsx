"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isHeaderHidden, setIsHeaderHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY <= 0) {
        setIsHeaderHidden(false);
      } else if (currentScrollY > lastScrollY && !isHeaderHidden) {
        setIsHeaderHidden(true);
      } else if (currentScrollY < lastScrollY && isHeaderHidden) {
        setIsHeaderHidden(false);
      }

      setLastScrollY(currentScrollY);
    };

    const handleMouseMove = (e) => {
      if (e.clientY < 50) {
        setIsHeaderHidden(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, [lastScrollY, isHeaderHidden]);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });

      setIsMenuOpen(false);
    }
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`header ${isHeaderHidden ? "hidden" : ""}`}>
      <div className="container">
        <button onClick={() => scrollToSection("home")} className="logo">
          Clarence<span>Cycling</span>
        </button>

        <div className="nav-wrapper">
          <nav className={`nav ${isMenuOpen ? "active" : ""}`}>
            <ul className="nav-list">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="nav-link"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("meet-luna")}
                  className="nav-link"
                >
                  Meet LUNA
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("adventures")}
                  className="nav-link"
                >
                  Adventures
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("gallery")}
                  className="nav-link"
                >
                  Gallery
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("bike-specs")}
                  className="nav-link"
                >
                  Bike Specs
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("owner")}
                  className="nav-link"
                >
                  Owner
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="nav-link"
                >
                  Contact
                </button>
              </li>
            </ul>
          </nav>

          <button
            className={`hamburger ${isMenuOpen ? "active" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
