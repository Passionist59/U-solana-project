import { styled, Tab as UnstyledTab } from "@mui/material";

export const Tab = styled(UnstyledTab)({
  fontFamily: "TTNormsRegular",
  color: "white",
  cursor: "pointer",
  fontSize: "12px",
  margin: "6px 6px",
  border: "none",
  padding: "12px 12px",
  borderColor: "#0c0c0c",
  borderRadius: "10px",
  display: "flex",
  backgroundColor: "rgba(101, 54, 187, .5)",
  justifyContent: "center",
  "&:focus": {
    color: "#fff",
    borderRadius: "14px",
    outline: "2px solid #643fdb",
    outlineOffset: "2px",
  },
  "&.Mui-selected": {
    backgroundColor: "#6536BB",
    color: "#fff",
    outline: "2px solid #643fdb",
    outlineOffset: "2px",
  },
});

