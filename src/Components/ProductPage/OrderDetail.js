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
    <div
      style={{ width: "100%", height: "100vh" }}
      className="flex-row justify-content-center align-items-center"
    >
      <div
        style={{
          marginTop: "100px",
          boxShadow: "0 0 5px rgba(0, 0, 0, 0.2)",
          height: "40vh",
          width: "80%",
        }}
        className="flex-row w-100"
      >
        {/* Product Details */}
        <div
          className="flex-row"
          style={{
            borderRight: "1px solid #eceded",
            padding: "30px 6px 6px 24px",
            width: "60%",
            flexWrap: "wrap",
          }}
        >
          <Box>
            <Typography
              variant="h4"
              noWrap
              sx={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                // fontSize: '20px',
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
                marginTop: "4px",
                fontSize: "14px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div style={{ marginTop: "16px" }}>
                Quantity: <strong style={{ marginLeft: "4px" }}>1</strong>
              </div>

              <div style={{ marginTop: "16px" }}>
                Category:{" "}
                <strong style={{ marginLeft: "4px" }}>Footwear</strong>
              </div>

              <div style={{ marginTop: "16px" }}>
                <i>
                  ksdjflasjdfjasldjflasjdflsjdflkjsadlfjalskj
                  asdkfjalsdjfalsdjfl jljlfjlasjkdlfjsldfj lsjdfllsklfllskjfd
                  alsdfklasjdkflsjdlfsldfjlsjfljsdljflsjflksdjfjljkkl lksaldfj
                  asdflskdjl ljflasjdlj salldjfljsdl flskjd flasjdfkl
                  ajsdfjalskjf fklasjdklajsdlkjaslkjalfdjlajs
                  dlfjasldfjalksdjfklasdf
                </i>
              </div>

              <div
                style={{
                  marginTop: "16px",
                  color: "red",
                  fontSize: "18px",
                  fontWeight: "500",
                }}
              >
                <span>Total Price : </span>
                <span>₹ 2000</span>
              </div>
            </Typography>
          </Box>
        </div>

        {/* Address */}
        <div
          className="flex-row"
          style={{ padding: "30px 6px 6px 24px", width: "40%" }}
        >
          <Box>
            <Typography
              variant="h4"
              noWrap
              sx={{
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                // fontSize: '20px',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Address Details :
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
                marginTop: "4px",
                fontSize: "14px",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              <div style={{ marginTop: "6px" }}>
                Lucknow: {"Home"}
              </div>

              <div style={{ marginTop: "6px" }}>
                Contact Number: {"7273478647"}
              </div>

              <div style={{ marginTop: "6px" }}>
                Police Line, Lucknow
              </div>

              <div style={{ marginTop: "6px" }}>
                Uttar Pradesh
              </div>

              <div style={{ marginTop: "6px" }}>
                778780
              </div>

            </Typography>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default OrderDetail;
