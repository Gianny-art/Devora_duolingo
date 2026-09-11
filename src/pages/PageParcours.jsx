import { Navigate } from "react-router-dom";
import { CHAPITRES } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import BarreNavBasse from "../components/BarreNavBasse";
import BarreXP from "../components/BarreXP";
import NoeudParcours from "../components/NoeudParcours";
import "./PageParcours.css";

function PageParcours() {
  const { profil, estConnecte, progression, estChapitreDebloque, obtenirProgressionChapitre } =
    useProgression();

  if (!estConnecte) {
    return <Navigate to="/profil" replace />;
  }

  const idActuel = CHAPITRES.find((chapitre) => {
    const info = obtenirProgressionChapitre(chapitre.id);
    return estChapitreDebloque(chapitre.id) && !info.examenReussi;
  })?.id ?? CHAPITRES[CHAPITRES.length - 1].id;

  return (
    <div className="page">
      <header className="parcours__entete">
        <div>
          <p className="parcours__accroche">Salut {profil.pseudo} !</p>
          <h1 className="titre-page">Ton parcours</h1>
        </div>
        <BarreXP xp={progression.xp} serie={progression.serie.nombre} />
      </header>

      <div className="parcours__chemin">
        {CHAPITRES.map((chapitre, index) => {
          const info = obtenirProgressionChapitre(chapitre.id);
          const debloque = estChapitreDebloque(chapitre.id);
          const etat = !debloque ? "verrouille" : info.examenReussi ? "complete" : "disponible";
          const cote = index % 2 === 0 ? "gauche" : "droite";

          return (
            <div key={chapitre.id} className={`parcours__etape parcours__etape--${cote}`}>
              <NoeudParcours
                chapitre={chapitre}
                etat={etat}
                estActuel={chapitre.id === idActuel}
                couleurMascotte={profil.couleurMascotte}
              />
            </div>
          );
        })}
      </div>

      <BarreNavBasse />
    </div>
  );
}

export default PageParcours;
