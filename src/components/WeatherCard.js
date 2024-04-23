import { useState } from "react";
import { ForCard, SearchBar } from "./index";

export const WeatherCard = ({ data }) => {
  const [location, setLocation] = useState("New York");

  if (!data || !data.current || !data.current.condition) {
    return <div>No data available</div>;
  }
  const { region } = data.location;
  const { icon, text } = data.current.condition;
  const { temp_c } = data.current;
  if (location !== region) {
    setLocation(region);
  }
  return (
    <div className="w-3/6 p-8 mx-auto mt-16 rounded-lg bg-slate-100 text-gray-800 border shadow-md">
      <SearchBar />
      <div className=" mt-8 mb-5 flex flex-col items-center">
        <h1 className="text-6xl font-semibold">
          {location ? location : "Loading"}
        </h1>
      </div>
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <img src={data ? icon : ""} alt="" />
          <h2 className="text-lg font-semibold">{text}</h2>
        </div>
        <span className="font-bold text-8xl">{temp_c}°</span>
      </div>
      <div className="flex justify-between mt-8 space-x-4 text-gray-600">
        {data &&
          data.forecast.forecastday.map((days) => <ForCard info={days} />)}
      </div>
    </div>
  );
};
