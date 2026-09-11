const CODE_DIACRITIQUE_DEBUT = 0x0300;
const CODE_DIACRITIQUE_FIN = 0x036f;

function retirerAccents(texte) {
  return texte
    .normalize("NFD")
    .split("")
    .filter((caractere) => {
      const code = caractere.codePointAt(0);
      return code < CODE_DIACRITIQUE_DEBUT || code > CODE_DIACRITIQUE_FIN;
    })
    .join("");
}

export function normaliserReponse(texte) {
  return retirerAccents(texte.toString())
    .toLowerCase()
    .replace(/[^a-z0-9]/g, "");
}

export function reponseTrouEstCorrecte(reponseUtilisateur, reponseAttendue) {
  if (!reponseUtilisateur) return false;
  return normaliserReponse(reponseUtilisateur) === normaliserReponse(reponseAttendue);
}

export function reponseEstCorrecte(question, reponseDonnee) {
  if (reponseDonnee === undefined || reponseDonnee === null) return false;
  if (question.type === "qcm") return reponseDonnee === question.reponse;
  if (question.type === "trou") return reponseTrouEstCorrecte(reponseDonnee, question.reponse);
  return false;
}

export function calculerScore(questions, reponsesUtilisateur) {
  const correctes = questions.reduce(
    (total, question) => total + (reponseEstCorrecte(question, reponsesUtilisateur[question.id]) ? 1 : 0),
    0
  );
  return { correctes, total: questions.length };
}

export function piocherAleatoire(liste, nombre) {
  const copie = [...liste];
  for (let i = copie.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copie[i], copie[j]] = [copie[j], copie[i]];
  }
  return copie.slice(0, Math.min(nombre, copie.length));
}
