import React from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import LibItemMainPage from "./LibItemMainPage";
import Header from "./Header";

function HomeContent() {
  return (
    <>

      <div className="mt-4 home-container">
        <Slider />
        <Categories />
      </div>
    </>
  );
}

export default HomeContent;
