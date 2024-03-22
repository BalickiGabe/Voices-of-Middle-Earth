import { ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import HomeButton from "./HomeButton";

export default function Elves({ title }) {
  const imageUrl = process.env.PUBLIC_URL + "/images/hobbitHole.webp";

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
      <ButtonGroup
        variant="contained"
        sx={{
          height: { sm: "8rem", lg: "3.4rem" },
          margin: "3rem",
        }}
      >
        <Buttons
          title={"Bilbo"}
          onClickAction={() => handleButtonClick("Bilbo Baggins")}
          buttonColor={"#8FBC8F"} // Soft green gradient
          hoverColor={{
            background: "#556B2F", // Deeper green on hover
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .35)", // Maintains a subtle shadow for depth
            transform: "translateY(-1px)", // Gentle lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Frodo"}
          onClickAction={() => handleButtonClick("Frodo Baggins")}
          buttonColor={"#8FBC8F"} // Soft green gradient
          hoverColor={{
            background: "#556B2F", // Deeper green on hover
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .35)", // Maintains a subtle shadow for depth
            transform: "translateY(-1px)", // Gentle lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Sam"}
          onClickAction={() => handleButtonClick("Samwise Gamgee")}
          buttonColor={"#8FBC8F"} // Soft green gradient
          hoverColor={{
            background: "#556B2F", // Deeper green on hover
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .35)", // Maintains a subtle shadow for depth
            transform: "translateY(-1px)", // Gentle lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Merry"}
          onClickAction={() => handleButtonClick("Meriadoc Brandybuck")}
          buttonColor={"#8FBC8F"} // Soft green gradient
          hoverColor={{
            background: "#556B2F", // Deeper green on hover
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .35)", // Maintains a subtle shadow for depth
            transform: "translateY(-1px)", // Gentle lift on hover for tactile feedback
          }}
        />
        <Buttons
          title={"Pippin"}
          onClickAction={() => handleButtonClick("Peregrin Took")}
          buttonColor={"#8FBC8F"} // Soft green gradient
          hoverColor={{
            background: "#556B2F", // Deeper green on hover
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .35)", // Maintains a subtle shadow for depth
            transform: "translateY(-1px)", // Gentle lift on hover for tactile feedback
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
