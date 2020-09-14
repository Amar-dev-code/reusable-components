import React from "react";
import { idText } from "typescript";

import "../styles/loader.css";

interface loaderProps {
  isLoading: boolean;
}

export function Loader(props: loaderProps) {
  //props.isLoading ? <div className="loader"></div> : <></>;
  if (props.isLoading) return <div className="loader"></div>;
  else return <></>;
}
