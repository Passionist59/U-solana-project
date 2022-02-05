import { Button, styled } from "@mui/material";

export const ConnectButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "#fff",
  padding: "6px 24px",
  borderRadius: "10px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#CD068E",
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
export const HeaderName = {
  fontSize: "18px",
  fontFamily: "TTNormsMedium",
  letterSpacing: "1.6px",
  color: "#fff",
  display: "flex",
  gap: "8px",
  alignItems: "center",
};
export const HeaderBio = {
    mt: 1,
    fontSize: "18px",
    fontFamily: "TTNormsRegular",
    lineHeight: "140%",
    letterSpacing: "1px",
    color: "#fff",
  };
export const HeaderAddress = {
  mt: 1,
  color: "#1EEEFB",
  fontSize: "14px",
  letterSpacing: "1px",
  lineHeight: "140%",
  fontFamily: "TTNormsRegular",
};
export const HeaderWebsite = {
  mt: 1,
  color: "#EC008C",
  fontSize: "12px",
  fontFamily: "TTNormsRegular",
};


export const FollowCount = {
    fontSize: "18px",
    color: "#fff",
    textAlign: "center",
    fontFamily: "TTNormsMedium",
  };