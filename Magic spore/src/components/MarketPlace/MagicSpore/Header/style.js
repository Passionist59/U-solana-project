import { Button, styled } from "@mui/material";

export const Title = {
  fontSize: "48px",
  color: "#fff",
  fontFamily: "TTNormsBold",
};
export const SubTitle = {
  fontSize: "18px",
  color: "#fff",
  fontFamily: "TTNormsRegular",
};

export const BoldListTitle = {
  fontSize: "16px",
  textAlign: "center",
  color: "#fff",
  fontFamily: "TTNormsMedium",
};

export const NormalListDesc = {
  fontSize: "14px",
  color: "#fff",
  textAlign: "center",
  fontFamily: "TTNormsRegular",
};

export const InfoButton = styled(Button)({
  boxShadow: "none",
  textTransform: "none",
  fontSize: 14,
  color: "#fff",
  padding: "6px 12px",
  marginLeft: 4,
  borderRadius: "10px",
  fontFamily: "TTNormsMedium",
  lineHeight: 1.5,
  background: "rgba(101, 54, 187, .5)",
});
