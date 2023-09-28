import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import AdbIcon from "@mui/icons-material/Adb";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from "react-redux";
import { updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";
import { useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "../ReuseComponents/SearchComponent";
import { getKeysAndValueToLocalStorage } from "../../Common/CSS/Utils/utils";

const pages = [
  { id: 1, name: "Home" },
  { id: 2, name: "Add Product" },
];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname;
  const dispatch = useDispatch();
  const isLoggedIn = getKeysAndValueToLocalStorage("token");

  const storeData = useSelector((state) => state.storeState.storeState) || {};
  const { productList = [], isUserAdmin = false } = storeData || {};

  const handleCloseNavMenu = (id) => {
    switch (id) {
      case 1:
        navigate("/");
        break;

      case 2:
        navigate("/addproduct");
        break;

      case 3:
        navigate("/login");
        break;

      case 4:
        navigate("/signup");
        break;

      default:
        navigate("/");
        break;
    }
  };

  const checkAddProductPathName = (path) => {
    if (pathname === "/addproduct" && path === "Add Product") {
      return false;
    } else {
      return isUserAdmin && true;
    }
  };

  const checkSignUpLoginPathName = () => {
    if (pathname === "/signup" || pathname === "/login") {
      return true;
    } else {
      return false;
    }
  };

  const searchProductHandler = (val) => {
    let prod = [...productList];
    let data = prod.filter((i) =>
      i.name.toLowerCase().includes(val.toLowerCase())
    );
    dispatch(updateProductViewStateAction([...data]));
  };

  const logoutHandler = () => {
    navigate("/login");
  };

  return (
    <AppBar
      position="static"
      style={{
        background: "#3f51b5",
        position: "fixed",
        top: "0",
        zIndex: 999,
      }}
    >
      <Container maxWidth="xl">
        <Toolbar disableGutters className="flex-row justify-content-between">
          <div className="flex-row">
            <ShoppingCartIcon
              sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
            />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                color: "inherit",
                textDecoration: "none",
              }}
            >
              UpGrad E-Shop
            </Typography>
          </div>

          {isLoggedIn.length > 0 && !checkSignUpLoginPathName() && (
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "none", md: "flex", justifyContent: "center" },
              }}
            >
              <SearchComponent
                handleInputChange={(val) => searchProductHandler(val)}
              />
            </Box>
          )}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {checkSignUpLoginPathName() ? (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {[
                { id: 3, name: "Login" },
                { id: 4, name: "SignUp" },
              ].map((page) => (
                <Button
                  key={page.id}
                  onClick={() => handleCloseNavMenu(page.id)}
                  sx={{ my: 2, color: "white", textDecoration: "underline" }}
                >
                  {page.name}
                </Button>
              ))}
            </Box>
          ) : (
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {pages.map(
                (page) =>
                  checkAddProductPathName(page.name) && (
                    <Button
                      key={page.id}
                      onClick={() => handleCloseNavMenu(page.id)}
                      sx={{
                        my: 2,
                        color: "white",
                        textDecoration: "underline",
                      }}
                    >
                      {page.name}
                    </Button>
                  )
              )}
            </Box>
          )}
          {isLoggedIn.length > 0 && !checkSignUpLoginPathName() && (
            <Box>
              <Button variant="contained" color="error" onClick={logoutHandler}>
                Logout
              </Button>
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
