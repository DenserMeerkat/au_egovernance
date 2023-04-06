import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import HelpIcon from "@mui/icons-material/Help";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import MenuIcon from "@mui/icons-material/Menu";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Tab from "@mui/material/Tab";
import Tabs from "@mui/material/Tabs";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";
import { LightMode, DarkMode } from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../state";
import { useTheme } from "@mui/material";
import { colorTokens } from "theme";

function Header(props) {
  const { onDrawerToggle } = props;
  const theme = useTheme();
  const dispatch = useDispatch();
  const primaryMain = colorTokens.primary[500];
  return (
    <React.Fragment>
      <AppBar
        sx={{ background: `${primaryMain}` }}
        position="sticky"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={1} alignItems="center">
            {/*Mobile Hamburger Menu Button*/}
            <Grid sx={{ display: { md: "none", sm: "block" } }} item>
              <IconButton
                color="inherit"
                aria-label="open drawer"
                onClick={onDrawerToggle}
                edge="start"
              >
                <MenuIcon />
              </IconButton>
            </Grid>
            <Grid item xs />
            {/*Theme Switch Button*/}
            <Grid item mr={1}>
              <Tooltip title="Switch Theme">
                <IconButton
                  color="inherit"
                  sx={{ p: 0.5 }}
                  onClick={() => dispatch(setMode())}
                >
                  {theme.palette.mode === "dark" ? (
                    <LightMode sx={{ fontSize: "25px" }} />
                  ) : (
                    <DarkMode sx={{ fontSize: "25px" }} />
                  )}
                </IconButton>
              </Tooltip>
            </Grid>
            {/* <Grid item>
              <Tooltip title="Alerts • No alerts">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid> */}
            <Grid item>
              <IconButton sx={{ p: 0.5 }}>
                <Avatar
                  sx={{
                    backgroundColor: `${colorTokens.grey[0]}`,
                    color: `${colorTokens.grey[1000]}`,
                  }}
                  src="/static/images/avatar/1.jpg"
                  alt="My Avatar"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        sx={{ background: `${primaryMain}`, zIndex: 0 }}
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={1}>
            <Grid item xs>
              <Typography color="inherit" variant="h2" component="h1">
                Authentication
              </Typography>
            </Grid>
            {/* <Grid item>
              <Button
                sx={{ borderColor: lightColor }}
                variant="outlined"
                color="inherit"
                size="small"z`
              >
                Web setup
              </Button>
            </Grid> */}
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        position="static"
        elevation={0}
        sx={{ background: `${primaryMain}`, zIndex: 0 }}
      >
        <Tabs value={0} textColor="inherit">
          <Tab label="Users" />
          <Tab label="Sign-in method" />
          <Tab label="Templates" />
          <Tab label="Usage" />
        </Tabs>
      </AppBar>
    </React.Fragment>
  );
}

Header.propTypes = {
  onDrawerToggle: PropTypes.func.isRequired,
};

export default Header;
