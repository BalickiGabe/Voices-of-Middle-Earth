import React from "react";
import { Box, Typography } from "@mui/material";
import RaceButtons from "./RaceButtons";

export default function HomeText() {
  return (
    <Box
      sx={{
        position: "relative",
        marginBottom: "10rem",
      }}
    >
      <Box
        sx={{
          margin: "1rem",
          padding: "1rem",
          textAlign: "left",
          color: "slate",
          flex: 1,
        }}
      >
        <Typography
          variant="h3"
          sx={{
            color: "goldenrod",
            marginTop: "3rem",
            fontSize: { sm: "2.5rem", lg: "1.5rem" },
          }}
        >
          Choose your path...
        </Typography>
        <RaceButtons />
      </Box>
    </Box>
  );
}
