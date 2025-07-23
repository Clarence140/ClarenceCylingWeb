"use client";

const Footer = () => {
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
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <p>&copy; 2025 Clarence Cycling Adventures. All rights reserved.</p>
          <div className="footer-links">
            <button onClick={() => scrollToSection("home")}>Home</button>
            <button onClick={() => scrollToSection("meet-luna")}>
              Meet LUNA
            </button>
            <button onClick={() => scrollToSection("adventures")}>
              Adventures
            </button>
            <button onClick={() => scrollToSection("gallery")}>Gallery</button>
            <button onClick={() => scrollToSection("bike-specs")}>
              Bike Specs
            </button>
            <button onClick={() => scrollToSection("owner")}>Owner</button>
            <button onClick={() => scrollToSection("contact")}>Contact</button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
