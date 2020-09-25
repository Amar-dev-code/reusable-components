import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TextBox } from "./TextBox";

storiesOf("TextBox", module)
  .add("Textbox", () => (
    <TextBox placeholder="Enter username" type="Text" value=""></TextBox>
  ))
  .add("Password", () => (
    <TextBox
      type="Password"
      placeholder="Enter Your Password"
      value=""
    ></TextBox>
  ))
  .add("Disabled", () => (
    <TextBox
      isDisabled={true}
      type="Text"
      placeholder="I am Disabled :("
      value=""
    ></TextBox>
  ));
