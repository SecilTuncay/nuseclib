import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import PageNotFound from "./components/PageNotFound";
import Loading from "./components/Loading";
import HomeContent from "./components/HomeContent";
import LibItemMainPage from "./components/LibItemMainPage";
import LibItemDetail from "./components/LibItemDetail";
import AvailableItems from "./components/AvailableItems";
import { getUser } from "./features/libitems/libitemsSlice";
import "./App.scss";
import CategoryPage from "./components/CategoryPage";
import Signup from "./components/Signup";

function App() {
  /*  const user = useSelector(getUser);
  //const isLoggedIn = user.loggedIn;
  const isLoggedIn = true;
  console.log("file: App.js - line 19 - user", user); */
  return (
    <div className="AppWrapper d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/available" exact element={<AvailableItems />} />

          <Route path="/login" exact element={<Login />} />
          <Route path="/signup" exact element={<Signup />} />

          <Route path="/error" element={<PageNotFound />} />
          <Route path="/loading" element={<Loading />} />
          <Route path="/libitem/:itemId" element={<LibItemDetail />} />
          <Route path="/category/:categoryId" element={<CategoryPage />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
