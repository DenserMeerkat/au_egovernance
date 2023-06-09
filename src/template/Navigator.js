import * as React from "react";
import { useState, useEffect } from "react";
import { Stack, Typography, useTheme } from "@mui/material";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import List from "@mui/material/List";
import Box from "@mui/material/Box";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HomeIcon from "@mui/icons-material/Home";
import PublicIcon from "@mui/icons-material/Public";
import {
  AccountCircle,
  Work,
  Biotech,
  MoreHoriz,
  TimerIcon,
  MoreVert,
  Badge,
  Source,
  ExpandCircleDown,
  Layers,
} from "@mui/icons-material";
import { Link } from "react-router-dom";

var categories = [
  { id: "Dashboard", icon: <HomeIcon />, navig: "/home" },
  { id: "Profile", icon: <AccountCircle />, navig: "/profile" },
  { id: "360°", icon: <Layers />, navig: "/360" },
  { id: "Professional", icon: <Work />, navig: "/professional" },
  { id: "Recognition", icon: <PublicIcon />, navig: "/recognition" },
  { id: "Research", icon: <Biotech />, navig: "/research" },
  { id: "Personnel", icon: <Badge />, navig: "/personnel" },
  { id: "Others", icon: <ExpandCircleDown />, navig: "/others" },
];

const item = {
  py: "2px",
  px: 3,
  color: "rgba(255, 255, 255, 0.7)",
  "&:hover, &:focus": {
    bgcolor: "rgba(255, 255, 255, 0.08)",
  },
};

const itemCategory = {
  boxShadow: "0 -1px 0 rgb(255,255,255,0.1) inset",
  py: 1.5,
  px: 3,
};

export default function Navigator(props) {
  const theme = useTheme();
  const primaryDark = theme.palette.primary.main;
  const neutralDark = theme.palette.neutral.dark;
  const neutralLight = theme.palette.neutral.light;
  const neutralMain = theme.palette.neutral.main;
  const { ...other } = props;
  const activePage = props.activepage;
  return (
    <Drawer variant="permanent" {...other}>
      <List disablePadding>
        {/* Page Title */}
        <ListItem
          sx={{
            ...itemCategory,
            padding: "4vh 24px",
            fontSize: 22,
            fontWeight: "500",
            color: primaryDark,
          }}
        >
          <Box
            sx={{
              height: 40,
              width: 40,
            }}
            mr={2}
          >
            <img
              style={{ height: "40px", width: "40px" }}
              alt="Centre for e-Governance logo"
              src={process.env.PUBLIC_URL + "/assets/eGov.png"}
            />
          </Box>
          Academica
        </ListItem>
        <Divider color={neutralLight}></Divider>
        <ListItem disablePadding>
          <Box
            sx={{
              backgroundColor: `${neutralMain}0F`,
              padding: "20px 24px",
              height: "6vh",
              width: "100%",
              display: "flex",
              alignItems: "center",
            }}
          ></Box>
        </ListItem>
        <Divider color={neutralLight}></Divider>
        {/* Nav Menu Items */}
        {categories.map(({ id: childId, icon, navig }) => (
          <ListItem component={Link} to={navig} disablePadding key={childId}>
            <ListItemButton
              selected={childId == activePage}
              sx={{ ...itemCategory }}
            >
              <ListItemIcon sx={{ color: neutralDark }}>{icon}</ListItemIcon>
              <ListItemText sx={{ color: neutralDark }}>{childId}</ListItemText>
            </ListItemButton>
          </ListItem>
        ))}
        <Divider color={neutralLight}></Divider>
      </List>
    </Drawer>
  );
}
