import { useState } from "react";
import "./ZoomControls.css";

function ZoomControls() {
  const [zoom, setZoom] = useState(0);

  return (
    <div className="zoom-controls-container">
      <div className="current-zoom">Current Zoom Level: {zoom}</div>
      <div
        className="zoom-in-button"
        onClick={() => setZoom((zoom) => (zoom + 1 > 5 ? 5 : zoom + 1))}
      >
        +
      </div>
      <div
        className="zoom-out-button"
        onClick={() => setZoom((zoom) => (zoom - 1 < 0 ? 0 : zoom - 1))}
      >
        -
      </div>
    </div>
  );
}

export default ZoomControls;
