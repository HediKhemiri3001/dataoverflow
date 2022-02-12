import React from "react";
import { useState } from "react";
//Have to write logic for displaying certain child component corresponding to the button clicked.
export default function AdminWorkZone(props) {
  const [childShown, setChildShown] = useState(0);
  const buttonClickHandler = (event) => {
    setChildShown(event.target.value[0] - 1);
  };
  return (
    <>
      <div className="list_of_buttons">
        {props.children.map((child, index) => {
          return (
            <input
              key={index}
              index={index}
              type="button"
              value={index + 1 + "-" + child.props.label}
              onClick={buttonClickHandler}
            ></input>
          );
        })}
      </div>
      {props.children[childShown]}
    </>
  );
}
