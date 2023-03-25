import { useState } from "react";
import {
  Container,
  Paper,
  Box,
  Typography,
  useMediaQuery,
} from "@mui/material";
import {
  TextField,
  Button,
  ButtonGroup,
  IconButton,
  InputLabel,
  FormGroup,
  FormControl,
} from "@mui/material";
import { useTheme } from "@mui/material";
import {
  Menu,
  AccountCircle,
  Key,
  LockReset,
  PersonAdd,
} from "@mui/icons-material";
import { makeStyles } from "@material-ui/core/styles";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import FlexBetween from "../../components/FlexBetween";
import { Header, Footer } from "../navbar";
const useStyles = makeStyles({
  input: {
    "& input[type=number]": {
      "-moz-appearance": "textfield",
    },
    "& input[type=number]::-webkit-outer-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
    "& input[type=number]::-webkit-inner-spin-button": {
      "-webkit-appearance": "none",
      margin: 0,
    },
  },
  image: {},
});
const LoginPage = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 700px)");

  const classes = useStyles();
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const neutral = theme.palette.neutral.dark;
  const primaryDark = theme.palette.primary.dark;
  return (
    <div>
      <Header></Header>
      <Container maxWidth={isNonMobileScreens ? "sm" : "xs"}>
        <Paper
          elevation={2}
          sx={{ marginTop: "calc((35vh - 80px)/2)", overflow: "hidden" }}
        >
          <Box
            sx={{
              width: "100%",
              height: "clamp(300px, 65vh, 400px)",
              display: "inline-flex",
              justifyContent: "center",
            }}
          >
            {isNonMobileScreens && (
              <Box
                sx={{
                  padding: "3rem 2rem",
                  background: `${primary}55`,
                  width: 300,
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  //boxShadow: `0 0 5px ${primary}`,
                  borderRight: `2px solid ${primary}`,
                }}
              >
                <Box
                  sx={{
                    height: 130,
                    width: 130,
                  }}
                >
                  <img
                    className="App-logo"
                    alt="Centre for e-Governance logo"
                    src={process.env.PUBLIC_URL + "/assets/eGov.png"}
                  />
                </Box>
                <Box height="20px" />
                <Typography
                  variant="h3"
                  color={primaryDark}
                  letterSpacing={0.4}
                  fontWeight="bold"
                >
                  Academica
                </Typography>
                <Box height="10px" />
                <Typography variant="body" color={neutral} textAlign="center">
                  <>
                    {"A Digital Governance Platform Developed by Centre for e-"}
                    &nbsp;{"Governance"}
                  </>
                </Typography>
                <Box height={"30px"}></Box>
              </Box>
            )}
            <Box
              sx={{
                position: "relative",
                width: 400,
                height: "100%",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              {!isNonMobileScreens && (
                <Box
                  sx={{
                    top: 0,
                    padding: "10px 0",
                    background: `${primary}55`,
                    position: "absolute",
                    width: 200,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    borderLeft: `1px solid ${primary}`,
                    borderRight: `1px solid ${primary}`,
                    borderBottom: `1px solid ${primary}`,
                    borderBottomLeftRadius: "10px",
                    borderBottomRightRadius: "10px",
                  }}
                >
                  <Box
                    sx={{
                      height: 40,
                      width: 40,
                    }}
                  >
                    <img
                      style={{ height: "40px", width: "40px" }}
                      alt="Centre for e-Governance logo"
                      src={process.env.PUBLIC_URL + "/assets/eGov.png"}
                    />
                  </Box>
                  <Box width="10px" />
                  <Typography
                    variant="h4"
                    color={primaryDark}
                    letterSpacing={0.4}
                    fontWeight="bold"
                  >
                    Academica
                  </Typography>
                  <Box width={"10px"}></Box>
                </Box>
              )}
              {!isNonMobileScreens && <Box height={"50px"}></Box>}
              <Typography component={"h2"} variant="h3" fontWeight={"500"}>
                Login
              </Typography>

              <Box height={"30px"}></Box>
              <FormGroup>
                <FormControl variant="standard">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <AccountCircle sx={{ color: primary, mr: 1, my: 0.5 }} />
                    <TextField
                      className={classes.input}
                      fullWidth
                      id="employee_id"
                      label="Employee ID"
                      variant="outlined"
                      type="number"
                      size="small"
                    />
                  </Box>
                </FormControl>
                <Box height={"20px"}></Box>
                <FormControl variant="standard">
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Key sx={{ color: primary, mr: 1, my: 0.5 }} />
                    <TextField
                      fullWidth
                      id="password"
                      label="Password"
                      variant="outlined"
                      type="password"
                      size="small"
                    />
                  </Box>
                  <Box height={"15px"}></Box>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  ></Box>
                </FormControl>
                <Box height={"16px"}></Box>
                <FormControl variant="standard">
                  <Button fullWidth type="submit" variant="contained">
                    Login
                  </Button>
                </FormControl>
                <Box height={"10px"}></Box>

                <FlexBetween>
                  <Button size="small" sx={{ textTransform: "capitalize" }}>
                    Forgot Password
                  </Button>
                  <Button
                    size="small"
                    sx={{ textTransform: "capitalize" }}
                    startIcon={<PersonAdd />}
                  >
                    Register
                  </Button>
                </FlexBetween>
              </FormGroup>
            </Box>
          </Box>
        </Paper>
      </Container>
      <Footer></Footer>
    </div>
  );
};

export default LoginPage;
