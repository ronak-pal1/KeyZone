import { useEffect, useRef, useState } from "react";
import { getWords } from "../utils/words";
import StatisticsSection from "./StatisticsSection";

const WordsScreen = () => {
  const [currentKey, setCurrentKey] = useState<string>("");
  const [keyIndex, setKeyIndex] = useState<number>(0); // for rerendering everytime
  const [str, setStr] = useState<string>("");
  const [typedStr, setTypedStr] = useState<string>("");

  const [accuracy, setAccuracy] = useState<string>("");
  const [speed, setSpeed] = useState<string>("");
  const [wrongKeyCount, setWrongKeyCount] = useState<number>(0);
  const [startTime, setStartTime] = useState<number | null>(null);

  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const focusInput = () => {
      inputRef.current?.focus();
    };

    setStr(getWords());
    // Focus on mount
    focusInput();

    // Get Statistics
    setAccuracy(localStorage.getItem("accuracy") ?? "");
    setSpeed(localStorage.getItem("speed") ?? "");

    // Keep focus on click anywhere
    window.addEventListener("click", focusInput);

    return () => {
      window.removeEventListener("click", focusInput);
    };
  }, []);

  const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (!startTime) setStartTime(Date.now());

    const key = e.target.value.slice(-1);
    setCurrentKey(key);
    setKeyIndex(keyIndex + 1);
    e.target.value = "";
  };

  useEffect(() => {
    if (!currentKey) return;

    let currentWrongKey = "";

    if (str.charAt(0) == currentKey) {
      setTypedStr(typedStr + currentKey);
      setStr(str.slice(1));
      currentWrongKey = "";
    } else if (currentWrongKey != currentKey) {
      currentWrongKey = currentKey;
      setWrongKeyCount(wrongKeyCount + 1);
    }

    if (str.length == 0) {
      setAccuracy(
        (((typedStr.length - wrongKeyCount) * 100) / typedStr.length).toFixed(2)
      );

      localStorage.setItem(
        "accuracy",
        (((typedStr.length - wrongKeyCount) * 100) / typedStr.length).toFixed(2)
      );

      if (startTime) {
        const timeElapsed = (Date.now() - startTime) / 60000;

        setSpeed((typedStr.length / 5 / timeElapsed).toFixed(2));

        localStorage.setItem(
          "speed",
          (typedStr.length / 5 / timeElapsed).toFixed(2)
        );
      }

      setStartTime(null);
      setWrongKeyCount(0);
      setStr(getWords());
      setTypedStr("");
    }
  }, [keyIndex]);

  return (
    <div className="mt-24">
      <StatisticsSection accuracy={accuracy} speed={speed} />
      <div className="w-[1000px] text-center">
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
    </div>
  );
};

export default WordsScreen;
