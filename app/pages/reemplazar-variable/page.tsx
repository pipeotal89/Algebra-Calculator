"use client";

import "../../globals.css";
import BackButton from "../../components/back-button";
import { useState } from "react";
import FunctionButton from "../../components/function-button";
const math = require("mathjs");

export default function ThirdOperation() {
  const [expression, setExpression] = useState("");
  const [caret, setCaret] = useState(0);
  const { ref, updateCaret } = useCaretPosition();

  const handleExpression = (e) => {
    setCaret(e.target.selectionStart);
    setExpression(e.target.value);
  };

  const handleClick = (e) => {
    setCaret(e.target.selectionStart);
  };

  function addToFormula(value) {
    setExpression(expression.slice(0, caret) + value + expression.slice(caret));
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
              Evaluación de una ecuación de hasta dos variables
            </h1>
          </div>
        </div>
        <div className="md:pl-10 w-full md:py-15 py-5 flex justify-left md:flex-row flex-col">
          <h1 className="text-center font-general lg:text-button md:text-buttonmd sm:text-buttonsm text-main-500">
            1. Por favor ingresa la ecuación a evaluar
          </h1>
        </div>
        <div className="md:ph-10 w-full py-5 flex justify-center">
          <div className="w-150 grid grid-cols-4 gap-10">
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(sin(Valor en Rad))"
              text="Sin"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(cos(Valor en Rad))"
              text="Cos"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(tan (Valor en Rad))"
              text="Tan"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(snthRoot(Valor, Raíz))"
              text="&#8730;"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(log(Valor, Base))"
              text="Log"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="(Base^Potencia)"
              text="^"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="pi"
              text="&#x3C0;"
            />
            <FunctionButton
              addToFormula={(value) => addToFormula(value)}
              value="((Dividendo)/(Divisor))"
              text="a/b"
            />
          </div>
        </div>
        <div className="md:ph-10 w-full md:py-10 py-5 flex justify-center">
          <input
            className="break-normal overflow-y-hidden px-2 bg-main-500 lg:w-150 md:w-150 w-200 h-10 break-words"
            value={expression}
            onChange={(e) => handleExpression(e)}
            onClick={(e) => handleClick(e)}
            onKeyUp={(e) => handleClick(e)}
            placeholder="Escribe la función"
          />
        </div>
      </div>
    </div>
  );
}
