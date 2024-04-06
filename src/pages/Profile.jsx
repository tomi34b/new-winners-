import React from "react";
import useGetRequest from "../hooks/useGetRequest";
import { baseURL } from "../constants/url";

const Profile = () => {
  const { data, isLoading, error } = useGetRequest(baseURL + "/api/v1/user/me");

  console.log(data);
  return (
    <div className="p-6 flex-col gap-y-4 font-urbanist">
      <div className="flex flex-wrap gap-x-2">
        <p className="font-bold">Full name:</p>
        <p>{data?.user?.fullname}</p>
      </div>
      <div className="flex flex-wrap gap-x-2">
        <p className="font-bold">Email:</p>
        <p>{data?.user?.email}</p>
      </div>
    </div>
  );
};

export default Profile;
