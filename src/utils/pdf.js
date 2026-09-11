import { jsPDF } from "jspdf";

const COULEUR_PRIMAIRE = [79, 70, 229];
const COULEUR_ACCENT = [245, 158, 11];
const COULEUR_TEXTE = [31, 32, 51];
const COULEUR_TEXTE_DOUX = [107, 109, 133];

function formaterDateLongue(date) {
  return date.toLocaleDateString("fr-FR", { year: "numeric", month: "long", day: "numeric" });
}

export function genererPdfResultat({ pseudo, chapitreTitre, type, pourcentage, aReussi, xpGagne }) {
  const doc = new jsPDF({ orientation: "landscape", unit: "mm", format: "a5" });
  const largeur = doc.internal.pageSize.getWidth();
  const hauteur = doc.internal.pageSize.getHeight();
  const centreX = largeur / 2;

  doc.setDrawColor(...COULEUR_PRIMAIRE);
  doc.setLineWidth(1.5);
  doc.rect(6, 6, largeur - 12, hauteur - 12);

  doc.setFillColor(...COULEUR_PRIMAIRE);
  doc.circle(centreX, 24, 9, "F");
  doc.setFillColor(255, 255, 255);
  doc.circle(centreX - 3, 22, 1.6, "F");
  doc.circle(centreX + 3, 22, 1.6, "F");
  doc.setFillColor(...COULEUR_ACCENT);
  doc.triangle(centreX - 1.5, 26, centreX + 1.5, 26, centreX, 29, "F");

  doc.setTextColor(...COULEUR_PRIMAIRE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(22);
  doc.text("DEVora", centreX, 42, { align: "center" });

  doc.setTextColor(...COULEUR_TEXTE_DOUX);
  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  const libelleType = type === "examen" ? "Certificat de réussite d'examen" : "Résultat de quiz";
  doc.text(libelleType, centreX, 50, { align: "center" });

  doc.setTextColor(...COULEUR_TEXTE);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(16);
  doc.text(pseudo || "Apprenant DEVora", centreX, 64, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(12);
  doc.text(chapitreTitre, centreX, 72, { align: "center" });

  doc.setFont("helvetica", "bold");
  doc.setFontSize(28);
  doc.setTextColor(...(aReussi ? COULEUR_PRIMAIRE : COULEUR_TEXTE_DOUX));
  doc.text(`${pourcentage}%`, centreX, 88, { align: "center" });

  doc.setFont("helvetica", "normal");
  doc.setFontSize(11);
  doc.setTextColor(...COULEUR_TEXTE_DOUX);
  doc.text(aReussi ? "Chapitre validé" : "Pas encore validé — réessaie !", centreX, 96, { align: "center" });
  doc.text(`+${xpGagne} XP gagnés`, centreX, 103, { align: "center" });

  doc.setFontSize(9);
  doc.text(formaterDateLongue(new Date()), centreX, hauteur - 10, { align: "center" });

  doc.save(`devora-resultat-${type}-${Date.now()}.pdf`);
}
