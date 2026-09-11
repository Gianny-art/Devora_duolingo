import { useLocalStorage } from "./useLocalStorage";

export const SEUIL_REUSSITE = 70;

const PROGRESSION_INITIALE = {
  xp: 0,
  serie: { nombre: 0, dernierJourActif: null },
  chapitres: {},
};

function dateDuJour() {
  return new Date().toISOString().slice(0, 10);
}

function jourPrecedent(dateStr) {
  const date = new Date(dateStr);
  date.setDate(date.getDate() - 1);
  return date.toISOString().slice(0, 10);
}

function progressionChapitreParDefaut() {
  return {
    leconsVues: [],
    meilleurScoreQuiz: null,
    meilleurScoreExamen: null,
    examenReussi: false,
  };
}

export function useProgression() {
  const [profil, setProfil] = useLocalStorage("devora_profil", null);
  const [progression, setProgression] = useLocalStorage(
    "devora_progression",
    PROGRESSION_INITIALE
  );

  function creerProfil(pseudo, couleurMascotte) {
    setProfil({ pseudo, couleurMascotte, creeLe: dateDuJour() });
  }

  function reinitialiserProfil() {
    setProfil(null);
    setProgression(PROGRESSION_INITIALE);
  }

  function obtenirProgressionChapitre(chapitreId) {
    return progression.chapitres[chapitreId] || progressionChapitreParDefaut();
  }

  function estChapitreDebloque(chapitreId) {
    if (chapitreId === 1) return true;
    const precedent = obtenirProgressionChapitre(chapitreId - 1);
    return (precedent.meilleurScoreQuiz ?? 0) >= SEUIL_REUSSITE;
  }

  function mettreAJourSerie() {
    setProgression((avant) => {
      const aujourdHui = dateDuJour();
      const { dernierJourActif, nombre } = avant.serie;

      if (dernierJourActif === aujourdHui) return avant;

      const nouveauNombre =
        dernierJourActif === jourPrecedent(aujourdHui) ? nombre + 1 : 1;

      return {
        ...avant,
        serie: { nombre: nouveauNombre, dernierJourActif: aujourdHui },
      };
    });
  }

  function ajouterXP(montant) {
    setProgression((avant) => ({ ...avant, xp: avant.xp + montant }));
  }

  function marquerLeconVue(chapitreId, leconId) {
    setProgression((avant) => {
      const chapitre = avant.chapitres[chapitreId] || progressionChapitreParDefaut();
      if (chapitre.leconsVues.includes(leconId)) return avant;

      return {
        ...avant,
        chapitres: {
          ...avant.chapitres,
          [chapitreId]: {
            ...chapitre,
            leconsVues: [...chapitre.leconsVues, leconId],
          },
        },
      };
    });
  }

  function validerQuiz(chapitreId, nombreCorrectes, nombreTotal) {
    const pourcentage = Math.round((nombreCorrectes / nombreTotal) * 100);
    const xpGagne = nombreCorrectes * 10;

    setProgression((avant) => {
      const chapitre = avant.chapitres[chapitreId] || progressionChapitreParDefaut();
      const meilleurScore = Math.max(chapitre.meilleurScoreQuiz ?? 0, pourcentage);

      return {
        ...avant,
        xp: avant.xp + xpGagne,
        chapitres: {
          ...avant.chapitres,
          [chapitreId]: { ...chapitre, meilleurScoreQuiz: meilleurScore },
        },
      };
    });

    mettreAJourSerie();

    return { pourcentage, aReussi: pourcentage >= SEUIL_REUSSITE, xpGagne };
  }

  function validerExamen(chapitreId, nombreCorrectes, nombreTotal) {
    const pourcentage = Math.round((nombreCorrectes / nombreTotal) * 100);
    const aReussi = pourcentage >= SEUIL_REUSSITE;
    const xpGagne = nombreCorrectes * 15;

    setProgression((avant) => {
      const chapitre = avant.chapitres[chapitreId] || progressionChapitreParDefaut();
      const meilleurScore = Math.max(chapitre.meilleurScoreExamen ?? 0, pourcentage);

      return {
        ...avant,
        xp: avant.xp + xpGagne,
        chapitres: {
          ...avant.chapitres,
          [chapitreId]: {
            ...chapitre,
            meilleurScoreExamen: meilleurScore,
            examenReussi: chapitre.examenReussi || aReussi,
          },
        },
      };
    });

    mettreAJourSerie();

    return { pourcentage, aReussi, xpGagne };
  }

  return {
    profil,
    estConnecte: profil !== null,
    creerProfil,
    reinitialiserProfil,
    progression,
    obtenirProgressionChapitre,
    estChapitreDebloque,
    marquerLeconVue,
    validerQuiz,
    validerExamen,
    ajouterXP,
    mettreAJourSerie,
  };
}
