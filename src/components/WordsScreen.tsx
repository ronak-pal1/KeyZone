import { useEffect, useRef, useState } from "react";
import { getWords } from "../utils/words";

const WordsScreen = () => {
  const [currentKey, setCurrentKey] = useState<string>("");
  const [keyIndex, setKeyIndex] = useState<number>(0); // for rerendering everytime
  const [str, setStr] = useState<string>("");
  const [typedStr, setTypedStr] = useState<string>("");

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = () => {
        console.log("yes")
      inputRef.current?.focus()
      console.log(inputRef.current)
    };

    setStr(getWords());
    // Focus on mount
    focusInput();

    // Keep focus on click anywhere
    window.addEventListener("click", focusInput);

    return () => {
      window.removeEventListener("click", focusInput);
    };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const key = e.target.value.slice(-1);
    setCurrentKey(key);
    setKeyIndex(keyIndex + 1);
    e.target.value = "";
  };

  useEffect(() => {
    if (!currentKey) return;

    if (str.charAt(0) == currentKey) {
      setTypedStr(typedStr + currentKey);
      setStr(str.slice(1));
    }

    if (str.length == 0) {
      setStr(getWords());
      setTypedStr("");
    }
  }, [keyIndex]);

  return (
    <div className="w-[1000px] mb-16 text-center">
      <input
        className="absolute opacity-0 z-0 left-0 top-0"
        type="text"
        ref={inputRef}
        autoFocus={true}
        onChange={(e) => {
          handleInput(e);
        }}
      />
      <p className="text-4xl font-VT text-neutral-400">
        <span className="text-neutral-700">{typedStr}</span>
        {str}
      </p>
    </div>
  );
};

export default WordsScreen;
