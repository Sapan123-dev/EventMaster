import React from "react";
import { Route, Routes } from "react-router-dom";
import { HomePage, MoviePage } from "../pages";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/movies" element={<MoviePage />} />
    </Routes>
  );
};

export default AppRoutes;
