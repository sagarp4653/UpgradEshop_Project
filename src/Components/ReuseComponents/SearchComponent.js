import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import IconButton from "@mui/material/IconButton";
import { styled, alpha } from "@mui/material/styles";
import InputBase from "@mui/material/InputBase";

const SearchWrapper = styled("div")(({ theme }) => ({
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
const SearchComponent = ({ handleInputChange }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <SearchWrapper>
      <IconButton>
        <SearchIcon style={{color: 'white'}} />
      </IconButton>
      <StyledInputBase
        placeholder="Search..."
        value={searchText}
        onChange={(e) => {
          setSearchText(e.target.value);
          handleInputChange(e.target.value);
        }}
      />
    </SearchWrapper>
  );
};

export default SearchComponent;
