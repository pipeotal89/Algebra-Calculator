import "./globals.css";
import ClickableBox from "./components/clickable-box";

const operations = [
  ["Valores de X en un Polinomio", "/valores-de-x-en-polinomio"],
  ["Sistemas simples de dos variables", "/sistemas-dos-variables"],
  ["Reemplazar variable en una función", "/reemplazar-variable"],
  ["Simplificar ecuaciones de una variable", "simplificar-ecuacion"],
  ["Graficar una función de una variable", "graficar-funcion"],
];

export default function Page() {
  return (
    <div className="w-full min-h-screen bg-main-500">
      <div className="w-full py-10">
        <h1 className="text-center font-general text-title text-tertiary-500">
          Calculadora de Álgebra
        </h1>
      </div>
      {operations.map((item) => (
        <ClickableBox operation={item[0]} url={item[1]} key={item[1]} />
      ))}
    </div>
  );
}
