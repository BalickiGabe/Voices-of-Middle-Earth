import React from "react";
import ButtonGroup from "@mui/material/ButtonGroup";
import { useNavigate } from "react-router-dom";
import Button from "@mui/material/Button";

export default function RaceButtons() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "center",
        flex: 1,
        marginTop: "1rem",
      }}
    >
      <ButtonGroup
        variant="contained"
        sx={{
          display: "flex",
          flexWrap: "wrap",
          boxShadow: "none",
        }}
      >
        <Button
          onClick={() => navigate("/Maiar")}
          variant="race"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Maiar"}
        </Button>
        <Button
          onClick={() => navigate("/Elves")}
          variant="race"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Elf"}
        </Button>
        <Button
          onClick={() => navigate("/Humans")}
          variant="race"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Human"}
        </Button>
        <Button
          onClick={() => navigate("/Dwarves")}
          variant="race"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Dwarf"}
        </Button>
        <Button
          onClick={() => navigate("/Hobbits")}
          variant="race"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Hobbit"}
        </Button>
        <Button
          onClick={() => navigate("/Orcs")}
          variant="orc"
          sx={{ fontSize: { sm: "2.3rem", lg: "1.25rem" } }}
        >
          {"Servants of Sauron"}
        </Button>
      </ButtonGroup>
    </div>
  );
}
