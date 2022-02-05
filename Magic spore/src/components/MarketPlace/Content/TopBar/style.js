import { styled } from "@mui/system";
import TabsListUnstyled from "@mui/base/TabsListUnstyled";
import TabPanelUnstyled from "@mui/base/TabPanelUnstyled";
import { buttonUnstyledClasses } from "@mui/base/ButtonUnstyled";
import TabUnstyled, { tabUnstyledClasses } from "@mui/base/TabUnstyled";

const blue = {
  50: "#F0F7FF",
  100: "#C2E0FF",
  200: "#80BFFF",
  300: "#66B2FF",
  400: "#3399FF",
  500: "#007FFF",
  600: "#0072E5",
  700: "#0059B2",
  800: "#004C99",
  900: "#003A75",
};

export const Tab = styled(TabUnstyled)`
  font-family: IBM Plex Sans, sans-serif;
  color: #fff;
  cursor: pointer;
  font-size: 12px;
  font-weight: bold;
  background-color: rgba(101, 54, 187, 0.5);
  /* width: 100px; */
  padding: 8px 24px;
  margin: 6px 6px;
  border: none;
  border-radius: 5px;
  display: flex;
  justify-content: flex-start;
  gap: 8px;
  align-items: center;

  &:hover {
    background-color: rgba(101, 54, 187, 0.5);
  }
  &:focus {
    color: #fff;
    border-radius: 3px;
    outline: 2px solid rgba(101, 54, 187, 0.5);
    outline-offset: 2px;
  }

  &.${tabUnstyledClasses.selected} {
    background-color: rgba(101, 54, 187, 1);
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabPanel = styled(TabPanelUnstyled)`
  width: 100%;
  font-family: IBM Plex Sans, sans-serif;
  font-size: 0.875rem;
`;

export const TabsList = styled(TabsListUnstyled)`
  min-width: 340px;
  background-color: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  align-content: space-between;
`;
