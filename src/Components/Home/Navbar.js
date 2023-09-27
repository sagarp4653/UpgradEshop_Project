import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import AdbIcon from "@mui/icons-material/Adb";
import SearchIcon from "@mui/icons-material/Search";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useSelector, useDispatch } from 'react-redux'
import { addProductsAction, updateProductViewStateAction } from "../Redux/Action/ProductStoreAction";
import { useLocation, useNavigate } from "react-router-dom";
import SearchComponent from "../ReuseComponents/SearchComponent";


const pages = [{id: 1, name: "Home"}, {id: 2, name: "Add Product"}];
// const settings = ["Profile", "Account", "Dashboard", "Logout"];

function ResponsiveAppBar() {
  const navigate = useNavigate();
  const location = useLocation();
  const pathname = location.pathname
  const dispatch = useDispatch()
  const [searchText, setSearchText] = useState("");

  const storeData = useSelector((state) => state.storeState.storeState) || {};  
  const { productList = [], productListViewState = [], isUserAdmin = false } = storeData || {};

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
    if(pathname === "/addproduct" && path === "Add Product"){
      return false
    } else {
      return isUserAdmin && true
    }
  }

  const checkSignUpLoginPathName = () => {
    if((pathname === "/signup" || pathname === "/login")){
      return false
    } else {
      return isUserAdmin && true
    }
  }

  const Search = styled("div")(({ theme }) => ({
    position: "relative",
    borderRadius: theme.shape.borderRadius,
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    "&:hover": {
      backgroundColor: alpha(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      marginLeft: theme.spacing(3),
      width: "auto",
    },
  }));

  const SearchIconWrapper = styled("div")(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: "100%",
    position: "absolute",
    pointerEvents: "none",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  }));

  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: "inherit",
    "& .MuiInputBase-input": {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create("width"),
      width: "100%",
      [theme.breakpoints.up("md")]: {
        width: "20ch",
      },
    },
  }));

  const searchProductHandler = val => {
    setSearchText(val)
    let prod = [...productList];
    let data = prod.filter(i => i.name.toLowerCase().includes(val.toLowerCase()))
    dispatch(updateProductViewStateAction([...data])) 
  }

  const logoutHandler = () => {
    navigate("/login");
  }
  console.log("location---> ", location)
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
                // mr: 2,
                // display: { xs: "none", md: "flex" },
                // fontFamily: "monospace",
                // fontWeight: 700,
                // letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              UpGrad E-Shop
            </Typography>
          </div>

          {/* <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
          {checkSignUpLoginPathName() && <Box
            sx={{
              flexGrow: 1,
              display: { xs: "none", md: "flex", justifyContent: "center" },
            }}
          >
            {/* <Search style={{ width: "50%" }} onChange={searchProductHandler}>
              <SearchIconWrapper>
                <SearchIcon />
              </SearchIconWrapper>
              <StyledInputBase
                placeholder="Search…"
                type="text"
                // inputProps={{ "aria-label": "search" }}
                style={{ width: "100%" }}
                // value={searchText}
                // onChange={searchProductHandler}
              />
            </Search> */}
            <SearchComponent handleInputChange={val => searchProductHandler(val)}/>
            {/* <input onChange={searchProductHandler}></input> */}
          </Box>}
          <AdbIcon sx={{ display: { xs: "flex", md: "none" }, mr: 1 }} />
          {!checkSignUpLoginPathName() ? 
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {[{id: 3, name: "Login"}, {id: 4, name: "SignUp"}].map((page) => (
              <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page.id)}
                sx={{ my: 2, color: "white", textDecoration: "underline" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>
            :
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              checkAddProductPathName(page.name) && <Button
                key={page.id}
                onClick={() => handleCloseNavMenu(page.id)}
                sx={{ my: 2, color: "white", textDecoration: "underline" }}
              >
                {page.name}
              </Button>
            ))}
          </Box>}
          {checkSignUpLoginPathName() && <Box>
            <Button variant="contained" color="error" onClick={logoutHandler}>
              Logout
            </Button>
          </Box>}
          {/* 
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              {settings.map((setting) => (
                <MenuItem key={setting} onClick={handleCloseUserMenu}>
                  <Typography textAlign="center">{setting}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box> */}
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default ResponsiveAppBar;
