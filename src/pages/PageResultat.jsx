import { useEffect, useState } from "react";
import { Link, Navigate, useLocation } from "react-router-dom";
import { useProgression } from "../hooks/useProgression";
import { useSon } from "../hooks/useSon";
import { genererPdfResultat } from "../utils/pdf";
import CarteResultat from "../components/CarteResultat";
import Bouton from "../components/Bouton";
import BarreNavBasse from "../components/BarreNavBasse";
import "./PageResultat.css";

function PageResultat() {
  const location = useLocation();
  const { estConnecte, profil } = useProgression();
  const { jouerSonSucces, jouerSonErreur } = useSon();
  const [messagePartage, setMessagePartage] = useState("");
  const aReussiResultat = location.state?.aReussi;

  useEffect(() => {
    if (aReussiResultat === undefined) return;
    if (aReussiResultat) jouerSonSucces();
    else jouerSonErreur();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (!estConnecte) return <Navigate to="/profil" replace />;
  if (!location.state) return <Navigate to="/" replace />;

  const { pourcentage, aReussi, xpGagne, type, chapitreId, chapitreTitre } = location.state;

  function telechargerPdf() {
    genererPdfResultat({
      pseudo: profil.pseudo,
      chapitreTitre: `Chapitre ${chapitreId} · ${chapitreTitre}`,
      type,
      pourcentage,
      aReussi,
      xpGagne,
    });
  }

  async function partager() {
    const texte = `Je viens d'obtenir ${pourcentage}% au ${
      type === "examen" ? "examen" : "quiz"
    } du chapitre "${chapitreTitre}" sur DEVora !`;

    if (navigator.share) {
      try {
        await navigator.share({ text: texte, title: "DEVora" });
      } catch {
        // partage annulé par l'utilisateur : rien à faire
      }
      return;
    }

    try {
      await navigator.clipboard.writeText(texte);
      setMessagePartage("Copié dans le presse-papiers !");
    } catch {
      setMessagePartage(texte);
    }
  }

  return (
    <div className="page page-resultat">
      <span className="etiquette">{type === "examen" ? "Résultat d'examen" : "Résultat de quiz"}</span>
      <h1 className="titre-page">{chapitreTitre}</h1>

      <div className="page-resultat__carte">
        <CarteResultat pourcentage={pourcentage} aReussi={aReussi} xpGagne={xpGagne} />
      </div>

      <div className="page-resultat__actions">
        <Bouton onClick={telechargerPdf} pleineLargeur>
          Télécharger le PDF
        </Bouton>
        <Bouton onClick={partager} variante="secondaire" pleineLargeur>
          Partager
        </Bouton>
        {messagePartage && <p className="page-resultat__message">{messagePartage}</p>}
        <Link to={`/chapitre/${chapitreId}`}>
          <Bouton variante="fantome" pleineLargeur>
            Retour au chapitre
          </Bouton>
        </Link>
      </div>

      <BarreNavBasse />
    </div>
  );
}

export default PageResultat;
