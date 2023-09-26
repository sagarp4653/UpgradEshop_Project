import React from "react";
import { Typography } from "@mui/material";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { useSelector } from "react-redux";

const BuyProduct = () => {

  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { placeOrderItemState = {} } = storeData || {};

  const {
    name = '',
    price = '',
    description = "",
    category = "",
    availableQuantity = '',
    quantity = '',
    imgUrl = ''
  } = placeOrderItemState

  return (
    <>
      <div>
        <div
          className="flex-row justify-content-center"
          style={{ height: "100vh" }}
        >
          {/* Product Image */}
          <div className="flex-column justify-content-center align-items-start">
            <Card sx={{ maxWidth: 345, boxShadow: "none" }}>
              <CardMedia
                component="img"
                height="345"
                image={imgUrl || "https://mtndeals.co.za/wp-content/uploads/2023/09/Apple-iPhone-12-64GB.jpg"}
                alt="Paella dish"
              />
            </Card>
          </div>

          {/* Product Description/ */}
          <div
            className="flex-column justify-content-center align-items-baseline"
            style={{ marginLeft: "50px" }}
          >
            <Box className="flex-row align-items-center justify-content-start">
              <Typography
                gutterBottom
                variant="h4"
                component="span"
                style={{
                  marginRight: "20px",
                  marginBottom: "0",
                  fontSize: "28px",
                  fontWeight: "500",
                }}
              >
                {name || "iPhone 12"}
              </Typography>
              <div
                className="flex-row align-items-center"
                style={{
                  background: "#3f51b5",
                  width: "fit-content",
                  height: "auto",
                  color: "white",
                  fontSize: "10px",
                  padding: "5px 5px 7px 7px",
                  borderRadius: "16px",
                  textAlign: "center",
                  fontWeight: "500",
                }}
              >
                <span>Availiabilty Quantity : {availableQuantity || "148"}</span>
              </div>
            </Box>
            <Box style={{ marginTop: "12px" }}>
              <span style={{ marginRight: "10px", fontSize: "12px" }}>
                Category :
              </span>
              <strong style={{ fontSize: "12px", fontWeight: "700" }}>
                {category || "Electronics"}
              </strong>
            </Box>
            <Box style={{ marginTop: "20px" }}>
              <div>
                <i style={{ fontSize: "12px", fontWeight: "500" }}>
                 { description || " A14 Bionic, the fastest chip in a smartphone . An edge-to-edge OLED display."}
                </i>
              </div>
              <div style={{ marginTop: "20px", color: "red" }}>
                <span>₹ {price || '10000'}</span>
              </div>
            </Box>

            <Box
              className="flex-column"
              style={{ marginTop: "35px", width: "50%" }}
            >
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
                value={quantity || 1}
              />
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px", width: "fit-content" }}
              >
                PLACE ORDER
              </Button>
            </Box>
          </div>
        </div>
      </div>
    </>
  );
};
export default BuyProduct;
