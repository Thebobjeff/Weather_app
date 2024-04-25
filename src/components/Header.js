import React, { useState } from "react";
import { Link } from "react-router-dom";
import { updateArea } from "../store/LocationSlice";
import { useDispatch } from "react-redux";
import Logo from "../assets/logo.png";

export const Header = () => {
  const [location, setLocation] = useState("");
  const dispatch = useDispatch();
  const [search, setSearch] = useState(false);

  // Functions
  const showBar =
    "items-center justify-between w-full mi:flex mi:w-auto mi:order-1";
  const hideBar =
    "items-center justify-between hidden w-full mi:flex mi:w-auto mi:order-1";

  const handleClear = () => {
    setLocation("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    handleClear();
  };

  const handleFocus = () => {
    document.getElementById("myTextField").focus();
  };

  const handleSearch = () => {
    setSearch(!search);
    handleFocus(); // Focus on input field when search is clicked
  };

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <Link
            to="https://www.youtube.com/watch?v=BBJa32lCaaY"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              AVA Weather
            </span>
          </Link>
          <div onClick={handleSearch} className="flex mi:order-2">
            <button
              // search icon
              type="button"
              data-collapse-toggle="navbar-search"
              aria-controls="navbar-search"
              aria-expanded="false"
              className="mi:hidden text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5 me-1"
            >
              <svg
                className="w-5 h-5"
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
              <span className="sr-only">Search</span>
            </button>
          </div>
          <div className={search ? showBar : hideBar} id="navbar-search">
            <div className="relative mt-3 mi:hidden">
              {/* this is where the smaller sized search bar is */}
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
              <form onSubmit={handleSubmit}>
                <input
                  onChange={(event) => setLocation(event.target.value)}
                  autoComplete="off"
                  type="text"
                  id="myTextField"
                  className="block w-full p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
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
                  className="hidden"
                ></button>
              </form>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
};
