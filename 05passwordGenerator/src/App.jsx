import { useState, useCallback, useEffect, useRef } from "react";
import "./App.css";

function App() {
  const [length, setLength] = useState(8);
  const [nuberAllowed, setNuberAllowed] = useState(false);
  const [cheractorAllowed, setCheractorAllowed] = useState(false);
  const [password, setPassword] = useState("");
  const passRef = useRef(null);

  const passwodGenerator = useCallback(() => {
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if (nuberAllowed) str += "1234567890";
    if (cheractorAllowed) str += "@#*_";

    for (let i = 0; i < length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass += str.charAt(char);
    }

    setPassword(pass);
  }, [length, nuberAllowed, cheractorAllowed]);

  useEffect(() => {
    passwodGenerator();
  }, [length, nuberAllowed, cheractorAllowed, passwodGenerator]);

  return (
    <>
      <div className="max-w-md mx-auto rounded-xl text-orange-500 p-4 m-8 bg-gray-800">
        <div className="flex mb-4 rounded-3xl overflow-hidden">
          <input
            type="text"
            name="password"
            id="password"
            ref={passRef}
            value={password}
            className="py-1 px-3 w-full"
            // onClick={(e) => console.log(e.target.selectText())}
            readOnly
          />
          <button
            className="bg-blue-500 text-white py-1 px-4 hover:bg-blue-700"
            onClick={() => {
              // passRef.current;
              window.navigator.clipboard.writeText(password);
              passRef.current?.select();
              // console.log(passRef.current?.setSelectionRange(0, 3));
            }}
          >
            Copy
          </button>
        </div>
        <div className="flex gap-x-2">
          <div className="flex gap-1">
            <input
              id="passLen"
              type="range"
              min={4}
              max={20}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="passLen">Length: {length}</label>
          </div>
          <div className="flex gap-1">
            <input
              id="numCheck"
              type="checkbox"
              defaultChecked={nuberAllowed}
              onChange={(e) => setNuberAllowed((prev) => !prev)}
            />
            <label htmlFor="numCheck">Number</label>
          </div>
          <div className="flex gap-1">
            <input
              id="CharCheck"
              type="checkbox"
              defaultChecked={cheractorAllowed}
              onChange={(e) => setCheractorAllowed((prev) => !prev)}
            />
            <label htmlFor="CharCheck">Characters</label>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
