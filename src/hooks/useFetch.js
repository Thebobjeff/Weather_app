import { useEffect, useState } from "react";
import API_KEY from "../components/api_key";
import { useSelector } from "react-redux";

export const useFetch = (forcastlen) => {
  const [location, setLocation] = useState({});
  const area = useSelector((state) => state.locationState.location);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const reply = await fetch(
          `https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${area}&days=${forcastlen}&aqi=no&alerts=no`
        );

        if (!reply.ok) {
          throw new Error(`Failed to fetch weather data: ${reply.statusText}`);
        }

        const content = await reply.json();
        setLocation(content);
      } catch (error) {
        if (error instanceof TypeError) {
          console.error("Network error occurred:", error.message);
        } else {
          console.error(
            "An error occurred while fetching weather data:",
            error.message
          );
        }
      }
    };
    fetchData();
  }, [area, forcastlen]);
  return location;
};
