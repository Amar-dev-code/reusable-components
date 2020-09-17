import React from "react";

import "./App.css";
import { Button } from "./components/Button";

function App() {
  return (
    <div className="App">
      <Button
        href="https://www.google.com/"
        buttonLabel="link"
        onClick={() => {
          console.log("Congrats for building your first reusbale component");
        }}
        buttonStyles="btn--success--solid"
        type="button"
        disabled={true}
      ></Button>
    </div>
  );
}

export default App;
