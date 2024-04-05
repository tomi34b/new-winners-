import React from "react";
import SummaryCard from "../components/SummaryCard";
import Table from "../components/Table";
import YearDropdown from "../components/YearDropdown";
import useGetRequest from "../hooks/useGetRequest";

const Members = () => {
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
    data: firstTimers,
    isLoading: isFirstTimersLoading,
    error: firstTimersError,
  } = useGetRequest("https://first-timers-api.onrender.com/api/v1/first_timer");

  return (
    <div className="p-6 pt-4 bg-100">
      <div className="flex justify-between gap-x-5 mt-5">
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
      <div className="flex justify-between items-center mt-10">
        <p className="font-bold font-urbanist text-2xl">Congregation</p>
        <YearDropdown />
      </div>
      <div className="p-5 rounded-xl mt-5 bg-white">
        <Table data={firstTimers} />
      </div>
    </div>
  );
};

export default Members;
