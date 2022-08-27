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
import "./App.scss";
import CategoryPage from "./components/CategoryPage";
import Signup from "./components/Signup";
import { fetchUseStatus, getIsLoggedIn } from "../src/features/libitems/libitemsSlice";
import AddItem from "./components/AddItem";

function App() {
  const isLoggedin = useSelector(getIsLoggedIn);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUseStatus());
  }, [dispatch]);

  return (
    <div className="AppWrapper d-flex flex-column min-vh-100">
      <BrowserRouter>
        {
          isLoggedin ? <Header /> : null
        }
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/addItem" exact element={<AddItem />} />
          <Route path="/signup" exact element={<Signup />} />
          <Route path="/all" exact element={<LibItemMainPage />} />
          <Route path="/error" exact element={<PageNotFound />} />
          <Route path="/loading" exact element={<Loading />} />
          <Route path="/libitem/:itemId" exact element={<LibItemDetail />} />
          <Route path="/category/:categoryId" exact element={<CategoryPage />} />
        </Routes>
        {
          isLoggedin ? <Footer /> : null
        }
      </BrowserRouter>

    </div>
  );
}

export default App;
