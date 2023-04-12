import React from "react";

//you can use this syntax or function MyButton()
export function MyButton(props) {
  return <button>{props.children}</button>;
}

/* same as:
export const MyButton = (props) => {
  return <button>{props.children}</button>;
} */
