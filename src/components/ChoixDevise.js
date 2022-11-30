import React from "react";

const ChoixDevise = ({ labelName, devName, devise, setDevise }) => {
  const devises = [
    { devi: "EUR" },
    { devi: "CHF" },
    { devi: "GBP" },
    { devi: "USD" }
  ];

  const handleChange = (event) => {
    setDevise(event.target.value);
  };

  return (
    <div className="col s6">
      <label>{labelName}</label>
      <select
        defaultValue={devise}
        className="browser-default"
        onChange={handleChange}
        name={{ devName }}
        id={{ devName }}
      >
        {devises.map((devise) => (
          <option key={devise.devi} value={devise.devi}>
            {devise.devi}
          </option>
        ))}
      </select>
    </div>
  );
};

export default ChoixDevise;
