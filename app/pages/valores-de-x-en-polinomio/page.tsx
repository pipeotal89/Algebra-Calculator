"use client";

import "../../globals.css";
import BackButton from "../../components/back-button";
import { useState } from "react";
const math = require("mathjs");

interface ComplexNumber {
  re: number;
  im: number;
}

export default function FirstOperation() {
  const [selected, setSelected] = useState(1);
  const [polinomy, setPolinomy] = useState([0, 0, 0, 0]);
  const [result, setResult] = useState<Array<ComplexNumber>>([]);
  const [resultVis, setResultVis] = useState(false);
  const [errorMsgVis, setErrorMsgVis] = useState(false);
  const handleChange = (e) => {
    setSelected(e.target.value);
    setPolinomy([0, 0, 0, 0]);
  };
  const listResult = result.map((r, index) => (
    <li
      key={index}
      className="w-full py-2 justify-center text-center font-general text-button text-main-500"
    >
      &#8226; &nbsp; &nbsp;
      {r.im == 0
        ? r.re.toFixed(2).replace(/[.,]00$/, "")
        : r.re.toFixed(2).replace(/[.,]00$/, "") +
          (r.im < 0 ? " - " : " + ") +
          Math.abs(r.im)
            .toFixed(2)
            .replace(/[.,]00$/, "") +
          "j"}
    </li>
  ));

  function updateArray(e, index) {
    setPolinomy((oldPolinomy) => {
      const newPolinomy = [...oldPolinomy];
      newPolinomy[index] = e.target.value;
      return newPolinomy;
    });
  }

  function calculateRoots() {
    var resultTransformed: Array<ComplexNumber> = [];
    if (polinomy[1] == 0 && polinomy[2] == 0 && polinomy[3] == 0) {
      setErrorMsgVis(true);
      setResultVis(false);
    } else {
      setErrorMsgVis(false);
      var temp = math.polynomialRoot(
        polinomy[0],
        polinomy[1],
        polinomy[2],
        polinomy[3],
      );
      temp.forEach((value, index) => {
        resultTransformed[index] = math.complex(value);
      });
    }
    setResult(resultTransformed);
    setResultVis(true);
  }

  return (
    <div className="w-full min-h-screen bg-secondary-500">
      <div className="w-full py-5">
        <div className="columns-3 pb-10">
          <BackButton />
          <h1 className="pt-6 text-center font-general text-title text-main-500">
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
          </select>
        </div>
        <div className="pl-20 w-full py-5 flex justify-left">
          <h1 className="text-center font-general text-button text-main-500">
            2. Ahora agrega los valores de tu polinomio:
          </h1>
        </div>
        <div className="w-full py-10 flex flex-row justify-center items-center">
          {selected >= 3 ? (
            <div className="flex flex-row">
              <div className="flex justify-center mx-10">
                <label>
                  <input
                    className="bg-main-500 w-20"
                    value={polinomy[3]}
                    onChange={(e) => updateArray(e, 3)}
                  />
                  &nbsp; &nbsp; x^3
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
                  <input
                    className="bg-main-500 w-20"
                    value={polinomy[2]}
                    onChange={(e) => updateArray(e, 2)}
                  />
                  &nbsp; &nbsp; x^2
                </label>
              </div>
              <div className="flex justify-center mx-5">+</div>
            </div>
          ) : (
            ""
          )}
          <div className="flex justify-center mx-5">
            <label>
              <input
                className="bg-main-500 w-20"
                value={polinomy[1]}
                onChange={(e) => updateArray(e, 1)}
              />
              &nbsp; &nbsp; x
            </label>
          </div>
          <div className="flex justify-center mx-5">+</div>
          <div className="flex justify-center mx-5">
            <label>
              <input
                className="bg-main-500 w-20"
                value={polinomy[0]}
                onChange={(e) => updateArray(e, 0)}
              />
              &nbsp; &nbsp;
            </label>
          </div>
          <div className="flex justify-center mx-5">=</div>
          <div className="flex justify-center mx-5">0</div>
        </div>
        <div className="w-full py-5 flex justify-center">
          <button
            className="h-15 w-70 px-8 rounded-xl text-left bg-secondary-700 hover:bg-secondary-900 cursor-pointer"
            onClick={() => calculateRoots()}
          >
            <p className="text-center font-general text-button text-main-500">
              Calcular
            </p>
          </button>
        </div>
        <div
          className={`${resultVis ? "" : "hidden"} w-full py-5 justify-center`}
        >
          <h1 className="text-center font-general text-button text-main-500">
            Los valores de X para el polinomio ingresado son:
          </h1>
          <ul className="w-full py-5 justify-center">{listResult}</ul>
        </div>
        <div
          className={`${errorMsgVis ? "" : "hidden"} w-full py-5 justify-center`}
        >
          <h1 className="text-center font-general text-button text-main-500">
            Error. Al menos un valor acompañado de X debería ser diferente de 0
          </h1>
        </div>
      </div>
    </div>
  );
}
