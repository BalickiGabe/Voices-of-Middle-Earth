import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#c7b8ba",
        margin: "auto",
        padding: "16px 32px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        textAlign: "center",
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
      }}
    >
      <Typography
        variant="p"
        sx={{ fontFamily: "roboto", mb: "0.5rem", color: "black" }}
      >
        copyright © {year} - Gabriel Balicki - All Rights Reserved
      </Typography>
    </Box>
  );
}
