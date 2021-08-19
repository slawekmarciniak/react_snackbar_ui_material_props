import "./App.css";
import PositionedSnackbar from "./components/PositionedSnackbar";

const snackbarOptions = {
  positionVertical: "bottom",
  positionHorizontal: "center",
  duration: 5000,
};
const snackbarType = {
  typeWarning: {
    snackBackground: "#3498db",
    snackColor: "#2c3e50",
    snackFontSize: 20,
  },
  typeSuccess: {
    snackBackground: "#55efc4",
    snackColor: "#ffeaa7",
    snackFontSize: 20,
  },
};

function App() {
  return (
    <div className="App">
      <PositionedSnackbar
        snackbarOptions={snackbarOptions}
        snackbarType={snackbarType.typeWarning}
      />
    </div>
  );
}

export default App;
