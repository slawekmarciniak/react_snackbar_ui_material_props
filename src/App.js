import "./App.css";
import PositionedSnackbar from "./components/PositionedSnackbar";

const snackbarOptions = {
  positionVertical: "bottom",
  positionHorizontal: "center",
  duration: 5000,
  snackBackground: "#3498db",
  snackColor: "#2c3e50",
  snackFontSize: 20,
};

function App() {
  return (
    <div className="App">
      <PositionedSnackbar snackbarOptions={snackbarOptions} />
    </div>
  );
}

export default App;
