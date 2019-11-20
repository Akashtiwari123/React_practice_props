import React from "react";

const person = props => {
  return (
    <div>
    <p onClick={props.click}>
      Name is {props.name} and age is {props.age}
    </p>
    <input type="text" onChange={props.changed} ></input>
    {/* <input type="text" onChange={props.changed} value={props.event}></input> */}
    </div>
  );
};
export default person;
   