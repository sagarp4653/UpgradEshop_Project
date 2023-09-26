import React, { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction, deleteProductFromProductListAction, updateAlertModalAction, updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";
import { customAlertModalFun, getRandomInt } from "../../Common/CSS/Utils/utils";
import { useNavigate } from "react-router-dom";
import CustomAlertModal from "../ReuseComponents/CustomAlertModal";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [] } = storeData || {};
  const { updateProduct = { index: '', value: {} } } = storeData || {};

  const categoryFilterHandler = (val) => {
    console.log(val);
  };

  const cat = [
    { id: 0, title: "ALL" },
    { id: 4, title: "APPAREL" },
    { id: 1, title: "ELECTRONICS" },
    { id: 3, title: "PERSONAL CARE" },
    { id: 2, title: "FOOTWEAR" },
  ];

  const [sortByValue, setSortByValue] = useState(0);
  const [formData, setFormData] = useState({
    id: getRandomInt(1, 100),
    name: "",
    price: 0,
    description: "",
    category: sortByValue,
    manufacturer: '',
    availableItems: '',
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
      manufacturer: formData.manufacturer,
      availableItems: formData.availableItems,
      isNew: formData.isNew,
    };
    // disptach
    console.log(addProd)
    dispatch(addProductsAction([...productListViewState, addProd]))
    dispatch(updateProductViewStateAction([...productList, addProd])) 
    customAlertModalFun("Hello I'm Chandana", dispatch) // user has to add msg and dispatch function
    navigate("/")
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
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
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
                value={formData.manufacturer}
                onChange={(e) =>
                  setFormData({ ...formData, manufacturer: e.target.value })
                }
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Manufacturer"
              />
              <TextField
                required
                id="outlined-required"
                label="Available Items"
                type={"number"}
                value={formData.availableItems}
                onChange={(e) =>
                  setFormData({ ...formData, availableItems: e.target.value })
                }
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Available Items"
              />
              <TextField
                required
                id="outlined-required"
                label="Price"
                type={"number"}
                value={formData.price}
                onChange={(e) =>
                  setFormData({ ...formData, price: e.target.value })
                }
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Price"
              />
              <TextField
                id="outlined-required"
                label="Image URL"
                value={formData.imgUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imgUrl: e.target.value })
                }
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Image URL"
              />
              <TextField
                id="outlined-required"
                label="Product Description"
                value={formData.description}
                onChange={(e) =>
                  setFormData({ ...formData, description: e.target.value })
                }
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
