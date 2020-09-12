import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "./Button";
storiesOf("Button", module)
  .add("Primary", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonLabel="Primary"
    ></Button>
  ))
  .add("Disabled", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonLabel="Primary"
      disabled={true}
    ></Button>
  ))
  .add("icon", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonLabel={<img src="../search.png" alt="search"></img>}
    ></Button>
  ));
