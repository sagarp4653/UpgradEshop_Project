import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Navbar from './Navbar'

const Home = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
          <div
          // style={{
          //   background: "#f3f4f8",
          //   paddingTop: "120px",
          //   paddingLeft: "16px",
          //   paddingRight: "16px",
          // }}
          >
            {/* {children} */}
            <Routes>
              <Route path="/" exact element={<div>Landing Page</div>} />
              <Route path="/login" element={<Login />} />
              <Route path="/signup" element={<SignUp />} />
              {/* <Route path="/login" element={<Login />} /> */}
            </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
