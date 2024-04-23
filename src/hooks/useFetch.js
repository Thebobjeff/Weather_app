import { useEffect, useState } from "react";
import API_KEY from "../components/api_key";

export const useFetch = () => {
  const [location, setLocation] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      const reply = await fetch(
        `http://api.weatherapi.com/v1/forecast.json?key=${API_KEY} &q=11212&days=7&aqi=no&alerts=no`
      );
      const content = await reply.json();
      setLocation(content);
    };
    fetchData();
  }, []);
  return location;
};
