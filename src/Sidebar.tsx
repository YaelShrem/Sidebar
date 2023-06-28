import {useState} from 'react';
import { styled, useTheme, Theme, CSSObject } from "@mui/material/styles";
import MuiDrawer from "@mui/material/Drawer";
import { SidebarItem } from "./SidebarItem";
import List from "@mui/material/List";
import Divider from "@mui/material/Divider";
import { ReactComponent as DashboardIcon } from "./icons/dashboardIcon.svg";
import { ReactComponent as SettingsIcon } from "./icons/settingsIcon.svg";
import { ReactComponent as ReservationIcon } from "./icons/reservationIcon.svg";
import { ReactComponent as UsersIcon } from "./icons/usersIcon.svg";
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



const topSidebarItems = [
  {
    value: "Dashboard",
    //link: '/dashboard',
    icon: <DashboardIcon/>,
  },
  {
    value: "VM Reservation",
    //link: '/vm-reservation',
    icon: <ReservationIcon/>,
  },
  {
    value: "VM Right-Sizing",
    //link: '/right-right',
    icon: <RightSizingIcon/>,
  },
  // {
  //   name: 'VM Reservation',
  //   icon: ReservationIcon,
  //   items: [
  //     {
  //       name: 'VM Reservations',
  //     },
  //     {
  //       name: 'View Breakdown',
  //     },
  //   ],
  // },
]
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

interface SidebarProps {
  //open?: boolean;
  //setOpen(value: boolean): void;
}

export const Sidebar: React.FC<SidebarProps> = ({ /*open, setOpen*/ }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <Drawer variant="permanent" open={open}>
    <div style={{backgroundColor: '#172B5F', height: '1.7rem', display: 'flex', justifyContent: 'center'}}>
    <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={open? handleDrawerClose:handleDrawerOpen}
            edge="start"
            // sx={{
            //   marginRight: 5,
            // }}
          >
            {open? <DoubleArrowsLeftIcon/>: <DoubleArrowsRightIcon/>}
          </IconButton>
    </div>
      <DrawerHeader>
        {open? <CompanyLogo />: <CompanyIcon/>}
      </DrawerHeader>
      <Divider color='#799AD3'/>
      <List>
      {topSidebarItems.map((item, index) => (
        <SidebarItem open={open} {...item} key={index} />
      ))}
        {/* <SidebarItem 
          open={open} 
          value="Dashboard" 
          icon={<DashboardIcon />} /> */}
        {/* <SidebarItem
          open={open}
          value="VM Reservation"
          icon={<ReservationIcon />}
        />
        <SidebarItem
          open={open}
          value="VM Right-Sizing"
          icon={<RightSizingIcon />}
        /> */}
      </List>
      <List
        sx={{
          marginTop: "auto", // Pushes the list to the bottom
        }}
      >
        <SidebarItem open={open} value="Permissions" icon={<UsersIcon/>} />
        <SidebarItem open={open} value="Settings" icon={<SettingsIcon />} />
      </List>
    </Drawer>
  );
};
