import React from "react";
import SummaryCard from "../components/SummaryCard";
import Table from "../components/Table";
import YearDropdown from "../components/YearDropdown";
import useGetRequest from "../hooks/useGetRequest";
import { baseURL } from "../constants/url";

const Members = () => {
  const {
    data: membersCount,
    isLoading: isMembersLoading,
    error: membersError,
  } = useGetRequest(baseURL + "/api/v1/dashboard/members_count");
  const {
    data: baptizedCount,
    isLoading: isBaptizedLoading,
    error: baptizedError,
  } = useGetRequest(baseURL + "/api/v1/dashboard/baptized_members_count");
  const {
    data: unbaptizedCount,
    isLoading: isUnbaptizedLoading,
    error: unbaptizedError,
  } = useGetRequest(baseURL + "/api/v1/dashboard/unbaptized_members_count");
  const {
    data: firstTimers,
    isLoading: isFirstTimersLoading,
    error: firstTimersError,
  } = useGetRequest(baseURL + "/api/v1/first_timer");

  return (
    <div className="p-6 px-2 sm:px-6 pt-4 bg-100 relative">
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
      <div className="flex justify-between items-center mt-10">
        <p className="font-bold font-urbanist text-2xl">Congregation</p>
        <YearDropdown />
      </div>
      <div className="p-5 rounded-xl mt-5 bg-white overflow-auto w-[calc(100vw-32px)] md:w-[calc(100vw-(10px+clamp(240px,16vw,305px)))]">
        <Table data={firstTimers} />
      </div>
    </div>
  );
};

export default Members;
