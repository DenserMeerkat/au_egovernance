import { useState } from "react";
import {
  Box,
  Paper,
  Button,
  IconButton,
  InputBase,
  Typography,
  Select,
  MenuItem,
  FormControl,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import {
  Search,
  Message,
  DarkMode,
  LightMode,
  Notifications,
  Help,
  Menu,
  Close,
} from "@mui/icons-material";
import { useDispatch, useSelector } from "react-redux";
import { setMode } from "../../state";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isNonMobileScreens = useMediaQuery("(min-width: 600px)");
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const dark = theme.palette.neutral.dark;
  const hoverColor = theme.palette.neutral.light;
  const grey = theme.palette.neutral.main;
  const alt = theme.palette.background.alt;

  return (
    <Paper square elevation={3}>
      <FlexBetween padding="0.8rem 6%" backgroundColor={alt}>
        <Box
          sx={{
            display: "inline-flex",
            alignItems: "center",
            width: "200",
            padding: "0.4rem 0.8rem",
            borderRadius: "8px",
          }}
        >
          {" "}
          <img
            style={{ height: "40px", width: "40px" }}
            alt="Centre for e-Governance logo"
            src={process.env.PUBLIC_URL + "/assets/anna_logo.png"}
          />
          <Box sx={{ width: "12px" }}></Box>
          {isNonMobileScreens ? (
            <Typography fontWeight="500" variant="h3">
              {"Anna University"}
            </Typography>
          ) : (
            <Typography fontWeight="500" variant="h3">
              {"AU"}
            </Typography>
          )}
          <Box sx={{ width: "8px" }}></Box>
          <Typography color={grey} fontWeight="500" variant="h4">
            {"|"}
          </Typography>
          <Box sx={{ width: "6px" }}></Box>
          <Typography
            color={primary}
            fontWeight="500"
            variant="h4"
            letterSpacing={1}
          >
            {"Academica"}
          </Typography>
        </Box>

        <IconButton onClick={() => dispatch(setMode())}>
          {theme.palette.mode === "dark" ? (
            <LightMode sx={{ color: dark, fontSize: "25px" }} />
          ) : (
            <DarkMode sx={{ fontSize: "25px" }} />
          )}
        </IconButton>
      </FlexBetween>
    </Paper>
  );
};

const Footer = () => {
  const theme = useTheme();
  const alt = theme.palette.background.alt;
  const isNonMobileScreens = useMediaQuery("(min-width: 700px)");
  //const medium = theme.palette.neutral.medium;
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        height: 40,
        width: "100%",
        position: "fixed",
        bottom: 0,
        left: 0,
        right: 0,
        backgroundColor: alt,
        boxShadow: 3,
      }}
    >
      <Box
        elevation={6}
        sx={{ height: "100%", display: "flex", alignItems: "center" }}
      >
        {isNonMobileScreens ? (
          <Typography variant="body2" letterSpacing={2}>
            <>
              {"Desgined and Developed by Centre for e-Governance "}&copy;
              {" 2023 CeGov"}
            </>
          </Typography>
        ) : (
          <Typography variant="body2" letterSpacing={1}>
            <>
              {"Centre for e-Governance "}&copy;
              {" 2023 CeGov"}
            </>
          </Typography>
        )}
      </Box>
    </Box>
  );
};

