import React from "react";
import ReactDOM from "react-dom";
import Home from "./components/Home";
import Dwarves from "./components/Dwarves";
import Elves from "./components/Elves";
import Hobbits from "./components/Hobbits";
import Humans from "./components/Humans";
import Maiar from "./components/Maiar";
import Orcs from "./components/Orcs";
import { createTheme, ThemeProvider } from "@mui/material";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Dwarves",
    element: <Dwarves />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Elves",
    element: <Elves />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Hobbits",
    element: <Hobbits />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Humans",
    element: <Humans />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Maiar",
    element: <Maiar />,
    errorElement: <div>404 Not Found</div>,
  },
  {
    path: "/Orcs",
    element: <Orcs />,
    errorElement: <div>404 Not Found</div>,
  },
]);

const theme = createTheme({
  typography: {
    fontFamily: ["Cormorant Upright", "sans-serif", "roboto"].join(","),
    h1: {
      fontSize: "3rem",
      fontWeight: 600,
    },
    h2: {
      fontSize: "1.75rem",
      fontWeight: 600,
    },
    h3: {
      fontSize: "1.5rem",
      fontWeight: 600,
    },
  },
  palette: {
    primary: {
      main: "#C7B8BA", //off-white
      dark: "#AB8D5A", //tan
      contrastText: "#fff",
    },
    secondary: {
      dark: "#14322B", //dark-green background
      main: "#4B6B56", //light-green
      orc: "",
      contrastText: "#000",
    },
  },
  root: {
    display: "flex",
    flexDirection: "column",
    minHeight: "100vh",
  },
  content: {
    flexGrow: 1,
  },
  components: {
    MuiButton: {
      variants: [
        {
          props: { variant: "race" },
          style: {
            fontSize: "1.25rem",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "black",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
            transition: "0.3s",
            backgroundImage: "linear-gradient(145deg, #ffd700, #ffa500)",
            "&:hover": {
              backgroundImage: "linear-gradient(145deg, #FFD700, #EAC117)",
              boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
              transform: "translateY(-2px)",
            },
          },
        },
        {
          props: { variant: "orc" },
          style: {
            fontSize: "1.25rem",
            padding: "10px 20px",
            borderRadius: "5px",
            color: "#FFF2CC",
            boxShadow: "0 3px 5px 2px rgba(0, 0, 0, 0.3)",
            transition: "0.3s",
            backgroundImage:
              "linear-gradient(145deg, rgba(255,255,255,0.15) 0%, rgba(0,0,0,0.85) 50%, rgba(0,0,0,1) 100%)",
            "&:hover": {
              backgroundImage:
                "linear-gradient(145deg, rgba(255,255,255,0.2) 0%, rgba(0,0,0,0.85) 48%, rgba(0,0,0,1) 100%)",
              boxShadow: "0 4px 10px 2px rgba(255, 255, 255, .3)",
              transform: "translateY(-2px)",
            },
          },
        },
      ],
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
  </ThemeProvider>,
  document.getElementById("root")
);
