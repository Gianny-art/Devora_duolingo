import { Navigate } from "react-router-dom";
import { CHAPITRES } from "../data/chapitres";
import { useProgression, SEUIL_REUSSITE } from "../hooks/useProgression";
import BarreNavBasse from "../components/BarreNavBasse";
import BarreXP from "../components/BarreXP";
import "./PageStats.css";

function PageStats() {
  const { estConnecte, progression, obtenirProgressionChapitre, estChapitreDebloque } = useProgression();

  if (!estConnecte) return <Navigate to="/profil" replace />;

  return (
    <div className="page page-stats">
      <h1 className="titre-page">Ta progression</h1>
      <div className="page-stats__resume">
        <BarreXP xp={progression.xp} serie={progression.serie.nombre} />
      </div>

      <div className="page-stats__liste">
        {CHAPITRES.map((chapitre) => {
          const info = obtenirProgressionChapitre(chapitre.id);
          const debloque = estChapitreDebloque(chapitre.id);
          const scoreQuiz = info.meilleurScoreQuiz ?? 0;
          const scoreExamen = info.meilleurScoreExamen ?? 0;

          return (
            <div key={chapitre.id} className="carte page-stats__carte">
              <div className="page-stats__entete-carte">
                <span className="page-stats__numero">Ch. {chapitre.id}</span>
                <span className="page-stats__titre">{chapitre.titre}</span>
                {info.examenReussi && <span className="page-stats__badge">Validé</span>}
              </div>

              {!debloque ? (
                <p className="page-stats__verrouille">Verrouillé</p>
              ) : (
                <>
                  <div className="page-stats__ligne">
                    <span>Quiz</span>
                    <div className="page-stats__barre">
                      <div
                        className="page-stats__remplissage"
                        style={{ width: `${scoreQuiz}%` }}
                      />
                    </div>
                    <span className="page-stats__pourcentage">{scoreQuiz}%</span>
                  </div>
                  <div className="page-stats__ligne">
                    <span>Examen</span>
                    <div className="page-stats__barre">
                      <div
                        className={
                          "page-stats__remplissage" +
                          (scoreExamen >= SEUIL_REUSSITE ? " page-stats__remplissage--reussi" : "")
                        }
                        style={{ width: `${scoreExamen}%` }}
                      />
                    </div>
                    <span className="page-stats__pourcentage">{scoreExamen}%</span>
                  </div>
                </>
              )}
            </div>
          );
        })}
      </div>

      <BarreNavBasse />
    </div>
  );
}

export default PageStats;
