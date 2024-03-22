import React from "react";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

export default function Buttons({
  title,
  path,
  buttonColor,
  hoverColor,
  onClickAction,
}) {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    if (onClickAction) {
      onClickAction();
    }
    if (path) {
      navigate(path);
    }
  };

  return (
    <Button
      onClick={handleButtonClick}
      sx={{
        fontSize: "1.25rem",
        padding: "10px 20px",
        borderRadius: "5px",
        color: "black",
        background: buttonColor,
        "&:hover": hoverColor,
        boxShadow: "0 3px 5px 2px rgba(0, 0, 0, .3)",
        transition: "0.3s",
        fontSize: { sm: "2.5rem", lg: "1.2rem" },
        fontWeight: { sm: "bold" },
      }}
    >
      {title}
    </Button>
  );
}
