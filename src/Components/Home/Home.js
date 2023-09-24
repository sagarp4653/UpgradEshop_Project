import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Product from "../Products/Product";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Navbar from "../Home/Navbar";

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
            <Route
              path="/"
              exact
              element={
                <div>
                  <div
                    className="flex-column justify-content-center align-items-center"
                    style={{ padding: "100px 0 20px 0" }}
                  >
                    <ToggleButtonGroup
                      color="primary"
                      aria-label="Platform"
                      exclusive
                    >
                      <ToggleButton value="web">ALL</ToggleButton>
                      <ToggleButton value="android">APPAREL</ToggleButton>
                      <ToggleButton value="ios">ELECTRONICS</ToggleButton>
                      <ToggleButton value="ios">PERSONAL CARE</ToggleButton>
                    </ToggleButtonGroup>
                  </div>
                  <Product />
                </div>
              }
            />
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
