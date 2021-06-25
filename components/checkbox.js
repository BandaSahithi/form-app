import React, { useState } from "react";

const CheckBox = () => {
  const [data, setData] = useState({
    isAgreed: false,
  });

  const handleChange = (event) => {
    setData({
      isAgreed: event.target.checked,
    });
  };

  return (
    <div>
      <h3>Checkbox implementation</h3>
      <form action="">
        <input type="checkbox" name="isAgreed" onChange={handleChange} />
        <label htmlFor=""> this is a checkbox</label>
      </form>
      <br />
      <h5>{data.isAgreed == false ? "" : "the checkbox is checked"}</h5>
    </div>
  );
};

export default CheckBox;