import { useState } from "react";
import "./App.css";
import Affichage from "./components/Affichage";
import CalcPad from "./components/CalcPad";
import HeaderCalc from "./components/HeaderCalc";

function App() {
  const [affichage, setAffichage] = useState("0");

  const valeurClick = (valeur) => {
    // alert("Valeur cliquée : ", valeur);
    if (valeur === "CE") {
      setAffichage("0");
    } else if (valeur === "◀️") {
      setAffichage((aff) => (aff.length > 1 ? aff.slice(0, -1) : "0"));
    } else if (valeur === "=") {
      // Calculation et affichage
      setAffichage("Resultat : " + eval(affichage));
    } else {
      setAffichage((aff) => (aff === "0" ? valeur : aff + valeur));
    }
  };
  return (
    <div className="min-h-screen">
      <h1 className="text-amber-300 mb-6">Calculatrice react</h1>
      <section className="border-red-600 border-2 w-full h-full container rounded-lg shadow-2xl gap-4 flex flex-col bg-indigo-950">
        <HeaderCalc />
        <Affichage expression={affichage} />
        <CalcPad onButtonClick={valeurClick} />
      </section>
    </div>
  );
}

export default App;
