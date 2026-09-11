import { useState } from "react";
import { Navigate, useNavigate, useParams } from "react-router-dom";
import { obtenirChapitre } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import { useSon, useMusiqueDePage } from "../hooks/useSon";
import { useLectureVoix } from "../hooks/useLectureVoix";
import { reponseEstCorrecte } from "../utils/scoring";
import QuestionQCM from "../components/QuestionQCM";
import QuestionTrou from "../components/QuestionTrou";
import Bouton from "../components/Bouton";
import Mascotte from "../components/Mascotte";
import BoutonSon from "../components/BoutonSon";
import BoutonLireVoix from "../components/BoutonLireVoix";
import "./PageQuiz.css";

function PageQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const chapitre = obtenirChapitre(id);
  const { estConnecte, estChapitreDebloque, validerQuiz } = useProgression();
  const { musiqueActivee, basculerMusique, jouerSonSucces, jouerSonErreur } = useSon();
  const lectureVoix = useLectureVoix();
  useMusiqueDePage(musiqueActivee);

  const [indexQuestion, setIndexQuestion] = useState(0);
  const [reponse, setReponse] = useState(undefined);
  const [aValide, setAValide] = useState(false);
  const [correctesCount, setCorrectesCount] = useState(0);

  if (!estConnecte) return <Navigate to="/profil" replace />;
  if (!chapitre) return <Navigate to="/" replace />;
  if (!estChapitreDebloque(chapitre.id)) return <Navigate to="/" replace />;

  const questions = chapitre.quiz;
  const question = questions[indexQuestion];
  const estCorrecte = aValide ? reponseEstCorrecte(question, reponse) : false;
  const reponseVide = reponse === undefined || reponse === "";

  function valider() {
    if (reponseVide) return;
    const correcte = reponseEstCorrecte(question, reponse);
    setAValide(true);
    if (correcte) {
      setCorrectesCount((avant) => avant + 1);
      jouerSonSucces();
    } else {
      jouerSonErreur();
    }
  }

  function continuer() {
    const estDerniere = indexQuestion === questions.length - 1;
    if (!estDerniere) {
      setIndexQuestion((avant) => avant + 1);
      setReponse(undefined);
      setAValide(false);
      return;
    }
    const resultat = validerQuiz(chapitre.id, correctesCount, questions.length);
    navigate("/resultat", {
      replace: true,
      state: { ...resultat, type: "quiz", chapitreId: chapitre.id, chapitreTitre: chapitre.titre },
    });
  }

  return (
    <div className="page page-quiz">
      <div className="page-quiz__progression">
        <div className="page-quiz__barre">
          <div
            className="page-quiz__remplissage"
            style={{ width: `${(indexQuestion / questions.length) * 100}%` }}
          />
        </div>
        <span>
          {indexQuestion + 1} / {questions.length}
        </span>
        <BoutonSon actif={musiqueActivee} onClick={basculerMusique} />
      </div>

      <div className="page-quiz__lecture">
        <BoutonLireVoix texte={question.question} lectureVoix={lectureVoix} />
      </div>

      <div className="page-quiz__question">
        {question.type === "qcm" ? (
          <QuestionQCM question={question} reponse={reponse} aValide={aValide} onChanger={setReponse} />
        ) : (
          <QuestionTrou
            question={question}
            reponse={reponse}
            aValide={aValide}
            estCorrecte={estCorrecte}
            onChanger={setReponse}
          />
        )}
      </div>

      {aValide && (
        <div
          className={
            "page-quiz__retour" +
            (estCorrecte ? " page-quiz__retour--correct" : " page-quiz__retour--incorrect")
          }
        >
          <Mascotte pose={estCorrecte ? "content" : "triste"} taille={48} />
          <div>
            <p className="page-quiz__retour-titre">{estCorrecte ? "Bonne réponse !" : "Pas tout à fait."}</p>
            {question.explication && <p className="page-quiz__retour-texte">{question.explication}</p>}
          </div>
        </div>
      )}

      <div className="page-quiz__action">
        {!aValide ? (
          <Bouton onClick={valider} pleineLargeur desactive={reponseVide}>
            Valider
          </Bouton>
        ) : (
          <Bouton onClick={continuer} pleineLargeur>
            {indexQuestion === questions.length - 1 ? "Voir mon résultat" : "Continuer"}
          </Bouton>
        )}
      </div>
    </div>
  );
}

export default PageQuiz;
