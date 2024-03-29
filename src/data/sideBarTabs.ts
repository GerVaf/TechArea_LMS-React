import { MdDashboard, MdPeople, MdSchool } from "react-icons/md";
import { PiStudent, PiChalkboardTeacherLight } from "react-icons/pi";
import { IoPeopleOutline } from "react-icons/io5";
import { RiAdminLine } from "react-icons/ri";
import { AiFillSchedule } from "react-icons/ai";

const sideBarTabs = [
  {
    label: "Dashboard",
    icon: MdDashboard,
    initiallyOpened: false,
    link: "/dashboard",
  },
  {
    label: "Grades",
    icon: MdSchool,
    initiallyOpened: false,
    link: "/grades",
  },
  {
    label: "Schedules",
    icon: AiFillSchedule,
    initiallyOpened: false,
    link: "/schedules",
  },
  {
    label: "Accounts",
    icon: MdPeople,
    initiallyOpened: false,
    link: undefined,
    links: [
      {
        icon: RiAdminLine,
        label: "Admins",
        link: "/accounts/admins/list",
        path: "/accounts/admins",
      },
      {
        icon: IoPeopleOutline,
        label: "Staffs",
        link: "/accounts/staffs/list",
        path: "/accounts/staffs",
      },
      {
        icon: PiChalkboardTeacherLight,
        label: "Teachers",
        link: "/accounts/teachers/list",
        path: "/accounts/teachers",
      },
      {
        icon: PiStudent,
        label: "Students",
        link: "/accounts/students/list",
        path: "/accounts/students",
      },
    ],
  },
];

export default sideBarTabs;
