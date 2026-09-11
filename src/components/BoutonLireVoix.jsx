import "./BoutonLireVoix.css";

function IconeLecture() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <path d="M4 9v6h4l5 5V4L8 9H4Z" />
      <path
        d="M16.5 8.5a5 5 0 0 1 0 7"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
}

function IconeStop() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
      <rect x="6" y="6" width="12" height="12" rx="2" />
    </svg>
  );
}

function BoutonLireVoix({ texte, lectureVoix }) {
  const { basculer, enCours, disponible } = lectureVoix;

  if (!disponible) return null;

  return (
    <button
      type="button"
      className={"bouton-lire-voix" + (enCours ? " bouton-lire-voix--actif" : "")}
      onClick={() => basculer(texte)}
      aria-pressed={enCours}
    >
      {enCours ? <IconeStop /> : <IconeLecture />}
      <span>{enCours ? "Arrêter" : "Écouter"}</span>
    </button>
  );
}

export default BoutonLireVoix;
