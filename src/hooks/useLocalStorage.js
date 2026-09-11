import { useCallback, useRef, useState } from "react";

function lireValeur(cle, valeurInitiale) {
  try {
    const brut = window.localStorage.getItem(cle);
    return brut ? JSON.parse(brut) : valeurInitiale;
  } catch {
    return valeurInitiale;
  }
}

function ecrireValeur(cle, valeur) {
  try {
    window.localStorage.setItem(cle, JSON.stringify(valeur));
  } catch {
    // stockage indisponible (navigation privée, quota plein...) : on ignore
  }
}

export function useLocalStorage(cle, valeurInitiale) {
  const [valeur, setValeurInterne] = useState(() => lireValeur(cle, valeurInitiale));
  const valeurRef = useRef(valeur);

  const setValeur = useCallback(
    (nouvelleValeurOuFn) => {
      const nouvelleValeur =
        typeof nouvelleValeurOuFn === "function"
          ? nouvelleValeurOuFn(valeurRef.current)
          : nouvelleValeurOuFn;

      valeurRef.current = nouvelleValeur;
      ecrireValeur(cle, nouvelleValeur);
      setValeurInterne(nouvelleValeur);
    },
    [cle]
  );

  return [valeur, setValeur];
}
