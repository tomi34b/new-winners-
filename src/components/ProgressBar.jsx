import { useEffect } from "react";

const ProgressBar = (props) => {
  useEffect(() => {}, [props.percentage]);
  return (
    <div className="w-full flex gap-x-4 items-center">
      <div className="w-full h-3 rounded-full bg-gradient-to-br from-[#FFBF1A]/20 to-[#FF4080]/20 relative overflow-hidden">
        <div
          style={{ width: `${props.percentage}%` }}
          className={`transition-all absolute left-0 top-0 h-full bg-gradient-to-br from-[#FFBF1A] to-[#FF4080] rounded-full`}
        />
      </div>
      <div className="text-black/75 flex gap-x-2 items-center font-semibold min-w-[90px] justify-between">
        <span>{props.percentage}%</span>
        <img src="/arrow-up.svg" />
      </div>
    </div>
  );
};

export default ProgressBar;
