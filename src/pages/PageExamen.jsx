import { useEffect, useRef, useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { obtenirChapitre, NB_QUESTIONS_EXAMEN, DUREE_EXAMEN_SECONDES } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import { useMinuteur } from "../hooks/useMinuteur";
import { calculerScore, piocherAleatoire } from "../utils/scoring";
import QuestionQCM from "../components/QuestionQCM";
import QuestionTrou from "../components/QuestionTrou";
import Minuteur from "../components/Minuteur";
import Bouton from "../components/Bouton";
import "./PageExamen.css";

function PageExamen() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapitre = obtenirChapitre(id);
  const { estConnecte, estChapitreDebloque, validerExamen } = useProgression();

  const [questions] = useState(() =>
    chapitre ? piocherAleatoire(chapitre.examen, NB_QUESTIONS_EXAMEN) : []
  );
  const [indexQuestion, setIndexQuestion] = useState(0);
  const [reponses, setReponses] = useState({});

  const reponsesRef = useRef(reponses);
  const soumisRef = useRef(false);
  useEffect(() => {
    reponsesRef.current = reponses;
  }, [reponses]);

  function soumettre(reponsesFinales) {
    if (soumisRef.current || !chapitre) return;
    soumisRef.current = true;
    const { correctes, total } = calculerScore(questions, reponsesFinales);
    const resultat = validerExamen(chapitre.id, correctes, total);
    navigate("/resultat", {
      replace: true,
      state: { ...resultat, type: "examen", chapitreId: chapitre.id, chapitreTitre: chapitre.titre },
    });
  }

  const secondesRestantes = useMinuteur(DUREE_EXAMEN_SECONDES, () => soumettre(reponsesRef.current));

  if (!estConnecte) return <Navigate to="/profil" replace />;
  if (!chapitre) return <Navigate to="/" replace />;
  if (!estChapitreDebloque(chapitre.id)) return <Navigate to="/" replace />;

  const question = questions[indexQuestion];
  const reponseActuelle = reponses[question.id];
  const reponseVide = reponseActuelle === undefined || reponseActuelle === "";
  const estDerniere = indexQuestion === questions.length - 1;

  function choisir(valeur) {
    setReponses((avant) => ({ ...avant, [question.id]: valeur }));
  }

  function suivant() {
    if (estDerniere) {
      soumettre(reponses);
    } else {
      setIndexQuestion((avant) => avant + 1);
    }
  }

  return (
    <div className="page page-examen">
      <div className="page-examen__entete">
        <span className="etiquette">
          Examen · {indexQuestion + 1} / {questions.length}
        </span>
        <Minuteur secondesRestantes={secondesRestantes} dureeInitiale={DUREE_EXAMEN_SECONDES} />
      </div>

      <p className="page-examen__avertissement">Si tu quittes cette page, l'examen sera annulé.</p>

      <div className="page-examen__question">
        {question.type === "qcm" ? (
          <QuestionQCM question={question} reponse={reponseActuelle} aValide={false} onChanger={choisir} />
        ) : (
          <QuestionTrou
            question={question}
            reponse={reponseActuelle}
            aValide={false}
            estCorrecte={false}
            onChanger={choisir}
          />
        )}
      </div>

      <div className="page-examen__action">
        <Bouton onClick={suivant} pleineLargeur desactive={reponseVide}>
          {estDerniere ? "Terminer l'examen" : "Question suivante"}
        </Bouton>
      </div>
    </div>
  );
}

export default PageExamen;
