import { useState } from "react";
import { ForCard, SearchBar } from "./index";
import dayjs from "dayjs";

export const WeatherCard = ({ data }) => {
  const [location, setLocation] = useState("New York");

  if (!data || !data.current || !data.current.condition) {
    return <div>No data available</div>;
  }

  const date = data
    ? dayjs(data.forecast.forecastday[0].date).format("dddd")
    : "";
  const { region } = data.location;
  const { icon, text } = data.current.condition;
  const { temp_c, feelslike_c } = data.current;

  if (location !== region) {
    setLocation(region);
  }

  return (
    <div className="sm:w-10/12 w-3/6 p-8 mx-auto my-20 rounded-lg bg-slate-100 text-gray-800 border shadow-md">
      <div className="sm:hidden">
        <SearchBar />
      </div>
      <div className=" mt-8 mb-6 flex flex-col items-center">
        <h1 className="sm:text-5xl text-6xl font-semibold">
          {location ? location : "Loading..."}
        </h1>
        <h2 className="sm:text-2xl text-4xl font-semibold">{date}</h2>
      </div>
      <div className="flex justify-between space-x-8">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">Current Weather:</h3>
          <img src={data ? icon : ""} alt="" />
          <h3 className="text-lg font-semibold">{text}</h3>
        </div>
        <div className="flex sm:flex-col flex-row ">
          <div className="sm:mb-5 mr-5">
            <h4 className="font-bold sm:text-sm text-lg">feels Like:</h4>
            <span className="font-bold sm:text-4xl text-8xl">
              {feelslike_c}°
            </span>
          </div>
          <div>
            <h4 className="font-bold sm:text-sm text-lg">Actually is :</h4>
            <span className="font-bold sm:text-4xl text-8xl">{temp_c}°</span>
          </div>
        </div>
      </div>
      <div className="flex justify-between space-x-8 mt-5">
        <div className="flex flex-col items-center">
          <h3 className="font-bold text-lg">ForCast: </h3>
        </div>
      </div>
      <div className="flex justify-between mt-2 space-x-4 text-gray-600 pl-2">
        {data &&
          data.forecast.forecastday.map((days) => (
            <ForCard key={days.date_epoch} info={days} />
          ))}
      </div>
    </div>
  );
};
