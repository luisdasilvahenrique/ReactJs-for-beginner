import React from "react";
import { Routes, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search/Search";

const router = () => {
  return (
    <Routes>
      <Route path="/" element={<PagesPromotionSearch />} />
    </Routes>
  );
};

export default router;
