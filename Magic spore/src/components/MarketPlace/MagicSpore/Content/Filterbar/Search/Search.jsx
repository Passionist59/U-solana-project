import React from "react";
import { Search as Searchicon } from "@mui/icons-material";
import { InputAdornment, styled, TextField } from "@mui/material";
const Search = () => {
  return (
    <SearchField
      placeholder="Search"
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <Searchicon sx={{ color: "#fff" }} />
          </InputAdornment>
        ),
      }}
    />
  );
};

export default Search;

const SearchField = styled(TextField)({
  "& .MuiOutlinedInput-root": {
    width: "300px",
    height: "35px",
    border: "none",
    borderRadius: "10px",
    color: "#fff",
    "& fieldset": {
      background: "#6536BB",
      opacity: 0.35,
      color: "#fff",
    },
    "&.Mui-focused fieldset": {
      border: "none",
    },
    "&:hover fieldset": {
      border: "none",
    },
  },
});

export const LinkStyle = {
  color: "#fff",
  fontSize: "14px",
  fontFamily: "TTNormsBold",
};
