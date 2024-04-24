import { useFetch } from "../hooks/useFetch";
import { useSize } from "../hooks/useSize";
import { WeatherCard } from "../components/index";
import { useEffect, useState } from "react";

export const Homepage = () => {
  const size = useSize();
  const [forcastlen, setForcastlen] = useState(7);

  useEffect(
    () => {
      if (size && size <= 320) {
        setForcastlen(3);
      } else if (size && size > 320 && size <= 430) {
        setForcastlen(4);
      } else if (size && size > 430 && size <= 508) {
        setForcastlen(5);
      } else if (size && size > 508 && size <= 768) {
        setForcastlen(5);
      } else {
        setForcastlen(7);
      }
    },
    { forcastlen }
  );
  const data = useFetch(forcastlen);

  return (
    <div>
      <WeatherCard data={data} />
    </div>
  );
};
