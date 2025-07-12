import { useEffect, useState } from "react";
import Key from "./Key";
import PreviewScreen from "./PreviewScreen";

const Keyboard = () => {
  const [currentKey, setCurrentKey] = useState("");

  useEffect(() => {
    window.addEventListener("keypress", (e) => {
      e.preventDefault();
      setCurrentKey(e.key);
    });
  }, []);

  useEffect(() => {
    if (currentKey == "") return;

    const timerId = setTimeout(() => {
      setCurrentKey("");
    }, 300);

    return () => {
      clearTimeout(timerId);
    };
  }, [currentKey]);

  return (
    <>
      <div className="w-[1060px] bg-emerald-50 h-[360px] rounded-2xl px-2 py-2 drop-shadow-xl drop-shadow-neutral-300 space-y-2.5 border border-neutral-300">
        <div className="flex items-center space-x-2.5">
          <Key
            isPressed={currentKey === "Escape"}
            lowerColor="bg-orange-600"
            upperColor="bg-orange-500 drop-shadow-orange-700"
            text="Esc"
          />
          <Key isPressed={currentKey === "1"} text="1" />
          <Key isPressed={currentKey === "2"} text="2" />
          <Key isPressed={currentKey === "3"} text="3" />
          <Key isPressed={currentKey === "4"} text="4" />
          <Key
            isPressed={currentKey === "5"}
            text="5"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
          <Key
            isPressed={currentKey === "6"}
            text="6"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
          <Key
            isPressed={currentKey === "7"}
            text="7"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
          <Key
            isPressed={currentKey === "8"}
            text="8"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
          <Key isPressed={currentKey === "9"} text="9" />
          <Key isPressed={currentKey === "0"} text="0" />
          <Key isPressed={currentKey === "-"} text="-" />
          <Key isPressed={currentKey === "="} text="=" />
          <Key
            isPressed={currentKey === "Back"}
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            width="100px"
            text="Back"
          />
          <Key
            isPressed={currentKey === "Num"}
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            text="Num"
          />
        </div>
        <div className="flex items-center space-x-2.5">
          <Key
            isPressed={currentKey === "Tab"}
            text="Tab"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            width="90px"
          />
          <Key isPressed={currentKey === "q"} text="Q" />
          <Key isPressed={currentKey === "w"} text="W" />
          <Key isPressed={currentKey === "e"} text="E" />
          <Key isPressed={currentKey === "r"} text="R" />
          <Key isPressed={currentKey === "t"} text="T" />
          <Key isPressed={currentKey === "y"} text="Y" />
          <Key isPressed={currentKey === "u"} text="U" />
          <Key isPressed={currentKey === "i"} text="I" />
          <Key isPressed={currentKey === "o"} text="O" />
          <Key isPressed={currentKey === "p"} text="P" />
          <Key isPressed={currentKey === "["} text="[" />
          <Key isPressed={currentKey === "]"} text="]" />
          <Key isPressed={currentKey === "\\"} text="\" width="90px" />
          <Key
            isPressed={currentKey === "Delete"}
            text="Del"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
        </div>
        <div className="flex items-center space-x-2.5">
          <Key
            isPressed={currentKey === "Capilock"}
            text="Caps"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            width="110px"
            innerWidth="77%"
          />
          <Key isPressed={currentKey === "a"} text="A" />
          <Key isPressed={currentKey === "s"} text="S" />
          <Key isPressed={currentKey === "d"} text="D" />
          <Key isPressed={currentKey === "f"} text="F" />
          <Key isPressed={currentKey === "g"} text="G" />
          <Key isPressed={currentKey === "h"} text="H" />
          <Key isPressed={currentKey === "j"} text="J" />
          <Key isPressed={currentKey === "k"} text="K" />
          <Key isPressed={currentKey === "l"} text="L" />
          <Key isPressed={currentKey === ";"} text=";" />
          <Key isPressed={currentKey === "'"} text="'" />
          <Key
            isPressed={currentKey === "Enter"}
            text="Enter"
            lowerColor="bg-orange-600"
            upperColor="bg-orange-500 drop-shadow-orange-700"
            width="130px"
            innerWidth="85%"
          />
          <Key
            isPressed={currentKey === "PgUp"}
            text="PgUp"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
          />
        </div>
        <div className="flex items-center space-x-2.5">
          <Key
            isPressed={currentKey === "Shift"}
            text="Shift"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            width="150px"
            innerWidth="80%"
          />
          <Key isPressed={currentKey === "z"} text="Z" />
          <Key isPressed={currentKey === "x"} text="X" />
          <Key isPressed={currentKey === "c"} text="C" />
          <Key isPressed={currentKey === "v"} text="V" />
          <Key isPressed={currentKey === "b"} text="B" />
          <Key isPressed={currentKey === "n"} text="N" />
          <Key isPressed={currentKey === "m"} text="M" />
          <Key isPressed={currentKey === ","} text="," />
          <Key isPressed={currentKey === "."} text="." />
          <Key isPressed={currentKey === "/"} text="/" />

          <Key
            isPressed={currentKey === "Shift"}
            text="Shift"
            lowerColor="bg-gray-500"
            upperColor="bg-gray-400"
            width="100px"
          />
          <Key text="↑" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="PgDn" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
        </div>
        <div className="flex items-center space-x-2.5">
          <Key text="Ctrl" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="Win" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="Alt" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key
            isPressed={currentKey === " "}
            text=""
            lowerColor="bg-orange-600"
            upperColor="bg-orange-500 drop-shadow-orange-700"
            width="440px"
            innerWidth="95%"
            pressScale="90%"
          />

          <Key text="Alt" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="Fn" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="Ctrl" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="←" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="↓" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
          <Key text="→" lowerColor="bg-gray-500" upperColor="bg-gray-400" />
        </div>
      </div>
      <PreviewScreen currentKey={currentKey} />
    </>
  );
};

export default Keyboard;
