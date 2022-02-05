import { Button, styled } from "@mui/material";

export const CardStyle = {
  position: "relatve",
  background:
    "linear-gradient(91.53deg, rgba(255, 255, 255, 0.16) 1.89%, rgba(255, 255, 255, 0.105) 103.72%)",
  border: "1px solid rgba(242, 242, 242, 0.4)",
  boxSizing: "border-box",
  boxShadow: "1px 0px 5px 3px rgba(255, 255, 255, 0.06)",
  backdropFilter: "blur(20px)",
  borderRadius: "10px",
  flexGrow: 1,
  padding: "12px",
};

export const CardButton = styled(Button)({
  background:
    "linear-gradient(96.57deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.39) 98.85%)",
  boxShadow: "none",
  textTransform: "none",
  fontSize: 10,
  color: "#fff",
  padding: "6px",
  borderRadius: "10px",
  border: "none",
  marginRight: "8px",
  lineHeight: 1.5,
  "&:hover": {
    background: "rgba(205, 6, 142, .5)",
    borderColor: "rgba(205, 6, 142, 1)",
    boxShadow: "none",
  },
  "&:active": {
    boxShadow: "none",
    borderColor: "rgba(205, 6, 142, .5)",
  },
  "&:focus": {
    boxShadow: "0 0 0 0.2rem rgba(205, 6, 142, .5)",
  },
});

export const BuyButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "rgba(9, 7, 58, 1)",
  padding: "6px 24px",
  borderRadius: "10px",
  border: "none",
  fontFamily: "TTNormsBold",
  lineHeight: 1.5,
  backgroundColor: "#FFC800",
});

export const CardTitle = {
  color: "#fff",
  fontFamily: "TTNormsBold",
  fontSize: "28px",
};
