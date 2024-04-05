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
    <div className="p-6 pt-4 bg-100">
      <p className="font-bold font-urbanist text-2xl">Overview</p>
      <div className="flex justify-between gap-5 mt-5 overflow-x-scroll">
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
      <div className="p-5 rounded-xl mt-10 bg-white">
        <div className="flex justify-between py-3 border-b">
          <p className="">Average first timers per month</p>
        </div>
        <BarChart data={firstTimersPerMonth?.data} />
      </div>
      <div className="flex gap-6 mt-8">
        <GenderDistribution data={genderDistribution?.data} />
        <AdditionalInfo data={additionalInfo?.data} />
      </div>
    </div>
  );
};

export default Overview;
