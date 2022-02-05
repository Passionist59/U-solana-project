import React from "react";
import { Tabs, TabsUnstyled } from "@mui/material";
import { Tab, TabsList } from "./style";
import Box from "@mui/material/Box";

const Filterbar = () => {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <Box sx={{ flexGrow: 1, mt: 4 }}>
      <Box sx={{ borderBottom: 1, borderColor: "rgba(255,255,255,.2)", py: 2 }}>
        <Tabs
          value={value}
          onChange={handleChange}
          sx={{
            "& .MuiTabs-indicator": {
              display: "none",
            },
          }}
        >
          <Tab label="All" />
          <Tab label="Reservation Desk" />
          <Tab label="Minting Press" />
          <Tab label="Trending Posts" />
        </Tabs>
      </Box>
    </Box>
  );
};

export default Filterbar;
