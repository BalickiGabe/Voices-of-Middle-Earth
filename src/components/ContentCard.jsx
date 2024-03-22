import React from "react";
import Card from "@mui/material/Card";
import { CardContent, Typography } from "@mui/material";

export default function ContentCard({ quote }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "50vh",
        flex: 1,
      }}
    >
      <Card>
        <CardContent>
          <Typography
            variant="h2"
            sx={{ fontSize: { sm: "3.5rem", lg: "1.75rem" } }}
          >
            {quote || (
              <>
                <q>Home is behind, the world ahead.</q>
                {" - J.R.R. Tolkien"}
              </>
            )}
          </Typography>
        </CardContent>
      </Card>
    </div>
  );
}
