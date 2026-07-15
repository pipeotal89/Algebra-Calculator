"use client";

import "../globals.css";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full h-10 lg:h-12 md:h-10 my-4">
      <div className="h-full my-6 pl-3">
        <button
          className="h-full lg:w-35 md:w-30 w-24 rounded-xl text-left bg-secondary-700 hover:bg-secondary-900 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <p className="text-center font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500">
            &lt; &nbsp; Volver
          </p>
        </button>
      </div>
    </div>
  );
}
