"use client";

import "../globals.css";
import { useRouter } from "next/navigation";

interface ClickableBoxProps extends React.PropsWithChildren {
  operation: string;
  url: string;
}

export default function ClickableBox({ operation, url }: ClickableBoxProps) {
  const router = useRouter();

  return (
    <div className="w-full lg:h-25 md:h-20 h-18">
      <div className="h-full mx-8 my-6 px-4">
        <button
          className="h-full w-full px-8 rounded-xl bg-secondary-500 hover:bg-secondary-700 cursor-pointer"
          onClick={() => router.push("/pages" + url)}
        >
          <div className="flex columns-2 items-center">
            <p className="w-4/5 text-left font-general lg:text-button md:text-buttonmd sm:text-buttonsm text-main-500">
              {operation}
            </p>
            <p className="w-1/5 text-right font-general lg:text-button md:text-buttonmd text-buttonsm text-main-500">
              &gt;
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
