import "./globals.css";
import ClickableBox from "./components/clickable-box";

const operations = [
  "Valores de X en un Polinomio",
  "Sistemas simples de dos variables",
  "Reemplazar variable en una función",
  "Simplificar ecuaciones de una variable",
  "Graficar una función de una variable",
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
        <ClickableBox operation={item} key={item} />
      ))}
    </div>
  );
}
