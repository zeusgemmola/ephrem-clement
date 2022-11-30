import React, { useEffect, useState, useRef } from "react";

import ChoixDevise from "./ChoixDevise";
import Montant from "./Montant";
import Resultat from "./Resultat";

const Convertisseur = () => {
  const [ancDevise, setAncDevise] = useState("EUR");
  const [nouvDevise, setNouvDevise] = useState("EUR");
  const [montant, setMontant] = useState(0);
  const [inputClass, setInputClass] = useState("");
  const [rate, setRate] = useState(1);
  const [resultat, setResultat] = useState(0);
  const [showSpinner, setShowSpinner] = useState(false);

  const usePrevious = (value) => {
    const ref = useRef();

    useEffect(() => {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  const ancDevPre = usePrevious(ancDevise);
  const nouvDevPre = usePrevious(nouvDevise);

  useEffect(() => {
    const fetchTaux = async () => {
      setShowSpinner(true);
      const url = `https://api.currencyapi.com/v3/latest?apikey=6xO9acHbwCc4PBCoIFtVJAf8WuGqU0uvvoshMtuM&currencies=EUR%2CUSD%2CCHF%2CGBP&base_currency=${ancDevise}`;
      const resultatFetch = await fetch(url);

      const resultatJson = await resultatFetch.json();
      setRate(resultatJson.data[nouvDevise].value);
      setShowSpinner(false);
    };

    if (montant !== 0 && inputClass === "valid") {
      if (ancDevise === nouvDevise) {
        setRate(1);
      } else if (ancDevPre !== ancDevise || nouvDevPre !== nouvDevise) {
        fetchTaux();
      }
    }
    Number.isNaN(montant * rate) ? setResultat(0) : setResultat(montant * rate);
  }, [ancDevise, nouvDevise, montant, nouvDevPre, ancDevPre, rate, inputClass]);

  const getRegex = () => new RegExp("^[0-9]+([.][0-9][0-9]?)?$");

  const testRegex = (input) => {
    const regex = getRegex();
    const bool = regex.test(input);
    return bool;
  };

  const testRegexWithCallback = (callback, input) => {
    return callback(testRegex(input), input);
  };

  const determineInputClass = (bool) => (bool ? "valid" : "invalid");

  const formateInput = (bool, input) => (bool ? input : input);

  const determineInputClassWithRegexTest = (input) =>
    testRegexWithCallback(determineInputClass, input);

  const formateInputRegex = (input) =>
    testRegexWithCallback(formateInput, input);

  const setMontantAndSetFormat = (input) => {
    setMontant(formateInputRegex(input));
    setInputClass(determineInputClassWithRegexTest(input));
  };

  return (
    <div className="App">
      <main>
        <div className="container">
          <div className="row">
            <h3>Convertisseur</h3>
            <div className="col s8">
              <div className="row">
                <ChoixDevise
                  labelName="From"
                  name="inputDevises"
                  id="inputDevises"
                  devise={ancDevise}
                  setDevise={setAncDevise}
                />
                <ChoixDevise
                  labelName="To"
                  name="outputDevises"
                  id="outputDevises"
                  devise={nouvDevise}
                  setDevise={setNouvDevise}
                />
                <div className="row">
                  <Montant
                    value={montant}
                    setValue={setMontant}
                    setClassAndFormattedValue={setMontantAndSetFormat}
                    inputClass={inputClass}
                  />
                  <Resultat resultat={resultat} spinner={showSpinner} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Convertisseur;
