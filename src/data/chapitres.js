export const NB_QUESTIONS_EXAMEN = 6;
export const DUREE_EXAMEN_SECONDES = 240;

export const CHAPITRES = [
  {
    id: 1,
    titre: "Comprendre la logique de React",
    resume: "Composants, JSX et Virtual DOM.",
    objectif:
      "Comprendre ce qu'est réellement React, et comment il change notre façon de penser une page web.",
    lecons: [
      {
        id: "c1-l1",
        titre: "Des briques réutilisables",
        contenu:
          "React découpe une interface en petites pièces indépendantes appelées des composants — un bouton, une carte de profil, une barre de navigation. Comme des briques LEGO, on les assemble pour construire la page complète, et on peut réutiliser la même brique autant de fois qu'on veut.",
      },
      {
        id: "c1-l2",
        titre: "Le JSX",
        contenu:
          "Un composant est simplement une fonction JavaScript qui renvoie du JSX, une syntaxe qui ressemble à du HTML mais qui est écrite à l'intérieur de JavaScript. Son nom doit toujours commencer par une majuscule : c'est ainsi que React distingue un composant d'une balise HTML classique.",
      },
      {
        id: "c1-l3",
        titre: "Le Virtual DOM",
        contenu:
          "React garde en mémoire une copie légère de la page : le Virtual DOM. À chaque changement, il compare la version avant/après, repère le plus petit ensemble de différences (la réconciliation), et ne met à jour que cette partie de la vraie page — c'est ce qui rend React rapide.",
      },
      {
        id: "c1-l4",
        titre: "Déclaratif, pas impératif",
        contenu:
          "Avec React, tu décris à quoi la page doit ressembler pour une situation donnée (déclaratif), et React se charge de faire correspondre la page réelle à cette description. C'est très différent de dire étape par étape comment faire chaque changement (impératif).",
      },
    ],
    quiz: [
      {
        id: "c1-q1",
        type: "qcm",
        question: "Un composant React est...",
        options: [
          "une fonction JavaScript qui renvoie du JSX",
          "un fichier CSS",
          "une base de données",
          "un plugin de navigateur",
        ],
        reponse: 0,
        explication: "Un composant est simplement une fonction JavaScript qui renvoie du JSX.",
      },
      {
        id: "c1-q2",
        type: "qcm",
        question: "Comment doit commencer le nom d'un composant ?",
        options: ["Par une minuscule", "Par une majuscule", "Par un chiffre", "Par un symbole"],
        reponse: 1,
        explication:
          "C'est une règle stricte : c'est ainsi que React distingue tes composants des balises HTML.",
      },
      {
        id: "c1-q3",
        type: "trou",
        question:
          "Le processus de comparaison entre le Virtual DOM avant/après s'appelle la ___.",
        reponse: "réconciliation",
        explication: "La réconciliation permet à React de ne mettre à jour que ce qui a changé.",
      },
      {
        id: "c1-q4",
        type: "qcm",
        question: "React encourage un style de programmation...",
        options: ["impératif", "déclaratif", "orienté objet uniquement", "aléatoire"],
        reponse: 1,
        explication: "Tu décris ce que tu veux, et React se charge d'y arriver.",
      },
      {
        id: "c1-q5",
        type: "qcm",
        question: "En JSX, la balise <h1> fonctionne...",
        options: [
          "exactement comme en HTML",
          "uniquement en CSS",
          "comme une fonction JavaScript",
          "elle n'existe pas en JSX",
        ],
        reponse: 0,
        explication: "Le JSX ressemble beaucoup à du HTML, même s'il est écrit dans du JavaScript.",
      },
      {
        id: "c1-q6",
        type: "trou",
        question:
          "Le JSX ressemble à du HTML mais est en réalité écrit à l'intérieur de ___.",
        reponse: "JavaScript",
        explication: "Le JSX est traduit en JavaScript par un outil comme Vite.",
      },
    ],
    examen: [
      {
        id: "c1-e1",
        type: "qcm",
        question: "Quel est l'avantage principal de découper une appli en composants ?",
        options: [
          "Réutilisation et organisation",
          "Ça ralentit le site",
          "Ça supprime le besoin de JavaScript",
          "Aucun avantage réel",
        ],
        reponse: 0,
      },
      {
        id: "c1-e2",
        type: "qcm",
        question: "bienvenue() (minuscule) comme nom de composant...",
        options: [
          "fonctionne exactement comme Bienvenue()",
          "échoue silencieusement, ce n'est pas reconnu comme composant",
          "est plus rapide",
          "est obligatoire en production",
        ],
        reponse: 1,
      },
      {
        id: "c1-e3",
        type: "trou",
        question: "Le Virtual DOM est une copie légère de la page conservée en ___.",
        reponse: "mémoire",
      },
      {
        id: "c1-e4",
        type: "qcm",
        question: "\"Voici les étapes exactes pour y arriver\" décrit plutôt le style...",
        options: ["déclaratif", "impératif", "fonctionnel", "orienté objet"],
        reponse: 1,
      },
      {
        id: "c1-e5",
        type: "qcm",
        question: "return <h1>...</h1>; à l'intérieur d'un composant renvoie...",
        options: [
          "une chaîne de caractères brute",
          "une description JSX de ce qui doit apparaître",
          "un fichier CSS",
          "une erreur",
        ],
        reponse: 1,
      },
      {
        id: "c1-e6",
        type: "trou",
        question: "Grâce à la réconciliation, React ne met à jour que ce qui a réellement ___.",
        reponse: "changé",
      },
      {
        id: "c1-e7",
        type: "qcm",
        question: "Une page comme un réseau social met à jour un compteur de likes des milliers de fois par seconde. Sans Virtual DOM, ce serait...",
        options: ["plus rapide", "lent et poussif", "identique", "impossible à coder"],
        reponse: 1,
      },
      {
        id: "c1-e8",
        type: "qcm",
        question: "Combiner de petits composants pour construire une page complète illustre surtout l'idée de...",
        options: [
          "pièces réutilisables assemblées ensemble",
          "un seul fichier géant",
          "l'impératif",
          "l'absence de structure",
        ],
        reponse: 0,
      },
    ],
  },

  {
    id: 2,
    titre: "Maîtriser les principes fondamentaux",
    resume: "Composition, conteneur unique et bases JS.",
    objectif:
      "Comprendre comment les composants s'assemblent, et connaître la poignée de bases JavaScript nécessaires.",
    lecons: [
      {
        id: "c2-l1",
        titre: "La composition",
        contenu:
          "Une application React est un grand arbre de composants imbriqués. Combiner des composants plus petits pour en construire de plus grands (comme <Entete /> et <PiedDePage /> à l'intérieur d'App) s'appelle la composition.",
      },
      {
        id: "c2-l2",
        titre: "Un seul conteneur",
        contenu:
          "Le return d'un composant ne peut renvoyer qu'un seul élément de premier niveau. Pour regrouper plusieurs éléments, on les enveloppe dans une <div>, ou dans un Fragment (<>...</>) si on ne veut pas de balise HTML supplémentaire.",
      },
      {
        id: "c2-l3",
        titre: "Un peu de JavaScript",
        contenu:
          "const pour une valeur qui ne change jamais, let pour une valeur qui peut changer. Les fonctions fléchées ((x) => x * 2) sont une écriture plus courte des fonctions classiques, très utilisées en React.",
      },
      {
        id: "c2-l4",
        titre: "Les accolades dans le JSX",
        contenu:
          "À l'intérieur du JSX, {} permet d'insérer n'importe quelle expression JavaScript (une variable, un calcul...), mais pas des instructions complètes comme if ou for. Les gabarits de chaînes (avec des accents graves) permettent d'insérer des variables dans du texte.",
      },
    ],
    quiz: [
      {
        id: "c2-q1",
        type: "qcm",
        question: "Un composant ne peut renvoyer que...",
        options: [
          "plusieurs éléments côte à côte",
          "un seul élément racine",
          "rien du tout",
          "uniquement du texte brut",
        ],
        reponse: 1,
        explication: "Sans conteneur commun, ce serait une erreur de syntaxe.",
      },
      {
        id: "c2-q2",
        type: "qcm",
        question: "Pour regrouper des éléments sans ajouter de balise HTML, on utilise...",
        options: ["une <div>", "un Fragment <>...</>", "un commentaire", "un <span> obligatoire"],
        reponse: 1,
        explication: "Le Fragment regroupe des éléments sans encombrer la page.",
      },
      {
        id: "c2-q3",
        type: "trou",
        question:
          "On utilise ___ pour une valeur qui ne changera jamais, et let pour une valeur qui peut changer.",
        reponse: "const",
        explication: "const est le choix par défaut recommandé.",
      },
      {
        id: "c2-q4",
        type: "qcm",
        question: "Une fonction fléchée s'écrit...",
        options: ["function() => {}", "(x) => x * 2", "=> function(x)", "fn(x) =>"],
        reponse: 1,
        explication: "C'est une écriture plus courte d'une fonction classique.",
      },
      {
        id: "c2-q5",
        type: "trou",
        question:
          "Les gabarits de chaîne utilisent des accents ___ (au lieu de guillemets) pour insérer des variables avec ${}.",
        reponse: "graves",
        explication: "Un gabarit de chaîne s'écrit entre accents graves (`).",
      },
      {
        id: "c2-q6",
        type: "qcm",
        question: "À l'intérieur du JSX, les accolades {} permettent d'insérer...",
        options: [
          "des instructions if/for",
          "n'importe quelle expression JavaScript",
          "du CSS uniquement",
          "des commentaires HTML",
        ],
        reponse: 1,
        explication: "Une expression produit une valeur ; un if ou un for sont des instructions.",
      },
    ],
    examen: [
      {
        id: "c2-e1",
        type: "qcm",
        question: "Combiner des composants plus petits pour construire une page complète s'appelle...",
        options: ["la réconciliation", "la composition", "la déstructuration", "le rendu"],
        reponse: 1,
      },
      {
        id: "c2-e2",
        type: "qcm",
        question: "<Entete /> est un exemple de...",
        options: ["balise auto-fermante", "erreur de syntaxe", "commentaire", "prop obligatoire"],
        reponse: 0,
      },
      {
        id: "c2-e3",
        type: "trou",
        question: "Renvoyer deux éléments côte à côte sans les envelopper provoque une ___.",
        reponse: "erreur",
      },
      {
        id: "c2-e4",
        type: "qcm",
        question: "let score = 0; est adapté quand...",
        options: [
          "la valeur ne changera jamais",
          "la valeur doit pouvoir changer plus tard",
          "on veut créer un composant",
          "on veut du CSS",
        ],
        reponse: 1,
      },
      {
        id: "c2-e5",
        type: "qcm",
        question: "const doubler = (nombre) => nombre * 2; est...",
        options: [
          "une fonction fléchée valide",
          "une erreur de syntaxe",
          "un composant React",
          "un Hook",
        ],
        reponse: 0,
      },
      {
        id: "c2-e6",
        type: "trou",
        question: "Un composant est un grand ___ de composants imbriqués les uns dans les autres.",
        reponse: "arbre",
      },
      {
        id: "c2-e7",
        type: "qcm",
        question: "`Bonjour, ${nom} !` est un exemple de...",
        options: ["gabarit de chaîne", "JSX", "Hook", "prop"],
        reponse: 0,
      },
      {
        id: "c2-e8",
        type: "qcm",
        question: "Écrire `{if (vrai) { ... }}` directement dans du JSX...",
        options: [
          "fonctionne très bien",
          "provoque une erreur, les accolades n'acceptent que des expressions",
          "est la méthode recommandée",
          "remplace useState",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 3,
    titre: "Ton premier projet avec Vite",
    resume: "Node.js, Vite, et la structure d'un projet.",
    objectif:
      "Avoir un vrai projet React fonctionnel, et comprendre à quoi sert chaque fichier.",
    lecons: [
      {
        id: "c3-l1",
        titre: "Pourquoi Vite ?",
        contenu:
          "Un navigateur ne comprend pas le JSX directement. Vite traduit ton JSX et ton JavaScript moderne en quelque chose que le navigateur peut exécuter, et démarre un serveur de développement local pour voir l'appli se mettre à jour en direct.",
      },
      {
        id: "c3-l2",
        titre: "Installer les outils",
        contenu:
          "Les projets React tournent sur Node.js. Une fois installé, `npm create vite@latest nom-projet` crée un nouveau projet (choisis React puis JavaScript), et `npm install` télécharge les dépendances.",
      },
      {
        id: "c3-l3",
        titre: "Lancer le serveur",
        contenu:
          "`npm run dev` démarre le serveur de développement, généralement sur http://localhost:5173. Chaque sauvegarde met à jour la page instantanément grâce au Hot Module Replacement, sans recharger.",
      },
      {
        id: "c3-l4",
        titre: "La structure du projet",
        contenu:
          "index.html est un cadre presque vide avec une <div id=\"root\">. main.jsx installe le composant App à l'intérieur. App.jsx est ton composant principal, exporté avec `export default App;` pour que main.jsx puisse l'importer.",
      },
    ],
    quiz: [
      {
        id: "c3-q1",
        type: "qcm",
        question: "Vite sert à...",
        options: [
          "héberger un site en production",
          "traduire le JSX/JS moderne et lancer un serveur de dev en direct",
          "créer une base de données",
          "remplacer JavaScript",
        ],
        reponse: 1,
        explication: "Vite transforme ton code et te donne un aperçu instantané dans le navigateur.",
      },
      {
        id: "c3-q2",
        type: "qcm",
        question: "Pour créer un nouveau projet Vite + React, on tape...",
        options: ["npm run build", "npm create vite@latest", "npm start", "npm init react"],
        reponse: 1,
        explication: "npm create vite@latest lance l'assistant de création de projet.",
      },
      {
        id: "c3-q3",
        type: "trou",
        question: "La commande qui télécharge les dépendances d'un projet est npm ___.",
        reponse: "install",
        explication: "npm install lit le package.json et télécharge tout ce qui est listé.",
      },
      {
        id: "c3-q4",
        type: "qcm",
        question: "Par défaut, le serveur de développement Vite tourne sur...",
        options: ["localhost:3000", "localhost:5173", "localhost:8080", "localhost:80"],
        reponse: 1,
        explication: "C'est le port par défaut affiché dans le terminal après npm run dev.",
      },
      {
        id: "c3-q5",
        type: "qcm",
        question: "La fonctionnalité qui met à jour la page instantanément sans recharger s'appelle...",
        options: [
          "le Hot Module Replacement",
          "le Cold Reboot",
          "le Virtual DOM",
          "le Tree Shaking",
        ],
        reponse: 0,
        explication: "C'est l'une des grandes forces de Vite pour le confort de développement.",
      },
      {
        id: "c3-q6",
        type: "qcm",
        question: "Dans main.jsx, React installe le composant App à l'intérieur de...",
        options: [
          "un fichier .css",
          "la <div id=\"root\"> de index.html",
          "une base de données",
          "le dossier public/",
        ],
        reponse: 1,
        explication: "index.html contient un cadre vide que React remplit avec App.",
      },
    ],
    examen: [
      {
        id: "c3-e1",
        type: "qcm",
        question: "node -v sert à...",
        options: [
          "créer un projet",
          "vérifier que Node.js est installé",
          "lancer le serveur de dev",
          "construire le projet",
        ],
        reponse: 1,
      },
      {
        id: "c3-e2",
        type: "trou",
        question: "Le fichier qui contient le composant principal s'appelle App.___.",
        reponse: "jsx",
      },
      {
        id: "c3-e3",
        type: "qcm",
        question: "`export default App;` sert à...",
        options: [
          "supprimer le composant",
          "le rendre disponible pour d'autres fichiers",
          "le styliser",
          "le tester automatiquement",
        ],
        reponse: 1,
      },
      {
        id: "c3-e4",
        type: "qcm",
        question: "Le dossier où vit ton propre code (App.jsx, main.jsx...) s'appelle...",
        options: ["node_modules/", "src/", "public/", "dist/"],
        reponse: 1,
      },
      {
        id: "c3-e5",
        type: "qcm",
        question: "Pour arrêter le serveur de développement dans le terminal, on appuie sur...",
        options: ["Ctrl + C", "Ctrl + V", "Ctrl + Z", "Échap"],
        reponse: 0,
      },
      {
        id: "c3-e6",
        type: "trou",
        question: "npm signifie Node Package ___.",
        reponse: "Manager",
      },
      {
        id: "c3-e7",
        type: "qcm",
        question: "Choisir \"JavaScript\" plutôt que \"TypeScript\" au moment de créer le projet...",
        options: [
          "empêche le projet de fonctionner",
          "garde les choses simples pour débuter",
          "est obligatoire",
          "supprime React",
        ],
        reponse: 1,
      },
      {
        id: "c3-e8",
        type: "qcm",
        question: "node_modules/ contient...",
        options: [
          "ton propre code",
          "les bibliothèques installées",
          "les images du site",
          "les fichiers de configuration Git",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 4,
    titre: "Style et ressources",
    resume: "className, CSS, styles en ligne et images.",
    objectif: "Styliser tes composants avec du CSS et ajouter des images à la manière de React.",
    lecons: [
      {
        id: "c4-l1",
        titre: "className, pas class",
        contenu:
          "En JSX, on utilise className à la place de class, car class est un mot déjà réservé en JavaScript (pour les classes JS). Le fonctionnement est identique à l'attribut class en HTML classique.",
      },
      {
        id: "c4-l2",
        titre: "Importer du CSS",
        contenu:
          "On écrit un fichier .css normal, puis on l'importe en haut du composant avec `import \"./App.css\";`. Une fois importés, les styles s'appliquent globalement à tout className correspondant dans le projet.",
      },
      {
        id: "c4-l3",
        titre: "Les styles en ligne",
        contenu:
          "Pour un style qui dépend d'une valeur JavaScript, on peut écrire un objet de style : `style={{ backgroundColor: \"orange\" }}`. Les propriétés sont en camelCase et les valeurs sont des chaînes de caractères.",
      },
      {
        id: "c4-l4",
        titre: "Ajouter des images",
        contenu:
          "Pour la plupart des images, on les importe depuis src/assets/ (Vite optimise le chemin). Pour un fichier qui doit garder un nom ou un chemin exact (comme un favicon), on le place dans le dossier public/.",
      },
    ],
    quiz: [
      {
        id: "c4-q1",
        type: "qcm",
        question: "En JSX, pour appliquer une classe CSS on utilise...",
        options: ["class", "className", "style", "id"],
        reponse: 1,
        explication: "class est un mot réservé en JavaScript, donc React utilise className.",
      },
      {
        id: "c4-q2",
        type: "trou",
        question: "class est remplacé par className car class est un mot ___ en JavaScript.",
        reponse: "réservé",
        explication: "class sert déjà à créer des classes JavaScript.",
      },
      {
        id: "c4-q3",
        type: "qcm",
        question: "Un style en ligne s'écrit...",
        options: [
          "comme une chaîne CSS classique",
          "comme un objet JavaScript en camelCase",
          "uniquement dans un fichier .css",
          "avec des tirets obligatoires",
        ],
        reponse: 1,
        explication: "backgroundColor et non background-color.",
      },
      {
        id: "c4-q4",
        type: "qcm",
        question: "background-color en style en ligne devient...",
        options: ["background-color", "backgroundColor", "BackgroundColor", "bg-color"],
        reponse: 1,
        explication: "Les styles en ligne utilisent le camelCase.",
      },
      {
        id: "c4-q5",
        type: "qcm",
        question: "Pour la plupart des images, on les importe depuis...",
        options: ["public/", "src/assets/", "node_modules/", "dist/"],
        reponse: 1,
        explication: "Vite optimise et gère le chemin des fichiers importés.",
      },
      {
        id: "c4-q6",
        type: "trou",
        question:
          "Les fichiers du dossier ___ sont copiés tels quels, avec un chemin fixe (utile pour un favicon).",
        reponse: "public",
        explication: "public/ ne subit aucun traitement de la part de Vite.",
      },
    ],
    examen: [
      {
        id: "c4-e1",
        type: "qcm",
        question: "`import \"./App.css\";` sert à...",
        options: ["créer le fichier", "charger les styles pour qu'ils s'appliquent", "supprimer le CSS", "le compresser"],
        reponse: 1,
      },
      {
        id: "c4-e2",
        type: "qcm",
        question: "Les valeurs dans un style en ligne sont...",
        options: [
          "des nombres uniquement",
          "des chaînes de caractères entre guillemets",
          "des variables globales obligatoires",
          "interdites",
        ],
        reponse: 1,
      },
      {
        id: "c4-e3",
        type: "trou",
        question: "Pour un favicon avec un chemin exact, on le place dans le dossier ___.",
        reponse: "public",
      },
      {
        id: "c4-e4",
        type: "qcm",
        question: "`<img src={photoChat} />` suppose que photoChat a été...",
        options: ["écrit en dur", "importé en haut du fichier", "supprimé", "stylisé en CSS"],
        reponse: 1,
      },
      {
        id: "c4-e5",
        type: "qcm",
        question: "Les styles en ligne sont recommandés...",
        options: [
          "pour tout le style du projet",
          "avec parcimonie, pour des cas dynamiques précis",
          "jamais, ils sont interdits",
          "uniquement pour les couleurs",
        ],
        reponse: 1,
      },
      {
        id: "c4-e6",
        type: "trou",
        question: "fontWeight et padding sont deux exemples de propriétés en camel___.",
        reponse: "case",
      },
      {
        id: "c4-e7",
        type: "qcm",
        question: "Une fois un fichier CSS importé quelque part dans le projet, ses règles...",
        options: [
          "ne s'appliquent qu'à ce fichier",
          "s'appliquent globalement à tout className correspondant",
          "sont ignorées",
          "doivent être réimportées partout",
        ],
        reponse: 1,
      },
      {
        id: "c4-e8",
        type: "qcm",
        question: "Un fichier référencé par une URL exacte et fixe doit aller dans...",
        options: ["src/assets/", "public/", "node_modules/", "components/"],
        reponse: 1,
      },
    ],
  },

  {
    id: 5,
    titre: "Listes et conditions",
    resume: ".map(), key, && et le ternaire.",
    objectif: "Afficher une liste d'éléments et montrer ou cacher du contenu selon une condition.",
    lecons: [
      {
        id: "c5-l1",
        titre: "Afficher une liste avec .map()",
        contenu:
          ".map() transforme chaque élément d'un tableau en quelque chose de nouveau, produisant un tout nouveau tableau. On l'utilise pour transformer un tableau de données en un tableau d'éléments JSX affichés à l'écran.",
      },
      {
        id: "c5-l2",
        titre: "Pourquoi la key est obligatoire",
        contenu:
          "React exige une key unique et stable sur chaque élément d'une liste, pour distinguer les éléments entre eux et savoir lesquels ont changé. Évite d'utiliser l'index du tableau comme key si la liste peut être réordonnée ou filtrée.",
      },
      {
        id: "c5-l3",
        titre: "L'affichage conditionnel",
        contenu:
          "`condition && <p>...</p>` affiche le paragraphe seulement si condition est vraie, sinon rien. L'opérateur ternaire `condition ? a : b` permet de choisir entre deux résultats possibles.",
      },
      {
        id: "c5-l4",
        titre: "Le retour anticipé",
        contenu:
          "Quand tout un composant doit avoir une apparence complètement différente selon une condition, il est souvent plus clair de renvoyer tôt (if (!connecte) { return ... }) plutôt que d'imbriquer des conditions.",
      },
    ],
    quiz: [
      {
        id: "c5-q1",
        type: "qcm",
        question: ".map() sert à...",
        options: [
          "trier un tableau",
          "transformer chaque élément d'un tableau en quelque chose de nouveau",
          "supprimer des éléments",
          "fusionner deux tableaux",
        ],
        reponse: 1,
        explication: ".map() produit un tout nouveau tableau transformé.",
      },
      {
        id: "c5-q2",
        type: "qcm",
        question: "React exige une key sur chaque élément de liste pour...",
        options: [
          "le style visuel",
          "distinguer les éléments entre eux et suivre les changements",
          "le SEO",
          "rien, c'est optionnel",
        ],
        reponse: 1,
        explication: "La key aide React à savoir ce qui a été ajouté, supprimé ou réordonné.",
      },
      {
        id: "c5-q3",
        type: "trou",
        question: "`condition && <p>Texte</p>` n'affiche le paragraphe que si condition est ___.",
        reponse: "vraie",
        explication: "Si condition est fausse, React n'affiche rien.",
      },
      {
        id: "c5-q4",
        type: "qcm",
        question: "L'opérateur ternaire s'écrit...",
        options: ["condition ? a : b", "condition => a : b", "if(condition) a else b", "condition && a || b"],
        reponse: 0,
        explication: "Se lit : si condition, alors a, sinon b.",
      },
      {
        id: "c5-q5",
        type: "qcm",
        question: "Utiliser l'index du tableau comme key est risqué quand...",
        options: [
          "la liste ne change jamais",
          "la liste peut être réordonnée, filtrée ou modifiée",
          "il y a moins de 3 éléments",
          "jamais, c'est toujours sûr",
        ],
        reponse: 1,
        explication: "Ça peut causer des bugs déroutants lors des changements de liste.",
      },
      {
        id: "c5-q6",
        type: "trou",
        question:
          "Quand tout un composant doit changer complètement selon une condition, on utilise un retour ___.",
        reponse: "anticipé",
        explication: "Un if avec un return tôt évite d'imbriquer les conditions.",
      },
    ],
    examen: [
      {
        id: "c5-e1",
        type: "qcm",
        question: ".map() renvoie...",
        options: ["le même tableau modifié sur place", "un tout nouveau tableau", "un objet", "rien"],
        reponse: 1,
      },
      {
        id: "c5-e2",
        type: "qcm",
        question: "`{fruits.map(fruit => <li key={fruit}>{fruit}</li>)}` affiche...",
        options: ["une erreur", "une liste d'éléments <li>", "un seul élément", "du texte brut"],
        reponse: 1,
      },
      {
        id: "c5-e3",
        type: "trou",
        question: "Si A est faux dans `A && B`, React affiche ___.",
        reponse: "rien",
      },
      {
        id: "c5-e4",
        type: "qcm",
        question: "Le motif du ternaire est...",
        options: [
          "condition ? valeurSiVrai : valeurSiFaux",
          "valeurSiVrai ? condition : valeurSiFaux",
          "condition : valeurSiVrai ? valeurSiFaux",
          "aucun de ces choix",
        ],
        reponse: 0,
      },
      {
        id: "c5-e5",
        type: "qcm",
        question: "Une key idéale est...",
        options: [
          "toujours l'index du tableau",
          "un identifiant unique et stable, comme un id venant d'une base de données",
          "toujours un nombre aléatoire",
          "optionnelle",
        ],
        reponse: 1,
      },
      {
        id: "c5-e6",
        type: "trou",
        question: "Les accolades JSX n'acceptent que des ___, pas des instructions comme if.",
        reponse: "expressions",
      },
      {
        id: "c5-e7",
        type: "qcm",
        question: "`{enLigne ? \"En ligne\" : \"Hors ligne\"}` illustre...",
        options: ["l'astuce &&", "l'opérateur ternaire", "le retour anticipé", ".map()"],
        reponse: 1,
      },
      {
        id: "c5-e8",
        type: "qcm",
        question: "Le retour anticipé (early return) est particulièrement utile quand...",
        options: [
          "il n'y a jamais de condition",
          "tout le composant doit avoir une apparence complètement différente selon un cas",
          "on veut styliser en CSS",
          "on veut utiliser useEffect",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 6,
    titre: "Réutiliser avec les props",
    resume: "Transmettre des informations à un composant.",
    objectif: "Faire en sorte qu'un composant affiche un contenu différent à chaque utilisation.",
    lecons: [
      {
        id: "c6-l1",
        titre: "Que sont les props ?",
        contenu:
          "Les props (properties) transmettent des informations à l'intérieur d'un composant, comme un argument de fonction. `<Salutation prenom=\"Alex\" />` : le texte va entre guillemets, toute autre valeur JS va entre accolades.",
      },
      {
        id: "c6-l2",
        titre: "Déstructurer et valeurs par défaut",
        contenu:
          "Au lieu de répéter props.prenom, on déstructure directement dans les paramètres : `function Salutation({ prenom }) {}`. On peut donner une valeur par défaut avec `{ prenom = \"ami\" }` si rien n'est transmis.",
      },
      {
        id: "c6-l3",
        titre: "La prop children",
        contenu:
          "children est une prop spéciale que chaque composant reçoit automatiquement : elle contient tout ce qui est placé entre les balises ouvrante et fermante d'un composant, ce qui permet de créer des composants d'enveloppe flexibles (cartes, modales).",
      },
      {
        id: "c6-l4",
        titre: "Les props sont en lecture seule",
        contenu:
          "Un composant ne doit jamais modifier les props qu'il reçoit. Elles circulent toujours du parent vers l'enfant (flux de données unidirectionnel) : si quelque chose semble faux à l'écran, il faut regarder vers le parent qui a transmis la donnée.",
      },
    ],
    quiz: [
      {
        id: "c6-q1",
        type: "qcm",
        question: "Les props permettent de...",
        options: [
          "styliser un composant automatiquement",
          "transmettre des informations à un composant, comme un argument de fonction",
          "créer une base de données",
          "remplacer useState",
        ],
        reponse: 1,
        explication: "Les props rendent un composant réutilisable avec un contenu différent.",
      },
      {
        id: "c6-q2",
        type: "qcm",
        question: "Dans `<Salutation prenom=\"Alex\" age={14} />`, pourquoi age est entre accolades ?",
        options: [
          "c'est une erreur de syntaxe",
          "car ce n'est pas du texte, c'est une valeur JavaScript (un nombre)",
          "c'est interchangeable avec les guillemets",
          "les accolades sont obligatoires pour tout",
        ],
        reponse: 1,
        explication: "Le texte va entre guillemets, toute autre valeur JS va entre accolades.",
      },
      {
        id: "c6-q3",
        type: "trou",
        question:
          "La prop spéciale contenant tout ce qui est placé entre les balises d'un composant s'appelle ___.",
        reponse: "children",
        explication: "children permet de construire des composants d'enveloppe flexibles.",
      },
      {
        id: "c6-q4",
        type: "qcm",
        question: "Un composant peut-il modifier les props qu'il reçoit ?",
        options: ["Oui, librement", "Non, les props sont en lecture seule", "Seulement les nombres", "Une seule fois"],
        reponse: 1,
        explication: "Les props circulent toujours du parent vers l'enfant, jamais l'inverse.",
      },
      {
        id: "c6-q5",
        type: "qcm",
        question: "Pour donner une valeur par défaut à une prop non transmise, on écrit...",
        options: ["{ prenom == \"ami\" }", "{ prenom = \"ami\" }", "{ prenom: \"ami\" }", "prenom=\"ami\" obligatoire"],
        reponse: 1,
        explication: "Cette valeur ne s'utilise que si aucune prop n'est transmise.",
      },
      {
        id: "c6-q6",
        type: "trou",
        question: "Les props circulent toujours du composant ___ vers ses enfants.",
        reponse: "parent",
        explication: "C'est le flux de données unidirectionnel.",
      },
    ],
    examen: [
      {
        id: "c6-e1",
        type: "qcm",
        question: "`function Salutation({ prenom }) {...}` utilise...",
        options: ["un objet global", "la déstructuration des props", "un Hook", "une API"],
        reponse: 1,
      },
      {
        id: "c6-e2",
        type: "qcm",
        question: "Ce principe de circulation à sens unique des props s'appelle...",
        options: ["le flux de données unidirectionnel", "la réconciliation", "le rendu conditionnel", "la composition"],
        reponse: 0,
      },
      {
        id: "c6-e3",
        type: "trou",
        question: "Une prop textuelle se transmet entre ___.",
        reponse: "guillemets",
      },
      {
        id: "c6-e4",
        type: "qcm",
        question: "`<Carte>{children}</Carte>` permet de construire...",
        options: [
          "des composants d'enveloppe flexibles comme des cartes ou modales",
          "des bases de données",
          "des routes",
          "uniquement des styles globaux",
        ],
        reponse: 0,
      },
      {
        id: "c6-e5",
        type: "qcm",
        question: "À l'intérieur d'un composant, toutes les props arrivent regroupées dans...",
        options: ["plusieurs variables séparées", "un seul objet", "un tableau trié", "rien, elles sont globales"],
        reponse: 1,
      },
      {
        id: "c6-e6",
        type: "trou",
        question: "Comme un ___-pièce, un composant peut découper des éléments de n'importe quel parfum selon les props reçues.",
        reponse: "emporte",
      },
      {
        id: "c6-e7",
        type: "qcm",
        question: "`<Salutation prenom=\"Alex\" />` puis `<Salutation prenom=\"Sam\" />` utilisent...",
        options: [
          "deux composants totalement différents",
          "le même composant, réutilisé avec des props différentes",
          "une erreur",
          "un Hook personnalisé",
        ],
        reponse: 1,
      },
      {
        id: "c6-e8",
        type: "qcm",
        question: "Si quelque chose semble faux à l'écran à cause d'une prop, il faut regarder...",
        options: ["vers l'enfant", "vers le parent qui a transmis la donnée", "dans le CSS", "dans public/"],
        reponse: 1,
      },
    ],
  },

  {
    id: 7,
    titre: "Interagir avec les événements",
    resume: "onClick, onChange et preventDefault.",
    objectif: "Faire réagir tes composants aux clics, à la saisie, et aux autres actions.",
    lecons: [
      {
        id: "c7-l1",
        titre: "Écouter un clic",
        contenu:
          "En JSX, les noms d'événements s'écrivent en camelCase (onClick) et on leur transmet une fonction, pas un appel : `onClick={gererClic}`, jamais `onClick={gererClic()}` (qui appellerait la fonction immédiatement).",
      },
      {
        id: "c7-l2",
        titre: "Fonction fléchée en ligne",
        contenu:
          "Pour transmettre une information supplémentaire (comme quel élément précis a été cliqué), on utilise une fonction fléchée en ligne : `onClick={() => gererClicFruit(fruit)}`.",
      },
      {
        id: "c7-l3",
        titre: "Lire l'événement",
        contenu:
          "Chaque gestionnaire reçoit automatiquement un objet événement. `event.target.value` donne le texte actuel d'un champ de saisie — très utile pour réagir à ce que tape un utilisateur.",
      },
      {
        id: "c7-l4",
        titre: "Empêcher le comportement par défaut",
        contenu:
          "Certains éléments ont un comportement par défaut, comme l'envoi d'un formulaire qui recharge la page. `event.preventDefault()` empêche ce comportement pour garder le contrôle en React.",
      },
    ],
    quiz: [
      {
        id: "c7-q1",
        type: "qcm",
        question: "En JSX, le nom d'un événement clic s'écrit...",
        options: ["onclick", "onClick", "OnClick", "on-click"],
        reponse: 1,
        explication: "Les événements JSX s'écrivent en camelCase.",
      },
      {
        id: "c7-q2",
        type: "qcm",
        question: "Quelle syntaxe est correcte pour un gestionnaire de clic ?",
        options: ["onClick={gererClic()}", "onClick={gererClic}", "onClick=\"gererClic\"", "onClick={{gererClic}}"],
        reponse: 1,
        explication: "On transmet la fonction elle-même, pas son résultat.",
      },
      {
        id: "c7-q3",
        type: "trou",
        question: "event.target.___ donne le texte actuel d'un champ de saisie.",
        reponse: "value",
        explication: "event.target est l'élément HTML concerné par l'événement.",
      },
      {
        id: "c7-q4",
        type: "qcm",
        question: "event.preventDefault() sert à...",
        options: [
          "supprimer l'événement",
          "empêcher le comportement par défaut du navigateur, comme recharger la page",
          "déclencher l'événement plus vite",
          "rien de particulier",
        ],
        reponse: 1,
        explication: "Très utilisé sur onSubmit d'un formulaire.",
      },
      {
        id: "c7-q5",
        type: "qcm",
        question: "Pour transmettre un argument supplémentaire à un gestionnaire, on utilise...",
        options: [
          "onClick={gererClic(arg)}",
          "une fonction fléchée en ligne : onClick={() => gererClic(arg)}",
          "c'est impossible",
          "onClick={arg => gererClic}",
        ],
        reponse: 1,
        explication: "Ça permet de préciser quel élément a été cliqué.",
      },
      {
        id: "c7-q6",
        type: "trou",
        question:
          "Écrire onClick={gererClic()} au lieu de onClick={gererClic} appelle la fonction ___.",
        reponse: "immédiatement",
        explication: "C'est l'une des erreurs de débutant les plus courantes.",
      },
    ],
    examen: [
      {
        id: "c7-e1",
        type: "qcm",
        question: "Chaque gestionnaire d'événement reçoit automatiquement...",
        options: ["rien", "un objet événement", "une clé", "un Hook"],
        reponse: 1,
      },
      {
        id: "c7-e2",
        type: "qcm",
        question: "<input onChange={...} /> se déclenche...",
        options: [
          "au clic uniquement",
          "à chaque changement de la valeur du champ",
          "jamais",
          "au chargement de la page",
        ],
        reponse: 1,
      },
      {
        id: "c7-e3",
        type: "trou",
        question: "L'envoi d'un formulaire recharge la page sauf si on appelle event.___().",
        reponse: "preventDefault",
      },
      {
        id: "c7-e4",
        type: "qcm",
        question: "onSubmit s'utilise typiquement sur...",
        options: ["un <button> uniquement", "un <form>", "une <div>", "une <img>"],
        reponse: 1,
      },
      {
        id: "c7-e5",
        type: "qcm",
        question: "Pense à un gestionnaire d'événement comme...",
        options: ["une base de données", "une sonnette qui attend qu'on appuie dessus", "un Hook obligatoire", "un fichier CSS"],
        reponse: 1,
      },
      {
        id: "c7-e6",
        type: "trou",
        question: "React prend en charge tous les événements courants du ___.",
        reponse: "navigateur",
      },
      {
        id: "c7-e7",
        type: "qcm",
        question: "`<button onClick={() => alert(\"salut\")}>` utilise...",
        options: [
          "une fonction fléchée en ligne",
          "un Hook",
          "une prop obligatoire",
          "une erreur de syntaxe",
        ],
        reponse: 0,
      },
      {
        id: "c7-e8",
        type: "qcm",
        question: "event.target désigne...",
        options: [
          "un composant React quelconque",
          "l'élément HTML réel sur lequel l'événement s'est produit",
          "toujours le document entier",
          "une prop",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 8,
    titre: "L'état local avec useState",
    resume: "Donner une mémoire à un composant.",
    objectif: "Donner une mémoire à un composant, pour qu'il se souvienne d'informations dans le temps.",
    lecons: [
      {
        id: "c8-l1",
        titre: "Pourquoi une variable normale ne suffit pas",
        contenu:
          "Modifier une variable classique (let compte = 0) ne déclenche pas de re-rendu : React ne la surveille pas, donc l'écran ne se met jamais à jour. Il faut un outil spécial pour que React sache qu'il doit redessiner.",
      },
      {
        id: "c8-l2",
        titre: "La syntaxe de useState",
        contenu:
          "`const [compte, setCompte] = useState(0);` crée un état qui démarre à 0. useState renvoie un tableau [valeur, fonctionDeMiseÀJour] ; appeler setCompte(...) met à jour la valeur ET déclenche un re-rendu.",
      },
      {
        id: "c8-l3",
        titre: "Ce qu'est un Hook",
        contenu:
          "useState est un Hook : une fonction spéciale commençant par use. Les Hooks doivent être appelés uniquement au premier niveau d'un composant — jamais dans un if ou une boucle — et toujours dans le même ordre.",
      },
      {
        id: "c8-l4",
        titre: "La mise à jour fonctionnelle",
        contenu:
          "Si le nouvel état dépend du précédent (plusieurs clics rapides), setCompte(compte + 1) répété peut ne pas s'accumuler correctement, car compte est figé. Il faut utiliser setCompte(avant => avant + 1).",
      },
    ],
    quiz: [
      {
        id: "c8-q1",
        type: "qcm",
        question: "Modifier une variable classique (let) dans un composant...",
        options: [
          "redessine automatiquement l'écran",
          "ne déclenche pas de re-rendu, React ne le voit pas",
          "provoque une erreur",
          "est interdit par JavaScript",
        ],
        reponse: 1,
        explication: "React a besoin d'un état (useState) pour savoir que quelque chose a changé.",
      },
      {
        id: "c8-q2",
        type: "qcm",
        question: "useState(0) renvoie...",
        options: ["juste la valeur", "un tableau [valeur, fonctionDeMiseAJour]", "un objet complexe", "rien"],
        reponse: 1,
        explication: "On récupère les deux avec la déstructuration de tableau.",
      },
      {
        id: "c8-q3",
        type: "trou",
        question: "Un Hook est une fonction spéciale qui commence toujours par ___.",
        reponse: "use",
        explication: "useState, useEffect... tous commencent par use.",
      },
      {
        id: "c8-q4",
        type: "qcm",
        question: "Les Hooks doivent être appelés...",
        options: [
          "n'importe où, y compris dans un if",
          "au premier niveau du composant, jamais dans un if ou une boucle",
          "uniquement dans useEffect",
          "après le return",
        ],
        reponse: 1,
        explication: "React s'appuie sur un ordre d'appel toujours identique.",
      },
      {
        id: "c8-q5",
        type: "qcm",
        question: "Si le nouvel état dépend de l'état précédent, il vaut mieux écrire...",
        options: ["setCompte(compte + 1)", "setCompte(avant => avant + 1)", "compte++", "setCompte = compte + 1"],
        reponse: 1,
        explication: "La forme fonctionnelle reçoit toujours la dernière valeur garantie à jour.",
      },
      {
        id: "c8-q6",
        type: "trou",
        question: "Appeler la fonction de mise à jour d'un état déclenche un ___.",
        reponse: "re-rendu",
        explication: "React redessine le composant avec la nouvelle valeur.",
      },
    ],
    examen: [
      {
        id: "c8-e1",
        type: "qcm",
        question: "Dans const [compte, setCompte] = useState(0);, compte et setCompte sont...",
        options: [
          "des mots-clés obligatoires",
          "des noms choisis librement par le développeur",
          "toujours identiques",
          "des balises HTML",
        ],
        reponse: 1,
      },
      {
        id: "c8-e2",
        type: "qcm",
        question: "Appeler setCompte(compte + 1) trois fois de suite dans la même fonction ajoute généralement...",
        options: [
          "+3 de façon fiable",
          "souvent +1 seulement, à cause de la valeur figée",
          "+0 toujours",
          "une erreur",
        ],
        reponse: 1,
      },
      {
        id: "c8-e3",
        type: "trou",
        question: "useState(valeurInitiale) utilise la ___ de tableau pour récupérer les deux éléments.",
        reponse: "déstructuration",
      },
      {
        id: "c8-e4",
        type: "qcm",
        question: "Un composant peut avoir...",
        options: [
          "un seul useState maximum",
          "autant de useState indépendants qu'il en a besoin",
          "aucun useState",
          "useState est interdit dans les composants",
        ],
        reponse: 1,
      },
      {
        id: "c8-e5",
        type: "qcm",
        question: "Modifier compte sans passer par setCompte...",
        options: [
          "met à jour l'écran quand même",
          "ne met pas à jour l'écran",
          "provoque un crash immédiat",
          "est la bonne méthode",
        ],
        reponse: 1,
      },
      {
        id: "c8-e6",
        type: "trou",
        question: "La convention de nommage est [chose, set___].",
        reponse: "chose",
      },
      {
        id: "c8-e7",
        type: "qcm",
        question: "useState(\"\") est un bon état initial pour...",
        options: ["un compteur numérique", "un champ de texte vide", "une case à cocher", "une liste"],
        reponse: 1,
      },
      {
        id: "c8-e8",
        type: "qcm",
        question: "React s'appuie sur le fait que les Hooks sont appelés...",
        options: [
          "dans un ordre aléatoire",
          "exactement dans le même ordre à chaque rendu",
          "une seule fois dans toute l'appli",
          "uniquement au clic",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 9,
    titre: "Partager l'état entre composants",
    resume: "Faire remonter l'état vers le parent commun.",
    objectif: "Permettre à deux composants différents de partager et contrôler la même information.",
    lecons: [
      {
        id: "c9-l1",
        titre: "Le problème",
        contenu:
          "Deux composants frères (par exemple un bouton et un affichage) ne peuvent pas partager un état placé dans l'un des deux : ce sont deux composants séparés et isolés, sans connexion directe.",
      },
      {
        id: "c9-l2",
        titre: "Faire remonter l'état",
        contenu:
          "La solution : déplacer le useState vers le parent commun le plus proche, puis transmettre la valeur et la fonction de mise à jour vers le bas sous forme de props. C'est le motif \"lifting state up\".",
      },
      {
        id: "c9-l3",
        titre: "Convention de nommage",
        contenu:
          "La prop s'appelle souvent surX (surIncrement, du point de vue de l'enfant) et la vraie fonction dans le parent s'appelle gererX (gererIncrement). Cette association surX / gererX est une convention React très courante.",
      },
      {
        id: "c9-l4",
        titre: "Une seule source de vérité",
        contenu:
          "Faire remonter l'état garantit qu'il n'existe qu'un seul endroit responsable de cette information — évitant que la même donnée soit en désaccord avec elle-même à plusieurs endroits de l'application.",
      },
    ],
    quiz: [
      {
        id: "c9-q1",
        type: "qcm",
        question: "Quand deux composants frères doivent partager une info, la solution est de...",
        options: [
          "dupliquer le useState dans chacun",
          "faire remonter l'état vers leur parent commun le plus proche",
          "utiliser une base de données",
          "c'est impossible en React",
        ],
        reponse: 1,
        explication: "Le parent transmet ensuite la valeur et une fonction de mise à jour en props.",
      },
      {
        id: "c9-q2",
        type: "trou",
        question: "Ce motif s'appelle faire ___ l'état (\"lifting state up\").",
        reponse: "remonter",
        explication: "On déplace le useState vers le parent commun.",
      },
      {
        id: "c9-q3",
        type: "qcm",
        question: "Dans la convention React, la prop se nomme souvent surIncrement, et la fonction réelle dans le parent...",
        options: ["surIncrement aussi", "gererIncrement", "incrementSur", "peu importe le nom"],
        reponse: 1,
        explication: "surX décrit l'événement côté enfant, gererX la fonction côté parent.",
      },
      {
        id: "c9-q4",
        type: "qcm",
        question: "Avoir \"une seule source de vérité\" évite surtout...",
        options: [
          "que l'app soit trop rapide",
          "que la même information soit en désaccord avec elle-même à plusieurs endroits",
          "d'utiliser des props",
          "les re-rendus",
        ],
        reponse: 1,
        explication: "Comme deux horloges affichant des heures différentes dans la même maison.",
      },
      {
        id: "c9-q5",
        type: "qcm",
        question: "Le parent transmet à ses enfants...",
        options: [
          "uniquement la valeur, jamais de fonction",
          "la valeur actuelle ET une fonction pour demander un changement",
          "rien du tout",
          "une base de données",
        ],
        reponse: 1,
        explication: "L'enfant peut alors déclencher un changement sans toucher à l'état lui-même.",
      },
      {
        id: "c9-q6",
        type: "trou",
        question: "Transmettre des props à travers de nombreuses couches de composants s'appelle le prop ___.",
        reponse: "drilling",
        explication: "L'API Context est une solution plus avancée à ce problème.",
      },
    ],
    examen: [
      {
        id: "c9-e1",
        type: "qcm",
        question: "Si l'état vit dans App, un composant Affichage l'utilise via...",
        options: [
          "une prop reçue de App",
          "son propre useState séparé",
          "une variable globale",
          "localStorage obligatoirement",
        ],
        reponse: 0,
      },
      {
        id: "c9-e2",
        type: "qcm",
        question: "BarreRecherche et ListeFruits qui partagent une recherche...",
        options: [
          "se parlent directement",
          "lisent et mettent à jour le même état vivant dans leur parent commun",
          "n'ont aucun lien",
          "dupliquent chacun l'état",
        ],
        reponse: 1,
      },
      {
        id: "c9-e3",
        type: "trou",
        question: "L'API Context permet d'éviter le prop drilling dans les grandes ___.",
        reponse: "applications",
      },
      {
        id: "c9-e4",
        type: "qcm",
        question: "Le composant qui \"possède\" l'état est appelé...",
        options: ["l'enfant", "la source unique de vérité (le parent commun)", "le Hook", "le Fragment"],
        reponse: 1,
      },
      {
        id: "c9-e5",
        type: "qcm",
        question: "Un exemple d'interrupteur/lampe (Interrupteur + Lampe) partageant un état illustre...",
        options: ["la composition uniquement", "faire remonter l'état vers leur parent", "le Virtual DOM", "les props en lecture seule uniquement"],
        reponse: 1,
      },
      {
        id: "c9-e6",
        type: "trou",
        question: "Deux composants frères isolés n'ont aucun moyen d'accéder à l'état l'un de l'autre sans passer par leur ___ commun.",
        reponse: "parent",
      },
      {
        id: "c9-e7",
        type: "qcm",
        question: "Le morceau d'état comparé à une télécommande de télévision partagée illustre...",
        options: [
          "qu'il vaut mieux dupliquer la télécommande",
          "qu'un seul parent doit \"posséder\" et prêter la télécommande",
          "que useState est inutile",
          "que les props sont modifiables",
        ],
        reponse: 1,
      },
      {
        id: "c9-e8",
        type: "qcm",
        question: "Cela garde les données comme une source de vérité...",
        options: ["multiple et dupliquée", "unique et fiable", "inexistante", "cachée dans le CSS"],
        reponse: 1,
      },
    ],
  },

  {
    id: 10,
    titre: "Les effets avec useEffect",
    resume: "Exécuter du code en réponse au rendu.",
    objectif: "Exécuter du code automatiquement en réponse à l'apparition d'un composant ou au changement d'un état.",
    lecons: [
      {
        id: "c10-l1",
        titre: "À quoi sert useEffect",
        contenu:
          "Certaines actions doivent se produire automatiquement, hors du rendu pur : récupérer des données, démarrer un minuteur, mettre à jour le titre de la page. C'est à cela que sert useEffect — un effet de bord.",
      },
      {
        id: "c10-l2",
        titre: "Le tableau de dépendances",
        contenu:
          "Sans tableau : l'effet s'exécute après chaque rendu. Avec [] : une seule fois, après le premier rendu. Avec [compte] : à chaque fois que compte change. Oublier ce tableau est une erreur de débutant fréquente.",
      },
      {
        id: "c10-l3",
        titre: "Nettoyer après un effet",
        contenu:
          "Pour un minuteur (setInterval) ou un abonnement, il faut renvoyer une fonction de nettoyage depuis l'effet, qui s'exécute quand le composant disparaît — sinon le minuteur continuerait de tourner inutilement.",
      },
      {
        id: "c10-l4",
        titre: "Quand ne pas l'utiliser",
        contenu:
          "Si tu calcules quelque chose purement à partir de props ou d'état (comme un total), tu n'as généralement pas besoin de useEffect — calcule-le directement dans le composant.",
      },
    ],
    quiz: [
      {
        id: "c10-q1",
        type: "qcm",
        question: "useEffect sert à exécuter du code...",
        options: [
          "pendant le rendu pur",
          "en réponse au rendu ou au changement d'une valeur, hors du rendu pur",
          "uniquement au clic",
          "jamais côté navigateur",
        ],
        reponse: 1,
        explication: "C'est un effet de bord : quelque chose en dehors du rendu normal.",
      },
      {
        id: "c10-q2",
        type: "qcm",
        question: "Un tableau de dépendances vide [] signifie...",
        options: [
          "l'effet ne s'exécute jamais",
          "l'effet s'exécute une seule fois, après le premier rendu",
          "l'effet s'exécute à chaque rendu",
          "erreur de syntaxe",
        ],
        reponse: 1,
        explication: "Comme une fête où personne n'est réinvité après la première fois.",
      },
      {
        id: "c10-q3",
        type: "trou",
        question: "Oublier complètement le tableau de dépendances fait que l'effet s'exécute après ___ rendu.",
        reponse: "chaque",
        explication: "Ça peut causer des problèmes de performance ou des boucles infinies.",
      },
      {
        id: "c10-q4",
        type: "qcm",
        question: "Pour arrêter un minuteur quand le composant disparaît, on utilise...",
        options: [
          "une fonction de nettoyage renvoyée par l'effet",
          "rien, ça s'arrête tout seul",
          "useState",
          "un second composant",
        ],
        reponse: 0,
        explication: "Comme éteindre les lumières en quittant une pièce.",
      },
      {
        id: "c10-q5",
        type: "qcm",
        question: "Si tu calcules un prix total juste à partir de props/état, tu devrais...",
        options: [
          "utiliser useEffect obligatoirement",
          "le calculer directement dans le composant, sans useEffect",
          "utiliser une base de données",
          "créer un Hook personnalisé obligatoirement",
        ],
        reponse: 1,
        explication: "useEffect sert à sortir en dehors de React (API, minuteur, requête réseau).",
      },
      {
        id: "c10-q6",
        type: "trou",
        question: "[compte] comme tableau de dépendances signifie que l'effet se réexécute quand ___ change.",
        reponse: "compte",
        explication: "React compare la liste des dépendances à chaque rendu.",
      },
    ],
    examen: [
      {
        id: "c10-e1",
        type: "qcm",
        question: "useEffect prend en argument...",
        options: ["une fonction et un tableau de dépendances", "seulement une chaîne", "trois fonctions", "rien"],
        reponse: 0,
      },
      {
        id: "c10-e2",
        type: "qcm",
        question: "Une fonction de nettoyage s'exécute...",
        options: [
          "avant le premier rendu",
          "quand le composant disparaît (ou avant le prochain effet)",
          "jamais",
          "uniquement en production",
        ],
        reponse: 1,
      },
      {
        id: "c10-e3",
        type: "trou",
        question: "useEffect est utile pour récupérer des ___ depuis internet.",
        reponse: "données",
      },
      {
        id: "c10-e4",
        type: "qcm",
        question: "Un tableau de dépendances trop permissif peut créer...",
        options: [
          "des boucles infinies ou des problèmes de performance",
          "rien de grave",
          "une erreur de compilation",
          "un composant plus rapide",
        ],
        reponse: 0,
      },
      {
        id: "c10-e5",
        type: "qcm",
        question: "document.title = ... à l'intérieur d'un useEffect illustre...",
        options: [
          "un calcul pur",
          "un effet de bord qui sort en dehors de React",
          "une erreur",
          "une prop",
        ],
        reponse: 1,
      },
      {
        id: "c10-e6",
        type: "trou",
        question: "setInterval doit être nettoyé avec clear___ dans la fonction de nettoyage.",
        reponse: "Interval",
      },
      {
        id: "c10-e7",
        type: "qcm",
        question: "Un effet avec [] comme dépendances s'exécute...",
        options: ["à chaque rendu", "une seule fois après le premier rendu", "jamais", "uniquement au clic"],
        reponse: 1,
      },
      {
        id: "c10-e8",
        type: "qcm",
        question: "Pense au tableau de dépendances comme...",
        options: [
          "une base de données",
          "une liste d'invités qu'on réinvite seulement si quelque chose a changé",
          "un Hook personnalisé",
          "une prop obligatoire",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 11,
    titre: "Formulaires et saisie",
    resume: "Champs contrôlés et validation.",
    objectif: "Construire des formulaires qui capturent la saisie et réagissent à l'envoi.",
    lecons: [
      {
        id: "c11-l1",
        titre: "Le champ contrôlé",
        contenu:
          "En React, la valeur d'un <input> est reliée à l'état via value et mise à jour via onChange — le champ ne décide jamais seul de son texte. Sans onChange, le champ semble \"gelé\", impossible à modifier.",
      },
      {
        id: "c11-l2",
        titre: "Plusieurs champs, un seul état",
        contenu:
          "Pour éviter de répéter la logique, on utilise un seul objet d'état et une fonction gererChangement partagée : `{ ...donneesFormulaire, [name]: value }` copie les champs existants et n'écrase que celui qui a changé.",
      },
      {
        id: "c11-l3",
        titre: "Cases à cocher et menus déroulants",
        contenu:
          "Une case à cocher utilise checked au lieu de value : `checked={abonne}` avec `onChange={(e) => setAbonne(e.target.checked)}`. Un <select> fonctionne comme un champ de texte, avec value et onChange.",
      },
      {
        id: "c11-l4",
        titre: "Gérer l'envoi",
        contenu:
          "event.preventDefault() empêche la page de se recharger à l'envoi du formulaire. On vérifie ensuite les champs importants avant d'agir dessus (validation basique), par exemple avec un if (!email || !motDePasse).",
      },
    ],
    quiz: [
      {
        id: "c11-q1",
        type: "qcm",
        question: "Un champ contrôlé a sa valeur reliée à...",
        options: ["rien, il gère seul son texte", "l'état React, via value et onChange", "une base de données", "le DOM uniquement"],
        reponse: 1,
        explication: "L'état devient la seule source de vérité du champ.",
      },
      {
        id: "c11-q2",
        type: "qcm",
        question: "Si tu définis value sans onChange, le champ semble...",
        options: ["plus rapide", "\"gelé\", impossible à modifier", "supprimé", "plus sécurisé"],
        reponse: 1,
        explication: "Le navigateur respecte totalement value une fois React aux commandes.",
      },
      {
        id: "c11-q3",
        type: "trou",
        question: "Une case à cocher utilise l'attribut ___ à la place de value.",
        reponse: "checked",
        explication: "checked reflète l'état booléen coché/décoché.",
      },
      {
        id: "c11-q4",
        type: "qcm",
        question: "{ ...donneesFormulaire, [name]: value } sert à...",
        options: [
          "tout effacer",
          "copier les champs existants et écraser seulement celui qui a changé",
          "dupliquer le formulaire",
          "créer un tableau",
        ],
        reponse: 1,
        explication: "L'opérateur de décomposition (...) copie les champs existants.",
      },
      {
        id: "c11-q5",
        type: "qcm",
        question: "L'attribut name d'un <input> doit correspondre...",
        options: [
          "à rien de précis",
          "exactement à la clé correspondante dans l'objet d'état",
          "au nom du composant",
          "à la couleur du champ",
        ],
        reponse: 1,
        explication: "C'est ce qui permet à un seul gestionnaire de mettre à jour le bon champ.",
      },
      {
        id: "c11-q6",
        type: "trou",
        question: "Sans event.___(), envoyer un formulaire recharge toute la page.",
        reponse: "preventDefault",
        explication: "preventDefault empêche ce rechargement.",
      },
    ],
    examen: [
      {
        id: "c11-e1",
        type: "qcm",
        question: "Un <select> contrôlé fonctionne...",
        options: [
          "très différemment d'un input texte",
          "exactement comme un champ de texte, avec value et onChange",
          "sans état du tout",
          "uniquement avec des nombres",
        ],
        reponse: 1,
      },
      {
        id: "c11-e2",
        type: "qcm",
        question: "if (!email || !motDePasse) { alert(...); return; } est un exemple de...",
        options: ["validation basique avant d'agir", "un bug", "un style en ligne", "un Hook personnalisé"],
        reponse: 0,
      },
      {
        id: "c11-e3",
        type: "trou",
        question: "Une seule fonction gererChangement peut mettre à jour plusieurs champs grâce à l'attribut ___ de chaque input.",
        reponse: "name",
      },
      {
        id: "c11-e4",
        type: "qcm",
        question: "checked={abonne} et onChange={(e) => setAbonne(e.target.checked)} gèrent...",
        options: ["un champ texte", "une case à cocher", "un bouton normal", "une image"],
        reponse: 1,
      },
      {
        id: "c11-e5",
        type: "qcm",
        question: "En HTML classique (hors React), un <input> garde la trace de son texte...",
        options: ["dans l'état React", "en interne, dans le navigateur", "nulle part", "dans le CSS"],
        reponse: 1,
      },
      {
        id: "c11-e6",
        type: "trou",
        question: "Le motif où la valeur d'un champ est pilotée par l'état s'appelle un champ ___.",
        reponse: "contrôlé",
      },
      {
        id: "c11-e7",
        type: "qcm",
        question: "Pense à un champ contrôlé comme...",
        options: [
          "une marionnette dont l'état est la main du marionnettiste",
          "une base de données",
          "un Hook obligatoire",
          "un composant statique",
        ],
        reponse: 0,
      },
      {
        id: "c11-e8",
        type: "qcm",
        question: "Une validation basique devrait se produire...",
        options: [
          "après avoir déjà agi sur les données",
          "avant d'agir sur les données du formulaire",
          "jamais, ce n'est pas nécessaire",
          "uniquement côté serveur",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 12,
    titre: "Naviguer avec React Router",
    resume: "Routes, Link et pages dynamiques.",
    objectif: "Construire une application multi-pages sans jamais recharger le navigateur.",
    lecons: [
      {
        id: "c12-l1",
        titre: "Pourquoi pas des liens classiques ?",
        contenu:
          "Un lien <a> classique recharge toute l'application React depuis zéro — y compris l'état et le JavaScript. React Router change le contenu sans jamais arrêter le \"spectacle\".",
      },
      {
        id: "c12-l2",
        titre: "Mettre en place les routes",
        contenu:
          "Après `npm install react-router-dom`, on enveloppe l'appli dans <BrowserRouter> (dans main.jsx), puis on définit les pages avec <Routes> et <Route path=\"...\" element={<PageX />} />.",
      },
      {
        id: "c12-l3",
        titre: "Link et routes dynamiques",
        contenu:
          "On utilise <Link to=\"...\"> à la place de <a>. Pour une page avec une variable dans l'URL (/produits/:id), on lit cette valeur avec le Hook useParams().",
      },
      {
        id: "c12-l4",
        titre: "Naviguer depuis le code",
        contenu:
          "useNavigate() permet de rediriger un utilisateur depuis du JavaScript, par exemple après un formulaire. Une route path=\"*\" placée en dernier intercepte toute adresse inconnue (page 404).",
      },
    ],
    quiz: [
      {
        id: "c12-q1",
        type: "qcm",
        question: "Un lien <a> classique entre pages d'une appli React...",
        options: ["est la meilleure méthode", "recharge toute l'appli et perd l'état", "est plus rapide que <Link>", "est obligatoire"],
        reponse: 1,
        explication: "React Router évite ce rechargement complet.",
      },
      {
        id: "c12-q2",
        type: "qcm",
        question: "Pour naviguer sans recharger la page, on utilise...",
        options: ["<a href=\"...\">", "<Link to=\"...\">", "<button href=\"...\">", "window.location uniquement"],
        reponse: 1,
        explication: "<Link> laisse React Router remplacer le contenu instantanément.",
      },
      {
        id: "c12-q3",
        type: "trou",
        question: "Toute l'application doit être enveloppée dans un ___Router (généralement dans main.jsx).",
        reponse: "Browser",
        explication: "<BrowserRouter> active le fonctionnement de React Router.",
      },
      {
        id: "c12-q4",
        type: "qcm",
        question: "Pour lire :idProduit dans l'URL à l'intérieur d'une page, on utilise le Hook...",
        options: ["useState", "useParams", "useEffect", "useNavigate"],
        reponse: 1,
        explication: "useParams() lit les segments dynamiques de l'URL.",
      },
      {
        id: "c12-q5",
        type: "qcm",
        question: "La route \"attrape-tout\" pour les adresses inconnues s'écrit...",
        options: ["path=\"/inconnue\"", "path=\"*\"", "path=\"404\"", "path=\"/\""],
        reponse: 1,
        explication: "Elle doit être placée en dernier dans la liste des routes.",
      },
      {
        id: "c12-q6",
        type: "trou",
        question: "Pour rediriger depuis du code JavaScript, on utilise le Hook use___.",
        reponse: "Navigate",
        explication: "useNavigate() renvoie une fonction navigate(\"/chemin\").",
      },
    ],
    examen: [
      {
        id: "c12-e1",
        type: "qcm",
        question: "<Route path=\"/\" element={<PageAccueil />} /> doit être placé à l'intérieur de...",
        options: ["<BrowserRouter> uniquement", "<Routes>", "<App> sans wrapper", "index.html"],
        reponse: 1,
      },
      {
        id: "c12-e2",
        type: "qcm",
        question: "La route attrape-tout (path=\"*\") doit être placée...",
        options: ["en premier", "en dernier dans la liste des routes", "n'importe où", "elle est interdite"],
        reponse: 1,
      },
      {
        id: "c12-e3",
        type: "trou",
        question: "react-router-dom s'installe avec npm ___ react-router-dom.",
        reponse: "install",
      },
      {
        id: "c12-e4",
        type: "qcm",
        question: "<Link> ressemble à un lien normal mais...",
        options: [
          "recharge quand même la page",
          "empêche le rechargement complet et laisse React Router gérer le contenu",
          "ne fonctionne que sur desktop",
          "nécessite une base de données",
        ],
        reponse: 1,
      },
      {
        id: "c12-e5",
        type: "qcm",
        question: "React Router vérifie les routes...",
        options: ["dans un ordre aléatoire", "dans l'ordre, de haut en bas", "toutes en même temps", "à l'envers"],
        reponse: 1,
      },
      {
        id: "c12-e6",
        type: "trou",
        question: "Un segment dynamique dans une route s'écrit avec deux ___ (:id).",
        reponse: "points",
      },
      {
        id: "c12-e7",
        type: "qcm",
        question: "Après une connexion réussie, rediriger vers /tableau-de-bord se fait typiquement via...",
        options: ["<Link>", "navigate(\"/tableau-de-bord\") avec useNavigate", "useParams", "un rechargement de page"],
        reponse: 1,
      },
      {
        id: "c12-e8",
        type: "qcm",
        question: "Une application React comparée à une pièce de théâtre : un lien classique, c'est comme...",
        options: [
          "changer le décor sans arrêter le spectacle",
          "mettre fin à la pièce et tout recommencer",
          "ajouter un acteur",
          "rien de spécial",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 13,
    titre: "Récupérer des données (APIs)",
    resume: "fetch, async/await et useEffect.",
    objectif: "Charger de vraies données, en direct depuis internet, dans une application React.",
    lecons: [
      {
        id: "c13-l1",
        titre: "Qu'est-ce qu'une API ?",
        contenu:
          "Une API est une adresse web à laquelle on peut envoyer une requête, qui répond avec des données — presque toujours au format JSON. Comme un menu de restaurant : on commande, la cuisine (le serveur) renvoie exactement ce qu'on a demandé.",
      },
      {
        id: "c13-l2",
        titre: "fetch et async/await",
        contenu:
          "fetch(url) démarre une requête réseau et renvoie une promesse. async/await permet d'écrire du code qui attend le résultat sans geler le reste de l'application : `const reponse = await fetch(url);`.",
      },
      {
        id: "c13-l3",
        titre: "Combiner avec useState et useEffect",
        contenu:
          "On stocke les données dans un état (useState), et on déclenche la récupération dans un useEffect avec [] comme dépendances. On définit une fonction async à l'intérieur de l'effet, puis on l'appelle.",
      },
      {
        id: "c13-l4",
        titre: "Chargement, erreur, succès",
        contenu:
          "Une vraie application gère toujours trois états : en train de charger, une erreur (réseau, 404), ou un succès. On utilise try / catch / finally, et on vérifie response.ok avant de faire confiance aux données.",
      },
    ],
    quiz: [
      {
        id: "c13-q1",
        type: "qcm",
        question: "Une API renvoie généralement des données au format...",
        options: ["CSV", "JSON", "PDF", "HTML uniquement"],
        reponse: 1,
        explication: "JSON est le format d'échange de données le plus courant sur le web.",
      },
      {
        id: "c13-q2",
        type: "qcm",
        question: "await sert à...",
        options: [
          "arrêter le programme définitivement",
          "mettre en pause jusqu'à ce qu'une opération lente se termine, sans geler l'appli",
          "accélérer fetch",
          "rien de particulier",
        ],
        reponse: 1,
        explication: "await attend le résultat d'une promesse, comme un fetch.",
      },
      {
        id: "c13-q3",
        type: "trou",
        question: "On combine fetch avec useState (stocker les données) et use___ (déclencher la requête).",
        reponse: "Effect",
        explication: "useEffect avec [] déclenche la requête une seule fois au chargement.",
      },
      {
        id: "c13-q4",
        type: "qcm",
        question: "Pourquoi définir une fonction async à l'intérieur de l'effet plutôt que rendre l'effet lui-même async ?",
        options: [
          "par style seulement",
          "useEffect attend que sa fonction ne renvoie rien (ou une fonction de nettoyage), jamais une promesse",
          "ce n'est pas nécessaire",
          "c'est interdit par fetch",
        ],
        reponse: 1,
        explication: "C'est une contrainte technique de useEffect.",
      },
      {
        id: "c13-q5",
        type: "qcm",
        question: "Une réponse 404 ou 500 avec fetch...",
        options: [
          "lève automatiquement une erreur",
          "compte comme un \"succès\" technique, il faut vérifier response.ok soi-même",
          "bloque le navigateur",
          "n'existe pas",
        ],
        reponse: 1,
        explication: "fetch ne lève une erreur que pour des échecs réseau sérieux.",
      },
      {
        id: "c13-q6",
        type: "trou",
        question: "Le bloc try / catch / ___ garantit qu'on désactive le chargement dans tous les cas.",
        reponse: "finally",
        explication: "finally s'exécute toujours, qu'il y ait eu une erreur ou non.",
      },
    ],
    examen: [
      {
        id: "c13-e1",
        type: "qcm",
        question: "Il faut toujours gérer trois états lors d'un fetch :",
        options: ["rouge, vert, bleu", "chargement, erreur, succès", "avant, pendant, après visuellement", "aucun état n'est nécessaire"],
        reponse: 1,
      },
      {
        id: "c13-e2",
        type: "qcm",
        question: "fetch(url) renvoie...",
        options: ["directement les données", "une promesse", "un tableau vide toujours", "un composant React"],
        reponse: 1,
      },
      {
        id: "c13-e3",
        type: "trou",
        question: "API signifie Application Programming ___.",
        reponse: "Interface",
      },
      {
        id: "c13-e4",
        type: "qcm",
        question: "Dans un bloc try/catch, si une erreur survient dans try...",
        options: [
          "le programme plante immédiatement",
          "l'exécution saute immédiatement au bloc catch",
          "rien ne se passe",
          "le bloc finally est ignoré",
        ],
        reponse: 1,
      },
      {
        id: "c13-e5",
        type: "qcm",
        question: "const donnees = await reponse.json(); sert à...",
        options: [
          "envoyer des données",
          "transformer la réponse en objet JavaScript utilisable",
          "supprimer la réponse",
          "créer une nouvelle API",
        ],
        reponse: 1,
      },
      {
        id: "c13-e6",
        type: "trou",
        question: "async et await permettent d'écrire du code qui attend sans ___ le reste de l'application.",
        reponse: "geler",
      },
      {
        id: "c13-e7",
        type: "qcm",
        question: "Pense à une API comme...",
        options: ["un menu de restaurant", "une base de données locale", "un composant React", "un fichier CSS"],
        reponse: 0,
      },
      {
        id: "c13-e8",
        type: "qcm",
        question: "Vérifier response.ok avant de faire confiance aux données sert à...",
        options: [
          "ralentir l'application",
          "détecter les réponses en échec que fetch ne signale pas comme des erreurs",
          "rien du tout",
          "remplacer useEffect",
        ],
        reponse: 1,
      },
    ],
  },

  {
    id: 14,
    titre: "Organiser un projet complet",
    resume: "components/, pages/, hooks/, utils/.",
    objectif: "Structurer un projet React qui grandit pour qu'il reste propre et facile à travailler.",
    lecons: [
      {
        id: "c14-l1",
        titre: "Une structure de dossiers solide",
        contenu:
          "components/ contient les petites pièces réutilisables. pages/ contient les composants de page complète, connectés aux routes. hooks/ contient les Hooks personnalisés. utils/ contient de simples fonctions JavaScript qui ne renvoient pas de JSX.",
      },
      {
        id: "c14-l2",
        titre: "Un composant par fichier",
        contenu:
          "Chaque composant vit dans son propre fichier, nommé pour correspondre, en PascalCase (CarteProfil.jsx, pas carte-profil.jsx). Ça garde chaque fichier compréhensible même quand le projet grandit.",
      },
      {
        id: "c14-l3",
        titre: "Exports par défaut et nommés",
        contenu:
          "export default exporte la chose principale d'un fichier, importable sous n'importe quel nom, sans accolades. Un export nommé (export function ...) s'importe avec des accolades, et le nom doit correspondre exactement.",
      },
      {
        id: "c14-l4",
        titre: "Ton propre Hook personnalisé",
        contenu:
          "Si tu répètes la même logique useState + useEffect dans plusieurs composants, tu peux l'extraire dans une fonction réutilisable commençant par use — un Hook personnalisé, comme useLargeurFenetre().",
      },
    ],
    quiz: [
      {
        id: "c14-q1",
        type: "qcm",
        question: "Dans une structure de projet solide, les pages complètes connectées à une route vivent dans...",
        options: ["components/", "pages/", "utils/", "assets/"],
        reponse: 1,
        explication: "pages/ regroupe les composants directement liés à une route.",
      },
      {
        id: "c14-q2",
        type: "qcm",
        question: "Les petites fonctions JavaScript qui ne renvoient pas de JSX vivent plutôt dans...",
        options: ["hooks/", "utils/", "pages/", "index.css"],
        reponse: 1,
        explication: "utils/ contient des fonctions utilitaires simples.",
      },
      {
        id: "c14-q3",
        type: "trou",
        question: "Les composants doivent être nommés en ___ (première lettre de chaque mot en majuscule).",
        reponse: "PascalCase",
        explication: "CarteProfil.jsx, pas carte-profil.jsx.",
      },
      {
        id: "c14-q4",
        type: "qcm",
        question: "Un export nommé s'importe...",
        options: [
          "sans accolades",
          "avec des accolades, et le nom doit correspondre exactement",
          "uniquement avec un astérisque",
          "jamais",
        ],
        reponse: 1,
        explication: "L'export par défaut, lui, s'importe sans accolades et peut être renommé.",
      },
      {
        id: "c14-q5",
        type: "qcm",
        question: "Un Hook personnalisé est...",
        options: [
          "un composant spécial",
          "une fonction JavaScript classique qui commence par use et utilise d'autres Hooks",
          "un fichier CSS",
          "une API externe obligatoire",
        ],
        reponse: 1,
        explication: "Il emballe de la logique réutilisable entre composants.",
      },
      {
        id: "c14-q6",
        type: "trou",
        question: "export ___ App; exporte la chose principale d'un fichier.",
        reponse: "default",
        explication: "Importable sous n'importe quel nom, sans accolades.",
      },
    ],
    examen: [
      {
        id: "c14-e1",
        type: "qcm",
        question: "Les petites pièces réutilisables sur plusieurs pages (boutons, cartes) vont dans...",
        options: ["pages/", "components/", "hooks/", "main.jsx"],
        reponse: 1,
      },
      {
        id: "c14-e2",
        type: "qcm",
        question: "Un bon commentaire de code explique surtout...",
        options: [
          "ce que fait le code (déjà évident)",
          "pourquoi une décision inhabituelle a été prise",
          "rien, les commentaires sont inutiles",
          "le nom du développeur",
        ],
        reponse: 1,
      },
      {
        id: "c14-e3",
        type: "trou",
        question: "Un export par défaut s'importe ___ accolades.",
        reponse: "sans",
      },
      {
        id: "c14-e4",
        type: "qcm",
        question: "Extraire une logique useState + useEffect répétée vers une fonction réutilisable crée...",
        options: ["un nouveau composant", "un Hook personnalisé", "une route", "un fichier CSS"],
        reponse: 1,
      },
      {
        id: "c14-e5",
        type: "qcm",
        question: "hooks/ contient...",
        options: ["des pages complètes", "des Hooks personnalisés", "des images", "des styles globaux"],
        reponse: 1,
      },
      {
        id: "c14-e6",
        type: "trou",
        question: "Une équipe peut aussi organiser le projet par ___ plutôt que par type de fichier (features/panier/).",
        reponse: "fonctionnalité",
      },
      {
        id: "c14-e7",
        type: "qcm",
        question: "carte-profil.jsx (tirets, minuscules) respecte-t-il la convention recommandée ?",
        options: ["oui", "non, il faudrait CarteProfil.jsx", "ça n'a pas d'importance", "uniquement en production"],
        reponse: 1,
      },
      {
        id: "c14-e8",
        type: "qcm",
        question: "Il n'existe pas de structure \"officielle\" unique pour un projet React, mais...",
        options: [
          "components/pages/hooks/utils/ est un excellent point de départ largement utilisé",
          "il faut toujours tout mettre dans un seul fichier",
          "seul App.jsx doit exister",
          "les dossiers sont interdits",
        ],
        reponse: 0,
      },
    ],
  },

  {
    id: 15,
    titre: "Compiler et lancer l'application",
    resume: "Build, preview et déploiement.",
    objectif: "Préparer une application React pour le monde réel, et la mettre en ligne.",
    lecons: [
      {
        id: "c15-l1",
        titre: "Pourquoi pas déployer le mode dev",
        contenu:
          "npm run dev privilégie des messages d'erreur détaillés et le rechargement à chaud pour le développeur — pas pour de vrais visiteurs, qui ont besoin d'une version aussi légère et rapide que possible.",
      },
      {
        id: "c15-l2",
        titre: "Le build de production",
        contenu:
          "npm run build convertit le JSX, minifie le code (espaces supprimés, noms raccourcis) et regroupe tout dans un dossier dist/ — l'œuvre finale, prête à être montrée au public.",
      },
      {
        id: "c15-l3",
        titre: "Prévisualiser avant de déployer",
        contenu:
          "npm run preview démarre un petit serveur local qui sert les vrais fichiers de production, pour tester exactement comme un vrai visiteur le vivrait, avant de partager le lien.",
      },
      {
        id: "c15-l4",
        titre: "Déployer et vérifier",
        contenu:
          "Déployer, c'est mettre le dossier dist/ sur un service comme Netlify (glisser-déposer), Vercel ou GitHub Pages. Avant de partager le lien : build sans erreur, testé via preview, aucun console.log oublié, chaque bouton fonctionne.",
      },
    ],
    quiz: [
      {
        id: "c15-q1",
        type: "qcm",
        question: "npm run build produit un dossier de production appelé...",
        options: ["build/", "dist/", "src/", "output/"],
        reponse: 1,
        explication: "dist/ contient les fichiers optimisés prêts pour la mise en ligne.",
      },
      {
        id: "c15-q2",
        type: "qcm",
        question: "Avant de déployer, il vaut mieux tester avec...",
        options: [
          "npm run dev uniquement",
          "npm run preview, qui sert les vrais fichiers de production",
          "rien, ce n'est pas nécessaire",
          "uniquement le navigateur du développeur",
        ],
        reponse: 1,
        explication: "preview simule ce que verra un vrai visiteur.",
      },
      {
        id: "c15-q3",
        type: "trou",
        question: "\"Déployer\" signifie mettre le dossier dist/ sur un ___ accessible sur internet.",
        reponse: "serveur",
        explication: "Netlify, Vercel et GitHub Pages hébergent ce dossier pour toi.",
      },
      {
        id: "c15-q4",
        type: "qcm",
        question: "Le build de production...",
        options: [
          "garde les commentaires et les noms longs",
          "minifie le code (espaces supprimés, noms raccourcis)",
          "est plus gros que le code source",
          "ne fonctionne que sur Chrome",
        ],
        reponse: 1,
        explication: "La minification rend les fichiers plus légers à charger.",
      },
      {
        id: "c15-q5",
        type: "qcm",
        question: "Une option de déploiement gratuite avec glisser-déposer est...",
        options: ["Netlify", "un serveur payant uniquement", "impossible sans backend", "GitHub uniquement en payant"],
        reponse: 0,
        explication: "app.netlify.com/drop permet de déployer un dossier dist/ en quelques secondes.",
      },
      {
        id: "c15-q6",
        type: "trou",
        question: "Avant de partager son lien, il faut retirer les éventuels console.___() de débogage.",
        reponse: "log",
        explication: "Ils n'ont pas leur place dans une version destinée aux visiteurs.",
      },
    ],
    examen: [
      {
        id: "c15-e1",
        type: "qcm",
        question: "Connecter son hébergeur à un dépôt GitHub permet...",
        options: [
          "rien de particulier",
          "des reconstructions et redéploiements automatiques à chaque mise à jour du code",
          "de supprimer le site",
          "de revenir au mode développement",
        ],
        reponse: 1,
      },
      {
        id: "c15-e2",
        type: "qcm",
        question: "Le mode développement (npm run dev) privilégie...",
        options: [
          "la légèreté pour les visiteurs",
          "des erreurs détaillées et le rechargement à chaud pour le développeur",
          "la sécurité uniquement",
          "rien de spécial",
        ],
        reponse: 1,
      },
      {
        id: "c15-e3",
        type: "trou",
        question: "npm run ___ démarre un petit serveur local qui sert les vrais fichiers de production.",
        reponse: "preview",
      },
      {
        id: "c15-e4",
        type: "qcm",
        question: "Un bon réflexe avant de partager son lien est de vérifier...",
        options: [
          "que chaque lien et bouton fait ce qu'il est censé faire",
          "uniquement la couleur du site",
          "le nombre de fichiers du projet",
          "rien, ce n'est jamais nécessaire",
        ],
        reponse: 0,
      },
      {
        id: "c15-e5",
        type: "qcm",
        question: "dist/ est généré par...",
        options: ["npm run dev", "npm run build", "npm install", "npm create vite@latest"],
        reponse: 1,
      },
      {
        id: "c15-e6",
        type: "trou",
        question: "Le mode développement est comme l'atelier en désordre d'un artiste ; le build de production est l'œuvre ___.",
        reponse: "finale",
      },
      {
        id: "c15-e7",
        type: "qcm",
        question: "Il vaut la peine de tester l'application à la largeur d'un téléphone pour...",
        options: [
          "vérifier qu'elle fonctionne bien sur mobile",
          "rien, ce n'est jamais utile",
          "ralentir le site exprès",
          "supprimer le CSS",
        ],
        reponse: 0,
      },
      {
        id: "c15-e8",
        type: "qcm",
        question: "Vercel et GitHub Pages sont, comme Netlify, des...",
        options: [
          "bases de données",
          "options d'hébergement pour des fichiers statiques compilés",
          "des Hooks React",
          "des frameworks CSS",
        ],
        reponse: 1,
      },
    ],
  },
];

export function obtenirChapitre(id) {
  return CHAPITRES.find((chapitre) => chapitre.id === Number(id));
}

export function obtenirChapitreSuivant(id) {
  return CHAPITRES.find((chapitre) => chapitre.id === Number(id) + 1);
}
