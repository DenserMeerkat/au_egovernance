import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom";
import HomePage from "./scenes/homePage";
import LoginPage from "./scenes/loginPage";
import ProfilePage from "./scenes/profilePage";
import React, { useMemo } from "react";
import { useSelector } from "react-redux";
import { CssBaseline, ThemeProvider } from "@mui/material";
import { createTheme } from "@mui/material/styles";
import { themeSettings } from "./theme";
import Academica from "template/Academica";

function App() {
  const mode = useSelector((state) => state.mode);
  const theme = useMemo(() => createTheme(themeSettings(mode)), [mode]);
  return (
    <div className="app">
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<LoginPage />} />
            <Route path="/home" element={<Academica page="Dashboard" />} />
            <Route
              path="/profile"
              element={<Academica page="Profile" />}
            />{" "}
            <Route path="/360" element={<Academica page="360°" />} />
            <Route
              path="/professional"
              element={<Academica page="Professional" />}
            />
            <Route
              path="/recognition"
              element={<Academica page="Recognition" />}
            />
            <Route path="/research" element={<Academica page="Research" />} />
            <Route path="/personnel" element={<Academica page="Personnel" />} />
            <Route path="/others" element={<Academica page="Others" />} />
            {/* <Route path="/profile/:userId" element={<ProfilePage />} /> */}
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
