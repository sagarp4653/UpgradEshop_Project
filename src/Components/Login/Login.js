import React, {useState} from "react";
import { Box, Button, createTheme, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import axios from 'axios';
import { USER_LOGIN_API } from "../ApiCalls/ApiCall/apiCalls";
import { useNavigate } from "react-router-dom";
import { customAlertModalFun } from "../../Common/CSS/Utils/utils";
import { useDispatch } from 'react-redux';
import { addTokenAction } from "../Redux/Action/ProductStoreAction";

const Login = () => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const handleSubmit = (event) => {
    event.preventDefault();
    if (email == '' || password == '') {
      customAlertModalFun("Please enter all mandatory fields to proceed.", dispatch, true);
      return;
    }
      const requestData = {
        username: email,
        password: password,
      };
    USER_LOGIN_API(requestData)
    .then((response) => {
      customAlertModalFun("User logged in successfully!", dispatch);
      dispatch(addTokenAction(response.data.token));
      localStorage.setItem('token', JSON.stringify(response.data.token));
      navigate("/");
    }).catch((error) => {
      customAlertModalFun(error, dispatch);
      console.error("Error:", error);
    });
  };

  return (
    <div style={{width: '100%'}} className="flex-row justify-content-center">
      <div className="flex-column justify-content-center align-items-center" style={{width: 'fit-content', height: '100vh'}}>
        <Box>
          <div className="flex-column align-items-center justify-content-center" style={{marginBottom: '10px'}}>
            <div style={{
              background: '#f50157',
              paddingLeft: '8px',
              paddingRight: '8px',
              paddingTop: '6px',
              paddingBottom: '6px',
              borderRadius: '50%',
              marginBottom: '6px'
            }}>
              <LockOutlinedIcon style={{color: 'white'}}/>
            </div>
            <div>Login</div>
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
              label="Username"
              // defaultValue="Hello World"
              placeholder="Username"
              // style={{width: '50%'}}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type={"password"}
              style={{marginTop: '12px', marginBottom: '26px'}}
              // defaultValue="Hello World"
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
        </Box>
        <Box
          sx={{
            display: {width: '100%', display: 'flex', justifyContent: 'center'}
          }}
        >
          <Button style={{width: '97%'}} variant="contained" color="primary" onClick={handleSubmit}>SIGN IN</Button>
        </Box>
        <Box sx={{ display: {textAlign: 'left', width: '100%', marginTop: '16px'} }}>
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
              fontSize: '12px',
              marginLeft: '6px',
              // textDecoration: "none",
            }}
          >
            Don't have an account? Sign Up
          </Typography>
        </Box>
        <Box sx={{display: {marginTop: '40px', fontSize: '12px'}}}>
          <div className="flex-row align-items-center">
            <span style={{color: '#919394'}}>Copyright</span>
            <CopyrightOutlinedIcon style={{color: "#919394", fontSize: '12px', textAlign: 'center', marginLeft: '2px'}}/>
            <span style={{color: '#7e51a7', textDecoration: 'underline', marginLeft: '2px'}}>upGrad</span>
            <span style={{color: '#919394', marginLeft: '2px'}}>2021</span>
          </div>
        </Box>
      </div>
    </div>
  );
};

export default Login;
