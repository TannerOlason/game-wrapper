import ZoomControls from "./components/ui/ZoomControls";
import GamePortal from "./components/ui/GamePortal";
import "./App.css";

function App() {
  return (
    <div className="App">
      <GamePortal />
      <div className="bottom-bar">
        <ZoomControls />
      </div>
    </div>
  );
}

export default App;
