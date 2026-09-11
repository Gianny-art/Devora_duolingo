import "./QuestionQCM.css";

function QuestionQCM({ question, reponse, aValide, onChanger }) {
  return (
    <div className="question-qcm">
      <p className="question-qcm__enonce">{question.question}</p>
      <div className="question-qcm__options">
        {question.options.map((option, index) => {
          let classe = "question-qcm__option";
          if (reponse === index) classe += " question-qcm__option--selectionnee";
          if (aValide && index === question.reponse) classe += " question-qcm__option--correcte";
          if (aValide && reponse === index && index !== question.reponse) {
            classe += " question-qcm__option--incorrecte";
          }
          return (
            <button
              key={option}
              type="button"
              className={classe}
              onClick={() => !aValide && onChanger(index)}
              disabled={aValide}
            >
              {option}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default QuestionQCM;
