import overview from "../assets/sidebar/overview.svg";
import members from "../assets/sidebar/members.svg";
import profile from "../assets/sidebar/profile.svg";
import logout from "../assets/sidebar/logout.svg";

const sidebarItems = [
  {
    title: "Overview",
    route: "dashboard",
    icon: overview,
  },
  {
    title: "Members",
    route: "dashboard/members",
    icon: members,
  },
  {
    title: "Profile",
    route: "dashboard/profile",
    icon: profile,
  },
  {
    title: "Logout",
    route: "dashboard/logout",
    icon: logout,
  },
];

export default sidebarItems;
