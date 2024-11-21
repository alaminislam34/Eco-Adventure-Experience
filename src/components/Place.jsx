import Loader from "../components/Loader";
import { useContext, useEffect, useState } from "react";
import { FaLocationDot } from "react-icons/fa6";
import { HiOutlineExternalLink } from "react-icons/hi";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { Link, useLoaderData, useNavigate } from "react-router-dom";
import { ProviderContext } from "../ContextProvider/Provider";

const Place = () => {
  const [data, setData] = useState([]);
  const allData = useLoaderData();
  const { handleDetailsId } = useContext(ProviderContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (allData) {
      setData(allData);
    }
  }, [allData]);
  return (
    <div>
      {data && data.length > 0 ? (
        <div className=" w-11/12 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-12 m-4">
          {data.slice(0, 6).map((place, i) => (
            <div
              data-aos="zoom-in-up"
              data-aos-duration="1000"
              key={i}
              className="p-2 grid grid-cols-1 shadow-[_0px_4px_10px_rgba(0, 0, 0, 0.5)] bg-gradient-to-b from-[#F8F8FF] to-blue-300 backdrop-blur-sm rounded-xl"
            >
              <div
                data-aos="zoom-in"
                data-aos-duration="1100"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                <img
                  className="aspect-video bg-cover bg-center object-cover bg-no-repeat rounded-lg"
                  src={place.image}
                  alt=""
                />
              </div>
              <div className="space-y-2 p-4">
                <h2
                  data-aos="zoom-in-up"
                  data-aos-duration="1300"
                  className="text-lg md:text-xl lg:text-2xl text-darkPri font-bold"
                >
                  {place.adventureTitle}
                </h2>
                <div data-aos="zoom-in-up" data-aos-duration="1200">
                  <div className="border-b-2 border-darkPri w-12 my-1"></div>
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
                    onClick={() => handleDetailsId(place.id)}
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
      ) : (
        <Loader />
      )}
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        className="flex justify-center items-center my-6 md:my-8"
      >
        <button
          onClick={() => navigate("/adventure")}
          className="btn py-1.5 md:py-2 px-4 md:px-6 lg:px-8 rounded-none text-sm md:text-base font-medium bg-primary hover:bg-darkPri"
        >
          Show All
        </button>
      </div>
    </div>
  );
};

export default Place;
