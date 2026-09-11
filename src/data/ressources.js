export const RESSOURCES = [
  {
    chapitreId: 1,
    liens: [
      { titre: "React — Documentation officielle", url: "https://react.dev/" },
      { titre: "Apprendre React (react.dev)", url: "https://react.dev/learn" },
    ],
  },
  {
    chapitreId: 2,
    liens: [
      { titre: "Écrire du JSX avec des balises", url: "https://react.dev/learn/writing-markup-with-jsx" },
      { titre: "JavaScript moderne — MDN", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript" },
    ],
  },
  {
    chapitreId: 3,
    liens: [
      { titre: "Vite — Documentation officielle", url: "https://vite.dev/" },
      { titre: "Node.js — Téléchargement", url: "https://nodejs.org/" },
    ],
  },
  {
    chapitreId: 4,
    liens: [
      { titre: "Ajouter du style — react.dev", url: "https://react.dev/learn/writing-markup-with-jsx" },
      { titre: "CSS — MDN", url: "https://developer.mozilla.org/fr/docs/Web/CSS" },
    ],
  },
  {
    chapitreId: 5,
    liens: [
      { titre: "Le rendu de listes — react.dev", url: "https://react.dev/learn/rendering-lists" },
      { titre: "Le rendu conditionnel — react.dev", url: "https://react.dev/learn/conditional-rendering" },
    ],
  },
  {
    chapitreId: 6,
    liens: [
      { titre: "Transmettre des props — react.dev", url: "https://react.dev/learn/passing-props-to-a-component" },
    ],
  },
  {
    chapitreId: 7,
    liens: [
      { titre: "Répondre aux événements — react.dev", url: "https://react.dev/learn/responding-to-events" },
    ],
  },
  {
    chapitreId: 8,
    liens: [
      { titre: "L'état, la mémoire d'un composant — react.dev", url: "https://react.dev/learn/state-a-components-memory" },
      { titre: "useState — Référence API", url: "https://react.dev/reference/react/useState" },
    ],
  },
  {
    chapitreId: 9,
    liens: [
      { titre: "Partager l'état entre composants — react.dev", url: "https://react.dev/learn/sharing-state-between-components" },
    ],
  },
  {
    chapitreId: 10,
    liens: [
      { titre: "Synchroniser avec des effets — react.dev", url: "https://react.dev/learn/synchronizing-with-effects" },
      { titre: "useEffect — Référence API", url: "https://react.dev/reference/react/useEffect" },
    ],
  },
  {
    chapitreId: 11,
    liens: [
      { titre: "Réagir aux entrées avec l'état — react.dev", url: "https://react.dev/learn/reacting-to-input-with-state" },
    ],
  },
  {
    chapitreId: 12,
    liens: [
      { titre: "React Router — Documentation officielle", url: "https://reactrouter.com/" },
    ],
  },
  {
    chapitreId: 13,
    liens: [
      { titre: "fetch() — MDN", url: "https://developer.mozilla.org/fr/docs/Web/API/Fetch_API" },
      { titre: "async/await — MDN", url: "https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Statements/async_function" },
    ],
  },
  {
    chapitreId: 14,
    liens: [
      { titre: "Réutiliser de la logique avec des Hooks personnalisés — react.dev", url: "https://react.dev/learn/reusing-logic-with-custom-hooks" },
    ],
  },
  {
    chapitreId: 15,
    liens: [
      { titre: "Construire pour la production — Vite", url: "https://vite.dev/guide/build" },
      { titre: "Netlify — Déployer un site", url: "https://www.netlify.com/" },
    ],
  },
];

export function obtenirRessourcesChapitre(chapitreId) {
  const entree = RESSOURCES.find((r) => r.chapitreId === Number(chapitreId));
  return entree ? entree.liens : [];
}
