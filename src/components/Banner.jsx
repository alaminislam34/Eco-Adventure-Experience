import { useEffect, useState } from "react";

const Banner = () => {
  const [place, setPlace] = useState([]);
  useEffect(() => {
    fetch("banner.json")
      .then((res) => res.json())
      .then((data) => setPlace(data));
  }, []);
  console.log(place.filter((place) => console.log(place)));
  return (
    <div className="w-full h-full">
      <div>
        {place.map((place) => (
          <div key={place.id}>
            <div>
              <img src={place.image} alt="" />
            </div>
            <p>{place.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Banner;
