import { Button, styled } from "@mui/material";
import CardImg from "../../../../assets/imgs/card-image.png";

export const CardStyle = {
  flexGrow: 1,
  overflow: "hidden",
  minHeight: "360px",
  background:
    "linear-gradient(91.53deg, rgba(255, 255, 255, 0.192) 1.89%, rgba(255, 255, 255, 0.126) 103.72%)",
  backdropFilter: " blur(20px)",
  borderRadius: "10px",
  boxShadow: "1px 0px 5px 3px rgba(255, 255, 255, 0.06)",
  transition: "all ease-in-out .4s",
  "&:hover": {
    transform: "scale(1.01)",
  },
};

export const CardHero = {
  backgroundSize: "cover",
  flexGrow: 1,
  p: 2,
};
export const CardContent = {
  flexGrow: 1,
  p: 2,
};

export const CardName = {
  fontSize: "16px",
  fontFamily: "TTNormsMedium",
  letterSpacing: "1.6px",
  color: "#fff",
  display: "flex",
  gap: "8px",
  alignItems: "center",
};
export const CardBio = {
  mt: 1,
  fontSize: "14px",
  fontFamily: "TTNormsRegular",
  lineHeight: "140%",
  letterSpacing: "1px",
  color: "#fff",
};

export const CardAddress = {
  mt: 1,
  color: "#1EEEFB",
  fontSize: "14px",
  letterSpacing: "1px",
  lineHeight: "140%",
  fontFamily: "TTNormsRegular",
};
export const CardWebsite = {
  mt: 1,
  color: "#EC008C",
  fontSize: "12px",
  fontFamily: "TTNormsRegular",
};

export const FollowCount = {
  fontSize: "16px",
  color: "#fff",
  textAlign: "center",
  fontFamily: "TTNormsRegular",
};

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
export const ViewButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 16,
  color: "rgba(9, 7, 58, 1)",
  padding: "6px 24px",
  borderRadius: "10px",
  border: "none",
  lineHeight: 1.5,
  backgroundColor: "#FFC800",
});
