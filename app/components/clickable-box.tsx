import "../globals.css";

interface ClickableBoxProps extends React.PropsWithChildren {
  operation: string;
}

export default function ClickableBox({ operation }: ClickableBoxProps) {
  return (
    <div className="w-full h-25">
      <div className="h-full mx-8 my-6 px-4">
        <button className="h-full w-full px-8 rounded-xl bg-secondary-500 hover:bg-secondary-700 cursor-pointer">
          <div className="columns-2">
            <p className="text-left font-general text-button text-main-500">
              {operation}
            </p>
            <p className="text-right font-general text-button text-main-500">
              &gt;
            </p>
          </div>
        </button>
      </div>
    </div>
  );
}
