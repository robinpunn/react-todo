import React from "react";
import { useSelector } from "react-redux";

const FilterMessage = () => {
  const filter = useSelector((state) => state.selectedFilter.selectedFilter);
  // console.log("filter:", filter);
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
