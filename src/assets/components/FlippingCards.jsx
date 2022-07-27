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
  const [cardToShow, setCardToShow] = React.useState(0);

  // определить длину переданного списка.
  const listLength = listOfWords.length;
  // если список пуст, выдать сообщение и не показывать стрелки и карточку
  // показать картинку с изображением "ничего нет"

  // если текущий индекс = 0, то стрелку назад не показывать
  // если текущий индекс равен длине списка - 1, то не показываем стрелку вперед

  // для маленьких экранов - не показывать стрелки, а показать перелистывание
  return (
    <>
      <Box
        sx={{
          // flexGrow: 1,
          // display: "flex",
          justifyContent: "center",
          alignItems: "center",
          columnGap: 3,
          padding: { xs: 1, sm: 4 },
          // margin: 2,
          // alignSelf: "center",
          borderStyle: "dotted",
          display: { xs: "none", sm: "flex" },
        }}
      >
        {cardToShow > 0 ? (
          <IconButton
            aria-label="back"
            onClick={() => setCardToShow((prevCardId) => prevCardId - 1)}
          >
            <ArrowBack />
          </IconButton>
        ) : (
          <IconButton aria-label="back" sx={{ visibility: "hidden" }}>
            <ArrowBack />
          </IconButton>
        )}
        <Box
          sx={{
            width: { xs: 10 / 10, sm: 1 / 2, md: 1 / 3, lg: 1 / 5 },
          }}
        >
          <WordCardView
            english={listOfWords[cardToShow].english}
            russian={listOfWords[cardToShow].russian}
            transcription={listOfWords[cardToShow].transcription}
            showTransl={false}
          />
        </Box>
        {cardToShow < listLength - 1 ? (
          <IconButton
            aria-label="forward"
            onClick={() => setCardToShow((prevCardId) => prevCardId + 1)}
          >
            <ArrowForward />
          </IconButton>
        ) : (
          <IconButton aria-label="forward" sx={{ visibility: "hidden" }}>
            <ArrowForward />
          </IconButton>
        )}
      </Box>
      {/* для маленьких экранов */}
      <Box
        sx={{
          // flexGrow: 1,
          scrollSnapType: "x mandatory",
          // display: "flex",
          webkitOwerflowScrolling: "touch",
          overflowX: "scroll",
          borderStyle: "dotted",
          display: { xs: "flex", sm: "none" },
        }}
      >
        {listOfWords.map((wCard, index) => (
          <Box
            sx={{
              scrollSnapAlign: "start",
              minWidth: "100%",
              height: "100%",
            }}
          >
            <WordCardView
              english={wCard.english}
              transcription={wCard.transcription}
              russian={wCard.russian}
              tags={wCard.tags}
              id={wCard.id}
            />
          </Box>
        ))}
      </Box>
    </>
  );
}
