import { ButtonGroup, Container } from "@mui/material";
import React, { useState } from "react";
import Buttons from "./Buttons";
import ContentCard from "./ContentCard";
import HomeButton from "./HomeButton";
import Footer from "./Footer";

export default function Elves() {
  const imageUrl = process.env.PUBLIC_URL + "/images/Rivendell.webp";

  // Import the useState hook from React to manage the quote state.
  const [quote, setQuote] = useState("");

  // Defines an asynchronous function to fetch a quote for a given character name.
  const fetchAndSetQuote = async (characterName) => {
    // Retrieve the access token from the environment variables.
    const accessToken = process.env.REACT_APP_ACCESS_TOKEN;

    try {
      // Fetch the character information from the API using the character name.
      // Include the Authorization header with the Bearer token.
      const response = await fetch(
        `https://the-one-api.dev/v2/character?name=${characterName}`,
        {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        }
      );

      // Parse the JSON response into a JavaScript object.
      const data = await response.json();
      // Check if the response has data and contains documents.
      if (data && data.docs && data.docs.length > 0) {
        // Take the first character from the documents array.
        const character = data.docs[0];

        // Fetch quotes for the character using the character's ID.
        const quoteResponse = await fetch(
          `https://the-one-api.dev/v2/character/${character._id}/quote`,
          {
            headers: {
              Authorization: `Bearer ${accessToken}`,
            },
          }
        );

        // Parse the JSON response of the quotes into a JavaScript object.
        const quoteData = await quoteResponse.json();
        // Check if the quotes response has data and contains documents.
        if (quoteData && quoteData.docs && quoteData.docs.length > 0) {
          // Select a random quote from the documents array.
          const randomQuote =
            quoteData.docs[Math.floor(Math.random() * quoteData.docs.length)];
          // Format the quote string to include the dialog and the character name.
          const formattedQuote = `"${randomQuote.dialog}" - ${characterName}`;
          // Update the quote state with the formatted quote.
          setQuote(formattedQuote);
        }
      }
    } catch (error) {
      // Log any errors that occur during the fetch operation.
      console.error("Error fetching data:", error);
    }
  };

  // Defines a function to be called when a button is clicked,
  // triggering the fetchAndSetQuote function with the given character name.
  const handleButtonClick = (characterName) => {
    fetchAndSetQuote(characterName);
  };

  return (
    <>
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
            title={"Legolas"}
            onClickAction={() => handleButtonClick("Legolas")}
            buttonColor={"#AED581"}
            hoverColor={{
              background: "#C5E1A5",
              boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
              transform: "translateY(-1px)",
            }}
          />
          <Buttons
            title={"Galadriel"}
            onClickAction={() => handleButtonClick("Galadriel")}
            buttonColor={"#AED581"}
            hoverColor={{
              background: "#C5E1A5",
              boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
              transform: "translateY(-1px)",
            }}
          />
          <Buttons
            title={"Elrond"}
            onClickAction={() => handleButtonClick("Elrond")}
            buttonColor={"#AED581"}
            hoverColor={{
              background: "#C5E1A5",
              boxShadow: "0 1px 3px rgba(0, 0, 0, .2)",
              transform: "translateY(-1px)",
            }}
          />
        </ButtonGroup>

        <ContentCard quote={quote} />
      </Container>
      <Footer />
    </>
  );
}
