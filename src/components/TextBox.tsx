import React from "react";

import "../styles/textBox.css";

interface textboxProps {
  isDisabled?: boolean;
  placeholder?: string;
  isAutoFocus?: boolean;
  isReadonly?: boolean;
  type: "Password" | "Text";
  value: string | number | readonly string[];
}

export function TextBox(props: textboxProps) {
  return (
    <>
      <input
        className="primary"
        type={props.type}
        placeholder={props.placeholder}
        disabled={props.isDisabled}
        autoFocus={props.isAutoFocus}
        readOnly={props.isReadonly}
        value={props.value}
      ></input>
    </>
  );
}
