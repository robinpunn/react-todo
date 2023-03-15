import React from "react";

const Clear = ({ clearTodos }) => {
  return (
    //clear todos from local storage
    <button className="clear-btn" onClick={() => clearTodos()}>
      Clear All
    </button>
    //clear todos from state
  );
};

export default Clear;
