import * as React from "react";
import { experimentalStyled as styled } from "@mui/material/styles";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";

import { listOfWords } from "../data/listOfWords.js";
// import { red } from "@mui/material/colors";
import WordCard from "./WordCard.jsx";

// const Item = styled(Paper)(({ theme }) => ({
//   backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
//   ...theme.typography.body2,
//   padding: theme.spacing(2),
//   textAlign: "center",
//   color: theme.palette.text.secondary,
//   //   marginBlockStart: 10,
// }));

export default function ListOfWords() {
  return (
    <Box
      sx={{
        flexGrow: 1,
        // border: 1,
      }}
    >
      <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          // border: 1,
          // borderColor: red[200],
          padding: 1.5,
        }}
      >
        {Array.from(listOfWords).map((_, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <WordCard
              english={_.english}
              transcription={_.transcription}
              russian={_.russian}
              tags={_.tags}
              isExpanded={false}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
