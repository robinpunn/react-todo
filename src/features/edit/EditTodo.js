import React, { useState } from "react";

const EditTodo = ({ text, onCancel, onSave }) => {
  //create a state for the edited todo
  const [newText, setnewText] = useState(text);

  //create a function to handle the edit
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSave(newText);
      onCancel();
    }
    if (event.key === "Escape") {
      onCancel();
    }
  };

  //render function
  return (
    <input
      type="text"
      value={newText}
      onChange={(event) => setnewText(event.target.value)}
      onKeyDown={handleKeyDown}
      autoFocus
    />
  );
};

export default EditTodo;
