import React from "react";
import { useSelector } from "react-redux";
import { selectedFilter } from "./filterSlice";

const FilterMessage = () => {
  const filter = useSelector(selectedFilter);
  return (
    <div className="message">
      {filter === "all" ? (
        <p className="none">Enter a todo...</p>
      ) : filter === "active" ? (
        <p className="none">You dont have any active todos...</p>
      ) : filter === "complete" ? (
        <p className="none">You haven't completed any todos...</p>
      ) : null}
    </div>
  );
};

export default FilterMessage;
