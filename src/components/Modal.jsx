"use client";

import { useState, useEffect } from "react";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

const Modal = ({ ride, onClose }) => {
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  useEffect(() => {
    document.body.style.overflow = "hidden";

    const handleEscape = (e) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    document.addEventListener("keydown", handleEscape);

    return () => {
      document.body.style.overflow = "auto";
      document.removeEventListener("keydown", handleEscape);
    };
  }, [onClose]);

  const nextPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === ride.photos.length - 1 ? 0 : prev + 1
    );
  };

  const prevPhoto = () => {
    setCurrentPhotoIndex((prev) =>
      prev === 0 ? ride.photos.length - 1 : prev - 1
    );
  };

  return (
    <div className="modal show" onClick={onClose}>
      <div
        className="modal-content-wrapper"
        onClick={(e) => e.stopPropagation()}
      >
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>

        <div className="modal-header">
          <h3>{ride.title}</h3>
          <p>{ride.date}</p>
        </div>

        <div className="photo-carousel">
          <button className="carousel-btn prev" onClick={prevPhoto}>
            <ChevronLeft size={24} />
          </button>

          <img
            src={ride.photos[currentPhotoIndex] || "/placeholder.svg"}
            alt={`${ride.title} - Photo ${currentPhotoIndex + 1}`}
            className="carousel-image"
          />

          <button className="carousel-btn next" onClick={nextPhoto}>
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="photo-indicators">
          {ride.photos.map((_, index) => (
            <button
              key={index}
              className={`indicator ${
                index === currentPhotoIndex ? "active" : ""
              }`}
              onClick={() => setCurrentPhotoIndex(index)}
            />
          ))}
        </div>

        <div className="modal-description">
          <p>{ride.description}</p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
