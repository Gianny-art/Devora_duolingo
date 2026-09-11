import { Navigate } from "react-router-dom";
import { CHAPITRES } from "../data/chapitres";
import { obtenirRessourcesChapitre } from "../data/ressources";
import { useProgression } from "../hooks/useProgression";
import BarreNavBasse from "../components/BarreNavBasse";
import "./PageRessources.css";

function PageRessources() {
  const { estConnecte } = useProgression();

  if (!estConnecte) return <Navigate to="/profil" replace />;

  return (
    <div className="page page-ressources">
      <h1 className="titre-page">Pour aller plus loin</h1>
      <p className="sous-titre-page">
        Des sources fiables pour approfondir chaque notion, chapitre par chapitre.
      </p>

      <div className="page-ressources__liste">
        {CHAPITRES.map((chapitre) => {
          const liens = obtenirRessourcesChapitre(chapitre.id);
          if (liens.length === 0) return null;

          return (
            <div key={chapitre.id} className="carte page-ressources__carte">
              <p className="page-ressources__chapitre">
                Chapitre {chapitre.id} · {chapitre.titre}
              </p>
              <ul className="page-ressources__liens">
                {liens.map((lien) => (
                  <li key={lien.url}>
                    <a href={lien.url} target="_blank" rel="noreferrer">
                      {lien.titre}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>

      <BarreNavBasse />
    </div>
  );
}

export default PageRessources;
