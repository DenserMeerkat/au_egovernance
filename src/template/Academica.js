import * as React from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import CssBaseline from "@mui/material/CssBaseline";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import Navigator from "./Navigator";
import Content from "./Content";
import Header from "./Header";
import { useTheme } from "@mui/material";
import { colorTokens } from "theme";

function Copyright() {
  return (
    <Typography variant="body2" color="text.secondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}.
    </Typography>
  );
}

const drawerWidth = 256;

export default function Academica(props) {
  let theme = useTheme();
  const primaryMedium = theme.palette.primary.medium;
  const neutralDark = theme.palette.neutral.dark;
  const neutralLight = theme.palette.neutral.light;
  const neutralMain = theme.palette.neutral.verylight;
  const activePage = props.page;
  theme = {
    ...theme,
    components: {
      MuiDrawer: {
        styleOverrides: {
          paper: {
            color: `${neutralDark}`,
            backgroundColor: `${neutralMain}`,
          },
        },
      },
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "none",
          },
          contained: {
            boxShadow: "none",
            "&:active": {
              boxShadow: "none",
            },
          },
        },
      },
      MuiTabs: {
        styleOverrides: {
          root: {
            marginLeft: theme.spacing(1),
          },
          indicator: {
            height: 3,
            borderTopLeftRadius: 3,
            borderTopRightRadius: 3,
            backgroundColor: theme.palette.common.white,
          },
        },
      },
      MuiTab: {
        styleOverrides: {
          root: {
            textTransform: "none",
            margin: "0 16px",
            minWidth: 0,
            padding: 0,
            [theme.breakpoints.up("md")]: {
              padding: 0,
              minWidth: 0,
            },
          },
        },
      },
      MuiIconButton: {
        styleOverrides: {
          root: {
            padding: theme.spacing(1),
          },
        },
      },
      MuiTooltip: {
        styleOverrides: {
          tooltip: {
            borderRadius: 4,
          },
        },
      },
      MuiDivider: {
        styleOverrides: {
          root: {
            backgroundColor: "rgb(255,255,255,0.15)",
          },
        },
      },
      MuiListItem: {
        styleOverrides: {
          root: {
            "&.Mui-selected, && .Mui-selected:hover": {
              backgroundColor: `${primaryMedium}99`,
            },
          },
        },
      },
      MuiListItemButton: {
        styleOverrides: {
          root: {
            "&.Mui-selected, && .Mui-selected:hover": {
              backgroundColor: `${primaryMedium}99`,
            },
          },
        },
      },
      MuiListItemText: {
        styleOverrides: {
          primary: {
            fontSize: 14,
            fontWeight: theme.typography.fontWeightMedium,
          },
        },
      },
      MuiListItemIcon: {
        styleOverrides: {
          root: {
            color: "inherit",
            minWidth: "auto",
            marginRight: theme.spacing(2),
            "& svg": {
              fontSize: 20,
            },
          },
        },
      },
      MuiAvatar: {
        styleOverrides: {
          root: {
            width: 32,
            height: 32,
          },
        },
      },
    },
  };
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const isSmUp = useMediaQuery(theme.breakpoints.up("md"));

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: "flex",
          minHeight: "100vh",
        }}
      >
        <CssBaseline />
        <Box
          component="nav"
          sx={{ width: { md: drawerWidth }, flexShrink: { md: 0 } }}
        >
          {isSmUp ? null : (
            <Navigator
              PaperProps={{
                style: { width: drawerWidth },
              }}
              variant="temporary"
              open={mobileOpen}
              onClose={handleDrawerToggle}
              activepage={activePage}
            />
          )}

          <Navigator
            PaperProps={{ style: { width: drawerWidth } }}
            sx={{ display: { md: "block", xs: "none" } }}
            activepage={activePage}
          />
        </Box>
        <Box
          sx={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <Header onDrawerToggle={handleDrawerToggle} activepage={activePage} />
          <Box component="main" sx={{ flex: 1, py: 6, px: 4 }}>
            <Content activepage={activePage} />
          </Box>
          {/* <Box component="footer" sx={{ p: 2, bgcolor: "#eaeff1" }}>
            <Copyright />
          </Box> */}
        </Box>
      </Box>
    </ThemeProvider>
  );
}
