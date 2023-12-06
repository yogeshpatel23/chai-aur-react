import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  let colors = ["red", "blue", "green", "yellow", "black", "olive"];
  const [bgColor, setBgColor] = useState("white");
  return (
    <>
      <div
        className="relative min-h-screen"
        style={{ backgroundColor: bgColor }}
      >
        <div className="fixed flex justify-center inset-x-20 bottom-12 bg-white p-4 shadow shadow-lg rounded-lg">
          {colors.map((c) => (
            <button
              onClick={() => setBgColor(c)}
              className="px-4 mx-4 rounded text-white font-semibold uppercase"
              style={{ backgroundColor: c }}
            >
              {c}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
