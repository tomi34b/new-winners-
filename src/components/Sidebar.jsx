import { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import winnersLogo from "../assets/sidebar/winners-logo.svg";
import hamburgerMenu from "../assets/sidebar/menu.svg";
import closeMenu from "../assets/sidebar/close.svg";
import { handleLogout } from "../utils/index";
import { AuthContext } from "../context/AuthProvider";

/* eslint-disable react/prop-types */
const Sidebar = ({ sidebarItems }) => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const [currentTabIndex, setCurrentTabIndex] = useState(0);
  const [indicatorPosition, setIndicatorPosition] = useState(0);
  const [showMenu, setShowMenu] = useState(false);

  const { logout } = useContext(AuthContext);

  const handleLogout = () => {
    logout();
    // navigate("/login");
  };

  const activeIconStyling = (route) => {
    if (pathname.includes(route)) {
      return "";
    } else if (route.includes("/logout")) {
      return "";
    } else {
      return "brightness-0 invert";
    }
  };

  const activeTextStyling = (route) => {
    if (pathname.includes(route)) {
      return "text-dull-white";
    } else if (route.includes("/logout")) {
      return "text-dull-white";
    } else {
      return "text-dull-white";
    }
  };

  // calculate currentpageindex on page mount.
  useEffect(() => {
    if (pathname.includes("overview")) {
      setCurrentTabIndex(0);
    } else if (pathname.includes("members")) {
      setCurrentTabIndex(1);
    } else if (pathname.includes("profile")) {
      setCurrentTabIndex(2);
    } else {
      setCurrentTabIndex(0);
    }
  }, [pathname]);

  // calculate currentpageindex on page mount.
  useEffect(() => {
    if (pathname.includes("overview")) {
      setCurrentTabIndex(0);
    } else if (pathname.includes("cases")) {
      setCurrentTabIndex(1);
    } else if (pathname.includes("report")) {
      setCurrentTabIndex(2);
    } else if (pathname.includes("notifications")) {
      setCurrentTabIndex(3);
    } else if (pathname.includes("settings")) {
      setCurrentTabIndex(4);
    } else if (pathname.includes("help")) {
      setCurrentTabIndex(5);
    } else if (pathname.includes("logout")) {
      setCurrentTabIndex(6);
    }
  }, [pathname]);

  //   calculate current tab index on tab click
  useEffect(() => {
    setIndicatorPosition(
      currentTabIndex === 0
        ? "0"
        : currentTabIndex > 1
        ? `calc(${currentTabIndex * 1.5}rem + ${
            currentTabIndex * 1.75
          }rem + 140px)`
        : `calc(${currentTabIndex * 1.5}rem + ${currentTabIndex * 1.75}rem)`
    );
  }, [currentTabIndex]);

  return (
    // sidebar container
    <>
      {/* Sidebar for big screens */}
      <div className="w-[clamp(240px,20%,305px)] min-w-[200px] hidden fixed md:block md:sticky h-screen mx-0 top-0 bg-black">
        {/* sidebar */}
        <div className="w-full h-full pt-10 rounded-[1.25rem] relative bg-primary-black poppins flex flex-col">
          <div className="w-full px-2 pl-8 flex flex-col items-start justify-center font-bold text-base gap-y-1">
            <img
              src={"/winners-logo.svg"}
              className="w-[180px] cursor-pointer"
              onClick={() => navigate("/dashboard")}
            />
          </div>
          <div className="w-full flex flex-col items-start pl-6 gap-y-7 relative mt-12 flex-1 overflow-scroll pb-20 hide-scrollbar">
            {sidebarItems.map((sidebarItem, i) => {
              return (
                <button
                  key={sidebarItem.title}
                  className={`flex w-[80%] gap-x-3 items-center relative p-4 py-3 z-[1] transition-all duration-300 rounded-[20px] ${
                    currentTabIndex === i ? "bg-red-500" : ""
                  }`}
                  aria-label={sidebarItem.title}
                  onClick={() => {
                    setCurrentTabIndex(i);
                    i === 3
                      ? handleLogout()
                      : navigate(`/${sidebarItem.route}`);
                  }}
                  //   style={{
                  //     marginTop: i == 2 ? "140px" : "",
                  //   }}
                >
                  <img
                    src={sidebarItem.icon}
                    className={`h-5 brightness ${activeIconStyling(
                      sidebarItem.route
                    )}`}
                    style={{
                      transition: "all 300ms ease",
                    }}
                  />
                  <p
                    className={`hidden sm:block text-base font-normal font-manrope ${activeTextStyling(
                      sidebarItem.route
                    )}`}
                    style={{
                      transition: "all 300ms ease",
                    }}
                  >
                    {sidebarItem.title}
                  </p>
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {/* Sidebar for small screens */}
      {/* menu button for small screens */}

      {/* menu button */}
      <button
        aria-label="Menu"
        onClick={() => setShowMenu(!showMenu)}
        className="fixed md:hidden z-20 top-4 sm:top-4 right-2 sm:right-4 p-2 rounded-md bg-project-blue"
      >
        <img
          src={showMenu ? closeMenu : hamburgerMenu}
          className="h-6 invert"
        />
      </button>

      <div
        className="w-screen h-screen fixed backdrop-blur z-20 bg-[rgba(0,0,0,0.5)] sm:hidden"
        style={{
          width: showMenu ? "100%" : "0",
          opacity: showMenu ? "1" : "0",
          transition: "all 200ms ease-in-out",
        }}
      >
        {/* menu button */}
        <button
          aria-label="Menu"
          onClick={() => setShowMenu(!showMenu)}
          className="absolute top-4 right-2 p-2 rounded-md bg-project-blue "
        >
          <img
            src={showMenu ? closeMenu : hamburgerMenu}
            className="h-6 invert"
          />
        </button>
        <div
          className="w-[clamp(200px,80%,255px)] left-0 fixed md:hidden md:sticky h-screen ml-0 top-0 z-20"
          style={{
            width: showMenu ? "clamp(200px,80%,255px)" : "0",
            left: showMenu ? "0" : "-100%",
            transition: "all 200ms ease-in-out",
            boxShadow: "5px 7px 12px rgba(0,0,0,0.3)",
          }}
        >
          {/* sidebar */}
          <div
            style={{
              width: showMenu ? "100%" : "100%",
              left: showMenu ? "0" : "-100%",
              transition: "all 200ms ease-in-out",
              boxShadow: "5px 7px 12px rgba(0,0,0,0.3)",
            }}
            className="w-full h-full py-10 relative bg-primary-black bg-project-blue bg-black"
          >
            {/* sidebar */}
            <div className="w-full bg-black h-full pt-6 rounded-[1.25rem] relative bg-primary-black poppins flex flex-col">
              <div className="w-full px-2 flex flex-col items-center justify-center font-bold text-base gap-y-1">
                <img src={winnersLogo} className="w-[80%]" />
              </div>
              <div className="w-full pl-3 flex flex-col gap-y-7 relative mt-12 flex-1 overflow-scroll pb-20 hide-scrollbar">
                {sidebarItems.map((sidebarItem, i) => {
                  return (
                    <button
                      key={sidebarItem.title}
                      className={`flex w-[80%] gap-x-3 items-center relative p-4 py-3 z-[1] transition-all duration-300 rounded-[20px] ${
                        currentTabIndex === i ? "bg-red-500" : ""
                      }`}
                      aria-label={sidebarItem.title}
                      onClick={() => {
                        setCurrentTabIndex(i);
                        i === 3
                          ? handleLogout()
                          : navigate(`/${sidebarItem.route}`);
                      }}
                      //   style={{
                      //     marginTop: i == 2 ? "140px" : "",
                      //   }}
                    >
                      <img
                        src={sidebarItem.icon}
                        className={`h-5 brightness ${activeIconStyling(
                          sidebarItem.route
                        )}`}
                        style={{
                          transition: "all 300ms ease",
                        }}
                      />
                      <p
                        className={`block sm:hidden text-base font-normal font-manrope ${activeTextStyling(
                          sidebarItem.route
                        )}`}
                        style={{
                          transition: "all 300ms ease",
                        }}
                      >
                        {sidebarItem.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
