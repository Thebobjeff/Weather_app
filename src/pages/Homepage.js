import React from "react";
import { useFetch } from "../hooks/useFetch";
import { WeatherCard } from "../components/index";

export const Homepage = () => {
  const data = useFetch();

  return (
    <div>
      <WeatherCard data={data} />
    </div>
  );
};
