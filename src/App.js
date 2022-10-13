import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header/Header";
import Profil from "./pages/Profil";
import Accueil from "./pages/Accueil";
import Communaute from "./pages/Communaute";
import Reglage from "./pages/Reglage";

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Accueil />} />
          <Route path="/profil" element={<Profil />} />
          <Route path="/réglage" element={<Reglage />} />
          <Route path="/communauté" element={<Communaute />} />
        </Routes>
      </main>
    </div>
  );
}

export default App;
