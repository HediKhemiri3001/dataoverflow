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
        {props.children.length > 1 ? (
          props.children.map((child, index) => {
            return (
              <input
                key={index}
                index={index}
                type="button"
                value={index + 1 + "-" + child.props.label}
                onClick={buttonClickHandler}
              ></input>
            );
          })
        ) : (
          <input
            key={0}
            index={0}
            type="button"
            value={props.children.props.label}
          ></input>
        )}
      </div>
      {props.children.length > 1 ? props.children[childShown] : props.children}
    </>
  );
}
