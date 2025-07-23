"use client";

const Card = ({ ride, index, onClick }) => {
  return (
    <div
      className="adventure-card"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={onClick}
    >
      <img
        src={ride.image || "/placeholder.svg"}
        alt={ride.title}
        className="adventure-image"
        loading="lazy"
      />
      <div className="adventure-info">
        <div className="adventure-date">{ride.date}</div>
        <h3 className="adventure-title">{ride.title}</h3>
        <p className="adventure-desc">{ride.description}</p>
      </div>
    </div>
  );
};

export default Card;
