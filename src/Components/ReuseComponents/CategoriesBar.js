import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const CategoriesBar = () => {
  return (
    <>
      <div
        className="flex-column justify-content-center align-items-center"
        style={{ padding: "100px 0 20px 0" }}
      >
        <ToggleButtonGroup color="primary" aria-label="Platform" exclusive>
          <ToggleButton value="web">ALL</ToggleButton>
          <ToggleButton value="android">APPAREL</ToggleButton>
          <ToggleButton value="ios">ELECTRONICS</ToggleButton>
          <ToggleButton value="ios">PERSONAL CARE</ToggleButton>
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default CategoriesBar;
