import { GoArrowUpRight } from "react-icons/go";
import { PiArrowLineUpRightLight } from "react-icons/pi";

const SummaryCard = (props) => {
  return (
    <div className="relative overflow-hidden w-[337px] h-[178px] rounded-lg border-l-4 border-red-500 bg-[#1E1E1E] px-7 pt-4">
      <div className="rounded-full bg-[#29C5EE]/30 size-[147px] blur-xl absolute -top-10 right-0" />
      <div className="rounded-full bg-white/40 size-[45px] z-[1] absolute top-6 right-6 flex justify-center items-center">
        <PiArrowLineUpRightLight className="text-2xl text-white" />
      </div>
      <p className="text-[17px] font-bold text-white font-urbanist">
        {props.title}
      </p>
      <p className="text-xs font-normal text-gray-400 font-urbanist">
        {props.title}
      </p>
      <p className="text-4xl mt-4 font-bold text-white font-urbanist">
        {props.count}
      </p>
      <p className="text-xs font-normal text-gray-400 font-urbanist">Members</p>
      <div className="mt-4 flex gap-x-4 items-center">
        <div className="flex gap-x-1 items-center">
          <GoArrowUpRight className="text-green-500 text-xs" />
          <span className="text-xs font-urbanist text-gray-400">
            {props.increment}%
          </span>
        </div>
        <div className="flex gap-x-1 items-center">
          <span className="text-xs font-urbanist text-gray-400">
            +12 New members
          </span>
        </div>
      </div>
    </div>
  );
};

export default SummaryCard;
