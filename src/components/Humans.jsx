import { Box, Button, ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import BungalowIcon from "@mui/icons-material/Bungalow";

export default function Elves({ title }) {
  const imageUrl = process.env.PUBLIC_URL + "/images/humanHome.webp";

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
      <Box>
        <Button sx={{ marginTop: "2rem" }}>
          <BungalowIcon
            sx={{
              fontSize: "3rem",
              color: "goldenrod",
            }}
          />
        </Button>
      </Box>
      <ButtonGroup variant="contained" sx={{ margin: "3rem" }}>
        <Buttons
          title={"Aragorn II Elessar"}
          onClickAction={() => handleButtonClick("Aragorn II Elessar")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Théoden"}
          onClickAction={() => handleButtonClick("Théoden")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Boromir"}
          onClickAction={() => handleButtonClick("Boromir")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Faramir"}
          onClickAction={() => handleButtonClick("Faramir")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Gríma Wormtongue"}
          onClickAction={() => handleButtonClick("Gríma Wormtongue")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Éowyn"}
          onClickAction={() => handleButtonClick("Éowyn")}
          buttonColor={"linear-gradient(145deg, #8B4513, #A0522D)"} // Simulating a wooden texture with color gradient
          hoverColor={{
            background: "linear-gradient(145deg, #A0522D, #8B4513)", // Reverse gradient for hover effect
            boxShadow:
              "0 2px 4px rgba(0, 0, 0, .3), inset 0 1px 2px rgba(255, 255, 255, .2)", // Shadow for depth, inset for highlight
            transform: "translateY(-1px)", // Slight lift on hover for tactile feedback
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
