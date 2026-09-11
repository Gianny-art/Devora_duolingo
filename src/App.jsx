import { Route, Routes } from "react-router-dom";
import PageParcours from "./pages/PageParcours";
import PageStats from "./pages/PageStats";
import PageRessources from "./pages/PageRessources";
import PageProfil from "./pages/PageProfil";
import PageChapitre from "./pages/PageChapitre";
import PageLecon from "./pages/PageLecon";
import PageQuiz from "./pages/PageQuiz";
import PageExamen from "./pages/PageExamen";
import PageResultat from "./pages/PageResultat";
import PageIntrouvable from "./pages/PageIntrouvable";

function App() {
  return (
    <Routes>
      <Route path="/" element={<PageParcours />} />
      <Route path="/stats" element={<PageStats />} />
      <Route path="/ressources" element={<PageRessources />} />
      <Route path="/profil" element={<PageProfil />} />
      <Route path="/chapitre/:id" element={<PageChapitre />} />
      <Route path="/chapitre/:id/lecon/:leconId" element={<PageLecon />} />
      <Route path="/chapitre/:id/quiz" element={<PageQuiz />} />
      <Route path="/chapitre/:id/examen" element={<PageExamen />} />
      <Route path="/resultat" element={<PageResultat />} />
      <Route path="*" element={<PageIntrouvable />} />
    </Routes>
  );
}

export default App;
