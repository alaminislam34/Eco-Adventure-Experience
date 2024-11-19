import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

const Slider = () => {
  const [slides, setSlides] = useState([]);
  useEffect(() => {
    fetch("bannerCard.json")
      .then((res) => res.json())
      .then((data) => setSlides(data));
  }, []);

  const [currentSlide, setCurrentSlide] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {slides && slides.length ? (
        <div className="relative w-full h-[85vh]">
          <div
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          ></div>
          <div>
            <button>
              <FaChevronLeft />
            </button>
            <button>
              <FaChevronRight />
            </button>
          </div>
          <div className="absolute md:top-1/3 top-16 md:left-10 left-6 text-white space-y-2">
            <h1
              className="text-2xl md:text-4xl lg:text-5xl font-bold "
              style={{ textShadow: "2px 4px 10px rgba(0, 0, 0, 0.8)" }}
            >
              {slides[currentSlide].title}
            </h1>
            <p
              style={{ textShadow: "2px 4px 10px rgba(0, 0, 0, 0.8)" }}
              className="text-sm md:text-base lg:text-lg mt-2"
            >
              {slides[currentSlide].ecoFriendlyFeatures.map((feature, i) => (
                <p key={i}>{feature}</p>
              ))}
            </p>

            <Link
              to="/adventure"
              className="py-1.5 md:py-2 px-3 md:px-4 bg-darkPri inline-block"
            >
              See More
            </Link>
          </div>

          <div className="absolute bottom-12 md:right-10 right-2 flex space-x-4">
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className={`w-20 h-20 md:w-40 md:h-60 rounded-lg cursor-pointer object-cover bg-center bg-cover ${
                  index === currentSlide
                    ? "border-4 border-white"
                    : "opacity-95"
                }`}
                onClick={() => handleThumbnailClick(index)}
              />
            ))}
          </div>
        </div>
      ) : (
        <Loader />
      )}
    </>
  );
};

export default Slider;
