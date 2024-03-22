import { Box, Button } from "@mui/material";
import React from "react";
import BungalowIcon from "@mui/icons-material/Bungalow";
import { useNavigate } from "react-router-dom";

export default function HomeButton() {
  const navigate = useNavigate();
  return (
    <Box>
      <Button sx={{ marginTop: "2rem" }} onClick={() => navigate("/")}>
        <BungalowIcon
          sx={{
            fontSize: "3rem",
            color: "goldenrod",
            fontSize: { sm: "7rem", lg: "4rem" },
          }}
        />
      </Button>
    </Box>
  );
}
