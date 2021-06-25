import React, { useState } from "react";

const Radio = () => {
  const [data, setData] = useState({
    type: "",
  });

  const handleChange = (event) => {
    setData({
      type: event.target.value,
    });
  };

  return (
    <form action="">
      <h3>Radio implementation</h3>
      <div>
        <label htmlFor="">Remote: </label>
        <input
          type="radio"
          name="type"
          value="Remote"
          onChange={handleChange}
        />
        <br />
        <label htmlFor="">work from office: </label>
        <input
          type="radio"
          name="type"
          value="work from office"
          onChange={handleChange}
        />

      </div>
      <p>
        You selected <b>{data.type}</b>
      </p>
      <br />
    </form>
  );
};

export default Radio;