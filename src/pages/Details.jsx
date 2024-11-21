import { useEffect, useState } from "react";
import { MdOutlineAccessTimeFilled } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { useLoaderData, useNavigate, useParams } from "react-router-dom";
import Loader from "../components/Loader";

const Details = () => {
  const allData = useLoaderData();
  const [place, setPlace] = useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const detail = allData.find((place) => place.id == id);
    setPlace(detail);
  }, [id, allData]);
  if (!place) {
    return <Loader />;
  }
  return (
    <section className="w-11/12 mx-auto">
      <div className=" my-6 md:my-8">
        <div
          data-aos="zoom-in-up"
          data-aos-duration="1000"
          key={place.id}
          className=" p-4 grid grid-cols-1 gap-4 shadow-[_0px_4px_10px_rgba(0, 0, 0, 0.5)] bg-gradient-to-b from-[#F8F8FF] to-blue-300 rounded-xl relative"
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
          <div className="md:space-y-4 space-y-3 py-2 md:px-4">
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

            <div className="grid md:grid-cols-2 grid-cols-1 items-center ">
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1600"
                className="md:border-r-2 md:border-gray-500"
              >
                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="1600"
                  className="flex flex-row gap-2 items-center my-2"
                >
                  <MdOutlineAccessTimeFilled className="text-darkPri text-sm md:text-base lg:text-xl" />
                  <p>{place.duration}</p>
                </div>

                <div
                  data-aos="zoom-in-left"
                  data-aos-duration="1500"
                  className="flex flex-row gap-2 items-center my-2"
                >
                  <FaLocationDot className="text-sm md:text-base lg:text-xl font-bold text-darkPri" />
                  <p>{place.location}</p>
                </div>
                <p
                  data-aos="zoom-in-left"
                  data-aos-duration="1700"
                  className="text-lg md:text-xl font-bold my-2"
                >
                  <span className="italic text-darkPri">$ </span>
                  {place.adventureCost}
                </p>
              </div>
              <div
                className="md:ml-6"
                data-aos="zoom-in-left"
                data-aos-duration="1700"
              >
                <p className="text-sm md:text-base lg:text-lg my-2">
                  <span className="text-darkPri">➤</span>{" "}
                  <span>Adventure Level </span>
                  <span className="font-bold text-darkPri">
                    {" "}
                    {place.adventureLevel}
                  </span>
                </p>
                <p className="text-sm md:text-base lg:text-lg my-2">
                  <span className="text-darkPri">➤</span> Group size:{" "}
                  <span className="font-semibold">{place.maxGroupSize}</span>{" "}
                  people
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 grid-cols-1 items-center text-left">
              <div
                data-aos="zoom-in-left"
                data-aos-duration="1800"
                className="md:border-r-2 md:border-gray-500"
              >
                <p className="text-base md:text-lg lg:text-xl font-semibold">
                  Included Items:
                </p>
                {place.includedItems.map((item, i) => (
                  <ol key={i} className="*:text-sm md:*:text-base ">
                    <li className="py-1">
                      <span className="text-darkPri">✔</span> {item}
                    </li>
                  </ol>
                ))}
              </div>
              <div
                className="md:ml-6"
                data-aos="zoom-in-left"
                data-aos-duration="1900"
              >
                <p className="text-base md:text-lg lg:text-xl font-semibold">
                  Eco Friendly Features :
                </p>
                {place.ecoFriendlyFeatures.map((feature, i) => (
                  <ul key={i} className="*:text-sm md:*:text-base ">
                    <li className="py-1">
                      <span className="text-darkPri">✔</span> {feature}
                    </li>
                  </ul>
                ))}
              </div>
              <div data-aos="zoom-in-left" data-aos-duration="2000">
                <p className="text-base md:text-lg lg:text-xl font-semibold py-2">
                  Special Instructions:{" "}
                </p>
                {place.specialInstructions.map((ins, i) => (
                  <ul key={i} className="*:text-sm md:*:text-base ">
                    <li className="py-1">
                      <span className="text-darkPri">✔</span> {ins}
                    </li>
                  </ul>
                ))}
              </div>
            </div>
            <div className="text-left mt-6 flex justify-start items-center">
              <button
                onClick={() => navigate("/meetGoogle")}
                className="text-sm md:text-base lg:text-lg py-1.5 md:py-2 px-3 md:px-4 bg-darkPri"
              >
                Talk with Expert
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Details;
