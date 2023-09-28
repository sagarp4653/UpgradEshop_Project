import React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const ProductDetails = () => {
  const [sortByValue, setSortByValue] = React.useState("");
  const handleSortByChange = (event) => {
    setSortByValue(event.target.value);
  };

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
          className="flex-column justify-content-start align-items-start"
          style={{ marginTop: "50px", padding: "0 0 20px 70px", width: "20%" }}
        >
          <label>Sort By:</label>
          <Select
            labelId="demo-select-small-label"
            id="demo-select-small"
            value={sortByValue}
            onChange={handleSortByChange}
            style={{ width: "100%" }}
          >
            <MenuItem value="">
              <em>Default</em>
            </MenuItem>
            <MenuItem value="0">Price high to low</MenuItem>
            <MenuItem value="1">Price low to high</MenuItem>
            <MenuItem value="2">Newest</MenuItem>
          </Select>
        </div>

        <div
          className="flex-column justify-content-center align-items-center"
          style={{ marginTop: "10px" }}
        >
          <Card sx={{ maxWidth: 345 }}>
            <CardMedia
              sx={{ height: 250 }}
              image="https://mtndeals.co.za/wp-content/uploads/2023/09/Apple-iPhone-12-64GB.jpg"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="span">
                iPhone 12
              </Typography>
              <Typography gutterBottom variant="h5" component="span">
                &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography gutterBottom variant="h5" component="span">
                ₹100000
              </Typography>
              <Typography variant="body2" color="text.secondary">
                A14 Bionic, the fastest chip in a smartphone . An edge-to-edge
                OLED display. &nbsp; &nbsp; &nbsp;
              </Typography>
              <Typography variant="body2" color="text.secondary">
                &nbsp; &nbsp; &nbsp;
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small" variant="contained" color="primary">
                BUY
              </Button>
            </CardActions>
          </Card>
        </div>
      </div>
    </>
  );
};

export default ProductDetails;
