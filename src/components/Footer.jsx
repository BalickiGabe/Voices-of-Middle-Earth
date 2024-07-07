import { Box, Typography } from "@mui/material";
import React from "react";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <Box
      sx={{
        backgroundColor: "#393E46",
        padding: "16px 32px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        textAlign: "center",

        bottom: 0,
        left: 0,
        right: 0,
        marginBottom: 0,
      }}
    >
      <Typography variant="p" sx={{ fontFamily: "roboto", color: "goldenrod" }}>
        copyright © {year} - Gabriel Balicki - All Rights Reserved
      </Typography>
    </Box>
  );
}
