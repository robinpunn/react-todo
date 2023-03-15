import React from "react";

const Scroll = (props) => {
  return (
    <div className="todoScroll" style={{ overflowY: "scroll" }}>
      {props.children}
    </div>
  );
};

export default Scroll;
