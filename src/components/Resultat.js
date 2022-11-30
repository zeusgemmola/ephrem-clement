import Spinner from "./Spinner/index.js";

const Resultat = ({ resultat, spinner }) => (
  <div className="input-field col s12">
    <h5>Result : {spinner ? <Spinner /> : resultat}</h5>
  </div>
);

export default Resultat;
