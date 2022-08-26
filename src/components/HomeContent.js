import React, { useEffect } from "react";
import Slider from "./Slider";
import Categories from "./Categories";
import LibItemMainPage from "./LibItemMainPage";
import Header from "./Header";
import { useSelector, useDispatch } from "react-redux";
import { getIsLoggedIn } from "../features/libitems/libitemsSlice"
import { useNavigate } from "react-router-dom";

function HomeContent() {

  const isLoggedin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoggedin) {
      navigate("/login");
    }
  }, [isLoggedin]);

  if (!isLoggedin) {
    return null;
  }


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
