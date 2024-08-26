import { useEffect, useState } from "react";
import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import PropTypes from "prop-types";
import "./style.css";

export default function ImageSlider({ url, limit = 5 }) {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchImage = async (getUrl) => {
    try {
      setLoading(true);
      const response = await fetch(`${getUrl}?page=1&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
      }
    } catch (error) {
      setError("Failed to fetch images.");
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetchImage(url);
    }
  }, [url]);

  if (loading) {
    return <h3>Loading Please wait...👻</h3>;
  }

  if (error) {
    return <h3>{error}😿</h3>;
  }

  return (
    <div className="container">
      <BsArrowLeftCircleFill
        className="arrow arrow-left"
        onClick={() =>
          setCurrentSlide((prev) => (prev === 0 ? images.length - 1 : prev - 1))
        }
      />
      {images && images.length > 0
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={
                currentSlide === index
                  ? "current-image"
                  : "current-image hide-current-image"
              }
            />
          ))
        : null}
      <BsArrowRightCircleFill
        className="arrow arrow-right"
        onClick={() =>
          setCurrentSlide((prev) => (prev === images.length - 1 ? 0 : prev + 1))
        }
      />
      <span className="circle-indicators">
        {images && images.length > 0
          ? images.map((_, index) => (
              <button
                key={index}
                className={
                  currentSlide === index
                    ? "current-indicator"
                    : "current-indicator inactive-indicator"
                }
                onClick={() => setCurrentSlide(index)}
              ></button>
            ))
          : null}
      </span>
    </div>
  );
}

// PropType
ImageSlider.propTypes = {
  url: PropTypes.string.isRequired,
  limit: PropTypes.number,
};

ImageSlider.defaultProps = {
  limit: 5,
};
