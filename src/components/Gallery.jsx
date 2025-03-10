// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { EffectCoverflow, Pagination } from "swiper/modules";
import { useEffect, useState } from "react";

export default function App() {
  const [gallery, setGallery] = useState([]);
  useEffect(() => {
    fetch("adventure.json")
      .then((res) => res.json())
      .then((data) => setGallery(data));
  }, []);
  return (
    <>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
        }}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper h-[50vh] lg:h-[70vh] md:w-[80vw] w-full overflow-hidden"
      >
        {gallery &&
          gallery.map((image) => (
            <div key={image.id} className="w-full h-full">
              <SwiperSlide className="aspect-video object-cover bg-center max-w-lg max-h-[400px]">
                <img
                  className="w-full h-full object-cover bg-center"
                  src={image.image}
                />
              </SwiperSlide>
            </div>
          ))}
      </Swiper>
    </>
  );
}
