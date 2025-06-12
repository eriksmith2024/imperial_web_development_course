import React, { useState } from "react";


{/*A counter function that returns a increment and decrement counter */}
function Counter() {
  const [counter, setCounter] = useState(0);{/* Uses state hook to set the counter */}
  {/* CSS button styling */}
  const buttonStyle = {
    backgroundColor: "lightblue",
    padding: "10px 20px",
    border: "none",
    borderRadius: "4px",
    cursor: "pointer",
    fontsize: "1rem",
  };

  return (
    <div style={{ textAlign: "center", padding: "50px" }}>
      <h1>Simple Counter App</h1>
      <p>Counter: {counter}</p>
      <button 
        style={{ ...buttonStyle, marginRight: "10px" }}
        onClick={() => setCounter(counter +1)}
        >
          Increment
        </button>
        <button style={buttonStyle} onClick={() => setCounter(counter -1)}>
          Decrement
        </button>
    </div>
  );
}

export default Counter;