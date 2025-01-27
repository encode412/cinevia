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
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
      xxl: 1850,
    } as any,
  },
});

export default customTheme;
