import React from "react";
import { Routes, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";

const router = () => {
  return (
    <Routes>
      <Route path="/create" element={<PagesPromotionForm />} />
      <Route path="/edit/:id" element={<PagesPromotionForm />} />
      <Route path="/" element={<PagesPromotionSearch />} />
    </Routes>
  );
};

export default router;
