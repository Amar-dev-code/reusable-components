import { storiesOf } from "@storybook/react";
import * as React from "react";

import { TextBox } from "./TextBox";

storiesOf("TextBox", module)
  .add("TextBox with Placeholder", () => (
    <TextBox placeholder="Write Something"></TextBox>
  ))
  .add("Disabled Textbox", () => <TextBox isDisabled={true}></TextBox>);
