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
import { PRODUCT_LIST_API, GET_CATEGORIES_API } from "../ApiCalls/ApiCall/apiCalls";
import CustomAlertModal from "../ReuseComponents/CustomAlertModal";
import OrderDetail from "../ProductPage/OrderDetail";

const Home = () => {
  const dispatch = useDispatch()
    
  useEffect(() => { // ngOnInit()
    PRODUCT_LIST_API({}).then(response => {
      console.log(response.data);
      dispatch(updateProductViewStateAction(response.data))
      dispatch(addProductsAction(response.data))
    });
    GET_CATEGORIES_API({}).then((response) => {
      let tempArray = [];
      tempArray.push( {'id': 1, 'title': 'All'})
      response.data.forEach((element, index) => {
        tempArray.push( {'id': index+2, 'title': element})
      });
      setCategoriesArray(tempArray);
      console.log(tempArray);
    })
  }, [])

  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [], isAlertModalOpen = false, alertModalMsg = "You have added product successfully!"  } = storeData || {};
  const check = [...productList]
  const [categoriesArray, setCategoriesArray] = useState([]);
  const categoryFilterHandler = val => {
    if(val !== 'All'){
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
                  <CategoriesBar categoriesHandler={categoryFilterHandler} groupBtnArry={categoriesArray}/>
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
