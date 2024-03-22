import { ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import HomeButton from "./HomeButton";

export default function Elves({ title }) {
  const imageUrl = process.env.PUBLIC_URL + "/images/Mordor.webp";

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
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        <Buttons
          title={"Uglúk"}
          onClickAction={() => handleButtonClick("Uglúk")}
          buttonColor={"linear-gradient(145deg, #a67f5b, #8f6148)"}
          hoverColor={{
            background: "linear-gradient(145deg, #b89672, #a67f5b)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
        <Buttons
          title={"Snaga"}
          onClickAction={() => handleButtonClick("Snaga (Two Towers orc)")}
          buttonColor={"linear-gradient(145deg, #a67f5b, #8f6148)"}
          hoverColor={{
            background: "linear-gradient(145deg, #b89672, #a67f5b)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
        <Buttons
          title={"Gothmog"}
          onClickAction={() =>
            handleButtonClick("Gothmog (Lieutenant of Morgul)")
          }
          buttonColor={"linear-gradient(145deg, #a67f5b, #8f6148)"}
          hoverColor={{
            background: "linear-gradient(145deg, #b89672, #a67f5b)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
        <Buttons
          title={"Gorbag"}
          onClickAction={() => handleButtonClick("Gorbag")}
          buttonColor={"linear-gradient(145deg, #a67f5b, #8f6148)"}
          hoverColor={{
            background: "linear-gradient(145deg, #b89672, #a67f5b)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
        <Buttons
          title={"Shagrat"}
          onClickAction={() => handleButtonClick("Shagrat")}
          buttonColor={"linear-gradient(145deg, #a67f5b, #8f6148)"}
          hoverColor={{
            background: "linear-gradient(145deg, #b89672, #a67f5b)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
