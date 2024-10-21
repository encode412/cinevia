"use client";
import { createTheme } from "@mui/material/styles";

const customTheme = createTheme({
  palette: {
    primary: {
      main: "#0096C1",
      light: "#B8001F",
      dark: "#A29415",
      contrastText: "#FFFFFF",
    },
    secondary: {
      main: "#FFC400",
    },
    error: {
      main: "#FF0000",
    },
  },
  typography: {
    fontFamily: "var(--font-netflix-sans-regular)",
  },
});

export default customTheme;
