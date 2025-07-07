import React from "react";
import { Stack, TextField, Typography, Button } from "@mui/material";
const SignUp = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          backgroundColor: "#f0f0f0",
          padding: "20px",
          borderRadius: "10px",
        }}
      >
        <Stack flexDirection={"column"} width={"30%"} gap={2} mt={20}>
          <Typography
            variant="h5"
            fontSize={"1.5rem"}
            fontWeight={"bold"}
            alignSelf={"center"}
          >
            Login with email
          </Typography>
          <TextField variant="outlined" placeholder="Enter username" />
          <TextField variant="outlined" placeholder="Enter email" />
          <TextField variant="outlined" placeholder="Enter password" />
          <Button size="large" sx={{
            width:'100%',
            backgroundColor:'#4CAF50',
            color:'#fff',
            padding:'10px',
            borderRadius:'5px',
            fontSize:'1rem',
            fontWeight:'bold',
            '&:hover':{
                cursor:'pointer'
            }

          }}>Sign up</Button>
          <Typography  alignSelf={'center'} variant="subtitle2" fontSize={'1.3rem'}>Already have an account?  <span className="login-button">Login</span></Typography>
        </Stack>
      </Stack>
    </>
  );
};

export default SignUp;
