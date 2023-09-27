import React, {useState} from "react";
import { Button, TextField, Typography } from "@mui/material";
import { Box } from "@mui/system";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { USER_LOGIN_API, USER_SIGN_UP_API } from "../ApiCalls/ApiCall/apiCalls";
import { useNavigate } from "react-router-dom";
import { customAlertModalFun } from "../../Common/CSS/Utils/utils";
import { useDispatch } from 'react-redux';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

const SignUp = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [checked, setChecked] = React.useState(false);
  const [signUpDetails, setSignUpDetails] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
    contactNumber: ""
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    signUpDetails.role = checked ? ["admin"] : ["user"];
    USER_SIGN_UP_API(signUpDetails)
      .then((response) => {
        customAlertModalFun(response.data.message, dispatch);
        console.log(response.data.message);
        USER_LOGIN_API({
          username: signUpDetails.email,
          password: signUpDetails.password,
        })
          .then((response) => {
            localStorage.setItem("token", JSON.stringify(response.data.token));
            navigate("/");
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        customAlertModalFun(error, dispatch);
        console.error("Error:", error);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSignUpDetails({ ...signUpDetails, [name]: value });
  };

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  return (
    <div style={{ width: "100%" }} className="flex-row justify-content-center">
      <div
        className="flex-column justify-content-center align-items-center"
        style={{ width: "fit-content", height: "100vh", marginTop: '40px' }}
      >
        <Box>
          <div
            className="flex-column align-items-center justify-content-center"
            style={{ marginBottom: "10px" }}
          >
            <div
              style={{
                background: "#f50157",
                paddingLeft: "8px",
                paddingRight: "8px",
                paddingTop: "6px",
                paddingBottom: "6px",
                borderRadius: "50%",
                marginBottom: "6px",
              }}
            >
              <LockOutlinedIcon style={{ color: "white" }} />
            </div>
            <div>Sign Up</div>
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
              label="First Name"
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="firstName"
              placeholder="First Name"
              value={signUpDetails.firstName}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Last Name"
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="lastName"
              placeholder="Last Name"
              value={signUpDetails.lastName}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Email Address"
              type={"email"}
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="email"
              placeholder="Email Address"
              value={signUpDetails.email}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type={"password"}
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="password"
              placeholder="Password"
              value={signUpDetails.password}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Confirm Password"
              type={"password"}
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="confirmPassword"
              placeholder="Confirm Password"
              value={signUpDetails.confirmPassword}
              onChange={handleInputChange}
            />
            <TextField
              required
              id="outlined-required"
              label="Contact Number"
              style={{ marginTop: "12px", marginBottom: "6px" }}
              // defaultValue="Hello World"
              name="contactNumber"
              placeholder="Contact Number"
              value={signUpDetails.contactNumber}
              onChange={handleInputChange}
            />
            <FormControlLabel control={<Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />} label="I am an Admin" style={{ marginLeft: "1px", marginBottom: "20px" }}/>
            {/* <Checkbox checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} /> */}
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
          <Button style={{ width: "97%" }} variant="contained" color="primary" onClick={handleSubmit}>
            SIGN UP
          </Button>
        </Box>
        <Box
          sx={{
            display: { textAlign: "right", width: "100%", marginTop: "16px" },
          }}
        >
          <Typography
            variant="p"
            noWrap
            component="a"
            href="/"
            sx={{
              // mr: 2,
              // display: { xs: "none", md: "flex" },
              // fontFamily: "monospace",
              // fontWeight: 700,
              // letterSpacing: ".3rem",
              color: "#7e51a7",
              fontSize: "12px",
              marginLeft: "6px",
              // textDecoration: "none",
            }}
          >
            Don't have an account? Sign In
          </Typography>
        </Box>
        <Box sx={{ display: { marginTop: "40px", fontSize: "12px" } }}>
          <div className="flex-row align-items-center">
            <span style={{ color: "#919394" }}>Copyright</span>
            <CopyrightOutlinedIcon
              style={{
                color: "#919394",
                fontSize: "12px",
                textAlign: "center",
                marginLeft: "2px",
              }}
            />
            <span
              style={{
                color: "#7e51a7",
                textDecoration: "underline",
                marginLeft: "2px",
              }}
            >
              upGrad
            </span>
            <span style={{ color: "#919394", marginLeft: "2px" }}>2021</span>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default SignUp;
