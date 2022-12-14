import * as React from "react";
import Box from "@mui/material/Box";
import ArrowBack from "@mui/icons-material/ArrowBack";
import ArrowForward from "@mui/icons-material/ArrowForward";
import IconButton from "@mui/material/IconButton";
import WordCardView from "./WordCardView.jsx";
import NothingFound from "./NothingFound.jsx";

export default function FlippingCards(props) {
  // строку ниже можно закомментировать, чтобы проверить поведение при пустом списке
  const listOfWords = props.listOfWords;
  // строку ниже можно раскомментировать, чтобы проверить поведение при пустом списке
  // const listOfWords = [];
  // в состоянии этого компонента хранится индекс карточки, которую нужно показать
  // нажатие на стрелки двигает этот индекс и при отрисовке показывается карточка с нужным индексом
  const [cardToShow, setCardToShow] = React.useState(0);

  // определить длину переданного списка.
  const listLength = listOfWords ? listOfWords.length : 0;
  // если список пуст, выдать сообщение и не показывать стрелки и карточку
  // показать картинку с изображением "ничего нет"

  // если текущий индекс = 0, то стрелку назад не показывать
  // если текущий индекс равен длине списка - 1, то не показываем стрелку вперед

  // для маленьких экранов - не показывать стрелки, а показать перелистывание
  return (
    <>
      {!listLength ? (
        <NothingFound title="Sorry, looks like you have no cards to flip"></NothingFound>
      ) : (
        <>
          <Box
            sx={{
              justifyContent: "center",
              alignItems: "center",
              columnGap: 3,
              padding: { xs: 1, sm: 4 },
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
          {/* для маленьких экранов - пролистывание смахиванием */}
          <Box
            sx={{
              scrollSnapType: "x mandatory",
              webkitOwerflowScrolling: "touch",
              overflowX: "scroll",
              display: { xs: "flex", sm: "none" },
            }}
          >
            {listOfWords.map((wCard, index) => (
              <Box
                sx={{
                  scrollSnapAlign: "start",
                  minWidth: "99%",
                  height: "99%",
                  bgcolor: "background.paper",
                  border: "1px solid gray",
                  borderRadius: 3,
                  boxShadow: 20,
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
      )}
    </>
  );
}
