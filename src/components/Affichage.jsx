import React from "react";

export default function Affichage({ expression }) {
  return (
    <div>
      <form className="border-2 border-amber-100 h-24 mt-4 rounded-lg flex pt-10 w-full px-1">
        <input
          type="text"
          className="text-white text-5xl text-right bg-transparent"
          value={expression}
          readOnly
        />
      </form>
    </div>
  );
}
