import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link, useLoaderData } from "react-router-dom";

const AdventurePlace = () => {
  const adventure = useLoaderData();

  return (
    <div className="w-11/12 mx-auto m-6">
      <div className="flex justify-center items-center flex-col gap-4 ">
        {adventure.map((place, i) => (
          <div
            data-aos="zoom-in-up"
            data-aos-duration="1000"
            key={i}
            className="p-4 grid grid-cols-1 md:grid-cols-2 gap-4 shadow-xl bg-white rounded-xl"
          >
            <div
              data-aos="zoom-in"
              data-aos-duration="1100"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
            >
              <img
                className="aspect-video bg-cover bg-center object-cover bg-no-repeat rounded-lg w-full h-full"
                src={place.image}
                alt=""
              />
            </div>
            <div className="space-y-2 px-2 flex justify-between flex-col py-4">
              <h2
                data-aos="zoom-in-up"
                data-aos-duration="1300"
                className="text-lg md:text-xl lg:text-2xl text-darkPri font-bold"
              >
                {place.adventureTitle}
              </h2>
              <div data-aos="zoom-in-up" data-aos-duration="1200">
                <div className="border-b-2 border-darkPri w-36 my-1"></div>
              </div>
              <p
                data-aos="zoom-in-up"
                data-aos-duration="1400"
                className="text-xs md:text-sm lg:text-base text-black/70"
              >
                {place.shortDescription}
              </p>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1500"
                className="flex flex-row gap-2 items-center"
              >
                <FaLocationDot className="text-base md:text-xl font-bold text-darkPri" />
                <p>{place.location}</p>
              </div>
              <div
                data-aos="zoom-in-up"
                data-aos-duration="1600"
                className="flex justify-between items-center"
              >
                <div className="flex flex-row gap-2 items-center">
                  <MdOutlineAccessTimeFilled className="text-darkPri text-base md:text-xl" />
                  <p>{place.duration}</p>
                </div>
                <p className="text-xl font-bold">
                  <span className="italic text-darkPri">$</span>
                  {place.adventureCost}
                </p>
              </div>
              <div data-aos="zoom-in-up" data-aos-duration="1800">
                <Link
                  to={`/details/${place.id}`}
                  className="py-1.5 md:py-2 px-4 md:px-6 text-sm md:text-base font-semibold bg-darkPri hover:shadow-[inset_2px_4px_10px_0px_#00000090]  text-white hover:bg-darkPri btn rounded-md group"
                >
                  <span className=" flex flex-row gap-1 items-center justify-center group-hover:scale-95 duration-300">
                    View More <HiOutlineExternalLink />
                  </span>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventurePlace;
