import React from "react";

type MyButtonProps = {
  message: string;
};

export const MyButton = (props: MyButtonProps) => (
  <button style={{ background: "black", color: "white" }}>
    {props.message}
  </button>
);
