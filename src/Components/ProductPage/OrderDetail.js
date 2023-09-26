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
    <div style={{width: '100%', height: '100vh'}} className="flex-row justify-content-center align-items-center">
      <div style={{ marginTop: "100px", border: '1px solid black', height: '50vh', width: '80%' }} className="flex-row">

        {/* Product Details */}
        <div className="flex-row" style={{borderRight: '1px solid black', padding: '30px 6px 6px 24px'}}>
          <Box>
            <Typography
              variant="h5"
              noWrap
              sx={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Shoes
            </Typography>
            <Typography
              variant="span"
              Wrap
              sx={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                marginTop: '4px',
                fontSize: '14px',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div style={{marginTop: '10px'}}>
                Quantity: <strong style={{marginLeft: '4px'}}>1</strong>
              </div>

              <div style={{marginTop: '10px'}}>
                Category: <strong style={{marginLeft: '4px'}}>Footwear</strong>
              </div>

              <div style={{marginTop: '10px'}}>
                <i>ksdjflasjdfjasldjflasjdflsjdflkjsadl<br/>fjalskjfklasjdklajsdlkjaslkjalfdjlajs<br/> dlfjasldfjalksdjfklasdf</i>
              </div>

              <div style={{marginTop: '10px', color: 'red'}}>
                <span>Total Price : </span>
                <span>₹ 2000</span>
              </div>
            </Typography>
            {/* <Typography
              variant="span"
              noWrap
              sx={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                marginTop: '4px',
                fontSize: '14px',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Category: <strong>Footwear</strong>
            </Typography> */}
          </Box>
        </div>

        {/* Address */}
        <div className="flex-row" style={{padding: '30px 6px 6px 24px'}}>
          Address
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
