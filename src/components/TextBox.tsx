import React, { HtmlHTMLAttributes } from "react";

interface textboxProps {
  isDisabled?: boolean;
  placeholder?: string;
  isAutoFocus?: boolean;
  isReadonly?: boolean;
}

export function TextBox(props: textboxProps) {
  const placeholder = props.placeholder;
  const isDiabled = props.isDisabled;
  return (
    <>
      <textarea placeholder={placeholder} disabled={isDiabled}></textarea>
    </>
  );
}
