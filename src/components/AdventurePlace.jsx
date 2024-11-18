import { useLoaderData } from "react-router-dom";

const AdventurePlace = () => {
  const data = useLoaderData();
  return (
    <div className="w-11/12 mx-auto">
      <div className="flex flex-col gap-4">
        {data.map((place, i) => (
          <div
            key={i}
            className="border border-darkPri p-4 grid grid-cols-2 gap-4"
          >
            <div>
              <img src={place.image} alt="" />
            </div>
            <div>
              <h2>{place.adventureTitle}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdventurePlace;
