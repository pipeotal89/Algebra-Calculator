"use client";

import "../../globals.css";
import BackButton from "../../components/back-button";
import { useState } from "react";

export default function FirstOperation() {
  const [selected, setSelected] = useState(1);
  const handleChange = (e) => {
    console.log(e.target.value);
    setSelected(e.target.value);
  };
  return (
    <div className="w-full min-h-screen bg-secondary-500">
      <div className="w-full py-5">
        <div className="columns-3 pb-10">
          <BackButton />
          <h1 className="pt-4 text-center font-general text-title text-main-500">
            Valores de X en un Polinomio
          </h1>
        </div>
        <div className="pl-20 w-full py-15 flex justify-left">
          <h1 className="text-center font-general text-button text-main-500">
            1. Por favor selecciona el grado del polinomio &nbsp; &nbsp; &nbsp;
          </h1>
          <select
            name="selectedFruit"
            className="text-button border-none bg-main-500 w-15"
            value={selected}
            onChange={(e) => handleChange(e)}
          >
            <option>1</option>
            <option>2</option>
            <option>3</option>
            <option>4</option>
            <option>5</option>
          </select>
        </div>
        <div className="pl-20 w-full py-5 flex justify-left">
          <h1 className="text-center font-general text-button text-main-500">
            2. Ahora agrega los valores de tu polinomio:
          </h1>
        </div>
        <div className="w-full py-5 px-50 flex justify-center">
          <div className={`columns-${2 * (selected - 1) + 1} w-full`}>
            <div className="w-full flex justify-center">
              {selected >= 5 ? "x^5" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 5 ? "+" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 4 ? "x^4" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 4 ? "+" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 3 ? "x^3" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 3 ? "+" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 2 ? "x^2" : ""}
            </div>
            <div className="w-full flex justify-center">
              {selected >= 2 ? "+" : ""}
            </div>
            <div className="w-full flex justify-center">x</div>
          </div>
        </div>
      </div>
    </div>
  );
}
