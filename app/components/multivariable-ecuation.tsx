"use client";

import "../globals.css";
import { useState } from "react";
const math = require("mathjs");

interface MultiVariableEcuationProps extends React.PropsWithChildren {
  selected: number;
  updateVariable: Function;
  matrix: Array<Array<number>>;
  constants: Array<number>;
  position: number;
}

export default function MultivariableEcuation({
  selected,
  updateVariable,
  matrix,
  constants,
  position,
}: MultiVariableEcuationProps) {
  function updateArray(e, pos, index) {
    updateVariable(e, pos, index);
  }

  return (
    <div className="w-full md:py-10 py-2 flex md:flex-row flex-col justify-center items-center">
      <div className="flex flex-row my-3">
        <div className="flex justify-center lg:mx-8 md:mx-5 mx-3">
          <label>
            <input
              className="bg-main-500 lg:w-20 md:w-15 w-15"
              value={matrix[position][0]}
              onChange={(e) => updateArray(e, position, 0)}
            />
            &nbsp; &nbsp; &nbsp; &nbsp; x
          </label>
        </div>
        <div className="flex justify-center lg:mx-5 md:mx-2 mx-5">
          {selected == 1 ? "=" : "+"}
        </div>
      </div>
      {selected >= 2 ? (
        <div className="flex flex-row my-3">
          <div className="flex justify-center lg:mx-8 md:mx-5 mx-3">
            <label>
              <input
                className="bg-main-500 lg:w-20 md:w-15 w-15"
                value={matrix[position][1]}
                onChange={(e) => updateArray(e, position, 1)}
              />
              &nbsp; &nbsp; y
            </label>
          </div>
          <div className="flex justify-center lg:mx-5 md:mx-2 mx-5">
            {selected == 2 ? "=" : "+"}
          </div>
        </div>
      ) : (
        ""
      )}
      {selected >= 3 ? (
        <div className="flex flex-row my-3">
          <div className="flex justify-center lg:mx-8 md:mx-5 mx-3">
            <label>
              <input
                className="bg-main-500 lg:w-20 md:w-15 w-15"
                value={matrix[position][2]}
                onChange={(e) => updateArray(e, position, 2)}
              />
              &nbsp; &nbsp; z
            </label>
          </div>
          <div className="flex justify-center lg:mx-5 md:mx-2 mx-5">=</div>
        </div>
      ) : (
        ""
      )}
      <div className="flex flex-row my-3">
        <div className="flex justify-center lg:mx-8 md:mx-5 mx-2">
          <label>
            <input
              className="bg-main-500 lg:w-20 md:w-15 w-15"
              value={constants[position]}
              onChange={(e) => updateArray(e, position, 3)}
            />
            &nbsp; &nbsp;
          </label>
        </div>
      </div>
    </div>
  );
}
