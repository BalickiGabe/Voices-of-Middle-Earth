import { ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";

import HomeButton from "./HomeButton";

export default function Dwarves() {
  const imageUrl = process.env.PUBLIC_URL + "/images/Mine.webp";

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
        boxShadow: "0 0 20px 0 rgba(0, 0, 0, 2)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        textAlign: "left",
      }}
    >
      <HomeButton />
      <ButtonGroup variant="contained" sx={{ margin: "3rem" }}>
        <Buttons
          title={"Gimli"}
          onClickAction={() => handleButtonClick("Gimli")}
          buttonColor={"linear-gradient(145deg, #C0C0C0, #F5F5F5)"} // Light metallic gradient for a polished effect
          hoverColor={{
            background: "linear-gradient(145deg, #F5F5F5, #C0C0C0)", // Reverse gradient for hover, enhancing the metallic feel
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .3)", // Shadow for depth, inset for a gleaming highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
