
import React, { useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer.js";
import Login from "./components/Login";
import Signin from "./components/Signin";
import PageNotFound from "./components/PageNotFound";
import Loading from "./components/Loading";
import './App.scss';
import MainItems from "./components/MainItems";
import Axios from "axios";
import HomeContent from "./components/HomeContent";

function App() {

  /*   useEffect(() => {
      async function fetchPosts() {
        try {
  
          const response = await Axios.get("../data/popyData.json");
          console.log("henimiş " + response.data);
        } catch (e) {
          debugger
          console.log("there is a problem");
        }
      }
      fetchPosts();
    }, []); */
  return (
    <div className="AppWrapper d-flex flex-column min-vh-100">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" exact element={<HomeContent />} />
          <Route path="/login" exact element={<Login />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/error" element={<PageNotFound />} />
          <Route path="/loading" element={<Loading />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </div>
  );
}

export default App;
