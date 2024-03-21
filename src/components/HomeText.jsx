import React from "react";
import { Box, Typography } from "@mui/material";
import RaceButtons from "./RaceButtons";

export default function HomeText() {
  return (
    <Box
      sx={{
        position: "relative", // Position the Box component relatively
        height: "100vh",
      }}
    >
      <Box
        sx={{
          top: "50%", // Center vertically
          left: "50%", // Center horizontally
          margin: "1rem",
          padding: "1rem", // Add padding
          textAlign: "left", // Center-align text
          color: "slate", // Text color
          flex: 1,
        }}
      >
        <RaceButtons />
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            color: "#5A4A32",
            textAlign: "left",
            marginBottom: "2rem",
            padding: "1rem",
            background: "#f0f0f0",
            borderRadius: "10px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
            fontSize: "1.5rem",
            lineHeight: "1.6",
          }}
        >
          Enter the realms of Middle-earth, where each quote is a doorway to the
          hearts of its inhabitants. From the Hobbits' hearths to the ancient
          halls of Elves, through the sturdy forges of Dwarves, across the
          battlefields of Men, beneath the mystical stars guiding the Maiar, and
          into the shadowed lands of Mordor, every spoken word is a thread in
          the grand tapestry of this world. If you're drawn to the echoes of
          adventure, choose your path—Maiar, Human, Elf, Dwarf, Hobbit, or
          Mordor—and let the voices of Middle-earth guide you through tales of
          courage, wisdom, and intrigue. What stories will you uncover?
        </Typography>
      </Box>
    </Box>
  );
}
