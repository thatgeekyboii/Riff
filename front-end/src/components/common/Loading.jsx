import React from "react";
import { Stack, CircularProgress } from "@mui/material";
const Loading = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        width={"100%"}
        height={"100vh"}
        minHeight={"50%"}
        my={5}
      >
        <CircularProgress></CircularProgress>
      </Stack>
    </div>
  );
};

export default Loading;
