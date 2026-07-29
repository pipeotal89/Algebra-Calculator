"use client";

import "../../globals.css";
import BackButton from "../../components/back-button";
import { useState } from "react";
import MultivariableEcuation from "../../components/multivariable-ecuation";
const math = require("mathjs");

export default function SecondOperation() {
  const [selected, setSelected] = useState(1);
  const [matrix, setMatrix] = useState([
    [0, 0, 0],
    [0, 0, 0],
    [0, 0, 0],
  ]);
  const [constants, setConstants] = useState([0, 0, 0]);
  const [result, setResult] = useState(Array<Array<number>>());
  const [resultVis, setResultVis] = useState(false);
  const [errorMsgVis, setErrorMsgVis] = useState(false);
  const handleChange = (e) => {
    setSelected(e.target.value);
    setMatrix([
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
    ]);
    setConstants([0, 0, 0]);
    setResultVis(false);
  };
  const listResult = result.map((r, index) => (
    <li
      key={index}
      className="w-full py-2 justify-center text-center font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500"
    >
      {(() => {
        if (index <= selected - 1) {
          switch (index) {
            case 0:
              return `x = ${r[0].toFixed(2).replace(/[.,]00$/, "")}`;
            case 1:
              return `y = ${r[0].toFixed(2).replace(/[.,]00$/, "")}`;
            case 2:
              return `z = ${r[0].toFixed(2).replace(/[.,]00$/, "")}`;
            default:
              return `Test`;
          }
        }
      })()}
    </li>
  ));

  function calculateResult() {
    setResult(math.lusolve(matrix, constants));
    setResultVis(true);
    console.log(result);
  }

  function updateVariable(e, pos, index) {
    if (index == 3) {
      setConstants((oldConstants) => {
        const newConstants = [...oldConstants];
        newConstants[pos] = e.target.value;
        return newConstants;
      });
    } else {
      setMatrix((oldMatrix) => {
        const newMatrix = [...oldMatrix];
        newMatrix[pos][index] = e.target.value;
        return newMatrix;
      });
    }
  }

  return (
    <div className="w-full min-h-screen bg-secondary-500">
      <div className="w-full py-5 px-5">
        <div className="flex md:flex-row flex-col pb-5">
          <div className="w-1/5">
            <BackButton />
          </div>
          <div className="md:w-3/5 w-full">
            <h1 className="pt-4 text-center font-general text-titlesm lg:text-title md:text-titlemd text-main-500">
              Sistemas simples de una o más variables
            </h1>
          </div>
          <div className="w-1/5"></div>
        </div>
        <div className="md:pl-10 w-full md:py-15 py-5 flex justify-left md:flex-row flex-col">
          <h1 className="text-center font-general lg:text-button md:text-buttonmd sm:text-buttonsm text-main-500">
            1. Por favor selecciona la cantidad de variables/ecuaciones del
            sistema &nbsp; &nbsp; &nbsp;
          </h1>
          <div className="md:w-30 w-full flex justify-center">
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
        </div>
        <div className="md:pl-10 w-full py-5 flex justify-left">
          <h1 className="text-center font-general lg:text-button md:text-buttonmd sm:text-buttonsm text-main-500">
            2. Ahora completa los valores de las ecuaciones:
          </h1>
        </div>
        <MultivariableEcuation
          selected={selected}
          updateVariable={updateVariable}
          matrix={matrix}
          position={0}
          constants={constants}
        />
        {selected >= 2 ? (
          <MultivariableEcuation
            selected={selected}
            updateVariable={updateVariable}
            matrix={matrix}
            position={1}
            constants={constants}
          />
        ) : (
          ""
        )}
        {selected >= 3 ? (
          <MultivariableEcuation
            selected={selected}
            updateVariable={updateVariable}
            matrix={matrix}
            position={2}
            constants={constants}
          />
        ) : (
          ""
        )}
        <div className="w-full py-5 flex justify-center">
          <button
            className="h-15 w-70 px-8 rounded-xl text-left bg-secondary-700 hover:bg-secondary-900 cursor-pointer"
            onClick={calculateResult}
          >
            <p className="text-center font-general text-button text-main-500">
              Calcular
            </p>
          </button>
        </div>
        <div
          className={`${resultVis ? "" : "hidden"} w-full py-5 justify-center`}
        >
          <h1 className="text-center font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500">
            Los valores de las variables para el polinomio ingresado son:
          </h1>
          <ul className="w-full py-5 justify-center">{listResult}</ul>
        </div>
        <div
          className={`${errorMsgVis ? "" : "hidden"} w-full py-5 justify-center`}
        >
          <h1 className="text-center font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500">
            Error. Al menos un valor acompañado de X debería ser diferente de 0
          </h1>
        </div>
      </div>
    </div>
  );
}
