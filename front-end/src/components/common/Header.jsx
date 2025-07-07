import { Stack } from "@mui/material";
import logo from "../../assets/logo.svg";
import React from "react";
import Navbar from "./Navbar";
import { MdMenu } from "react-icons/md";

const Header = () => {
  return (
    <div>
      <Stack
        flexDirection={"row"}
        justifyContent={"space-around"}
        alignItems={"center"}
        position={"sticky"}
        top={"0"}
        py={1}
      >
        <img src={logo} alt="" width={60} height={48}></img>
        <Stack
          justifyContent={"center"}
          width={"550px"}
          bgcolor={"aliceblue"}
          color={"whites"}
          zIndex={2}
          height={96}
        >
          <Navbar />
        </Stack>
        <MdMenu size={32}
        className="menu-icon" />{" "}
      </Stack>
    </div>
  );
};

export default Header;
