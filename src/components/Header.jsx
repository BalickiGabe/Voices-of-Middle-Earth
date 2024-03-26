import React from "react";

import { Box, Typography } from "@mui/material";

export default function Header() {
  const imageUrl = process.env.PUBLIC_URL + "/images/theRing.jpg";
  return (
    <Box
      sx={{
        borderRadius: { sm: "25px", lg: "8px" },
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#c7b8ba",
        margin: "auto -24px",
        padding: "16px 36px",
        boxShadow: "0 0 10px 0 rgba(0, 0, 0, 0.3)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "500px",
        textAlign: { sm: "center", lg: "Left" },
      }}
    >
      <Typography
        variant="h1"
        sx={{
          textAlign: "center",
          pb: "2rem",
          color: {
            sm: "	#f9f1f1",
            lg: "transparent",
          },
          backgroundImage: "linear-gradient(45deg, #FFD700, #EAC117, #DAA520)",
          backgroundClip: "text",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: { lg: "transparent" },
          MozBackgroundClip: "text",
          MozTextFillColor: { lg: "transparent" },
          fontSize: {
            sm: "5rem",
            lg: "3.25rem",
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
