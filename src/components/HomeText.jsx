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
          top: "50%",
          left: "50%",
          margin: "1rem",
          padding: "1rem",
          textAlign: "left",
          color: "slate",
          flex: 1,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            fontFamily: "'Roboto', 'Helvetica', 'Arial', sans-serif",
            color: "white",
            textAlign: "left",
            marginBottom: "2rem",
            marginTop: "0",
            padding: "1rem",
            background: "#393E46",
            borderRadius: "10px",
            boxShadow: "0 6px 10px rgba(0, 0, 0, 0.3)",
            fontSize: { sm: "2.5rem", lg: "1.5rem" },
            lineHeight: "1.6",
            fontWeight: "normal",
          }}
        >
          Venture into Middle-earth, where each quote is a doorway to the hearts
          of its inhabitants, from Hobbit homes to Elven halls, Dwarven forges,
          and the lands of Men, under Maiar stars or in Mordor's gloom. Each
          phrase is a passage to stories of valor and wisdom. Choose your
          path—Maiar, Human, Elf, Dwarf, Hobbit, or Mordor—and let
          Middle-earth's sagas unfold. What will you discover?
        </Typography>
        <Typography
          variant="h3"
          sx={{
            color: "white",
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
