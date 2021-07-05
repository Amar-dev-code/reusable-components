import { storiesOf } from "@storybook/react";
import * as React from "react";
import { Button } from "./Button";
const search = require("../images/search.png");

storiesOf("Button", module)
  .add("Primary", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonLabel="Sign In"
      buttonSize="btn--medium"
      href="https://www.google.com/"
    ></Button>
  ))
  .add("Large Button", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonLabel="Get Started >"
      buttonSize="btn--large"
      href="https://www.google.com/"
    ></Button>
  ))
  .add("Disabled", () => (
    <Button
      onClick={() => {
        console.log("Congrats for building your first reusbale component");
      }}
      type="button"
      buttonStyles="btn--success--solid"
      buttonSize="btn--medium"
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
      buttonSize="btn--medium"
      buttonStyles="btn--success--solid"
      buttonLabel={<img src={search} alt="search" width="20" height="20"></img>}
    ></Button>
  ));
