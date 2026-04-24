"use client";

import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#c0392b",
      dark: "#962d22",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#0c1f52",
    },
    background: {
      default: "#0c1f52",
      paper: "#0f2860",
    },
  },
  typography: {
    fontFamily: "var(--font-dm-sans), sans-serif",
    button: {
      textTransform: "none",
      fontWeight: 700,
    },
  },
  shape: {
    borderRadius: 8,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          fontFamily: "var(--font-dm-sans), sans-serif",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          backgroundImage: "none",
        },
      },
    },
  },
});

export default theme;
