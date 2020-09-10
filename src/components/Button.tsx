import React from "react";
import "../styles/button.css";
import "../sizes/button.css";
import { useBreakpoint } from "../hooks/useBreakpoint";

interface buttonProps {
  buttonLabel: string;
  type: "button" | "reset" | "submit";
  onClick: () => {} | void;
  buttonStyles: string;
  buttonSize?: string;
  disabled?: boolean;
}

const styles = [
  "btn--primary--solid",
  "btn--warning--solid",
  "btn--danger--solid",
  "btn--success--solid",
  "btn--primary--outline",
  "btn--warning--outline",
  "btn--danger--outline",
  "btn--warning--outline",
];

const sizes = ["btn--medium", "btn--large"];

export const Button = (props: buttonProps) => {
  let checkButtonStyle = styles.includes(props.buttonStyles)
    ? props.buttonStyles
    : styles[0];

  let checkButtonLabel = props.buttonLabel;
  let buttonSize: string = "";
  const breakPoint = useBreakpoint();
  breakPoint == "lg" ? (buttonSize = "btn--large") : (buttonSize = sizes[0]);

  props.disabled
    ? (checkButtonStyle = "btn--primary--disabled") &&
      (checkButtonLabel = "Disabled")
    : (checkButtonStyle = styles[0]);

  return (
    <button
      onClick={props.onClick}
      type={props.type}
      className={`btn ${buttonSize} ${checkButtonStyle}`}
      disabled={props.disabled}
    >
      {checkButtonLabel}
    </button>
  );
};
