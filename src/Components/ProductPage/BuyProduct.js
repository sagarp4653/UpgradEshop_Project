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

        <div
          className="flex-column justify-content-between align-items-start"
          style={{ marginTop: "100px", marginLeft: "260px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              component="img"
              height="345"
              image="https://mtndeals.co.za/wp-content/uploads/2023/09/Apple-iPhone-12-64GB.jpg"
              alt="Paella dish"
            />
          </Card>
          </div>

        <div
          className="flex-column justify-content-around align-items-center"
          style={{ marginTop: "100px" }}
        >
          <Typography
            gutterBottom
            variant="h4"
            component="span"
            style={{ marginRight: "10px" }}
          >
            iPhone 12  &nbsp;
            <Fab variant="extended" size="small" color="primary">
              Availiabilty Quantity : 148
            </Fab>
          </Typography>

          <Typography gutterBottom variant="h5" component="span">
            Category : ELECTRONICS
          </Typography>
          <Typography variant="body2" color="text.secondary">
            A14 Bionic, the fastest chip in a smartphone . An edge-to-edge OLED
            display. &nbsp; &nbsp; &nbsp;
          </Typography>
          <Typography gutterBottom variant="h4" component="span">
            ₹100000
          </Typography>
          &nbsp; 
          <TextField
            id="outlined-number"
            label="Number"
            type="number"
            InputLabelProps={{
              shrink: true,
            }}
          />
          &nbsp; 
          <Button
            size="small"
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            Place Order
          </Button>
        </div>


      </div>
    </>
  );
};
export default CustomModal;
