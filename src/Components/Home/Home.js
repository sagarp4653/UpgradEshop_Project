import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Product from "../Products/Product";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Navbar from "../Home/Navbar";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import { addProductsAction, updateAlertModalAction, updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";
import { useDispatch, useSelector } from 'react-redux'
import PRODUCT_LIST from '../DummyJson/productJson.json'
import ModifyProduct from "../ProductPage/ModifyProduct";
import AddProduct from "../ProductPage/AddProduct";
import ProductDetails from "../ProductPage/ProductDetails";
import BuyProduct from "../ProductPage/BuyProduct";
import { PRODUCT_LIST_API } from "../ApiCalls/ApiCall/apiCalls";
import CustomAlertModal from "../ReuseComponents/CustomAlertModal";
import OrderDetail from "../ProductPage/OrderDetail";

const Home = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(updateProductViewStateAction(PRODUCT_LIST))
    dispatch(addProductsAction(PRODUCT_LIST))
  }, [])

    
  useEffect(() => { // ngOnInit()
    PRODUCT_LIST_API({}).then(res => {
      console.log(res)
    })
  }, [])

  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [], isAlertModalOpen = false, alertModalMsg = "You have added product successfully!"  } = storeData || {};
  const check = [...productList]
  const categoryFilterHandler = val => {
    if(val !== '0'){
      let arr = check.filter(i => i.category == val)
      console.log(arr, val)
      dispatch(updateProductViewStateAction(arr)) 
    } else {
      console.log(productList)
      dispatch(updateProductViewStateAction(productList)) 
    }
  }

  const handleCloseAlert = () => {
    dispatch(updateAlertModalAction(false))
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isAlertModalOpen && (
          <CustomAlertModal
            message={alertModalMsg}
            onClose={handleCloseAlert}
          />
        )}
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
                  <CategoriesBar categoriesHandler={categoryFilterHandler} groupBtnArry={[{id: 0, title: "ALL"}, {id: 3, title: 'APPAREL'}, {id: 1, title: 'ELECTRONICS'}, {id: 2, title: 'FOOTWEAR' }, {id: 4, title: 'PERSONAL CARE'}]}/>
                  <Product />
                </div>
              }
            />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/modifyproduct" element={<ModifyProduct />} />
            <Route path="/addproduct" element={<AddProduct />} />
            <Route path="/productdetails" element={<ProductDetails />} />
            <Route path="/buyproduct" element={<BuyProduct />} />
            <Route path="/orderdetail" element={<OrderDetail />} />
            {/* <Route path="/login" element={<Login />} /> */}
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
