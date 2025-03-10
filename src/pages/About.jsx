import { useLoaderData } from "react-router-dom";
import about from "../assets/about.jpg";
import { useEffect, useState } from "react";
import Loader from "../components/Loader";
import Gallery from "../components/Gallery";

const About = () => {
  const [guides, setGuides] = useState([]);

  const data = useLoaderData();
  useEffect(() => {
    if (data && data.length > 0) {
      setGuides(data);
    } else {
      return <Loader />;
    }
  }, [data]);

  return (
    <div>
      <div
        data-aos="zoom-out-up"
        data-aos-duration="1400"
        className="h-[40vh] w-full relative bg-aboutBg bg-cover object-cover bg-center "
      >
        <div className="w-full h-full bg-black/20 flex justify-center items-center">
          <h1
            data-aos="zoom-out-up"
            data-aos-duration="1800"
            className=" text-white filter brightness-105 font-bold text-stroke font-merienda text-2xl md:text-3xl lg:text-5xl"
          >
            About
          </h1>
        </div>
      </div>
      <div className="my-6 md:my-8 lg:my-12">
        <div className="flex justify-center items-center flex-col gap-2">
          <h3
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="text-xl md:text-2xl lg:text-3xl font-bold font-merienda"
          >
            Our Expert Guides Team
          </h3>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="border-b-2 border-darkPri w-32 md:w-52 my-1"
          ></div>
        </div>
        <section className="flex justify-center items-center my-6 md:my-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 lg:gap-12 ">
            {guides.map((guide) => (
              <div
                data-aos="zoom-out-up"
                data-aos-duration="1000"
                key={guide.id}
                className="relative overflow-hidden group rounded-xl md:w-72 w-56 h-56 md:h-72 cursor-pointer group"
              >
                <img
                  className="w-full h-full bg-cover object-top object-cover"
                  src={guide.image}
                  alt=""
                />

                <div
                  className={`bg-primary absolute -bottom-24 group-hover:bottom-0 duration-1000 left-0 w-full p-2 backdrop-blur-xl`}
                >
                  <h4 className="text-base md:text-lg font-medium">
                    {guide.name}
                  </h4>
                  <p className="text-xs md:text-sm text-black/80">
                    {guide.character}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <section className="my-6 md:my-8 lg:my-12">
        <div className="flex flex-col justify-center items-center">
          <h2
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="text-xl md:text-2xl lg:text-3xl font-bold font-merienda my-4"
          >
            Gallery
          </h2>
          <div
            data-aos="zoom-out-up"
            data-aos-duration="1000"
            className="border-b-2 border-darkPri w-24 md:w-32 mb-4"
          ></div>
        </div>
        <div data-aos="zoom-out-up" data-aos-duration="1000">
          <Gallery />
        </div>
      </section>
    </div>
  );
};

export default About;
