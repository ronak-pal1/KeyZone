const Key = ({
  text = "Q",
  lowerColor = "bg-neutral-100",
  upperColor = "bg-neutral-50",
  width = "60px",
  innerWidth = "70%",
  isPressed = false,
  pressScale = "80%",
  isTextCentered = false,
}: {
  text: string;
  lowerColor?: string;
  upperColor?: string;
  width?: string;
  innerWidth?: string;
  isPressed?: boolean;
  pressScale?: string;
  isTextCentered?:boolean;
}) => {
  return (
    <div
      className={` transition ${
        isPressed ? ` brightness-95 ` : "brightness-100"
      }  h-[60px] ${lowerColor}  drop-shadow-neutral-400 drop-shadow-lg rounded-lg inset-shadow-sm inset-shadow-neutral-200 flex items-center justify-center`}
      style={{ width, scale:isPressed?pressScale:"100%" }}
    >
      <div
        className={`h-[70%] drop-shadow-neutral-200 ${upperColor} drop-shadow-sm  rounded-sm ${isTextCentered && "flex items-center justify-center"}`}
        style={{ width: innerWidth }}
      >
        <p className={`${!isTextCentered && "mt-1 ml-1.5"}  text-neutral-600 text-[12px] font-semibold`}>
          {text}
        </p>
      </div>
    </div>
  );
};

export default Key;
