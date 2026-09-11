import "./Bouton.css";

function Bouton({
  enfants,
  onClick,
  type = "button",
  variante = "primaire",
  pleineLargeur = false,
  desactive = false,
}) {
  const classes = [
    "bouton",
    `bouton--${variante}`,
    pleineLargeur ? "bouton--pleine-largeur" : "",
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={desactive}
    >
      {enfants}
    </button>
  );
}

export default Bouton;
