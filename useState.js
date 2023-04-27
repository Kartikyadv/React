// import "./styles.css";
// import { useState } from "react";

// export default function App() {
//   const [count, setCount] = useState(0);
//   const [text, showText] = useState(true);
//   return (
//     <div className="App">
//       <h1> {count}</h1>
//       <button
//         onClick={() => {
//           setCount(count + 1);
//           showText(!text);
//         }}
//       > + </button>
//       {text && <p>This is text</p>}
//     </div>
//   );
// }


////////////////////////////////////////////////////////////


import React, { useState } from "react";

const StateTutorial = () => {
  const [inputValue, setInputValue] = useState("Pedro");

  let onChange = (event) => {
    const newValue = event.target.value;
    setInputValue(newValue);
  };

  return (
    <div>
      <input placeholder="enter something..." onChange={onChange} />
      {inputValue}
    </div>
  );
};

export default StateTutorial;