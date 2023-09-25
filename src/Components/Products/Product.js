import React, { useEffect, useState } from "react";
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
import {useSelector, useDispatch} from 'react-redux'
import { addProductsAction, deleteProductFromProductListAction } from "../Redux/Action/ProductStoreAction";

const Product = () => {

  useEffect(() => {
    handleSortByChange(0)
  }, [])

  const dispatch = useDispatch()
  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [] } = storeData || {};

  const [sortByValue, setSortByValue] = useState(0);

  const handleSortByChange = val => {
    setSortByValue(val);
     
    let prod = [...productList];
    if(val === 1) { // for low to high
      prod.sort((a, b) => a.price - b.price)
      dispatch(addProductsAction(prod || []))
    } else if(val === 0){ // for high to low
      prod.sort((a, b) => b.price - a.price)
      dispatch(addProductsAction(prod || []))
    } else if(val === 2) { // for new list
      let filterData = prod.filter(i => i.isNew)
      dispatch(addProductsAction(filterData || []))
    }
  };

  const addProductHandler = (product) => {
    dispatch(addProductsAction([...productList, product]))
  }

  const deleteProductHanlder = ind => {
    dispatch(deleteProductFromProductListAction({ind: ind}))
  }

  return (
    <>
      <div style={{ padding: "0 0 20px 70px", width: "20%" }}>
        <label>Sort By:</label>
        <Select
          labelId="demo-select-small-label"
          id="demo-select-small"
          value={sortByValue}
          onChange={e => handleSortByChange(e.target.value)}
          style={{ width: "100%" }}
        >
          <MenuItem value={4}>
            <em>Default</em>
          </MenuItem>
          <MenuItem value={0}>Price high to low</MenuItem>
          <MenuItem value={1}>Price low to high</MenuItem>
          <MenuItem value={2}>Newest</MenuItem>
        </Select>
      </div>
      <div>
        <Grid item xs={12}>
          <Grid container justifyContent="center">
            {productList.map((item, index) => (
              <Grid key={item.id} item style={{marginRight: '16px', marginTop: '10px', marginBottom: '10px'}}>
                <Card sx={{ maxWidth: 345 }}>
                  <CardMedia
                    sx={{ height: 245, width: 300 }}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJm3dr6e0rPOaEosPXHvFu23XWWcw6Y2c26rPS2i6X1I6slhL14NOaVHb5WPZJiL5yOTUzbG1dH9DEDHpCQ9WNImxoqlJ_x9KNdGI0wl4G&usqp=CAE"
                  />
                  <CardContent>
                    <Grid container spacing={2}>
                      <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="span">
                          {item.name || ""}
                        </Typography>
                      </Grid>
                      <Grid item xs={3}>
                        <Typography variant="h6" component="span">
                          ₹{item.price || ""}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary">
                      {item.description || ""}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex-row justify-content-between">
                    <Button size="small" variant="contained" color="primary">
                      BUY
                    </Button>
                    <div>
                      <CreateIcon style={{color: '#757575', marginRight: '16px'}} className="cursor-pointer"/>
                      <DeleteIcon style={{color: '#757575'}} className="cursor-pointer" onClick={() => deleteProductHanlder(index)}/>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
    </>
  );
};

export default Product;
