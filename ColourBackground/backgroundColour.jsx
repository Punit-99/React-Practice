import { useState } from "react";
import "./style.css";

export default function BackgroundColour() {
  const [typeOfColour, setTypeOfColour] = useState("hex");
  const [colour, setColour] = useState("red");

  const generateHexColour = () => {
    setTypeOfColour("hex");
    const hexArray = [
      0,
      1,
      2,
      3,
      4,
      5,
      6,
      7,
      8,
      9,
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
    ];

    let hexColour = "#";

    for (let i = 0; i < 6; i++) {
      hexColour += hexArray[Math.floor(Math.random() * hexArray.length)];
    }

    setColour(hexColour);
    console.log(hexColour);
  };

  const generateRGBColour = () => {
    setTypeOfColour("RGB");
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    const rgbColour = `rgb(${r}, ${g}, ${b})`;

    setColour(rgbColour);
    console.log(rgbColour);
  };

  return (
    <div className="container">
      <div className="window" style={{ background: colour }}>
        <div className="colourName">{colour}</div>
      </div>
      <div className="buttons">
        <button onClick={generateHexColour}>Generate Hex</button>
        <button onClick={generateRGBColour}>Generate RGB</button>
        <button
          onClick={() => {
            typeOfColour === "hex" ? generateHexColour() : generateRGBColour();
          }}
        >
          Generate Random
        </button>
      </div>
    </div>
  );
}
