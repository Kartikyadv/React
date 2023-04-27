import "./styles.css";
import { useReducer } from "react";

const reducer = (state,action) => {
  switch (action.type) {
  case "INCREMENT":
    return {
      count: state.count+1,
      showText: state.showText,
    }
  case "toggleShowText":
    return {
      count: state.count,
      showText: !state.showText,
    }
    default:
      return state;
  }
};

export default function App() {
  const [state,dispatch] = useReducer(reducer,
    {
      count: 0,
      showText: false
    });
  return (
    <div className="App">
     <h1> {state.count} </h1>
     <button onClick={() =>{
       dispatch({type:"INCREMENT"})
       dispatch({type:"toggleShowText"})
     }}>
       + </button>
    {state.showText && <h1>Hello friends</h1>}
    </div>
  );
}
