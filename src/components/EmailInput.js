
import React from "react";
import { TEInput } from "tw-elements-react";

export default function InputEmail() {
  const inputStyles = {
    width: "100%", // Set the width as needed
    padding: "1.5rem", // Set the padding as needed
  };

  return (
    <TEInput
      type="email"
      id="exampleFormControlInputEmail"
      label="Email"
      style={inputStyles}
    ></TEInput>
  );
}