import { useEffect, useState } from "react";

const PreviewScreen = ({ currentKey }: { currentKey: string }) => {
  const [previewText, setPreviewText] = useState<string>("");

  useEffect(() => {
    if (previewText.length <= 7) setPreviewText(previewText + currentKey);
    else setPreviewText(currentKey);

    if (previewText == "") return;

    const timerId = setTimeout(() => {
      setPreviewText("");
    }, 500);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentKey]);

  return (
    <div
      className={` ${
        previewText != "" ? "absolute" : "hidden"
      } bottom-4 right-8 w-44 h-16 bg-neutral-700 rounded-sm opacity-70`}
    >
      <div className="w-full h-full flex items-center justify-center">
        <p className="text-3xl text-white  font-VT ">{previewText}</p>
      </div>
    </div>
  );
};

export default PreviewScreen;
