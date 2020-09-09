import React from "react";

import "./App.css";
import { Button } from "./components/Button";
function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("Congrats for building your first reusbale component");
        }}
        type="button"
        buttonSize="btn--medium"
        buttonStyles="btn--success--solid"
        buttonLabel="Click me"
      ></Button>
    </div>
  );
}

export default App;
