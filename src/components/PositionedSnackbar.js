import React from "react";
import Button from "@material-ui/core/Button";
import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import "./style.css";

export default function PositionedSnackbar({ snackbarOptions }) {
  const {
    positionVertical,
    positionHorizontal,
    duration,
    snackBackground,
    snackColor,
    snackFontSize,
  } = snackbarOptions;
  const [state, setState] = React.useState({
    open: false,
    vertical: "top",
    horizontal: "center",
  });

  const { vertical, horizontal, open } = state;

  const handleClick = (newState) => () => {
    setState({ open: true, ...newState });
  };

  const handleClose = () => {
    setState({ ...state, open: false });
  };

  return (
    <div className="buttonContainer">
      <Button
        variant="contained"
        color="primary"
        onClick={handleClick({
          vertical: positionVertical,
          horizontal: positionHorizontal,
        })}
      >
        show snackbar
      </Button>
      <Snackbar
        anchorOrigin={{ vertical, horizontal }}
        open={open}
        onClose={handleClose}
        key={vertical + horizontal}
        autoHideDuration={duration}
      >
        <SnackbarContent
          style={{
            backgroundColor: snackBackground,
            color: snackColor,
            fontSize: snackFontSize,
          }}
          message={<span id="client-snackbar">Hello World</span>}
        />
      </Snackbar>
    </div>
  );
}
