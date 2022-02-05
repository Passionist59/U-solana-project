import { Box, styled } from "@mui/material";

export const WalletBox = styled(Box)({
  position:"relative",
  maxWidth: "250px",
  // maxHeight: "30px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding:"8px 12px",
  color: "#fff",
  gap: "12px",
  transition: "all ease-in-out 0.4s",
  cursor: "pointer",
  background:
    "linear-gradient(91.35deg, rgba(216, 88, 188, 0.5) -3.59%, rgba(60, 0, 255, 0.5) 102.16%)",
  "&:hover": {
    background:
      "linear-gradient(91.35deg, rgba(216, 88, 188, .7) -3.59%, rgba(60, 0, 255, 0.7) 102.16%)",
  },
});
