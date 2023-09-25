import React, { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction, deleteProductFromProductListAction, updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";

const AddProduct = () => {
  const dispatch = useDispatch();
  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [] } = storeData || {};

  const categoryFilterHandler = (val) => {
    console.log(val);
  };

  // Generate a random integer between min (inclusive) and max (exclusive)
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  let randomInteger = getRandomInt(1, 101); // Generates a random integer between 1 and 100

console.log(randomInteger); // Print the random integer to the console
  const cat = [
    { id: 0, title: "ALL" },
    { id: 4, title: "APPAREL" },
    { id: 1, title: "ELECTRONICS" },
    { id: 3, title: "PERSONAL CARE" },
    { id: 2, title: "FOOTWEAR" },
  ];

  const [sortByValue, setSortByValue] = useState(0);
  const [formData, setFormData] = useState({
    id: randomInteger,
    name: "",
    price: 0,
    description: "",
    category: sortByValue,
    isNew: true,
  })

  const handleSortByChange = (val) => {
    setSortByValue(val);
  };

  const addProductHandler = (obj) => {
    let addProd = {
      id: formData.id,
      name: formData.name || "",
      price: formData.price || 0,
      description: formData.description || "",
      category: formData.category,
      isNew: formData.isNew,
    };
    // disptach
    dispatch(addProductsAction([...productListViewState, addProd]))
    dispatch(updateProductViewStateAction([...productList, addProd])) 

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
              <div>Add Product</div>
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
                // defaultValue="Hello World"
                placeholder="name"
                // style={{width: '50%'}}
              />

              <div style={{ width: "96%", marginLeft: "8px" }}>
                {/* <label>Sort By:</label> */}
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={sortByValue}
                  onChange={(e) => handleSortByChange(e.target.value)}
                  style={{ width: "100%" }}
                >
                  {cat.map((i) => (
                    <MenuItem key={i.id} value={i.id}>
                      {i.title}
                    </MenuItem>
                  ))}
                </Select>
              </div>
              <TextField
                required
                id="outlined-required"
                label="Manufacturer"
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Manufacturer"
              />
              <TextField
                required
                id="outlined-required"
                label="Available Items"
                type={"number"}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Available Items"
              />
              <TextField
                required
                id="outlined-required"
                label="Price"
                type={"number"}
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Price"
              />
              <TextField
                id="outlined-required"
                label="Image URL"
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Image URL"
              />
              <TextField
                id="outlined-required"
                label="Product Description"
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
              onClick={addProductHandler}
            >
              SAVE PRODUCT
            </Button>
          </Box>
        </div>
      </div>
    </>
  );
};

export default AddProduct;
