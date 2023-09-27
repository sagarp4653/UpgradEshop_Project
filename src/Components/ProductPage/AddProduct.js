import React, { useState } from "react";
import { Button, MenuItem, Select, TextField } from "@mui/material";
import { Box } from "@mui/system";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import { useDispatch, useSelector } from "react-redux";
import { addProductsAction, deleteProductFromProductListAction, updateAlertModalAction, updateProductViewStateAction, updateUpdateCategoryStateAction } from "../Redux/Action/ProductStoreAction";
import { customAlertModalFun, getRandomInt } from "../../Common/CSS/Utils/utils";
import { useNavigate } from "react-router-dom";
import CustomAlertModal from "../ReuseComponents/CustomAlertModal";
import { CREATE_PRODUCT_API, GET_CATEGORIES_API } from "../ApiCalls/ApiCall/apiCalls";
import { staticCategories } from "../../Common/CSS/Utils/constant";

const AddProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [] } = storeData || {};
  const { updateProduct = { index: '', value: {} } } = storeData || {};

  const categoryFilterHandler = (val) => {
    console.log(val);
  };
  
  const [categorySelected, setCategorySelected] = useState('');
  const [formData, setFormData] = useState({
    name: "",
    price: 0,
    description: "",
    category: categorySelected,
    manufacturer: '',
    availableItems: '',
    isNew: true,
    imageUrl: "",
  })

  const handleCategoryChange = (val) => {
    setCategorySelected(val);
  };

  const validations = () => {
    let message;
    if (
      formData.name === "" ||
      formData.price === "" ||
      isNaN(formData.price) ||
      categorySelected === "" ||
      formData.manufacturer === "" ||
      formData.availableItems === "" ||
      isNaN(formData.availableItems)
    ) {
      message = "Please enter all mandatory fields to proceed.";
    } else if (formData.name.length > 0 && formData.name.length > 255) {
      message = "Name must not exceed 255 characters.";
    } else if (
      formData.manufacturer.length > 0 &&
      formData.manufacturer.length > 255
    ) {
      message = "Manufacturer must not exceed 255 characters.";
    } else if (formData.imageUrl.length > 0 && formData.imageUrl.length > 255) {
      message = "Image URL must not exceed 255 characters.";
    }
    customAlertModalFun(message, dispatch, true);
    return message;
  };

  const addProductHandler = (obj) => {
    if (validations()) {
      return;
    }
    let addProduct = {
      name: formData.name || "",
      price: formData.price || 0,
      description: formData.description || "",
      category: categorySelected,
      manufacturer: formData.manufacturer,
      availableItems: formData.availableItems,
      isNew: formData.isNew,
      imageUrl: formData.imageUrl || "",
    };
    // disptach
    console.log(addProduct);
    CREATE_PRODUCT_API(addProduct)
    .then((response) => {
      addProduct.id = response.data;
      customAlertModalFun(`Product ${addProduct.name} added successfully`, dispatch) // user has to add msg and dispatch function
      dispatch(addProductsAction([...productListViewState, addProduct]))
      dispatch(updateProductViewStateAction([...productList, addProduct])) 
      if(addProduct.id){
        GET_CATEGORIES_API({}).then((response) => {
          let tempArray = [];
          tempArray.push( {'id': 1, 'title': 'All'})
          response.data?.forEach((element, index) => {
            tempArray.push( {'id': index+2, 'title': element})
          });
          // setCategoriesArray(tempArray);
          dispatch(updateUpdateCategoryStateAction(tempArray))
          console.log(tempArray);
        })
      }
      navigate("/");
    }).catch((error) => {
      console.error("Error:", error);
    });
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
                label="Name"
                value={formData.name}
                onChange={(e) =>
                  setFormData({ ...formData, name: e.target.value })
                }
                placeholder="Name"
                error={formData.name.length > 0 && formData.name.length > 255}
                helperText={formData.name.length > 0 && formData.name.length > 255 ? 'Name must not exceed 255 characters' : ''}
              />

              <div style={{ width: "96%", marginLeft: "8px" }}>
                {/* <label>Sort By:</label> */}
                <Select
                  labelId="demo-select-small-label"
                  id="demo-select-small"
                  value={categorySelected}
                  onChange={(e) => handleCategoryChange(e.target.value)}
                  style={{ width: "100%" }}
                >
                  {staticCategories.map((i) => (
                    <MenuItem key={i.id} value={i.title}>
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
                error={formData.manufacturer.length > 0 && formData.manufacturer.length > 255}
                helperText={formData.manufacturer.length > 0 && formData.manufacturer.length > 255 ? 'Manufacturer must not exceed 255 characters' : ''}
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
                value={formData.imageUrl}
                onChange={(e) =>
                  setFormData({ ...formData, imageUrl: e.target.value })
                }
                style={{ marginTop: "12px", marginBottom: "6px" }}
                // defaultValue="Hello World"
                placeholder="Image URL"
                error={formData.imageUrl.length > 0 && formData.imageUrl.length > 255}
                helperText={formData.imageUrl.length > 0 && formData.imageUrl.length > 255 ? 'Image URL must not exceed 255 characters' : ''}
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
