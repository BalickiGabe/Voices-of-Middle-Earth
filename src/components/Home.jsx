import React from "react";
import Header from "./Header";
import { Box, Container } from "@mui/material";
import Footer from "./Footer";
import HomeText from "./HomeText";

export default function Home() {
  return (
    <Container
      sx={{
        bgcolor: "primary.main",
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        position: "relative",
      }}
    >
      <Header />
      <Box
        component={"main"}
        sx={{
          flexGrow: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "20px 0",
        }}
      >
        <HomeText />
      </Box>
      <Footer />
    </Container>
  );
}
