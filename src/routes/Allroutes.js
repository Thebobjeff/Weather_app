import { Homepage, PageNotFound } from "../pages/index";
import { Routes, Route } from "react-router-dom";

export const Allroutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </div>
  );
};
