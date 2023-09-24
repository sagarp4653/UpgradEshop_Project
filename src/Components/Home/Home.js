import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import ProductDetails from "../ProductPage/ProductDetails";
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div
          >
            {/* {children} */}
            <Routes>
              <Route path="/" exact element={<div>Landing Page</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/productdetails" element={<ProductDetails/>} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
