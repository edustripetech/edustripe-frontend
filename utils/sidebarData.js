import {
  Activities,
  Dashboard,
  Fees,
  Loan,
  Savings,
  Settings,
  ManageChildren
} from "../components/svg";

export default [
  {
    name: "Dashboard",
    Icon: Dashboard,
    link: "/"
  },
  {
    name: "Loan",
    Icon: Loan,
    link: "/loan"
  },
  // {
  //   name: "Fees",
  //   Icon: Fees,
  //   link: "/fees"
  // },
  {
    name: "Savings",
    Icon: Savings,
    link: "/savings"
  },
  // {
  //   name: "Activities",
  //   Icon: Activities,
  //   link: "/activities"
  // },
  // {
  //   name: "Manage children",
  //   Icon: ManageChildren,
  //   link: "/manage"
  // },
  {
    name: "Settings",
    Icon: Settings,
    link: "/settings"
  },
  {
    name: "Log Out",
    Icon: Dashboard,
    link: "/login"
  }
]