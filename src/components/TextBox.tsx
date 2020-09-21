import React from "react";
import "../styles/textBox.css";

interface textboxProps {
  isDisabled?: boolean;
  placeholder?: string;
  isAutoFocus?: boolean;
  isReadonly?: boolean;
  type: "Password" | "Text";
}

export function TextBox(props: textboxProps) {
  return (
    <>
      {/* <textarea placeholder={placeholder} disabled={isDiabled}></textarea> */}
      <input
        className="primary"
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.isDisabled}
        autoFocus={props.isAutoFocus}
        readOnly={props.isReadonly}
      ></input>
    </>
  );
}
