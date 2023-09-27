import React, { useState } from "react";
import { Box, Button, MenuItem, Select, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import CategoriesBar from "../ReuseComponents/CategoriesBar";

import {
  addProductsAction,
  updateProductInProductListAction,
  updateProductViewStateAction,
  updateUpdateCategoryStateAction,
} from "../Redux/Action/ProductStoreAction";
import { staticCategories } from "../../Common/CSS/Utils/constant";
import { GET_CATEGORIES_API, MODIFY_PRODUCT_API } from "../ApiCalls/ApiCall/apiCalls";
import { customAlertModalFun } from "../../Common/CSS/Utils/utils";

const ModifyProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const storeData = useSelector((state) => state.storeState.storeState) || {};
  const {
    updateProduct = { index: "", value: {} },
    productList = [],
    productListViewState = [],
    categoryList = [],
  } = storeData || {};

  const [categorySelected, setCategorySelected] = useState(
    updateProduct?.value?.category
  );

  const [product, setProduct] = useState({
    id: updateProduct.value.id,
    name: updateProduct?.value?.name || "",
    category: categorySelected || "",
    availableItems: updateProduct?.value?.availableItems || 0,
    price: updateProduct?.value?.price || 0,
    imageUrl: updateProduct?.value?.imageUrl || "",
    description: updateProduct?.value?.description || "",
    manufacturer: updateProduct?.value?.manufacturer || "",
  });

  const formDataHandler = () => {
    // Implement form submission logic here
  };

  const categoryFilterHandler = (val) => {
    console.log(val);
  };

  const validations = () => {
    let message;
    if (
      product.name === "" ||
      product.price === "" ||
      isNaN(product.price == NaN) ||
      categorySelected === "" ||
      product.manufacturer === "" ||
      product.availableItems === "" ||
      isNaN(product.availableItems)
    ) {
      message = "Please enter all mandatory fields to proceed.";
    } else if (product.name.length > 0 && product.name.length > 255) {
      message = "Name must not exceed 255 characters.";
    } else if (
      product.manufacturer.length > 0 &&
      product.manufacturer.length > 255
    ) {
      message = "Manufacturer must not exceed 255 characters.";
    } else if (product.imageUrl.length > 0 && product.imageUrl.length > 255) {
      message = "Image URL must not exceed 255 characters.";
    }
    customAlertModalFun(message, dispatch, true);
    return message;
  };

  const modifyProductHandler = (event) => {
    event.preventDefault();

    if(validations()) {
      return;
    }
    MODIFY_PRODUCT_API(updateProduct.value.id, product)
      .then((response) => {
        console.log("product data", product);
        dispatch(
          updateProductInProductListAction({
            index: updateProduct.index,
            product: product || {},
          })
        );
        customAlertModalFun(`Product ${updateProduct?.value?.name} modified successfully`, dispatch)

        GET_CATEGORIES_API({}).then((response) => {
          let tempArray = [];
          tempArray.push({ id: 1, title: "All" });
          response.data?.forEach((element, index) => {
            tempArray.push({ id: index + 2, title: element });
          });

          dispatch(updateUpdateCategoryStateAction(tempArray));
          navigate("/");
          console.log(tempArray);
        });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleCategoryChange = (val) => {
    setCategorySelected(val);
    setProduct(prev => ({...prev, category: val}))
  };

  return (
    <div style={{ width: "100%" }} className="flex-row justify-content-center">
      <form
        className="flex-column justify-content-center align-items-center"
        style={{
          width: "fit-content",
          height: "100vh",
          marginTop: "40px",
        }}
        onSubmit={modifyProductHandler}
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
              label="Name"
              value={product.name}
              onChange={(e) =>
                setProduct({ ...product, name: e.target.value })
              }
              placeholder="Name"
              error={product.name.length > 0 && product.name.length > 255}
              helperText={product.name.length > 0 && product.name.length > 255 ? 'Name must not exceed 255 characters' : ''}
            />
            <div style={{ width: "96%", marginLeft: "8px" }}>
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
              value={product.manufacturer}
              onChange={(e) =>
                setProduct({ ...product, manufacturer: e.target.value })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Manufacturer"
              error={product.manufacturer.length > 0 && product.manufacturer.length > 255}
              helperText={product.manufacturer.length > 0 && product.manufacturer.length > 255 ? 'Manufacturer must not exceed 255 characters' : ''}
            />
            <TextField
              required
              id="outlined-required"
              label="Available Items"
              type={"number"}
              value={product.availableItems}
              onChange={(e) =>
                setProduct({
                  ...product,
                  availableItems: parseInt(e.target.value, 10),
                })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Available Items"
            />
            <TextField
              required
              id="outlined-required"
              label="Price"
              type={"number"}
              value={product.price}
              onChange={(e) =>
                setProduct({
                  ...product,
                  price: parseFloat(e.target.value),
                })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Price"
            />
            <TextField
              id="outlined-required"
              label="Image URL"
              value={product.imageUrl}
              onChange={(e) =>
                setProduct({ ...product, imageUrl: e.target.value })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Image URL"
              error={product.imageUrl.length > 0 && product.imageUrl.length > 255}
              helperText={product.imageUrl.length > 0 && product.imageUrl.length > 255 ? 'Image URL must not exceed 255 characters' : ''}
            />
            <TextField
              id="outlined-required"
              label="Product Description"
              value={product.description}
              onChange={(e) =>
                setProduct({ ...product, description: e.target.value })
              }
              style={{ marginTop: "12px", marginBottom: "26px" }}
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
            type="submit"
          >
            MODIFY PRODUCT
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default ModifyProduct;
