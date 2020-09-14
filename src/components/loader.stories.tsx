import { storiesOf } from "@storybook/react";
import * as React from "react";

import { Loader } from "./Loader";

storiesOf("Loader", module).add("Loading", () => (
  <Loader isLoading={true}></Loader>
));
