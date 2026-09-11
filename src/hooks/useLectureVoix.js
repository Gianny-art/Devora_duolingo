import { useCallback, useEffect, useState } from "react";

export function useLectureVoix() {
  const [enCours, setEnCours] = useState(false);
  const disponible = typeof window !== "undefined" && "speechSynthesis" in window;

  useEffect(() => {
    return () => {
      if (disponible) window.speechSynthesis.cancel();
    };
  }, [disponible]);

  const lire = useCallback(
    (texte) => {
      if (!disponible || !texte) return;
      window.speechSynthesis.cancel();
      const enonce = new window.SpeechSynthesisUtterance(texte);
      enonce.lang = "fr-FR";
      enonce.rate = 0.98;
      enonce.onend = () => setEnCours(false);
      enonce.onerror = () => setEnCours(false);
      setEnCours(true);
      window.speechSynthesis.speak(enonce);
    },
    [disponible]
  );

  const arreter = useCallback(() => {
    if (disponible) window.speechSynthesis.cancel();
    setEnCours(false);
  }, [disponible]);

  function basculer(texte) {
    if (enCours) {
      arreter();
    } else {
      lire(texte);
    }
  }

  return { lire, arreter, basculer, enCours, disponible };
}
