import "./BarreXP.css";

function IconeEclair() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" />
    </svg>
  );
}

function IconeFlamme() {
  return (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M12 2c1 3-3 4-3 8a3 3 0 0 0 6 0c1 1 2 2.5 2 4.5A5.5 5.5 0 0 1 5 14.5C5 9 12 7 12 2Z" />
    </svg>
  );
}

function BarreXP({ xp, serie }) {
  return (
    <div className="barre-xp">
      <div className="barre-xp__item barre-xp__item--xp">
        <IconeEclair />
        <span>{xp} XP</span>
      </div>
      <div className="barre-xp__item barre-xp__item--serie">
        <IconeFlamme />
        <span>{serie} j</span>
      </div>
    </div>
  );
}

export default BarreXP;
