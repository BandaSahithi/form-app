import React, { useState } from "react";

const Select = () => {
  const [role, setRole] = useState("");

  return (
    <div className="container p-5">
      <h3>Select implementation</h3>
      <select
        className="form-select form-select-lg"
        onChange={(event) => {
          setRole(event.target.value);
        }}
      >
        <option value="Front End">Front End</option>
        <option value="Back End">Back End</option>
        <option value="Full Stack">Full Stack</option>
        <option value="App Development">App Development</option>
      </select>
      <br />
      <p>
        You seleted <b>{role}</b>
      </p>
    </div>
  );
};

export default Select;