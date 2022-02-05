import TabsUnstyled from "@mui/base/TabsUnstyled";
import { Search } from "@mui/icons-material";
import { Box, Stack } from "@mui/material";
import { Tab, TabsList } from "./style";
import { styled } from "@mui/material/styles";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import NativeSelect from "@mui/material/NativeSelect";
import InputBase from "@mui/material/InputBase";
import { useState } from "react";

export default function TopBar() {
  const [age, setAge] = useState("");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Stack
      direction="row"
      alignItems="center"
      justifyContent="space-between"
      sx={{ flexGrow: 1, p: 2, mb: 4 }}
    >
      <TabsUnstyled defaultValue={0} sx={{ flexGrow: 1 }}>
        <TabsList>
          <Tab>
            <Search sx={{ color: "inherit", fontSize: "18px" }} />
            Trace
          </Tab>
          <Tab>
            <Search sx={{ color: "inherit", fontSize: "18px" }} />
            Ring
          </Tab>
          <Tab>
            <Search sx={{ color: "inherit", fontSize: "18px" }} />
            Crown
          </Tab>
        </TabsList>
      </TabsUnstyled>
      <Stack direction="center" alignItems="center" gap={2}>
        <FormControl variant="standard">
          <InputLabel id="demo-customized-select-label">Age</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
        <FormControl variant="standard">
          <InputLabel id="demo-customized-select-label">Age</InputLabel>
          <Select
            labelId="demo-customized-select-label"
            id="demo-customized-select"
            value={age}
            onChange={handleChange}
            input={<BootstrapInput />}
          >
            <MenuItem value={10}>Ten</MenuItem>
            <MenuItem value={20}>Twenty</MenuItem>
            <MenuItem value={30}>Thirty</MenuItem>
          </Select>
        </FormControl>
      </Stack>
    </Stack>
  );
}

const BootstrapInput = styled(InputBase)(({ theme }) => ({
  label: {
    marginTop: theme.spacing(3),
  },
  "& .MuiInputBase-input": {
    borderRadius: 4,
    position: "relative",
    backgroundColor: theme.palette.background.paper,
    border: "1px solid #ced4da",
    fontSize: 16,
    padding: "10px 26px 10px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    // Use the system font instead of the default Roboto font.
    fontFamily: [
      "-apple-system",
      "BlinkMacSystemFont",
      '"Segoe UI"',
      "Roboto",
      '"Helvetica Neue"',
      "Arial",
      "sans-serif",
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(","),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}));
