import { useState } from "react";
import { FaStar } from "react-icons/fa";
import "./style.css";

export default function StarRating({ noOfstart = 5 }) {
  const [rating, setRating] = useState(0);
  const [hover, setHover] = useState(0);

  const handleClick = (getCurrentIndex) => {
    setRating(getCurrentIndex + 1); // Add 1 to the index to mark all stars up to the clicked one
  };

  const handleMouseHover = (getCurrentIndex) => {
    setHover(getCurrentIndex + 1); // Add 1 to the index to highlight the stars up to the hovered one
  };

  const handleMouseLeave = () => {
    setHover(0); // Reset hover state when the mouse leaves
  };

  return (
    <div className="star-icon">
      {[...Array(noOfstart)].map((_, index) => (
        <FaStar
          className={
            index < (hover || rating) ? "star-active" : "star-inactive"
          }
          key={index}
          onClick={() => handleClick(index)}
          onMouseMove={() => handleMouseHover(index)}
          onMouseLeave={handleMouseLeave}
          size={40}
        />
      ))}
    </div>
  );
}
