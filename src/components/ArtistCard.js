import React, { useState, useEffect } from "react";

const ArtistCard = ({ id, name, nationality, age, isSelected, handleCardSelection }) => {
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    setIsHovered(isSelected);
  }, [isSelected]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  const handleClick = () => {
    handleCardSelection(id);
  };

  const cardClassName = `artist-card ${isHovered ? "hovered" : ""} ${isSelected ? "selected" : ""}`;

  return (
    <div className={cardClassName} onClick={handleClick} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <p>Name: {name}</p>
      <p>Nationality: {nationality}</p>
      <p>Age: {age}</p>
    </div>
  );
};

export default ArtistCard;
