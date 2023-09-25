import React from "react";
import { Typography } from "@mui/material";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import TextField from "@mui/material/TextField";

const CustomModal = () => {
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>;

  return (
    <>
      <div>
        <div
          className="flex-column justify-content-center align-items-center"
          style={{ marginTop: "100px" }}
        >
          <ToggleButtonGroup color="primary" aria-label="Platform" exclusive>
            <ToggleButton value="web">ALL</ToggleButton>
            <ToggleButton value="android">APPAREL</ToggleButton>
            <ToggleButton value="ios">ELECTRONICS</ToggleButton>
            <ToggleButton value="ios">FOOTWEAR</ToggleButton>
            <ToggleButton value="ios">PERSONAL CARE</ToggleButton>
          </ToggleButtonGroup>
        </div>

        <div className="flex-row justify-content-center" style={{marginTop: '100px'}}>
          {/* Product Image */}
          <div
            className="flex-column justify-content-center align-items-start"
          >
            <Card sx={{ maxWidth: 345 , boxShadow: 'none'}}>
              <CardMedia
                component="img"
                height="345"
                image="https://mtndeals.co.za/wp-content/uploads/2023/09/Apple-iPhone-12-64GB.jpg"
                alt="Paella dish"
              />
            </Card>
          </div>

          {/* Product Description/ */}
          <div className="flex-column justify-content-center align-items-baseline" style={{marginLeft: '50px'}}>
            <Box className="flex-row align-items-center justify-content-start">
              <Typography
                gutterBottom
                variant="h4"
                component="span"
                style={{ marginRight: "20px", marginBottom: '0', fontSize: "28px", fontWeight: '500' }}
              >
                iPhone 12
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
                  borderRadius: '16px',
                  textAlign: 'center',
                  fontWeight: '500'
                }}
              >
                <span>Availiabilty Quantity : 148</span>
              </div>
            </Box>
            <Box style={{marginTop: '12px'}}>
              {/* <Typography gutterBottom variant="h5" component="span">
                Category : ELECTRONICS
              </Typography> */}
              <span style={{marginRight: '10px', fontSize: '12px'}}>Category :</span>
              <strong style={{fontSize: '12px', fontWeight: '700'}}>Electronics</strong>
            </Box>
            <Box style={{marginTop: '20px'}}>
              <div>
                <i style={{fontSize: '12px', fontWeight: '500'}}>
                  A14 Bionic, the fastest chip in a smartphone . An edge-to-edge
                  OLED display.
                </i>
              </div>
              <div  style={{marginTop: '20px', color: 'red'}}>
                <span>
                  ₹  100000
                </span>
              </div>
            </Box>

            <Box className="flex-column" style={{marginTop: '35px', width: '50%'}}>
              <TextField
                id="outlined-number"
                label="Number"
                type="number"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <Button
                size="small"
                variant="contained"
                color="primary"
                style={{ marginTop: "20px", width: 'fit-content' }}
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
export default CustomModal;
