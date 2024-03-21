import { ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import HomeButton from "./HomeButton";

export default function Elves() {
  const imageUrl = process.env.PUBLIC_URL + "/images/Rivendell.webp";
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const [quote, setQuote] = useState("");

  const fetchAndSetQuote = async (characterName) => {
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    try {
      const response = await fetch(
        `https://the-one-api.dev/v2/character?name=${characterName}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      const data = await response.json();
      if (data && data.docs && data.docs.length > 0) {
        const character = data.docs[0];

        const quoteResponse = await fetch(
          `https://the-one-api.dev/v2/character/${character._id}/quote`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        const quoteData = await quoteResponse.json();
        if (quoteData && quoteData.docs && quoteData.docs.length > 0) {
          const randomQuote =
            quoteData.docs[Math.floor(Math.random() * quoteData.docs.length)];
          const formattedQuote = `"${randomQuote.dialog}" - ${characterName}`;
          setQuote(formattedQuote);
        }
      }
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };

  const handleButtonClick = (characterName) => {
    fetchAndSetQuote(characterName);
  };

  return (
    <Container
      sx={{
        borderRadius: "8px",
        backgroundImage: `url(${imageUrl})`,
        backgroundColor: "#c7b8ba",
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 0.2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        textAlign: "left",
        padding: isMobile ? "1rem" : "3rem", // Adjust padding based on screen size
      }}
    >
      <HomeButton />
      <ButtonGroup variant="contained" sx={{ margin: "3rem" }}>
        <Buttons
          title={"Legolas"}
          onClickAction={() => handleButtonClick("Legolas")}
          buttonColor={"#AED581"} // A modern, light green
          hoverColor={{
            background: "#C5E1A5", // An even lighter green on hover for a subtle, modern transition
            boxShadow: "0 1px 3px rgba(0, 0, 0, .2)", // A minimal shadow for subtle depth
            transform: "translateY(-1px)", // A slight lift on hover for a refined interaction
          }}
        />
        <Buttons
          title={"Galadriel"}
          onClickAction={() => handleButtonClick("Galadriel")}
          buttonColor={"#AED581"} // A modern, light green
          hoverColor={{
            background: "#C5E1A5", // An even lighter green on hover for a subtle, modern transition
            boxShadow: "0 1px 3px rgba(0, 0, 0, .2)", // A minimal shadow for subtle depth
            transform: "translateY(-1px)", // A slight lift on hover for a refined interaction
          }}
        />
        <Buttons
          title={"Elrond"}
          onClickAction={() => handleButtonClick("Elrond")}
          buttonColor={"#AED581"} // A modern, light green
          hoverColor={{
            background: "#C5E1A5", // An even lighter green on hover for a subtle, modern transition
            boxShadow: "0 1px 3px rgba(0, 0, 0, .2)", // A minimal shadow for subtle depth
            transform: "translateY(-1px)", // A slight lift on hover for a refined interaction
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
