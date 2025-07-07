import { Stack } from "@mui/material";
import { RiHome8Line } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import { FaRegHeart } from "react-icons/fa6";
import { FiEdit2 } from "react-icons/fi";
import { RxAvatar } from "react-icons/rx";
import { Link } from "react-router-dom";
import React from "react";

const Navbar = () => {
  return (
    <>
      <Stack
        flexDirection={"row"}
        maxWidth={"100%"}
        justifyContent={"space-around"}
        alignItems={"center"}
      >
        <Link to={"/home"}>
          <RiHome8Line size={32} />
        </Link>
        <Link to={'/search'}>
          <FiSearch size={32} />
        </Link>
        <Link >
          <FaRegHeart size={32} />
        </Link>
        <Link>
          <FiEdit2 size={32} />
        </Link>
        <Link>
          <RxAvatar size={32} />
        </Link>
      </Stack>
    </>
  );
};

export default Navbar;
