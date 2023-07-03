import React, { useState } from 'react';
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { SidebarItem } from "./SidebarItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ReactComponent as DashboardIcon } from "./icons/dashboardIcon.svg";
import { ReactComponent as SettingsIcon } from "./icons/settingsIcon.svg";
import { ReactComponent as ReservationIcon } from "./icons/reservationIcon.svg";
import { ReactComponent as PermissionsIcon } from "./icons/permissionsIcon.svg";
import { ReactComponent as RightSizingIcon } from "./icons/rightSizingIcon.svg";
import { ReactComponent as CompanyLogo } from "./icons/companyLogo.svg";
import { ReactComponent as CompanyIcon } from "./icons/companyIcon.svg";
import { ReactComponent as DoubleArrowsLeftIcon } from "./icons/doubleArrowsLeftIcon.svg";
import { ReactComponent as DoubleArrowsRightIcon } from "./icons/doubleArrowsRightIcon.svg";
import IconButton from "@mui/material/IconButton";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

export const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const buttomSidebarItems = [
  { 
    value: "Value 1",
    icon: <PermissionsIcon/>,
  },
  {
    value: "Value 2",
    icon: <SettingsIcon/>, 
  }
];

const topSidebarItems = [
  {
    value: "Page 1",
    icon: <DashboardIcon/>,
    link: '/page1',
  },
  {
    value: "Page 2",
    icon: <ReservationIcon/>,
    link: '/page2',
  },
  {
    value: "Page 3",
    icon: <RightSizingIcon/>,
    link: '/page3',
  },
];

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => {
  const paperMixin = open ? openedMixin(theme) : closedMixin(theme);

  return {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: "nowrap",
    boxSizing: "border-box",
    ...((open && {
      ...paperMixin,
      "& .MuiDrawer-paper": paperMixin,
    }) ||
      (!open && {
        ...paperMixin,
        "& .MuiDrawer-paper": paperMixin,
      })),
    "& .MuiDrawer-paper": {
      backgroundColor: "#0A1540",
      ...paperMixin,
    },
  };
});


export const Sidebar: React.FC = () => {
  const theme = useTheme();
  const [open, setOpen] = useState(true);
  const [selectedItem, setSelectedItem] = useState<string | null>(null);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  const handleSidebarItemClick = (value: string) => {
    setSelectedItem(value);
  };

  return (
    <Drawer variant="permanent" open={open}>
      <div style={{ backgroundColor: "#172B5F", height: "1.7rem", display: "flex", justifyContent: "center" }}>
        <IconButton color="inherit" aria-label="open drawer" onClick={open ? handleDrawerClose : handleDrawerOpen} edge="start">
          {open ? <DoubleArrowsLeftIcon /> : <DoubleArrowsRightIcon />}
        </IconButton>
      </div>
      <DrawerHeader>{open ? <CompanyLogo /> : <CompanyIcon />}</DrawerHeader>
      <Divider color="#799AD3" />
      <List>
        {topSidebarItems.map((item, index) => (
          <SidebarItem
            open={open}
            {...item}
            key={index}
            selectedItem={selectedItem}
            handleClick={handleSidebarItemClick}
          />
        ))}
      </List>
      <List sx={{ marginTop: "auto" }}>
        {buttomSidebarItems.map((item, index) => (
          <SidebarItem
            open={open}
            {...item}
            key={index}
            selectedItem={selectedItem}
            handleClick={handleSidebarItemClick}
          />
        ))}
      </List>
    </Drawer>
  );
};

