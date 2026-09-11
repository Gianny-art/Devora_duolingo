import { Link, Navigate, useParams } from "react-router-dom";
import { obtenirChapitre } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import BarreNavBasse from "../components/BarreNavBasse";
import Bouton from "../components/Bouton";
import "./PageChapitre.css";

function PageChapitre() {
  const { id } = useParams();
  const chapitre = obtenirChapitre(id);
  const { estConnecte, estChapitreDebloque, obtenirProgressionChapitre } = useProgression();

  if (!estConnecte) return <Navigate to="/profil" replace />;
  if (!chapitre) return <Navigate to="/" replace />;
  if (!estChapitreDebloque(chapitre.id)) return <Navigate to="/" replace />;

  const progressionChapitre = obtenirProgressionChapitre(chapitre.id);

  return (
    <div className="page">
      <Link to="/" className="page-chapitre__retour">
        ← Retour au parcours
      </Link>

      <span className="etiquette">Chapitre {chapitre.id}</span>
      <h1 className="titre-page">{chapitre.titre}</h1>
      <p className="sous-titre-page">{chapitre.objectif}</p>

      <section className="page-chapitre__section">
        <h2 className="page-chapitre__titre-section">Leçons</h2>
        <div className="page-chapitre__liste">
          {chapitre.lecons.map((lecon, index) => {
            const vue = progressionChapitre.leconsVues.includes(lecon.id);
            return (
              <Link
                key={lecon.id}
                to={`/chapitre/${chapitre.id}/lecon/${lecon.id}`}
                className="carte page-chapitre__carte-lecon"
              >
                <span className={"page-chapitre__puce" + (vue ? " page-chapitre__puce--vue" : "")}>
                  {vue ? "✓" : index + 1}
                </span>
                <span>{lecon.titre}</span>
              </Link>
            );
          })}
        </div>
      </section>

      <section className="page-chapitre__section">
        <h2 className="page-chapitre__titre-section">S'entraîner</h2>
        <div className="carte page-chapitre__carte-action">
          <div>
            <p className="page-chapitre__action-titre">Quiz de pratique</p>
            <p className="page-chapitre__action-details">
              {progressionChapitre.meilleurScoreQuiz != null
                ? `Meilleur score : ${progressionChapitre.meilleurScoreQuiz}%`
                : "Pas encore tenté"}
            </p>
          </div>
          <Link to={`/chapitre/${chapitre.id}/quiz`}>
            <Bouton>Commencer</Bouton>
          </Link>
        </div>

        <div className="carte page-chapitre__carte-action">
          <div>
            <p className="page-chapitre__action-titre">Examen chronométré</p>
            <p className="page-chapitre__action-details">
              {progressionChapitre.meilleurScoreExamen != null
                ? `Meilleur score : ${progressionChapitre.meilleurScoreExamen}%`
                : "Pas encore tenté"}
              {progressionChapitre.examenReussi ? " · Réussi" : ""}
            </p>
          </div>
          <Link to={`/chapitre/${chapitre.id}/examen`}>
            <Bouton variante="secondaire">Démarrer</Bouton>
          </Link>
        </div>
      </section>

      <BarreNavBasse />
    </div>
  );
}

export default PageChapitre;
