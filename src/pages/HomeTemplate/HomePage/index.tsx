import React from "react";
import Footer from "../_component/Footer";
import HomeCarousel from "../_component/HomeCarousel/HomeCarousel";
import MultipleRows from "./_component/MultipleRowSlick";

export default function ListMovie() {
  return (
    <div>
      <HomeCarousel />
      <MultipleRows />
      <Footer />
      <div className="mx-36"></div>
    </div>
  );
}
