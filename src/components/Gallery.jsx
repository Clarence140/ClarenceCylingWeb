"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Gallery = () => {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedImage, setSelectedImage] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);

  const imagesPerPage = 9; // 3x3 grid

  const galleryImages = [
    {
      id: 1,
      src: "/public/images/May 2025 Rides/Taktak.jpg",
      alt: "Hinulugang Taktak Group Ride",
      category: "pitik",
      caption: "Taktak with friends",
    },
    {
      id: 2,
      src: "/public/images/May 2025 Rides/BosoBoso.jpg",
      alt: "Beautiful mountain scenery",
      category: "nature",
      caption: "Breathtaking views from the Boso-Boso",
    },
    {
      id: 3,
      src: "/public/images/May 2025 Rides/BosoBosoo.jpg",
      alt: "Cabading Ahon",
      category: "pitik",
      caption: "Luna's First Ride | First time riding roadbike",
    },
    {
      id: 4,
      src: "/placeholder.svg?height=300&width=500",
      alt: "Sunset over the hills",
      category: "nature",
      caption: "Golden hour in the mountains",
    },
    {
      id: 5,
      src: "/placeholder.svg?height=700&width=500",
      alt: "LUNA at rest",
      category: "pitik",
      caption: "Taking a break during the ride",
    },
    {
      id: 6,
      src: "/placeholder.svg?height=400&width=400",
      alt: "Forest trail",
      category: "nature",
      caption: "Peaceful forest paths",
    },
    {
      id: 7,
      src: "/placeholder.svg?height=600&width=900",
      alt: "Morning ride",
      category: "pitik",
      caption: "Early morning cycling session",
    },
    {
      id: 8,
      src: "/placeholder.svg?height=500&width=300",
      alt: "River view",
      category: "nature",
      caption: "Scenic river crossing",
    },
    {
      id: 9,
      src: "/placeholder.svg?height=400&width=700",
      alt: "City skyline",
      category: "nature",
      caption: "Urban landscape from the hills",
    },
    {
      id: 10,
      src: "/placeholder.svg?height=800&width=600",
      alt: "LUNA close-up",
      category: "pitik",
      caption: "Detailed shot of LUNA's frame",
    },
    {
      id: 11,
      src: "/placeholder.svg?height=300&width=600",
      alt: "Mountain peak",
      category: "nature",
      caption: "Reaching the summit",
    },
    {
      id: 12,
      src: "/placeholder.svg?height=600&width=800",
      alt: "Group ride",
      category: "pitik",
      caption: "Cycling with fellow enthusiasts",
    },
    {
      id: 13,
      src: "/placeholder.svg?height=500&width=500",
      alt: "Bike maintenance",
      category: "pitik",
      caption: "Taking care of LUNA",
    },
    {
      id: 14,
      src: "/placeholder.svg?height=400&width=800",
      alt: "Coastal road",
      category: "nature",
      caption: "Beautiful coastal cycling route",
    },
    {
      id: 15,
      src: "/placeholder.svg?height=700&width=400",
      alt: "Hill climb",
      category: "pitik",
      caption: "Conquering steep hills",
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

    const element = document.getElementById("gallery");
    if (element) {
      observer.observe(element);
    }

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  const scrollToSectionTitle = () => {
    const element = document.getElementById("gallery");
    if (element) {
      const headerHeight = 80;
      const targetPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: targetPosition,
        behavior: "smooth",
      });
    }
  };

  const getFilteredImages = () => {
    if (selectedCategory === "all") {
      return galleryImages;
    }
    return galleryImages.filter((image) => image.category === selectedCategory);
  };

  const getPaginatedImages = () => {
    const filtered = getFilteredImages();
    const startIndex = (currentPage - 1) * imagesPerPage;
    return filtered.slice(startIndex, startIndex + imagesPerPage);
  };

  const getTotalPages = () => {
    return Math.ceil(getFilteredImages().length / imagesPerPage);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    setCurrentPage(1);
  };

  const handlePrevPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newPage = Math.max(currentPage - 1, 1);
    setCurrentPage(newPage);
    setTimeout(() => {
      scrollToSectionTitle();
    }, 100);
  };

  const handleNextPage = (e) => {
    e.preventDefault();
    e.stopPropagation();
    const newPage = Math.min(currentPage + 1, getTotalPages());
    setCurrentPage(newPage);
    setTimeout(() => {
      scrollToSectionTitle();
    }, 100);
  };

  const openModal = (image) => {
    setSelectedImage(image);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "auto";
  };

  return (
    <section
      id="gallery"
      className={`section gallery-section ${isVisible ? "animate" : ""}`}
    >
      <div className="section-background">
        <div
          className="floating-element"
          style={{
            top: "20%",
            left: "12%",
            width: "90px",
            height: "90px",
            background:
              "radial-gradient(circle, rgba(0, 212, 170, 0.07), transparent)",
          }}
        ></div>
        <div
          className="floating-element"
          style={{
            bottom: "25%",
            right: "10%",
            width: "110px",
            height: "110px",
            background:
              "radial-gradient(circle, rgba(124, 58, 237, 0.05), transparent)",
          }}
        ></div>
      </div>
      <div className="container">
        <h2
          className={`section-title animate-on-scroll ${
            isVisible ? "animate" : ""
          }`}
        >
          Gallery
        </h2>

        <div
          className={`gallery-filters animate-on-scroll animate-delay-1 ${
            isVisible ? "animate" : ""
          }`}
        >
          <button
            className={`filter-btn ${
              selectedCategory === "all" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("all")}
          >
            All Photos
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "pitik" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("pitik")}
          >
            Pitik (Action Shot / Candid)
          </button>
          <button
            className={`filter-btn ${
              selectedCategory === "nature" ? "active" : ""
            }`}
            onClick={() => handleCategoryChange("nature")}
          >
            Nature | Scenery | Cities
          </button>
        </div>

        <div className="gallery-grid">
          {getPaginatedImages().map((image, index) => (
            <div
              key={image.id}
              className={`gallery-item animate-on-scroll-scale animate-delay-${Math.min(
                index + 2,
                6
              )} ${isVisible ? "animate" : ""}`}
              onClick={() => openModal(image)}
            >
              <img
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                className="gallery-image"
                loading="lazy"
              />
            </div>
          ))}
        </div>

        {getTotalPages() > 1 && (
          <div
            className={`pagination animate-on-scroll animate-delay-3 ${
              isVisible ? "animate" : ""
            }`}
          >
            <button
              onClick={handlePrevPage}
              disabled={currentPage === 1}
              className="pagination-btn"
              type="button"
            >
              <ChevronLeft size={20} />
              Previous
            </button>
            <span className="pagination-info">
              Page {currentPage} of {getTotalPages()}
            </span>
            <button
              onClick={handleNextPage}
              disabled={currentPage === getTotalPages()}
              className="pagination-btn"
              type="button"
            >
              Next
              <ChevronRight size={20} />
            </button>
          </div>
        )}
      </div>

      {selectedImage && (
        <div className="modal show" onClick={closeModal}>
          <div
            className="modal-content-wrapper gallery-modal"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="modal-close" onClick={closeModal}>
              <X size={24} />
            </button>
            <div className="modal-image-container">
              <img
                src={selectedImage.src || "/placeholder.svg"}
                alt={selectedImage.alt}
                className="modal-image"
              />
            </div>
            <div className="modal-caption">{selectedImage.caption}</div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
