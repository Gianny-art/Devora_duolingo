let contexteAudio = null;
let minuteurMusique = null;
let indexNoteMusique = 0;

const GAMME_FOND = [261.63, 329.63, 392.0, 493.88, 392.0, 329.63];

function obtenirContexte() {
  const ClasseAudioContext = window.AudioContext || window.webkitAudioContext;
  if (!ClasseAudioContext) return null;

  if (!contexteAudio) {
    contexteAudio = new ClasseAudioContext();
  }
  if (contexteAudio.state === "suspended") {
    contexteAudio.resume();
  }
  return contexteAudio;
}

function jouerNote(frequence, decalage, duree, volume, type) {
  const ctx = obtenirContexte();
  if (!ctx) return;

  const oscillateur = ctx.createOscillator();
  const gain = ctx.createGain();
  const debut = ctx.currentTime + decalage;

  oscillateur.type = type;
  oscillateur.frequency.value = frequence;

  gain.gain.setValueAtTime(0.0001, debut);
  gain.gain.exponentialRampToValueAtTime(volume, debut + 0.02);
  gain.gain.exponentialRampToValueAtTime(0.0001, debut + duree);

  oscillateur.connect(gain);
  gain.connect(ctx.destination);
  oscillateur.start(debut);
  oscillateur.stop(debut + duree + 0.05);
}

export function jouerSonSucces() {
  jouerNote(523.25, 0, 0.16, 0.22, "sine");
  jouerNote(659.25, 0.12, 0.18, 0.22, "sine");
  jouerNote(783.99, 0.24, 0.3, 0.22, "sine");
}

export function jouerSonErreur() {
  jouerNote(220, 0, 0.2, 0.18, "sawtooth");
  jouerNote(174.61, 0.14, 0.28, 0.18, "sawtooth");
}

export function demarrerMusiqueFond() {
  const ctx = obtenirContexte();
  if (!ctx || minuteurMusique) return;

  const jouerProchaineNote = () => {
    const frequence = GAMME_FOND[indexNoteMusique % GAMME_FOND.length];
    jouerNote(frequence / 2, 0, 1.7, 0.045, "sine");
    indexNoteMusique += 1;
  };

  jouerProchaineNote();
  minuteurMusique = setInterval(jouerProchaineNote, 1450);
}

export function arreterMusiqueFond() {
  if (minuteurMusique) {
    clearInterval(minuteurMusique);
    minuteurMusique = null;
  }
  indexNoteMusique = 0;
}
