import { useEffect } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { obtenirChapitre } from "../data/chapitres";
import { useProgression } from "../hooks/useProgression";
import { useSon, useMusiqueDePage } from "../hooks/useSon";
import { useLectureVoix } from "../hooks/useLectureVoix";
import Bouton from "../components/Bouton";
import Mascotte from "../components/Mascotte";
import BoutonSon from "../components/BoutonSon";
import BoutonLireVoix from "../components/BoutonLireVoix";
import "./PageLecon.css";

function PageLecon() {
  const { id, leconId } = useParams();
  const navigate = useNavigate();
  const chapitre = obtenirChapitre(id);
  const { estConnecte, profil, estChapitreDebloque, marquerLeconVue } = useProgression();
  const { musiqueActivee, basculerMusique } = useSon();
  const lectureVoix = useLectureVoix();
  useMusiqueDePage(musiqueActivee);

  const index = chapitre ? chapitre.lecons.findIndex((lecon) => lecon.id === leconId) : -1;
  const lecon = index >= 0 ? chapitre.lecons[index] : null;

  useEffect(() => {
    if (chapitre && lecon) {
      marquerLeconVue(chapitre.id, lecon.id);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chapitre?.id, lecon?.id]);

  if (!estConnecte) return <Navigate to="/profil" replace />;
  if (!chapitre || !lecon) return <Navigate to="/" replace />;
  if (!estChapitreDebloque(chapitre.id)) return <Navigate to="/" replace />;

  const leconSuivante = chapitre.lecons[index + 1];

  function continuer() {
    if (leconSuivante) {
      navigate(`/chapitre/${chapitre.id}/lecon/${leconSuivante.id}`);
    } else {
      navigate(`/chapitre/${chapitre.id}`);
    }
  }

  return (
    <div className="page page-lecon">
      <div className="page-lecon__entete">
        <Link to={`/chapitre/${chapitre.id}`} className="page-chapitre__retour">
          ← Retour au chapitre
        </Link>
        <BoutonSon actif={musiqueActivee} onClick={basculerMusique} />
      </div>

      <span className="etiquette">
        Leçon {index + 1} / {chapitre.lecons.length}
      </span>

      <div className="page-lecon__mascotte">
        <Mascotte pose="reflechit" taille={80} couleur={profil?.couleurMascotte} />
      </div>

      <h1 className="titre-page">{lecon.titre}</h1>
      <p className="page-lecon__contenu">{lecon.contenu}</p>

      <div className="page-lecon__lecture">
        <BoutonLireVoix texte={`${lecon.titre}. ${lecon.contenu}`} lectureVoix={lectureVoix} />
      </div>

      <Bouton onClick={continuer} pleineLargeur>
        {leconSuivante ? "Leçon suivante" : "Retour au chapitre"}
      </Bouton>
    </div>
  );
}

export default PageLecon;
