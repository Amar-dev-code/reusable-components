import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Spinner } from "./Spinner";

const spinner = require("../images/loading.gif");
storiesOf("Spinner", module).add("loading", () => (
  <Spinner isLoading={true}></Spinner>
));
