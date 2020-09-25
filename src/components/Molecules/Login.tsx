import React from "react";
import { useFormik } from "formik";
import { TextBox } from "../../components/TextBox";

export function Login() {
  const formik = useFormik({
    initialValues: {
      userName: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <TextBox
        type="Text"
        placeholder="Enter username"
        value={formik.values.userName}
      ></TextBox>
      <button type="submit">Submit</button>
    </form>
  );
}
