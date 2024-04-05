// import { logo } from "../../../../assets";
// import search from "../../../../assets/titlebar/search.svg";
// import notification from "../../../../assets/titlebar/notification.svg";
// import placeholder from "../../../../assets/titlebar/placeholder-avatar.svg";
import {
  IoNotificationsOutline,
  IoSearch,
  IoSettingsOutline,
} from "react-icons/io5";
import { useLocation, useNavigate } from "react-router-dom";
import winnersLogo from "../assets/sidebar/winners-logo.svg";
import { PiUserCircleLight } from "react-icons/pi";
import { useContext, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { useOutsideCloser } from "../hooks/useOutsideCloser";
import { AuthContext } from "../context/AuthProvider";

const TitleBar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const profileMenuRef = useRef();
  const [showProfileMenu, setShowProfileMenu] = useState(false);

  const { user } = useContext(AuthContext);

  useOutsideCloser(profileMenuRef, showProfileMenu, setShowProfileMenu);

  const navigateToOverview = () => {
    navigate("/dashboard/overview");
  };

  return (
    <div className="h-fit mb-4 flex justify-between w-full py-4 px-4 sticky top-0 bg-[#eeeeee] z-10 border-b border-[#272727]">
      <div
        className="flex gap-1 flex-nowrap items-center w-fit cursor-pointer"
        onClick={navigateToOverview}
      >
        <div className="w-[278px] h-10 rounded-full relative flex justify-center items-center">
          <input
            className="block w-full h-full rounded-full bg-[#E4E4E4] pl-10 font-urbanist"
            placeholder="Search for attendant"
          />
          <IoSearch className="absolute left-3 top-[10px] text-gray-400 text-xl" />
        </div>
      </div>
      <div
        className="flex gap-2 sm:gap-4 mr-4 items-center relative"
        ref={profileMenuRef}
      >
        <div className="size-10 rounded-full bg-white flex items-center justify-center">
          <IoSettingsOutline className="text-xl" />
        </div>
        <div className="size-10 rounded-full bg-white flex items-center justify-center">
          <IoNotificationsOutline className="text-xl" />
        </div>
        <button
          aria-label="Profile"
          className="flex flex-nowrap gap-2 items-center hover:bg-project-gray-2 transition-all rounded p-0"
          onClick={() => setShowProfileMenu(!showProfileMenu)}
        >
          <div className="size-10 rounded-full bg-project-gray-2 relative bg-white">
            {/* profile image */}
            <PiUserCircleLight className="w-full h-full object-contain" />
            {/* status indicator */}
          </div>
          {/* <div className="font-poppins flex flex-col justify-between items-start">
            <p className="font-inter hidden sm:block text-sm">{user?.name}</p>
            <p className="font-inter hidden sm:block text-sm text-gray-500">
              {user?.id_number}
            </p>
          </div> */}
          {/* <IoChevronDown
            className={
              showProfileMenu
                ? "w-3 rotate-180 transition-all"
                : "w-3 transition-all"
            }
          /> */}
        </button>
        {/* Profile menu */}
        <AnimatePresence>
          {showProfileMenu && (
            <motion.div
              initial={{ opacity: 0, translateY: -10 }}
              animate={{ opacity: 1, translateY: 0 }}
              exit={{ opacity: 0, translateY: -10 }}
              className="absolute flex flex-col gap-y-1 text-xs top-14 border border-solid border-project-gray min-w-[240px] right-0 py-2 px-2 bg-white shadow-lg w-full rounded"
            >
              <p className="w-full border-b border-solid border-project-gray-2 pb-1 font-poppins font-semibold">
                Account Details
              </p>
              <div className="flex flex-col gap-y-1 mt-2">
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Name:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {user?.name}
                  </span>
                </div>
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  ID:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {user?.id_number}
                  </span>
                </div>
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Email:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {user?.email}
                  </span>
                </div>
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Account Status:{" "}
                  <span
                    className={`whitespace-nowrap font-normal ${
                      user?.disabled
                        ? "bg-yellow-200 text-yellow-700"
                        : "bg-green-200 text-green-700"
                    } rounded-full inline-flex p-1 w-fit px-2`}
                  >
                    {user?.disabled ? "Disabled" : "Enabled"}
                  </span>
                </div>
              </div>
              <p className="w-full border-b border-solid border-project-gray-2 pb-1 font-poppins font-semibold mt-2">
                Division Information
              </p>
              <div className="flex flex-col gap-y-1 mt-2">
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Division Location:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {divisionData.currentData?.data[0]?.division_location}
                  </span>
                </div>
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Division Code:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {divisionData.currentData?.data[0]?.division_code}
                  </span>
                </div>
                <div className="font-poppins text-project-emerald font-medium whitespace-nowrap overflow-hidden text-ellipsis">
                  Division ID:{" "}
                  <span className="whitespace-nowrap font-normal">
                    {divisionData.currentData?.data[0]?.division_id}
                  </span>
                </div>
              </div>
              <button
                aria-label="View Profile"
                className="p-2 rounded bg-project-gray hover:bg-project-blue w-full flex justify-center items-center transition-all group mt-2"
              >
                <span className="font-poppins text-project-blue font-semibold text-xs group-hover:text-white">
                  View Profile
                </span>
              </button>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default TitleBar;
