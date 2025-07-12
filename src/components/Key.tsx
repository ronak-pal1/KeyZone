const Key = ({
  text = "Q",
  lowerColor = "bg-neutral-100",
  upperColor = "bg-neutral-50",
  width = "60px",
  innerWidth = "70%",
  isPressed = false,
  pressScale = "80%",
}: {
  text: string;
  lowerColor?: string;
  upperColor?: string;
  width?: string;
  innerWidth?: string;
  isPressed?: boolean;
  pressScale?: string;
}) => {
  return (
    <div
      className={` transition ${
        isPressed ? `scale-[${pressScale}] brightness-95 ` : "scale-100"
      }  h-[60px] ${lowerColor}  drop-shadow-neutral-400 drop-shadow-lg rounded-lg inset-shadow-sm inset-shadow-neutral-200 flex items-center justify-center`}
      style={{ width }}
    >
      <div
        className={`h-[70%] drop-shadow-neutral-200 ${upperColor} drop-shadow-sm  rounded-sm`}
        style={{ width: innerWidth }}
      >
        <p className="mt-1 ml-1.5 text-neutral-600 text-[12px] font-semibold">
          {text}
        </p>
      </div>
    </div>
  );
};

export default Key;
