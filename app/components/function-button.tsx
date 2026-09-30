"use client";

import "../globals.css";
import { useRouter } from "next/navigation";

interface FunctionButtonProps extends React.PropsWithChildren {
  addToFormula: Function;
  value: string;
  text: string;
}

export default function FunctionButton({
  addToFormula,
  value,
  text,
}: FunctionButtonProps) {
  const router = useRouter();

  function addValueToFormula() {
    addToFormula(value);
  }

  return (
    <div className="w-full h-full">
      <div className="h-full">
        <button
          className="h-12 w-30 rounded-xl bg-secondary-700 hover:bg-secondary-900 cursor-pointer"
          onClick={() => addValueToFormula()}
        >
          <div className="flex columns-2 items-center">
            <p className="w-full text-center font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500">
              {text}
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
