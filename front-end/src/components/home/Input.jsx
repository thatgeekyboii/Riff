import React from "react";
import { Avatar, Button, Stack, Typography } from "@mui/material";
const Input = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        alignItems={"center"}
        width={"70%"}
        height={28}
        justifyContent={"space-between"}
        borderBottom={"2px solid gray"}
        p={3}
        my={5}
        mx={"auto"}
      >
        <Stack flexDirection={"row"} alignItems={"center"} gap={2}>
          <Avatar src=""></Avatar>
          <Typography color="gray">Start a Riff...</Typography>
        </Stack>
        <Button
          size="medium"
          sx={{
            color: "aliceblue",
            bgcolor: "black",
            p:1,
            ":hover": {
              bgcolor: "black",
              cursor: "pointer",
            },
          }}
        > Riff </Button>
      </Stack>
    </>
  );
};

export default Input;
