import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PagesPromotionSearch from "./Promotion/Search/Search";
import PagesPromotionForm from "./Promotion/Form/Form";


const Root = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/create" element={<PagesPromotionForm />} />
        <Route path="/edit/:id" element={<PagesPromotionForm />} />
        <Route path="/" element={<PagesPromotionSearch />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Root;

