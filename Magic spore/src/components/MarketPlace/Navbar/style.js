import { styled, TextField } from "@mui/material";

export const SearchField = styled(TextField)({
  
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
  textDecoration: "none",
  transition: "all ease-in-out .4s",
  fontFamily: "TTNormsBold",
  "&:hover": {
    color: "#D858BC",
  },
};
