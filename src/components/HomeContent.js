import React from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import LibItemMainPage from "./LibItemMainPage";

function HomeContent() {
  return (
    <div className="mt-4">
      <Slider />
      <Categories />
      <LibItemMainPage />
    </div>
  );
}

export default HomeContent;
