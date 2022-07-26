import * as React from "react";
import Box from "@mui/material/Box";
// import Grid from "@mui/material/Grid";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";

// import { listOfWords } from "../data/listOfWords.js";
import WordCardView from "./WordCardView.jsx";

export default function FlippingCards(props) {
  const listOfWords = props.listOfWords;
  // в состоянии этого компонента хранится индекс карточки, которую нужно показать
  // нажатие на стрелки двигает этот индекс и при отрисовке показывается карточка с нужным индексом

  // определить длину переданного списка.
  // если список пуст, выдать сообщение и не показывать стрелки и карточку

  // если текущий индекс = 0, то стрелку назад не показывать
  // если текущий индекс равен длине списка - 1, то не показываем стрелку вперед

  // для маленьких экранов - не показывать стрелки, а показать перелистывание
  return (
    <Box
      sx={{
        // flexGrow: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        columnGap: 3,
        padding: { xs: 1, sm: 4 },
        // margin: 2,
        // alignSelf: "center",
        borderStyle: "dotted",
      }}
    >
      <IconButton aria-label="back">
        <ArrowBack />
      </IconButton>
      <Box sx={{ width: { xs: 10 / 10, sm: 1 / 2, md: 1 / 3, lg: 1 / 5 } }}>
        <WordCardView english="cat" russian="кошка" transcription="dfsnkfj" />
      </Box>
      <IconButton aria-label="forward">
        <ArrowForward />
      </IconButton>
      {/* <Grid
        container
        spacing={{ xs: 2, md: 2 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
        sx={{
          padding: 1.5,
        }}
      >
        {listOfWords.map((wCard, index) => (
          <Grid item xs={6} sm={4} md={2} key={index}>
            <WordCardMini
              english={wCard.english}
              transcription={wCard.transcription}
              russian={wCard.russian}
              tags={wCard.tags}
              id={wCard.id}
            />
          </Grid>
        ))}
      </Grid> */}
    </Box>
  );
}
