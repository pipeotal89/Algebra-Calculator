"use client";

import "../globals.css";
import { useRouter } from "next/navigation";

export default function BackButton() {
  const router = useRouter();

  return (
    <div className="w-full h-15 my-4">
      <div className="h-full mx-8 my-6 px-4">
        <button
          className="h-full w-45 px-8 rounded-xl text-left bg-secondary-700 hover:bg-secondary-900 cursor-pointer"
          onClick={() => router.push("/")}
        >
          <p className="text-center font-general text-button text-main-500">
            &lt; &nbsp; Volver
          </p>
        </button>
      </div>
    </div>
  );
}
