import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";

function MyApp() {
  return (
    <div>
      <h1>Cutom app | chai</h1>
    </div>
  );
}

// const reactElement = {
//   type: "a",
//   props: {
//     href: "http://google.com",
//     traget: "_blank",
//   },
//   children: "Click mo to visit google",
// };

const anaotherUser = "chai aur rectdd";

const reactElement = React.createElement(
  "a",
  { href: "https://google.com", target: "_bank" },
  "click me to visit googles",
  anaotherUser
);

const anotherElement = (
  <a href="https://google.com" target="_blank">
    visit google.com
  </a>
);

ReactDOM.createRoot(document.getElementById("root")).render(reactElement);
