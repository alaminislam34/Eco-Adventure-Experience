import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Loader from "./Loader";
// import { FaChevronLeft, FaChevronRight } from "react-icons/fa6";

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
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="w-full h-full bg-cover bg-center"
            style={{
              backgroundImage: `url(${slides[currentSlide].image})`,
            }}
          ></div>
          {/* <div>
            <button>
              <FaChevronLeft />
            </button>
            <button>
              <FaChevronRight />
            </button>
          </div> */}
          <div className="absolute md:top-1/3 top-16 md:left-10 left-6 text-white space-y-2">
            <h1
              data-aos="zoom-out-up"
              data-aos-duration="1000"
              className="text-2xl md:text-4xl lg:text-5xl font-bold text-stroke font-merienda"
            >
              {slides[currentSlide].title}
            </h1>
            <p
              data-aos="zoom-out-up"
              data-aos-duration="1100"
              className="text-sm md:text-base lg:text-lg mt-2 text-stroke "
            >
              {slides[currentSlide].ecoFriendlyFeatures.map((feature, i) => (
                <p data-aos="zoom-out-up" data-aos-duration="1200" key={i}>
                  <span className="text-darkPri font-bold text-xl pr-2">✔</span>
                  {feature}
                </p>
              ))}
            </p>

            <p data-aos="zoom-out-up" data-aos-duration="1200">
              <Link
                to="/adventure"
                className="btn py-1.5 md:py-2 px-3 md:px-4 bg-primary hover:bg-darkPri"
              >
                Explore More
              </Link>
            </p>
          </div>

          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="absolute bottom-12 md:right-10 right-2 flex space-x-4"
          >
            {slides.map((slide, index) => (
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className={`w-20 h-20 md:w-40 md:h-60 rounded-lg cursor-pointer object-cover bg-center bg-cover border-4 ${
                  index === currentSlide
                    ? "border-darkPri"
                    : "opacity-95 border-transparent"
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
