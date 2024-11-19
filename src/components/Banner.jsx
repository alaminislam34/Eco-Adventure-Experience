import { useEffect, useState } from "react";

const Banner = () => {
  const places = [
    {
      id: 1,
      image: "https://i.ibb.co.com/YkCSxB4/everest.jpg",
      title: "Everest Base Camp Trek",
      location: "Nepal",
      shortDescription:
        "Experience the breathtaking journey to the foot of the world's highest peak.",
    },
    {
      id: 2,
      image: "https://i.ibb.co.com/CP9D33Y/nazarizal.jpg",
      title: "Coral Diving Paradise",
      location: "Queensland, Australia",
      shortDescription:
        "Dive into the vibrant underwater world of the Great Barrier Reef.",
    },
    {
      id: 3,
      image: "https://i.ibb.co.com/2tVY8B0/Exploration.jpg",
      title: "Amazon Jungle Expedition",
      location: "Brazil",
      shortDescription:
        "Embark on a thrilling expedition into the heart of the Amazon rainforest.",
    },
  ];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % places.length);
    }, 10000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="w-full h-full relative top-0 left-0">
      <div
        className="w-full h-[90vh] bg-cover bg-center filter brightness-50"
        style={{ backgroundImage: `url(${places[currentIndex].image})` }}
      ></div>

      <div className="absolute top-1/2 -translate-y-1/2 left-10 space-y-3 text-white">
        <h2 className="text-2xl md:text-3xl lg:text-5xl font-bold">
          {places[1].title}
        </h2>
        <p className="text-lg md:text-xl font-semibold max-w-[400px]">
          {places[1].shortDescription}
        </p>
        <p>{places[1].location}</p>
      </div>

      <div className="max-h-[400px] grid grid-cols-3 gap-4 absolute top-2/3 -translate-y-2/3 right-0 z-10">
        {places.map((place) => (
          <div key={place.id}>
            <div className="w-28 md:w-32 lg:w-48 h-44 md:h-56 lg:h-64 rounded-xl overflow-hidden cursor-pointer">
              <img
                className="object-cover bg-center bg-cover h-full"
                src={place.image}
                alt=""
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
