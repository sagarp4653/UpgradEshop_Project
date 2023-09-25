import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import MenuItem from "@mui/material/MenuItem";
import Select from "@mui/material/Select";
import CreateIcon from '@mui/icons-material/Create';
import DeleteIcon from '@mui/icons-material/Delete';

const Product = () => {
  const [sortByValue, setSortByValue] = useState("0");
  const handleSortByChange = (event) => {
    setSortByValue(event.target.value);
  };
  return (
    <>
      <div style={{ padding: "0 0 20px 70px", width: "20%" }}>
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
      <Grid item xs={12}>
        <Grid container justifyContent="center" spacing="100">
          {[0, 1, 2, 3, 4, 5].map((value) => (
            <Grid key={value} item>
              <Card sx={{ maxWidth: 345 }}>
                <CardMedia
                  sx={{ height: 245 }}
                  image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJm3dr6e0rPOaEosPXHvFu23XWWcw6Y2c26rPS2i6X1I6slhL14NOaVHb5WPZJiL5yOTUzbG1dH9DEDHpCQ9WNImxoqlJ_x9KNdGI0wl4G&usqp=CAE"
                />
                <CardContent>
                  <Grid container spacing={2}>
                    <Grid item xs={9}>
                      <Typography gutterBottom variant="h5" component="span">
                        Shoes
                      </Typography>
                    </Grid>
                    <Grid item xs={3}>
                      <Typography variant="h6" component="span">
                        ₹1000
                      </Typography>
                    </Grid>
                  </Grid>
                  <Typography variant="body2" color="text.secondary">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </Typography>
                </CardContent>
                <CardActions className="flex-row justify-content-between">
                  <Button size="small" variant="contained" color="primary">
                    BUY
                  </Button>
                  <div>
                    <CreateIcon style={{color: '#757575', marginRight: '16px'}} className="cursor-pointer"/>
                    <DeleteIcon style={{color: '#757575'}} className="cursor-pointer"/>
                  </div>
                </CardActions>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Grid>
    </>
  );
};

export default Product;
