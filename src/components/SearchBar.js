import { useState } from "react";
import { updateArea } from "../store/LocationSlice";
import { useDispatch } from "react-redux";

export const SearchBar = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const handleClear = () => {
    setLocation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClear();
  };
  return (
    <div>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <label
          for="default-search"
          className="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
        >
          Find
        </label>
        <div className="relative">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 20 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
              />
            </svg>
          </div>
          <input
            type="search"
            onChange={(event) => setLocation(event.target.value)}
            id="default-search"
            className="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 sm:placeholder-text-sm dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Search ZipCode, IP address ,city name......."
            required
            value={location}
          />
          <button
            onClick={
              location !== ""
                ? () => dispatch(updateArea(location))
                : () => dispatch(updateArea("33101"))
            }
            type="submit"
            className="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Find Now
          </button>
        </div>
      </form>
    </div>
  );
};
