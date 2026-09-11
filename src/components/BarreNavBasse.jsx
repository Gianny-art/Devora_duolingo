import { NavLink } from "react-router-dom";
import "./BarreNavBasse.css";

const ONGLETS = [
  {
    to: "/",
    fin: true,
    label: "Parcours",
    icone: (
      <path d="M4 20 Q9 8 12 14 Q15 20 18 8 Q21 2 20 20" fill="none" strokeWidth="2.2" strokeLinecap="round" />
    ),
  },
  {
    to: "/stats",
    label: "Stats",
    icone: (
      <>
        <rect x="4" y="12" width="4" height="8" rx="1" />
        <rect x="10" y="7" width="4" height="13" rx="1" />
        <rect x="16" y="3" width="4" height="17" rx="1" />
      </>
    ),
  },
  {
    to: "/ressources",
    label: "Ressources",
    icone: (
      <path
        d="M4 4h10a3 3 0 0 1 3 3v13a2.5 2.5 0 0 0-2.5-2.5H4V4Z M20 4h-3v13.5A2.5 2.5 0 0 1 20 20V4Z"
        fill="none"
        strokeWidth="1.8"
        strokeLinejoin="round"
      />
    ),
  },
  {
    to: "/profil",
    label: "Profil",
    icone: (
      <>
        <circle cx="12" cy="8" r="4" />
        <path d="M4 20c0-4.4 3.6-7 8-7s8 2.6 8 7" fill="none" strokeWidth="2.2" strokeLinecap="round" />
      </>
    ),
  },
];

function BarreNavBasse() {
  return (
    <nav className="nav-bas">
      {ONGLETS.map((onglet) => (
        <NavLink
          key={onglet.to}
          to={onglet.to}
          end={onglet.fin}
          className={({ isActive }) =>
            "nav-bas__onglet" + (isActive ? " nav-bas__onglet--actif" : "")
          }
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor">
            {onglet.icone}
          </svg>
          <span>{onglet.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}

export default BarreNavBasse;
