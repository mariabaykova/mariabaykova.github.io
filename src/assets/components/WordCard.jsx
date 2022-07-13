import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
// import Fab from "@mui/material/Fab";
import EditIcon from "@mui/icons-material/Edit";
import SaveIcon from "@mui/icons-material/Save";
import DeleteIcon from "@mui/icons-material/Delete";
// import EditRoundedIcon from "@mui/icons-material/EditRounded";
import IconButton from "@mui/material/IconButton";
import TextField from "@mui/material/TextField";

import styles from "../styles/ListOfWords.module.scss";

export default function WordCard(props) {
  // let isExpanded = props.isExpanded;
  // function expandWordCard() {
  //   // alert("expand word card");
  //   isExpanded = true;
  // }
  const [editMode, setEditMode] = React.useState(false);

  const handleEditClick = () => {
    setEditMode(!editMode);
  };
  return (
    <Card
      sx={{
        minWidth: 150,
        "&:hover": {
          mt: -0.5,
          mx: -0.5,
          boxShadow: 24,
          //   minWidth: 200,
          //   height: 210,
          zIndex: "tooltip",
          cursor: "pointer",
        },
      }}
    >
      <CardContent>
        {editMode ? (
          <Box
            component="form"
            sx={{
              "& .MuiTextField-root": { m: 0.2 },
            }}
            noValidate
            autoComplete="off"
          >
            <TextField
              required
              id="wordEng"
              // label="English"
              size="small"
              defaultValue={props.english}
            />
            <TextField
              required
              id="wordTrnscr"
              // label="Transcription"
              size="small"
              className={styles.input}
              defaultValue={props.transcription}
            />
            <TextField
              required
              id="wordRus"
              // label="Transcription"
              size="small"
              className={styles.input}
              defaultValue={props.russian}
            />
          </Box>
        ) : (
          <Box component="div">
            <Typography variant="h5" component="div">
              {props.english}
            </Typography>
            <Typography sx={{ mb: 1.5 }} color="text.secondary">
              {props.transcription}
            </Typography>
            <Typography variant="body2">{props.russian}</Typography>
          </Box>
        )}
      </CardContent>
      <CardActions sx={{ display: "flex", justifyContent: "space-between" }}>
        {editMode ? (
          <IconButton aria-label="save">
            <SaveIcon />
          </IconButton>
        ) : (
          <IconButton aria-label="edit" onClick={handleEditClick}>
            <EditIcon />
          </IconButton>
        )}

        <IconButton aria-label="delete">
          <DeleteIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
}
