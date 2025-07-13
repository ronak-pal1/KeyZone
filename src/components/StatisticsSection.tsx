import { useEffect, useState } from "react";

const StatisticsSection = ({
  accuracy,
  speed,
}: {
  accuracy: string;
  speed: string;
}) => {
  const [previousAccuracy, setPreviousAccuracy] = useState<string>("");
  const [previousSpeed, setPreviousSpeed] = useState<string>("");
  const [diffAccuracy, setDiffAccuracy] = useState<string>("");
  const [diffSpeed, setDiffSpeed] = useState<string>("");

  useEffect(() => {
    if (!previousAccuracy) {
      setPreviousAccuracy(accuracy);
      return;
    }

    console.log(previousAccuracy, accuracy);

    setDiffAccuracy(
      (parseFloat(accuracy) - parseFloat(previousAccuracy)).toFixed(2)
    );
  }, [accuracy]);

  useEffect(() => {
    if (!previousSpeed) {
      setPreviousSpeed(speed);
      return;
    }
    setDiffSpeed((parseFloat(speed) - parseFloat(previousSpeed)).toFixed(2));
  }, [speed]);

  return (
    <div className="w-[1000px] mb-7 pb-4 flex items-center justify-evenly text-xl font-VT border-b border-neutral-300">
      <p>
        Speed:{" "}
        {speed ? (
          speed + " WPM"
        ) : (
          <span className="text-base text-neutral-500">No data</span>
        )}{" "}
        {diffSpeed && (
          <span
            className={` ${
              parseFloat(diffSpeed) >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ({parseFloat(diffSpeed) >= 0 ? "↑" : "↓"} {diffSpeed} WPM)
          </span>
        )}
      </p>
      <p>
        Accuray:{" "}
        {accuracy ? (
          accuracy + "%"
        ) : (
          <span className="text-base text-neutral-500">No data</span>
        )}{" "}
        {diffAccuracy && (
          <span
            className={` ${
              parseFloat(diffAccuracy) >= 0 ? "text-green-600" : "text-red-600"
            }`}
          >
            ({parseFloat(diffAccuracy) >= 0 ? "↑" : "↓"} {diffAccuracy} %)
          </span>
        )}
      </p>
      {/* <p>Score: 1214 <span className="text-green-600">(↑ 1725)</span></p> */}
      <p>
        Score: <span className="text-base text-neutral-500">Coming soon</span>
      </p>
    </div>
  );
};

export default StatisticsSection;
