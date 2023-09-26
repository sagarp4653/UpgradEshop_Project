import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import CategoriesBar from "../ReuseComponents/CategoriesBar";
import { getRandomInt } from "../../Common/CSS/Utils/utils";
import { addProductsAction, updateProductInProductListAction, updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";
import { useNavigate } from "react-router-dom";

const ModifyProduct = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // Assuming your Redux store structure is correctly defined
  const storeData = useSelector((state) => state.storeState.storeState) || {};
  const { updateProduct = { index: '', value: {} } } = storeData || {};
  const { productList = [], productListViewState = [] } = storeData || {};

  const [product, setProduct] = useState({
    id:  updateProduct.value.id,
    name: updateProduct?.value?.name || "", // Set a default value if 'updateProduct?.value?.name' is undefined
    category: updateProduct?.value?.category || "",
    availableItems: updateProduct?.value?.availableItems || 0, // Assuming this should be a number
    price: updateProduct?.value?.price || 0, // Assuming this should be a number
    imgUrl: updateProduct?.value?.imgUrl || "",
    description: updateProduct?.value?.description || "",
  });

  const formDataHandler = () => {
    // Implement form submission logic here
  };

  const categoryFilterHandler = (val) => {
    console.log(val);
  };

  const modifyProductHandler = (event) => {
    event.preventDefault(); // Prevent the form from submitting and causing a page reload
    // Implement modify product logic here
    console.log(product); // Access the updated 'product' state here
    dispatch(updateProductInProductListAction({index: updateProduct.index, product: product || {}}))
    navigate("/")
    // dispatch(updateProductViewStateAction([...productListViewState, product])) 
  };

  return (
    <div style={{ width: "100%" }} className="flex-row justify-content-center">
      <form
        className="flex-column justify-content-center align-items-center"
        style={{ width: "fit-content", height: "100vh", marginTop: "40px" }}
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
              onChange={(e) => setProduct({ ...product, name: e.target.value })}
              placeholder="Name"
            />
            <TextField
              required
              id="outlined-required"
              label="Category"
              value={product.category}
              onChange={(e) =>
                setProduct({ ...product, category: e.target.value })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Category"
            />
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
                  availableItems: parseInt(e.target.value, 10), // Parse to integer
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
                  price: parseFloat(e.target.value), // Parse to float
                })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Price"
            />
            <TextField
              id="outlined-required"
              label="Image URL"
              value={product.imgUrl}
              onChange={(e) =>
                setProduct({ ...product, imgUrl: e.target.value })
              }
              style={{ marginTop: "12px", marginBottom: "6px" }}
              placeholder="Image URL"
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
            type="submit" // Use 'type="submit"' to trigger the form submission
          >
            MODIFY PRODUCT
          </Button>
        </Box>
      </form>
    </div>
  );
};

export default ModifyProduct;
