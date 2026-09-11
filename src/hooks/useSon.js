import { useEffect } from "react";
import { useLocalStorage } from "./useLocalStorage";
import {
  demarrerMusiqueFond,
  arreterMusiqueFond,
  jouerSonSucces,
  jouerSonErreur,
} from "../utils/sons";

export function useSon() {
  const [musiqueActivee, setMusiqueActivee] = useLocalStorage("devora_musique", false);

  function basculerMusique() {
    setMusiqueActivee((avant) => !avant);
  }

  return { musiqueActivee, basculerMusique, jouerSonSucces, jouerSonErreur };
}

export function useMusiqueDePage(musiqueActivee) {
  useEffect(() => {
    if (!musiqueActivee) return undefined;
    demarrerMusiqueFond();
    return () => arreterMusiqueFond();
  }, [musiqueActivee]);
}
