import "./QuestionTrou.css";

function QuestionTrou({ question, reponse, aValide, estCorrecte, onChanger }) {
  let classe = "question-trou__champ";
  if (aValide) {
    classe += estCorrecte ? " question-trou__champ--correcte" : " question-trou__champ--incorrecte";
  }

  return (
    <div className="question-trou">
      <p className="question-trou__enonce">{question.question}</p>
      <input
        type="text"
        className={classe}
        value={reponse || ""}
        onChange={(evenement) => onChanger(evenement.target.value)}
        disabled={aValide}
        placeholder="Ta réponse..."
        autoComplete="off"
      />
      {aValide && !estCorrecte && (
        <p className="question-trou__correction">
          Réponse attendue : <strong>{question.reponse}</strong>
        </p>
      )}
    </div>
  );
}

export default QuestionTrou;
