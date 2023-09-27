import React from "react";
import { Typography } from "@mui/material";
import Box from "@mui/material/Box";
import { useSelector } from "react-redux";
import Button from "@mui/material/Button";

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
    <div>
      <div
        style={{ width: "100%", height: "80vh" }}
        className="flex-row justify-content-center align-items-center"
      >
        <div
          style={{
            marginTop: "100px",
            border: "1px solid black",
            height: "50vh",
            width: "70%",
          }}
          className="flex-row"
        >
          {/* Product Details */}
          <div
            className="flex-row"
            style={{
              borderRight: "1px solid black",
              padding: "30px 500px 6px 24px",
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
                <div style={{ marginTop: "10px" }}>
                  Quantity: <strong style={{ marginLeft: "4px" }}>1</strong>
                </div>

                <div style={{ marginTop: "10px" }}>
                  Category:{" "}
                  <strong style={{ marginLeft: "4px" }}>Footwear</strong>
                </div>

                <div style={{ marginTop: "10px" }}>
                  <i>
                    ksdjflasjdfjasldjflasjdflsjdflkjsadl
                    <br />
                    fjalskjfklasjdklajsdlkjaslkjalfdjlajs
                    <br /> dlfjasldfjalksdjfklasdf
                  </i>
                </div>

                <div style={{ marginTop: "10px", color: "red" }}>
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
                // fontSize: '20px',
                color: "inherit",
                textDecoration: "none",
              }}
            >
              Category: <strong>Footwear</strong>
            </Typography> */}
            </Box>
          </div>

          {/* Address */}
          <div
            className="flex-row"
            style={{ padding: "30px 20px 6px 24px", width: "50%" }}
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
                  color: "inherit",
                  textDecoration: "none",
                }}
              >
                Address Details :
              </Typography>

              <div style={{ marginTop: "1px" }}>
                <Typography
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    // fontWeight: 700,
                    // letterSpacing: ".3rem",
                    fontSize: "14px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Lucknow Home
                </Typography>
              </div>
              <div style={{ marginTop: "1px" }}>
                <Typography
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    // fontWeight: 700,
                    // letterSpacing: ".3rem",
                    fontSize: "14px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Contact Number: 7903710346
                </Typography>
              </div>
              <div style={{ marginTop: "1px" }}>
                <Typography
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    // fontWeight: 700,
                    // letterSpacing: ".3rem",
                    fontSize: "14px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Police Line,Lucknow
                </Typography>
              </div>
              <div style={{ marginTop: "1px" }}>
                <Typography
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    // fontWeight: 700,
                    // letterSpacing: ".3rem",
                    fontSize: "14px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  Uttar Pradesh
                </Typography>
              </div>
              <div style={{ marginTop: "1px" }}>
                <Typography
                  sx={{
                    // mr: 2,
                    // display: { xs: "none", md: "flex" },
                    // fontFamily: "monospace",
                    // fontWeight: 700,
                    // letterSpacing: ".3rem",
                    fontSize: "14px",
                    color: "inherit",
                    textDecoration: "none",
                  }}
                >
                  723990
                </Typography>
              </div>
            </Box>
          </div>
        </div>
      </div>

      {/* Buttons */}
      <div className=" flex-row justify-content-center align-items-end">
        <Button size="small" variant="contained" color="primary">
          BACK
        </Button>

        <Button size="small" variant="contained" color="primary">
          PLACE ORDER
        </Button>
      </div>
    </div>
  );
};

export default OrderDetail;
