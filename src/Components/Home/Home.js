import React, { useEffect, useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "../Login/Login";
import SignUp from "../Login/SignUp";
import Product from "../Products/Product";
import Navbar from "../Home/Navbar";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import {
  addProductsAction,
  updateAdminStatusAction,
  updateAlertModalAction,
  updateProductViewStateAction,
  updateUpdateCategoryStateAction,
} from "../Redux/Action/ProductStoreAction";
import { useDispatch, useSelector } from "react-redux";
import ModifyProduct from "../ProductPage/ModifyProduct";
import ProductDetails from "../ProductPage/ProductDetails";
import BuyProduct from "../ProductPage/BuyProduct";
import {
  PRODUCT_LIST_API,
  GET_CATEGORIES_API,
} from "../ApiCalls/ApiCall/apiCalls";
import CustomAlertModal from "../ReuseComponents/CustomAlertModal";
import OrderDetail from "../ProductPage/OrderDetail";
import PlaceOrder from "../ProductPage/PlaceOrder";
import {
  getKeysAndValueToLocalStorage,
  ifUserIsAdminOrNot,
} from "../../Common/CSS/Utils/utils";
import AddProduct from "../ProductPage/AddProduct";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    PRODUCT_LIST_API({}).then((response) => {
      console.log(response.data);
      dispatch(updateProductViewStateAction(response.data));
      dispatch(addProductsAction(response.data));
    });
  }, []);

  const storeData = useSelector((state) => state.storeState.storeState) || {};
  const {
    productList = [],
    isAlertModalOpen = false,
    alertModalMsg = "You have added product successfully!",
    categoryList = [],
    isError = false,
  } = storeData || {};
  const check = [...productList];

  useEffect(() => {
    GET_CATEGORIES_API({}).then((response) => {
      let tempArray = [];
      tempArray.push({ id: 1, title: "All" });
      response.data?.forEach((element, index) => {
        tempArray.push({ id: index + 2, title: element });
      });
      dispatch(updateUpdateCategoryStateAction(tempArray));
    });

    const currentUserEmail =
      getKeysAndValueToLocalStorage("currentUserLoginEmail") || "";
    const getAllUsers =
      JSON.parse(getKeysAndValueToLocalStorage("adminDetails")) || [];

    if (currentUserEmail && getAllUsers.length > 0) {
      const status =
        ifUserIsAdminOrNot(currentUserEmail, getAllUsers) !== -1 ? true : false;
      if (status) {
        dispatch(updateAdminStatusAction(true));
      } else {
        dispatch(updateAdminStatusAction(false));
      }
    }
  }, []);

  const categoryFilterHandler = (val) => {
    if (val !== "All") {
      let arr = check.filter((i) => i.category == val);
      console.log(arr, val);
      dispatch(updateProductViewStateAction(arr));
    } else {
      console.log(productList);
      dispatch(updateProductViewStateAction(productList));
    }
  };

  const handleCloseAlert = () => {
    dispatch(updateAlertModalAction(false));
  };

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {isAlertModalOpen && (
          <CustomAlertModal
            message={alertModalMsg}
            onClose={handleCloseAlert}
            isError={isError}
          />
        )}
        <div>
          <Routes>
            <Route
              path="/"
              exact
              element={
                <div>
                  <CategoriesBar
                    categoriesHandler={categoryFilterHandler}
                    groupBtnArry={categoryList}
                  />
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
            <Route path="/placeOrder" element={<PlaceOrder />} />
          </Routes>
        </div>
      </BrowserRouter>
    </>
  );
};

export default Home;
