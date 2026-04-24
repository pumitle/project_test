import { createTheme } from "@mui/material/styles";

const muiTheme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#e8273a",
      contrastText: "#ffffff",
    },
    secondary: {
      main: "#ffffff",
    },
    background: {
      default: "#0d1b4b",
      paper: "#1a2d6b",
    },
    text: {
      primary: "#ffffff",
      secondary: "#a8b4d4",
    },
  },
  typography: {
    fontFamily: "'DM Sans', sans-serif",
    h1: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 800,
      letterSpacing: "-0.02em",
    },
    h2: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700,
    },
    h3: {
      fontFamily: "'Barlow Condensed', sans-serif",
      fontWeight: 700,
    },
    button: {
      fontFamily: "'DM Sans', sans-serif",
      fontWeight: 600,
      textTransform: "none",
    },
  },
  shape: {
    borderRadius: 12,
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "999px",
          paddingInline: "1.5rem",
          paddingBlock: "0.6rem",
          boxShadow: "none",
          "&:hover": {
            boxShadow: "0 4px 20px rgba(232,39,58,0.4)",
          },
          "&.MuiButton-containedPrimary": {
            background: "linear-gradient(135deg, #e8273a, #b01e2d)",
          },
          "&.MuiButton-outlinedSecondary": {
            borderColor: "rgba(255,255,255,0.4)",
            "&:hover": {
              borderColor: "#ffffff",
              background: "rgba(255,255,255,0.06)",
            },
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background: "transparent",
          boxShadow: "none",
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background: "linear-gradient(145deg, #1a2d6b 0%, #0d1b4b 100%)",
          border: "1px solid rgba(255,255,255,0.08)",
          transition: "transform 0.3s ease, box-shadow 0.3s ease",
          "&:hover": {
            transform: "translateY(-6px)",
            boxShadow: "0 16px 40px rgba(0,0,0,0.4)",
          },
        },
      },
    },
  },
});

export default muiTheme;