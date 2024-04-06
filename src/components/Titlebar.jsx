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

  const navigateToProfile = () => {
    navigate("/dashboard/profile");
  };

  return (
    <div className="h-fit mb-4 flex justify-between w-full py-4 px-4 sticky top-0 bg-[#eeeeee] z-10 border-b border-[#272727] flex-wrap gap-y-3 gap-10">
      <div className="flex gap-1 flex-nowrap items-center w-fit cursor-pointer">
        <div className="w-[240px] sm:w-[278px] h-10 rounded-full relative flex justify-center items-center">
          <input
            className="block w-full h-full rounded-full bg-[#E4E4E4] pl-10 font-urbanist"
            placeholder="Search for attendant"
          />
          <IoSearch className="absolute left-3 top-[10px] text-gray-400 text-xl" />
        </div>
      </div>
      <div
        className="flex gap-2 sm:gap-4 translate-x-8 md:mr-4 md:pr-0 min-[480px]:translate-x-0 pr-8 sm:mr-8 items-center relative justify-end flex-1"
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
            <PiUserCircleLight
              className="w-full h-full object-contain"
              onClick={navigateToProfile}
            />
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
      </div>
    </div>
  );
};

export default TitleBar;
