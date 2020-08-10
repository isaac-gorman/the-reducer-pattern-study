import React, { useReducer } from "react";

// establish the inital count
const intialState = { count: 0 };

// use the same reducer we created in the previous section
function reducer(state, action) {
  switch (action.type) {
    case "INCREASE":
      return { count: state.count + 1 };
    case "DECREASE":
      return { count: state.count - 1 };

    default:
      return state;
  }
}

// Now I will build out a functional component

function Counter() {
  // 1) use the useReducer hook by decunstructing its two properites: state, and dispatch and pass the reducer an the initialState to the useReducer function
  const [state, dispatch] = useReducer(reducer, intialState);
  // 2) return JSX that displays the count of the user
  // - Note how the two button elements enable the user to increase and decrease the the count.
  // - - Each of the button contains an onClick event that dispatches the intened action object with its given type.
  // - - Each action when fired is dispatched to the reducer and the appropriate logic is applied.

  return (
    // Note how we have access to the current state, and the dispatched method form the useReducer hook, so that we can utalize them to display the count.
    // I can also couple the actions from the appropriate buttons
    <div>
      <div className="count">Count: {state.count} </div>
      <button onClick={() => dispatch({ type: "INCREASE" })}>+1</button>
      <button onClick={() => dispatch({ type: "DECREASE" })}>-1</button>
    </div>
  );
}
