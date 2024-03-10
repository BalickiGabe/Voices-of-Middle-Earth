import { Box, Button, ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import BungalowIcon from "@mui/icons-material/Bungalow";
import { useNavigate } from "react-router-dom";

export default function Maiar({ title }) {
  const imageUrl = process.env.PUBLIC_URL + "/images/Wizard.webp";
  const navigate = useNavigate();

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
        paddingTop: "1.5rem",
      }}
    >
      <Box>
        <Buttons
          title={
            <BungalowIcon
              sx={{
                fontSize: "3rem",
                color: "goldenrod",
              }}
            />
          }
          path="/"
          onClick={navigate("/")}
          buttonColor={"linear-gradient(145deg, #FFD700, #FFA500)"}
          hoverColor={{
            background: "linear-gradient(145deg, #FFD700, #EAC117)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
      </Box>

      <ButtonGroup variant="contained" sx={{ margin: "3rem" }}>
        <Buttons
          title={"Gandalf"}
          onClickAction={() => handleButtonClick("Gandalf")}
          buttonColor={"linear-gradient(145deg, #F0F0F0, #FFFFFF)"}
          hoverColor={{
            background: "linear-gradient(145deg, #E0E0E0, #F5F5F5)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
        <Buttons
          title={"Saruman"}
          onClickAction={() => handleButtonClick("Saruman")}
          buttonColor={"linear-gradient(145deg, #F0F0F0, #FFFFFF)"}
          hoverColor={{
            background: "linear-gradient(145deg, #E0E0E0, #F5F5F5)",
            boxShadow: "0 4px 10px 2px rgba(0, 0, 0, .45)",
            transform: "translateY(-2px)",
          }}
        />
      </ButtonGroup>

      <ContentCard quote={quote} />
    </Container>
  );
}
