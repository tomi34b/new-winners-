import React from "react";

const AdditionalInfo = (props) => {
  return (
    <div className="rounded-xl bg-white mt-8 p-5 px-7 pt-6 flex-1">
      <p className="text-black/50 font-semibold">Additional Info</p>
      <div className="flex flex-col gap-y-5 mt-5">
        <div className="flex gap-x-5 justify-start">
          <div className="flex-[0.5]">Worshiped with us before?</div>
          <div className="flex flex-[0.5] justify-between">
            <div className="flex gap-2 items-center">
              <p>{props?.data?.worshipped_with_us}</p>
              <div className="flex justify-center items-center w-10 py-2 rounded border">
                Yes
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p>{props?.data?.not_worshipped_with_us}</p>

              <div className="flex justify-center items-center w-10 py-2 rounded border">
                No
              </div>
            </div>
          </div>
        </div>
        <div className="flex gap-x-5 justify-start">
          <div className="flex-[0.5]">Attended Word of Faith Bible school?</div>
          <div className="flex flex-[0.5] justify-between">
            <div className="flex gap-2 items-center">
              <p>{props?.data?.attended_word_of_faith_bible_school}</p>
              <div className="flex justify-center items-center w-10 py-2 rounded border">
                Yes
              </div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <p>{props?.data?.not_attended_word_of_faith_bible_school}</p>

              <div className="flex justify-center items-center w-10 py-2 rounded border">
                No
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInfo;
