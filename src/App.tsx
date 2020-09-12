import React from "react";

import "./App.css";
import { Button } from "./components/Button";
import { Spinner } from "./components/Spinner";

function App() {
  return (
    <div className="App">
      <Button
        onClick={() => {
          console.log("Congrats for building your first reusbale component");
        }}
        type="button"
        buttonStyles="btn--success--solid"
        buttonLabel="Click me"
      ></Button>
      <Spinner isLoading={true}></Spinner>
    </div>
  );
}

export default App;
