import React from "react";

import { Box, Typography } from "@mui/material";

export default function Header() {
  const imageUrl = process.env.PUBLIC_URL + "/images/theRing.jpg";
  return (
    <Box
      sx={{
        borderRadius: "8px",
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#c7b8ba",
        margin: "auto -24px",
        padding: "16px 32px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
        textAlign: "left",
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          pb: "2rem",
          color: "transparent",
          backgroundImage: "linear-gradient(45deg, #FFD700, #EAC117, #DAA520)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          MozBackgroundClip: "text",
          MozTextFillColor: "transparent",
          fontSize: {
            xs: "1.25rem",
            sm: "1.75rem",
            md: "2.25rem",
            lg: "2.75rem",
            xl: "3rem",
          },
          fontWeight: "bold",
          letterSpacing: "0.1rem",
          textShadow: "2px 2px 8px rgba(0, 0, 0, 0.8)",
          display: "inline-block",
          padding: "0.5rem",
        }}
      >
        Voices of Middle-Earth
      </Typography>
    </Box>
  );
}
