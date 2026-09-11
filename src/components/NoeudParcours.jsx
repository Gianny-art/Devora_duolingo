import { Link } from "react-router-dom";
import Mascotte from "./Mascotte";
import "./NoeudParcours.css";

function IconeCadenas() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2a5 5 0 0 0-5 5v3H6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8a2 2 0 0 0-2-2h-1V7a5 5 0 0 0-5-5Zm-3 5a3 3 0 0 1 6 0v3H9V7Z" />
    </svg>
  );
}

function IconeCoche() {
  return (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
      <path d="M4 12l5 5L20 6" />
    </svg>
  );
}

function NoeudParcours({ chapitre, etat, estActuel, couleurMascotte }) {
  const classes = ["noeud-parcours", `noeud-parcours--${etat}`].join(" ");

  const contenu = (
    <div className={classes}>
      {estActuel && (
        <div className="noeud-parcours__mascotte">
          <Mascotte pose="fete" taille={56} couleur={couleurMascotte} />
        </div>
      )}
      <div className="noeud-parcours__pastille">
        {etat === "verrouille" && <IconeCadenas />}
        {etat === "complete" && <IconeCoche />}
        {etat === "disponible" && <span className="noeud-parcours__numero">{chapitre.id}</span>}
      </div>
      <span className="noeud-parcours__titre">{chapitre.titre}</span>
    </div>
  );

  if (etat === "verrouille") {
    return <div className="noeud-parcours__lien noeud-parcours__lien--desactive">{contenu}</div>;
  }

  return (
    <Link to={`/chapitre/${chapitre.id}`} className="noeud-parcours__lien">
      {contenu}
    </Link>
  );
}

export default NoeudParcours;
