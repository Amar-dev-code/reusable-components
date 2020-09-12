import React from "react";

import "../styles/spinner.css";
const spinner = require("../images/loading.gif");

interface spinnerProps {
  isLoading: boolean;
}

export function Spinner(props: spinnerProps) {
  const isLoading = props.isLoading;
  if (isLoading)
    return (
      <>
        <img src={spinner} alt="spinner" className="center"></img>
      </>
    );
  else return <></>;
}
