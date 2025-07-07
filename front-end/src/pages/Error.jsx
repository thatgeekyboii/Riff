import React from "react";
import { Button, Stack, Typography } from "@mui/material";
import errorPage from "../assets/assets";
const Error = () => {
  return (
    <>
      <Stack
        width={"100%"}
        height={"100vh"}
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
          background: { errorPage },
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <Stack
          p={5}
          bgcolor={"wheat"}
          borderRadius={"10px"}
          border={"2px solid black"}
          flexDirection={"column"}
          alignItems={"center"}
          gap={2}
          boxShadow={"7px 7px 7px black "}
        >
          <Typography variant="h3">Oops</Typography>
          <Typography variant="h3">
            Looks like you are trying to access invalid page
          </Typography>
          <Button size="large" sx={{
            background: "red",
            color: "white",
            "&:hover": {
              background: "blue",
              color: "white",
            },
            p:2,
            borderRadius:'10px',
          }}>Go back</Button>
        </Stack>
      </Stack>
    </>
  );
};

export default Error;
