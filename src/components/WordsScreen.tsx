import { useEffect, useState } from "react";
import { getWords } from "../utils/words";

const WordsScreen = () => {
    const [currentKey, setCurrentKey] = useState<string>("")
  const [str, setStr] = useState<string>("");
  const [typedStr, setTypedStr] = useState<string>("");

  useEffect(() => {
    setStr(getWords());

    window.addEventListener("keydown", (e) => {
        setCurrentKey(e.key)
    });
  }, []);



  useEffect(() => {

    if(!currentKey)
        return;

      if (str.charAt(0) == currentKey) {
        setTypedStr(typedStr + currentKey);
        setStr(str.slice(1));
      }



      if(str.length == 0)
      {
        setStr(getWords())
        setTypedStr("")
      }


  }, [currentKey])

  return (
    <div className="w-[1000px] mb-16 text-center">
      <p className="text-4xl font-VT text-neutral-400">
        <span className="text-neutral-700">{typedStr}</span>
        {str}
      </p>
    </div>
  );
};

export default WordsScreen;
