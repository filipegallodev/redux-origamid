import React, { useState } from "react";
import Photos from "./Photos";

function App() {
  const [toggle, setToggle] = useState(true);

  return (
    <div>
      <button onClick={() => setToggle(!toggle)}>Toggle</button>
      {toggle && <Photos />}
    </div>
  );
}

export default App;
