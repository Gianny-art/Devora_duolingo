const POSES = {
  content: "content",
  reflechit: "reflechit",
  triste: "triste",
  fete: "fete",
};

function Yeux({ pose }) {
  if (pose === POSES.fete || pose === POSES.content) {
    return (
      <>
        <circle cx="47" cy="52" r="6.5" fill="#1f2033" />
        <circle cx="73" cy="52" r="6.5" fill="#1f2033" />
        <circle cx="49" cy="49.5" r="2" fill="white" />
        <circle cx="75" cy="49.5" r="2" fill="white" />
      </>
    );
  }

  if (pose === POSES.reflechit) {
    return (
      <>
        <circle cx="49" cy="50" r="6" fill="#1f2033" />
        <circle cx="75" cy="50" r="6" fill="#1f2033" />
        <circle cx="50.5" cy="47" r="2" fill="white" />
        <circle cx="76.5" cy="47" r="2" fill="white" />
        <path
          d="M40 42 Q47 37 54 41"
          stroke="#1f2033"
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />
      </>
    );
  }

  // triste
  return (
    <>
      <path
        d="M41 52 Q47 45 53 52"
        stroke="#1f2033"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
      <path
        d="M67 52 Q73 45 79 52"
        stroke="#1f2033"
        strokeWidth="4"
        strokeLinecap="round"
        fill="none"
      />
    </>
  );
}

function Etincelles() {
  return (
    <g fill="var(--couleur-accent, #f59e0b)">
      <path d="M14 30 l3 7 7 3 -7 3 -3 7 -3 -7 -7 -3 7 -3 z" />
      <path d="M104 20 l2.5 6 6 2.5 -6 2.5 -2.5 6 -2.5 -6 -6 -2.5 6 -2.5 z" />
      <path d="M100 70 l2 5 5 2 -5 2 -2 5 -2 -5 -5 -2 5 -2 z" />
    </g>
  );
}

function Mascotte({ pose = "content", taille = 96, couleur, className }) {
  const couleurCorps = couleur || "#4f46e5";
  const angleAile = pose === POSES.fete ? -35 : -8;

  return (
    <svg
      width={taille}
      height={taille}
      viewBox="0 0 120 120"
      className={className}
      role="img"
      aria-label={`Mascotte Devora, ${pose}`}
    >
      {pose === POSES.fete && <Etincelles />}

      {/* pattes */}
      <ellipse cx="50" cy="107" rx="5" ry="3" fill="#b45309" />
      <ellipse cx="70" cy="107" rx="5" ry="3" fill="#b45309" />

      {/* corps */}
      <ellipse cx="60" cy="70" rx="38" ry="34" fill={couleurCorps} />
      <ellipse cx="60" cy="80" rx="24" ry="18" fill="#eef2ff" opacity="0.9" />

      {/* aile */}
      <g transform={`rotate(${angleAile} 30 68)`}>
        <ellipse cx="26" cy="68" rx="14" ry="20" fill={couleurCorps} opacity="0.85" />
      </g>

      {/* touffe de tete */}
      <path
        d="M52 20 L58 8 L62 22 Z"
        fill="var(--couleur-accent, #f59e0b)"
      />
      <path
        d="M64 20 L70 10 L72 24 Z"
        fill="var(--couleur-accent, #f59e0b)"
      />

      {/* tete */}
      <circle cx="60" cy="46" r="32" fill={couleurCorps} />

      <Yeux pose={pose} />

      {/* bec */}
      <path d="M56 62 L64 62 L60 72 Z" fill="var(--couleur-accent, #f59e0b)" />

      {/* joues */}
      <circle cx="38" cy="58" r="5" fill="#ec4899" opacity="0.35" />
      <circle cx="82" cy="58" r="5" fill="#ec4899" opacity="0.35" />
    </svg>
  );
}

export default Mascotte;
