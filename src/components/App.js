import React from "react";
import Counter from "./Counter";
import Name from "./Name";

function App() {
  return (
    <div className="container">
      <div>
        <Counter />
      </div>
      <hr />
      <div>
        <Name />
      </div>
    </div>
  );
}

export default App;
