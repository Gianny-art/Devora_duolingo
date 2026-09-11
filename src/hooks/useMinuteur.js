import { useEffect, useState } from "react";

export function useMinuteur(dureeInitialeSecondes, onExpirer) {
  const [secondesRestantes, setSecondesRestantes] = useState(dureeInitialeSecondes);

  useEffect(() => {
    const idIntervalle = setInterval(() => {
      setSecondesRestantes((avant) => {
        if (avant <= 1) {
          clearInterval(idIntervalle);
          if (onExpirer) onExpirer();
          return 0;
        }
        return avant - 1;
      });
    }, 1000);

    return () => clearInterval(idIntervalle);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return secondesRestantes;
}

export function formaterMMSS(secondes) {
  const m = Math.floor(secondes / 60);
  const s = secondes % 60;
  return `${m}:${s.toString().padStart(2, "0")}`;
}
