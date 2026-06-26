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
        <div className="w-full py-10 flex flex-row justify-center items-center">
          {selected >= 5 ? (
            <div className="flex flex-row">
              <div className="flex justify-center mx-10">
                <label>
                  <input className="bg-main-500 w-20" /> &nbsp; &nbsp; x^5
                </label>
              </div>
              <div className="flex justify-center mx-5">+</div>
            </div>
          ) : (
            ""
          )}

          {selected >= 4 ? (
            <div className="flex flex-row">
              <div className="flex justify-center mx-10">
                <label>
                  <input className="bg-main-500 w-20" /> &nbsp; &nbsp; x^4
                </label>
              </div>
              <div className="flex justify-center mx-5">+</div>
            </div>
          ) : (
            ""
          )}
          {selected >= 3 ? (
            <div className="flex flex-row">
              <div className="flex justify-center mx-10">
                <label>
                  <input className="bg-main-500 w-20" /> &nbsp; &nbsp; x^3
                </label>
              </div>
              <div className="flex justify-center mx-5">+</div>
            </div>
          ) : (
            ""
          )}
          {selected >= 2 ? (
            <div className="flex flex-row">
              <div className="flex justify-center mx-10">
                <label>
                  <input className="bg-main-500 w-20" /> &nbsp; &nbsp; x^2
                </label>
              </div>
              <div className="flex justify-center mx-5">+</div>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center mx-5">
            <label>
              <input className="bg-main-500 w-20" /> &nbsp; &nbsp; x
            </label>
          </div>
          <div className="flex justify-center mx-5">=</div>
          <div className="flex justify-center mx-5">
            <label>
              <input className="bg-main-500 w-20" /> &nbsp; &nbsp;
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
