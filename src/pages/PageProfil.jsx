import { useState } from "react";
import { CHAPITRES } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import Mascotte from "../components/Mascotte";
import Bouton from "../components/Bouton";
import BarreNavBasse from "../components/BarreNavBasse";
import "./PageProfil.css";

const COULEURS_MASCOTTE = ["#4f46e5", "#0d9488", "#db2777", "#ea580c", "#16a34a"];

function PageProfil() {
  const { profil, estConnecte, progression, creerProfil, reinitialiserProfil } = useProgression();
  const [pseudo, setPseudo] = useState("");
  const [couleur, setCouleur] = useState(COULEURS_MASCOTTE[0]);
  const [confirmationReinit, setConfirmationReinit] = useState(false);

  if (!estConnecte) {
    function valider(evenement) {
      evenement.preventDefault();
      if (!pseudo.trim()) return;
      creerProfil(pseudo.trim(), couleur);
    }

    return (
      <div className="page page-profil page-profil--creation">
        <div className="page-profil__mascotte">
          <Mascotte pose="content" taille={110} couleur={couleur} />
        </div>
        <h1 className="titre-page" style={{ textAlign: "center" }}>
          Bienvenue sur DEVora
        </h1>
        <p className="sous-titre-page" style={{ textAlign: "center" }}>
          Crée ton profil local pour suivre ta progression. Aucune inscription, aucune donnée
          envoyée : tout reste sur cet appareil.
        </p>

        <form onSubmit={valider} className="page-profil__formulaire">
          <label className="page-profil__label" htmlFor="pseudo">
            Ton pseudo
          </label>
          <input
            id="pseudo"
            type="text"
            className="page-profil__champ"
            value={pseudo}
            onChange={(evenement) => setPseudo(evenement.target.value)}
            placeholder="Ex : Alex"
            maxLength={20}
            autoComplete="off"
          />

          <p className="page-profil__label">Couleur de ta mascotte</p>
          <div className="page-profil__couleurs">
            {COULEURS_MASCOTTE.map((option) => (
              <button
                key={option}
                type="button"
                className={
                  "page-profil__pastille-couleur" +
                  (couleur === option ? " page-profil__pastille-couleur--active" : "")
                }
                style={{ background: option }}
                onClick={() => setCouleur(option)}
                aria-label={`Choisir la couleur ${option}`}
              />
            ))}
          </div>

          <Bouton type="submit" pleineLargeur desactive={!pseudo.trim()}>
            Commencer l'aventure
          </Bouton>
        </form>
      </div>
    );
  }

  const chapitresReussis = CHAPITRES.filter(
    (chapitre) => progression.chapitres[chapitre.id]?.examenReussi
  ).length;

  function gererReinitialisation() {
    if (!confirmationReinit) {
      setConfirmationReinit(true);
      return;
    }
    reinitialiserProfil();
  }

  return (
    <div className="page page-profil">
      <div className="page-profil__mascotte">
        <Mascotte pose="fete" taille={110} couleur={profil.couleurMascotte} />
      </div>
      <h1 className="titre-page" style={{ textAlign: "center" }}>
        {profil.pseudo}
      </h1>
      <p className="sous-titre-page" style={{ textAlign: "center" }}>
        Membre DEVora depuis le {profil.creeLe}
      </p>

      <div className="page-profil__stats">
        <div className="carte page-profil__stat">
          <span className="page-profil__stat-valeur">{progression.xp}</span>
          <span className="page-profil__stat-label">XP total</span>
        </div>
        <div className="carte page-profil__stat">
          <span className="page-profil__stat-valeur">{progression.serie.nombre}</span>
          <span className="page-profil__stat-label">Jours de série</span>
        </div>
        <div className="carte page-profil__stat">
          <span className="page-profil__stat-valeur">
            {chapitresReussis}/{CHAPITRES.length}
          </span>
          <span className="page-profil__stat-label">Chapitres réussis</span>
        </div>
      </div>

      <div className="page-profil__zone-danger">
        <Bouton variante={confirmationReinit ? "primaire" : "fantome"} onClick={gererReinitialisation} pleineLargeur>
          {confirmationReinit ? "Confirmer la réinitialisation" : "Réinitialiser mon profil"}
        </Bouton>
      </div>

      <BarreNavBasse />
    </div>
  );
}

export default PageProfil;
