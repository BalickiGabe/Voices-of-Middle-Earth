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
        justifyContent: "center",
        alignItems: "center",
        flex: 1,
        marginTop: "4rem",
      }}
    >
      <ButtonGroup variant="contained">
        <Button onClick={() => navigate("/Maiar")} variant="race">
          {"Maiar"}
        </Button>
        <Button onClick={() => navigate("/Elves")} variant="race">
          {"Elf"}
        </Button>
        <Button onClick={() => navigate("/Humans")} variant="race">
          {"Human"}
        </Button>
        <Button onClick={() => navigate("/Dwarves")} variant="race">
          {"Dwarf"}
        </Button>
        <Button onClick={() => navigate("/Hobbits")} variant="race">
          {"Hobbit"}
        </Button>
        <Button onClick={() => navigate("/Orcs")} variant="orc">
          {"Servants of Sauron"}
        </Button>
      </ButtonGroup>
    </div>
  );
}
