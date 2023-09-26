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
import { useNavigate } from "react-router-dom";
import { addProductsAction, deleteProductFromProductListAction, updateSpecificProductAction } from "../Redux/Action/ProductStoreAction";
import CustomModal from "../ReuseComponents/CustomModal";

const Product = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate();
  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productListViewState = [],  } = storeData || {};

  const [products, setProducts] = useState(productListViewState)
  const [sortByValue, setSortByValue] = useState(0);
  const [deleteModal, setDeleteModal] = useState(false);
  const [deleteObjInd, setDeleteObjInd] = useState(0)

  useEffect(() => {
    setProducts(productListViewState)
  }, [productListViewState])

  const handleSortByChange = val => {
    setSortByValue(val);
     
    let prod = [...productListViewState];
    if(val === 1) { // for low to high
      prod.sort((a, b) => a.price - b.price)
      setProducts(prod)
    } else if(val === 0){ // for high to low
      prod.sort((a, b) => b.price - a.price)
      setProducts(prod)
    } else if(val === 2) { // for new list
      let filterData = prod.filter(i => i.isNew)
      setProducts(filterData)
    }
  };

  const addProductHandler = (product) => {
    dispatch(addProductsAction([...productListViewState, product]))
  }

  const deleteProductHanlder = id => {
    setDeleteModal(true);
    setDeleteObjInd(id)
    // dispatch(deleteProductFromProductListAction({ind: ind}))
  }

  const updateProductDetails = (value, index) => {
    dispatch(updateSpecificProductAction({index: index, value: value}))
    navigate('/modifyproduct')
  }

  const closeDeleteModal = () => {
    setDeleteModal(false)
  }

  const cancelItemHandler = () => {
    setDeleteModal(false)
  }

  const deleteItemModal = () => {
    // console.log(deleteObjInd)
    dispatch(deleteProductFromProductListAction({id: deleteObjInd}))
    setDeleteModal(false)
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
          <Grid container justifyContent="center" style={{paddingLeft: '26px'}}>
            {(products.length > 0 ? products : productListViewState).map((item, index) => (
              <Grid key={item.id} item style={{marginRight: '100px', marginTop: '30px', marginBottom: '40px'}}>
                <Card sx={{ maxWidth: 345, width: 350 }}>
                  <CardMedia
                    sx={{ height: 245 }}
                    image="https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTJm3dr6e0rPOaEosPXHvFu23XWWcw6Y2c26rPS2i6X1I6slhL14NOaVHb5WPZJiL5yOTUzbG1dH9DEDHpCQ9WNImxoqlJ_x9KNdGI0wl4G&usqp=CAE"
                  />
                  <CardContent style={{ height: '90px',maxHeight: '100px', overflow: 'auto'}}>
                    <Grid container className="flex-row">
                      <Grid item xs={9}>
                        <Typography gutterBottom variant="h5" component="span">
                          {item?.name || ""}
                        </Typography>
                      </Grid>
                      <Grid item xs={3} style={{textAlign: 'end'}}>
                        <Typography variant="h6" component="span">
                          ₹{item?.price || ""}
                        </Typography>
                      </Grid>
                    </Grid>
                    <Typography variant="body2" color="text.secondary" style={{ height: '68px',maxHeight: '70px', overflow: 'auto'}}>
                      {item?.description || ""}
                    </Typography>
                  </CardContent>
                  <CardActions className="flex-row justify-content-between">
                    <Button size="small" variant="contained" color="primary">
                      BUY
                    </Button>
                    <div>
                      <CreateIcon style={{color: '#757575', marginRight: '16px'}} className="cursor-pointer" onClick={() =>updateProductDetails(item, index)}/>
                      <DeleteIcon style={{color: '#757575'}} className="cursor-pointer" onClick={() => deleteProductHanlder(item.id)}/>
                    </div>
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Grid>
      </div>
      <div>
        <CustomModal isOpen={deleteModal} handleClose={closeDeleteModal} confirmHandler={deleteItemModal} cancelHandler={cancelItemHandler}/>
      </div>
    </>
  );
};

export default Product;