const Navbar = () => {
  const [isMobileMenuToggled, setIsMobileMenuToggled] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const theme = useTheme();
  const neutralLight = theme.palette.neutral.light;
  const dark = theme.palette.neutral.dark;
  const background = theme.palette.background.default;
  const primaryLight = theme.palette.primary.light;
  const alt = theme.palette.background.alt;

  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const fullName = "Full Name"; //`${user.firstName} ${user.lastName}`;

  return (
    <FlexBetween padding="1rem 6%" backgroundColor={alt}>
      <FlexBetween gap="1.75rem">
        <Typography
          fontWeight="bold"
          fontSize="clamp(1rem, 2rem, 2.25rem)"
          color="primary"
          onClick={() => navigate("/home")}
          sx={{
            "&:hover": {
              color: primaryLight,
              cursor: "pointer",
            },
          }}
        >
          Sociopedia
        </Typography>
        {isNonMobileScreens && (
          <FlexBetween
            backgroundColor={neutralLight}
            borderRadius="9px"
            gap="3rem"
            padding="0.1rem 1.5rem"
          >
            <InputBase placeholder="Search..." />
            <IconButton>
              <Search />
            </IconButton>
          </FlexBetween>
        )}
      </FlexBetween>

      {/* DESKTOP NAV */}
      {isNonMobileScreens ? (
        <FlexBetween gap="2rem">
          <IconButton onClick={() => dispatch(setMode())}>
            {theme.palette.mode === "dark" ? (
              <DarkMode sx={{ fontSize: "25px" }} />
            ) : (
              <LightMode sx={{ color: dark, fontSize: "25px" }} />
            )}
          </IconButton>
          <Message sx={{ fontSize: "25px" }} />
          <Notifications sx={{ fontSize: "25px" }} />
          <Help sx={{ fontSize: "25px" }} />
          <FormControl variant="standard" value={fullName}>
            <Select
              value={fullName}
              sx={{
                backgroundColor: neutralLight,
                width: "150px",
                borderRadius: "0.25rem",
                p: "0.25rem 1rem",
                "& .MuiSvgIcon-root": {
                  pr: "0.25rem",
                  width: "3rem",
                },
                "& .MuiSelect-select:focus": {
                  backgroundColor: neutralLight,
                },
              }}
              input={<InputBase />}
            >
              <MenuItem value={fullName}>
                <Typography>{fullName}</Typography>
              </MenuItem>
              <MenuItem onClick={() => {}}>Log Out</MenuItem>
            </Select>
          </FormControl>
        </FlexBetween>
      ) : (
        <IconButton
          onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
        >
          <Menu />
        </IconButton>
      )}

      {/* MOBILE NAV */}
      {!isNonMobileScreens && isMobileMenuToggled && (
        <Box
          position="fixed"
          right="0"
          bottom="0"
          height="100%"
          zIndex="10"
          maxWidth="500px"
          minWidth="300px"
          backgroundColor={background}
        >
          {/* CLOSE ICON */}
          <Box display="flex" justifyContent="flex-end" p="1rem">
            <IconButton
              onClick={() => setIsMobileMenuToggled(!isMobileMenuToggled)}
            >
              <Close />
            </IconButton>
          </Box>

          {/* MENU ITEMS */}
          <FlexBetween
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            gap="3rem"
          >
            <IconButton
              onClick={() => dispatch(setMode())}
              sx={{ fontSize: "25px" }}
            >
              {theme.palette.mode === "dark" ? (
                <DarkMode sx={{ fontSize: "25px" }} />
              ) : (
                <LightMode sx={{ color: dark, fontSize: "25px" }} />
              )}
            </IconButton>
            <Message sx={{ fontSize: "25px" }} />
            <Notifications sx={{ fontSize: "25px" }} />
            <Help sx={{ fontSize: "25px" }} />
            <FormControl variant="standard" value={fullName}>
              <Select
                value={fullName}
                sx={{
                  backgroundColor: neutralLight,
                  width: "150px",
                  borderRadius: "0.25rem",
                  p: "0.25rem 1rem",
                  "& .MuiSvgIcon-root": {
                    pr: "0.25rem",
                    width: "3rem",
                  },
                  "& .MuiSelect-select:focus": {
                    backgroundColor: neutralLight,
                  },
                }}
                input={<InputBase />}
              >
                <MenuItem value={fullName}>
                  <Typography>{fullName}</Typography>
                </MenuItem>
                <MenuItem onClick={() => {}}>Log Out</MenuItem>
              </Select>
            </FormControl>
          </FlexBetween>
        </Box>
      )}
    </FlexBetween>
  );
};

export { Footer, Navbar, Header };
