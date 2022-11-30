import React from "react";

const Montant = ({
  montant,
  setMontant,
  setClassAndFormattedValue,
  inputClass
}) => {
  const handleChange = (event) => {
    setClassAndFormattedValue(event.target.value);
  };

  return (
    <div className="input-field col s12">
      <input
        id="amount"
        type="text"
        // className={Number(montant) ? "valid" : "invalid"}
        className={inputClass}
        onChange={handleChange}
        value={montant}
      />
      <span
        className="helper-text"
        data-error="Erreur"
        data-success="Valide"
      ></span>
      <label htmlFor="amount">Montant : {montant} </label>
    </div>
  );
};

export default Montant;
