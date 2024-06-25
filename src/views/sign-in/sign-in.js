import React from "react";
import loginImage from '../../assets/desk-calendar-with-texts-english.jpg';
import addUser from '../../assets/6274.jpg';
import Login from "./login";
import { Grid } from "@mui/material";

const SignIn = ({ children, isRegister = true }) => {
  return (
    <Grid container component="main" sx={{ height: '100vh' }}>
      <Grid
        item
        xs={false}
        sm={4}
        md={7}
        sx={{
          backgroundImage: isRegister ? `url("${loginImage}")` : `url("${addUser}")`,
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      />
      {children}
    </Grid>
  )
}

export default SignIn;