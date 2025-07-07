import { TextField, InputAdornment } from "@mui/material";
import { FaSearch } from "react-icons/fa";
const SearchInput = () => {
  return (
    <>
      <TextField
        placeholder="Search"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaSearch style={{ color: "black" }} />
            </InputAdornment>
          ),
        }}
        sx={{
          width: "90%",
          maxWidth: "750px",
          boxShadow: "5px 5px 5px gray",
          px: 2,
          py: 1,
          borderRadius: "15px",
          my: 5,
          mx: "auto",
          "& .MuiOutlinedInput-root": {
            color: "black",
            "& fieldset": {
              border: "none",
            },
          },
        }}
      >
        {" "}
        <FaSearch />
      </TextField>
    </>
  );
};

export default SearchInput;
