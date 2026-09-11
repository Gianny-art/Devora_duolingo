import { Link } from "react-router-dom";
import Mascotte from "../components/Mascotte";
import Bouton from "../components/Bouton";
import "./PageIntrouvable.css";

function PageIntrouvable() {
  return (
    <div className="page page-introuvable">
      <Mascotte pose="triste" taille={120} />
      <h1 className="titre-page">Page introuvable</h1>
      <p className="sous-titre-page">Cette page n'existe pas, ou plus.</p>
      <Link to="/">
        <Bouton>Retour au parcours</Bouton>
      </Link>
    </div>
  );
}

export default PageIntrouvable;
