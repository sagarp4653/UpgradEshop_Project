import React from "react";
import { Box, Button, createTheme, TextField, Typography } from "@mui/material";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import CopyrightOutlinedIcon from '@mui/icons-material/CopyrightOutlined';
import { blueGrey} from '@mui/material/colors';

const Login = () => {
  
  // const blueWhite = blueGrey[50]; // #f44336

  // const theme = createTheme({
  //   palette: {
  //     primary: {
  //       white: blueGrey[50],
  //     }
  //   },
  // });

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
            />
            <TextField
              required
              id="outlined-required"
              label="Password"
              type={"password"}
              style={{marginTop: '12px', marginBottom: '26px'}}
              // defaultValue="Hello World"
              placeholder="Password"
            />
          </div>
        </Box>
        <Box
          sx={{
            display: {width: '100%', display: 'flex', justifyContent: 'center'}
          }}
        >
          <Button style={{width: '97%'}} variant="contained" color="primary">SIGN IN</Button>
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
