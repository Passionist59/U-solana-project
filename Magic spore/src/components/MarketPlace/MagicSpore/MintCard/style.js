import { withTheme } from "@emotion/react";
import { Button, experimental_sx, styled, TextField } from "@mui/material";
import { borderColor } from "@mui/system";

export const CardStyle = {
  background: "rgba(255, 255, 255, 0.17)",
  py: 2,
  px: 4,
  borderRadius: "10px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexGrow: 1,
};

export const ImageCard = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  background:
    "linear-gradient(91.53deg, rgba(255, 255, 255, 0.16) 1.89%, rgba(255, 255, 255, 0.105) 103.72%)",
  border: "1px solid rgba(242, 242, 242, 0.4)",
  boxShadow: "1px 0px 5px 3px rgba(255, 255, 255, 0.06)",
  borderRadius: "12px",
  backdropFilter: "blur(20px)",
  p: 2,
  width: "130px",
  height: "130px",
};
export const CardDesc = {
  fontSize: "14px",
  color: "#fff",
  fontFamily: "TTNormsMedium",
  lineHeight: "130%",
  textTransform: "capitalize",
  textAlign: "center",
};

export const CardTextField = styled(TextField)({
  maxWidth: "50px",
  "& label.Mui-focused": {
    color: "#fff",
  },
  "& label": {
    fontSize: "14px",
    color: "#fff",
  },
  "& .MuiInput-underline:after": {
    borderBottomColor: "#fff",
  },
  "& .MuiInput-underline:before": {
    borderBottomColor: "#fff",
  },

  "& .MuiInput-root": {
    fontSize: "14px",
    color: "#fff",
    "& fieldset": {
      color: "#fff",
    },
  },
});

export const MintSpores = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  color: "rgba(9, 7, 58, 1)",
  padding: "6px 12px",
  borderRadius: "10px",
  border: "none",
  fontFamily: "TTNormsMedium",
  lineHeight: 1.5,
  backgroundColor: "#FFC800",
});
export const MaxButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  color: "#fff",
  padding: "6px 12px",
  borderRadius: "10px",
  fontFamily: "TTNormsMedium",
  border: "none",
  lineHeight: 1.5,
  background: "linear-gradient(96.57deg, #D858BC 0%, #3C00FF 98.85%)",
});
