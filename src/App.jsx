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
    <div className="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 className="text-amber-300 mb-12 text-2xl md:text-3xl font-bold">
        Calculatrice react Fairytale
      </h1>
      <section className="  p-1.5 border-1 border-gray-800 w-full h-full container rounded-lg shadow-2xl gap-4 flex flex-col bg-indigo-950">
        <HeaderCalc />
        <Affichage expression={affichage} className="w-full" />
        <CalcPad onButtonClick={valeurClick} />
      </section>
    </div>
  );
}

export default App;
