import { formaterMMSS } from "../hooks/useMinuteur";
import "./Minuteur.css";

function Minuteur({ secondesRestantes, dureeInitiale }) {
  const pourcentage = Math.max(0, Math.round((secondesRestantes / dureeInitiale) * 100));
  const critique = secondesRestantes <= 30;

  return (
    <div className={"minuteur" + (critique ? " minuteur--critique" : "")}>
      <div className="minuteur__barre">
        <div className="minuteur__remplissage" style={{ width: `${pourcentage}%` }} />
      </div>
      <span className="minuteur__temps">{formaterMMSS(secondesRestantes)}</span>
    </div>
  );
}

export default Minuteur;
