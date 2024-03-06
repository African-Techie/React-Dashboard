import React, { useState, useImperativeHandle, forwardRef } from "react";

const ChildComponent2 = forwardRef((props, ref) => {
  const [text, setText] = useState(false);

  useImperativeHandle(ref, () => ({
    alterToggle() {
      setText(!text);
    },
  }));

  return (
    <div>
      {text && <h1>Name: {props.name}</h1>}
      {text && <p>Age: {props.age}</p>}
      <hr />
    </div>
  );
});
export default ChildComponent2;
