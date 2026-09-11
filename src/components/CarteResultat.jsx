import Mascotte from "./Mascotte";
import "./CarteResultat.css";

function CarteResultat({ pourcentage, aReussi, xpGagne }) {
  return (
    <div className="carte-resultat">
      <Mascotte pose={aReussi ? "fete" : "triste"} taille={110} />
      <p className="carte-resultat__pourcentage">{pourcentage}%</p>
      <p className={"carte-resultat__statut" + (aReussi ? " carte-resultat__statut--reussi" : "")}>
        {aReussi ? "Chapitre validé !" : "Pas encore validé, réessaie !"}
      </p>
      <p className="carte-resultat__xp">+{xpGagne} XP</p>
    </div>
  );
}

export default CarteResultat;
