import { Button, TextField } from "@mui/material";
import { Box } from "@mui/system";
import React, { useState } from "react";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import {useSelector, useDispatch} from 'react-redux'

const ModifyProduct = () => {

  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { updateProduct = {},  } = storeData || {};

  const [product, setProduct] = useState({
    name: updateProduct.name,
    category: updateProduct.category,
    availableItems: updateProduct.availableItems,
    price: updateProduct.price,
    imgUrl: updateProduct.imgUrl,
    description: updateProduct.description
  })

  const categoryFilterHandler = (val) => {
    console.log(val);
  };

  return (
    <>
      <div
        style={{ width: "100%" }}
        className="flex-row justify-content-center"
      >
        <div
          className="flex-column justify-content-center align-items-center"
          style={{ width: "fit-content", height: "100vh", marginTop: "40px" }}
        >
          <Box>
            <div
              className="flex-column align-items-center justify-content-center"
              style={{
                marginBottom: "10px",
                fontSize: "20px",
                fontWeight: "600",
              }}
            >
              <div>Modify Product</div>
            </div>
          </Box>
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 1, width: "40ch" },
            }}
            noValidate
            autoComplete="off"
          >
            <div className="flex-column">
              <TextField
                required
                id="outlined-required"
                label="name"
                value={product.name}
                // defaultValue="Hello World"
                placeholder="name"
                // style={{width: '50%'}}
              />
              {/* <CategoriesBar
              categoriesHandler={categoryFilterHandler} groupBtnArry={[{id: 0, title: "ALL"}, {id: 4, title: 'APPAREL'}, {id: 1, title: 'ELECTRONICS'}, {id: 3, title: 'PERSONAL_CARE' }, {id: 2, title: 'FOOTWEAR'}]}
            /> */}
              <TextField
                required
                id="outlined-required"
                label="Category"
                value={product.category}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Category"
              />
              <TextField
                required
                id="outlined-required"
                label="Manufacturer"
                value={product.manufacturer}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Manufacturer"
              />
              <TextField
                required
                id="outlined-required"
                label="Available Items"
                type={"number"}
                value={product?.availableItems || 100}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Available Items"
              />
              <TextField
                required
                id="outlined-required"
                label="Price"
                type={"number"}
                value={product.price}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Price"
              />
              <TextField
                id="outlined-required"
                label="Image URL"
                value={product.imgUrl}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Image URL"
              />
              <TextField
                id="outlined-required"
                label="Product Description"
                value={product.description}
                style={{ marginTop: "12px", marginBottom: "26px" }}
                // defaultValue="Hello World"
                placeholder="Product Description"
              />
            </div>
          </Box>
          <Box
            sx={{
              display: {
                width: "100%",
                display: "flex",
                justifyContent: "center",
              },
            }}
          >
            <Button
              style={{ width: "97%" }}
              variant="contained"
              color="primary"
            >
              MODIFY PRODUCT
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default ModifyProduct;
