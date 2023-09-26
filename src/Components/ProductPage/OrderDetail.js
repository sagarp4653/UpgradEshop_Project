import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const OrderDetail = () => {
  const storeData = useSelector((state) => state.storeState.storeState) || {};
  const {
    productList = [],
    productListViewState = [],
    placeOrderItemState = {},
  } = storeData || {};
  const {
    name = "",
    price = "",
    description = "",
    category = "",
    availableQuantity = "",
    quantity = "",
    imgUrl = "",
  } = placeOrderItemState;

  return (
    <>
      <div style={{marginTop : "100px"}}>
        <div className="flex-row">
            <Box className="flex-row align-items-center justify-content-center">

            </Box>

        </div>



        
      </div>
    </>
  );
};

export default OrderDetail;
