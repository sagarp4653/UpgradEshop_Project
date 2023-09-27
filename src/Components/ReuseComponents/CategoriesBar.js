import { ToggleButton, ToggleButtonGroup } from "@mui/material";
import React from "react";

const CategoriesBar = ({ categoriesHandler, groupBtnArry = []}) => { 
  return (
    <>
      <div
        className="flex-column justify-content-center align-items-center"
        style={{ padding: "100px 0 20px 0" }}
      >
        <ToggleButtonGroup color="primary" aria-label="Platform" exclusive onClick={e => categoriesHandler(e.target.value)}>
          {groupBtnArry.map((i, ind) => <ToggleButton key={ind} value={i.title}>{i.title}</ToggleButton>)}
        </ToggleButtonGroup>
      </div>
    </>
  );
};

export default CategoriesBar;
