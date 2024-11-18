import { useEffect, useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Details = () => {
  const allData = useLoaderData();
  const [place, setPlace] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    const detail = allData.find((place) => place.id == id);
    setPlace(detail);
  }, [id, allData]);
  if (!place) {
    return <Loader />;
  }
  return (
    <div className="w-11/12 mx-auto my-6 md:my-8">
      <div
        data-aos="zoom-in-up"
        data-aos-duration="1000"
        key={place.id}
        className="p-4 grid grid-cols-1 lg:grid-cols-2 gap-4 shadow-xl bg-white rounded-xl relative"
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
          <div className="absolute top-0 left-0 ">
            {place.bookingAvailability ? (
              <p className="text-sm text-white font-semibold bg-darkPri py-1 px-4">
                Available
              </p>
            ) : (
              <p className="text-sm text-white font-semibold bg-red-600 py-1 px-4">
                Booked
              </p>
            )}
          </div>
        </div>
        <div className="space-y-2 py-2">
          <h4
            data-aos="zoom-in-left"
            data-aos-duration="1100"
            className="text-sm md:text-base font-semibold"
          >
            {place.categoryName}
          </h4>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1200"
            className="border-b-2 border-darkPri w-12 my-1"
          ></div>
          <h2
            data-aos="zoom-in-left"
            data-aos-duration="1300"
            className="text-lg md:text-xl lg:text-2xl text-darkPri font-bold"
          >
            {place.adventureTitle}
          </h2>
          <p
            data-aos="zoom-in-left"
            data-aos-duration="1400"
            className="text-xs md:text-sm lg:text-base text-black/70"
          >
            {place.longDescription}
          </p>
          <div
            data-aos="zoom-in-left"
            data-aos-duration="1500"
            className="flex flex-row gap-2 items-center"
          >
            <FaLocationDot className="text-base md:text-xl font-bold text-darkPri" />
            <p>{place.location}</p>
          </div>
          <div className="flex justify-between items-center">
            <div
              data-aos="zoom-in-left"
              data-aos-duration="1600"
              className="flex flex-row gap-2 items-center"
            >
              <MdOutlineAccessTimeFilled className="text-darkPri text-base md:text-xl" />
              <p>{place.duration}</p>
            </div>
            <p
              data-aos="zoom-in-left"
              data-aos-duration="1700"
              className="text-xl font-bold"
            >
              <span className="italic text-darkPri">$</span>
              {place.adventureCost}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
