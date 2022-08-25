import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Loading from "./components/Loading";
import HomeContent from "./components/HomeContent";
import LibItemMainPage from "./components/LibItemMainPage";
import LibItemDetail from "./components/LibItemDetail";
import AvailableItems from "./components/AvailableItems";
import "./App.scss";
import CategoryPage from "./components/CategoryPage";
import Signup from "./components/Signup";
import { fetchUseStatus, getIsLoggedIn } from "../src/features/libitems/libitemsSlice";

function App() {
  const isLoggedin = useSelector(getIsLoggedIn);
  console.log('isLoggedin: ', isLoggedin);
  debugger
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUseStatus());
  }, [dispatch]);

  return (
    <div className="AppWrapper d-flex flex-column min-vh-100">
      {
        isLoggedin ? <Header /> : null
      }

      <BrowserRouter>
        <Routes>
          <Route path="/" element={isLoggedin ? <HomeContent /> : <Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/available" exact element={<AvailableItems />} />
          <Route path="/all" exact element={<LibItemMainPage />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/libitem/:itemId" element={<LibItemDetail />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
      </BrowserRouter>
      {
        isLoggedin ? <Footer /> : null
      }

    </div>
  );
}

export default App;
