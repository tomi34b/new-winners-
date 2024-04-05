import React from "react";
import { BiMale, BiFemale, BiMaleFemale } from "react-icons/bi";
import ProgressBar from "./ProgressBar";

const GenderDistribution = (props) => {
  const calculateValue = (gender) => {
    console.log(props);
    const total = props?.data?.male + props?.data?.female + props?.data?.others;

    if (isNaN(total)) return 0;

    let value = 0;
    switch (gender) {
      case "male":
        value = Math.round((props?.data?.male / total) * 100);
        break;
      case "female":
        value = Math.round((props?.data?.female / total) * 100);
        break;
      case "others":
        value = Math.round((props?.data?.others / total) * 100);
        break;

      default:
        break;
    }
    return value;
  };

  return (
    <div className="rounded-xl bg-white mt-8 p-5 pt-6 px-6 flex-1">
      <p className="text-black/50 font-semibold">Gender distribution</p>
      <div className="flex flex-col gap-y-5 mt-5">
        <div className="flex justify-start gap-4 items-center">
          <BiMale size={32} />
          <div className="w-full flex justify-between gap-2">
            <div className="w-full flex-col justify-between flex-1">
              <p className="text-sm font-semibold">Male</p>
              <ProgressBar percentage={calculateValue("male")} />
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <BiFemale size={32} />
          <div className="w-full flex justify-between gap-2">
            <div className="w-full flex-col justify-between flex-1">
              <p className="text-sm font-semibold">Female</p>
              <ProgressBar percentage={calculateValue("female")} />
            </div>
          </div>
        </div>
        <div className="flex justify-start gap-4 items-center">
          <BiMaleFemale size={32} />
          <div className="w-full flex justify-between gap-2">
            <div className="w-full flex-col justify-between flex-1">
              <p className="text-sm font-semibold">Others</p>
              <ProgressBar percentage={calculateValue("others")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GenderDistribution;
