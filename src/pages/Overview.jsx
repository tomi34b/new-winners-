import React from "react";
import SummaryCard from "../components/SummaryCard";
import BarChart from "../components/BarChart";
import GenderDistribution from "../components/GenderDistribution";
import AdditionalInfo from "../components/AdditionalInfo";
import useGetRequest from "../hooks/useGetRequest";

const Overview = () => {
  const {
    data: membersCount,
    isLoading: isMembersLoading,
    error: membersError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/members_count"
  );
  const {
    data: baptizedCount,
    isLoading: isBaptizedLoading,
    error: baptizedError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/baptized_members_count"
  );
  const {
    data: unbaptizedCount,
    isLoading: isUnbaptizedLoading,
    error: unbaptizedError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/unbaptized_members_count"
  );
  const {
    data: firstTimersPerMonth,
    isLoading: isFirstTimersPerMonthLoading,
    error: firstTimersPerMonthError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/first_timers_per_month"
  );
  const {
    data: genderDistribution,
    isLoading: isGenderDistributionLoading,
    error: genderDistributionError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/gender_distribution"
  );
  const {
    data: additionalInfo,
    isLoading: isAdditionalInfoLoading,
    error: additionalInfoError,
  } = useGetRequest(
    "https://first-timers-api.onrender.com/api/v1/dashboard/additional_info"
  );

  return (
    <div className="px-2 sm:p-6 pt-4 bg-100 w-full">
      <p className="font-bold font-urbanist text-2xl">Overview</p>
      <div className="">
        {/* <div className="w-full overflow-hidden hidden"> */}
        <div className="flex justify-between overflow-x-auto space-x-4 p-4 w-[calc(100vw-32px)] md:w-[calc(100vw-(clamp(10px+240px,20vw,305px)))] h-full overflow-scroll px-2 sm:px-2">
          <SummaryCard
            title="New members"
            subTitle="Overall"
            count={membersCount?.count}
            increment="3"
          />
          <SummaryCard
            title="Baptized"
            subTitle="Monthly"
            count={baptizedCount?.count}
            increment="3"
          />
          <SummaryCard
            title="Unbaptized"
            subTitle="Weekly"
            count={unbaptizedCount?.count}
            increment="3"
          />
        </div>
        {/* </div> */}
      </div>
      <div className="p-5 rounded-xl mt-10 bg-white relative h-fit mx-auto w-[calc(100vw-32px)] md:w-[calc(100vw-(clamp(10px+240px,20vw,305px)))]">
        <div className="flex justify-between py-3 border-b">
          <p className="">Average first timers per month</p>
        </div>
        <BarChart data={firstTimersPerMonth?.data} />
      </div>
      <div className="flex sm:flex-nowrap flex-wrap gap-y-3 sm:gap-6 mt-8 mb-10">
        <GenderDistribution data={genderDistribution?.data} />
        <AdditionalInfo data={additionalInfo?.data} />
      </div>
    </div>
  );
};

export default Overview;
