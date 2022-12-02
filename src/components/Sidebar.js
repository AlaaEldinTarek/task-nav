import React from "react";
import logo from "../images/RadicallX-Black.svg";
import { NavLink } from "react-router-dom";
import Dashboard from "../images/Dashboard";
import Book from "../images/Book";
import Briefcase from "../images/Briefcase";
import Setting from "../images/Setting";
import Medalstar from "../images/Medalstar";

const Sidebar = (props) => {
  const navActive = ({ isActive }) => {
    return {
      background: isActive ? "rgba(102, 95, 239, 0.16)" : "#fff",
      borderColor: isActive ? "#793EF5" : "#fff",
      borderWidth: isActive ? 1 : 0,
      color: isActive ? "#793EF5" : "#1E1E1E",
      stroke: isActive ? "#793EF5" : "#1E1E1E",
    };
  };

  return (
    <div className="flex p-4   ">
      <div className="flex  ">
        <div className="flex flex-col items-start justify-between absolute h-screen w-[237px] px-[20px] py-[34px]  bg-white shadow-[0px_12px_34px_rgba(0,0,0,0.04)] rounded-[24px]   ">
          <div className="flex flex-col items-center p-0 gap-[50px]  w-[197px] h-[370px]">
            <img src={logo} alt="" className="  w-[160px] h-[32px]" />
            <div className="flex flex-col items-start p-0 gap-[12px] w-[197px] h-[288px]">
              <NavLink
                to="/Profile/Dashboard"
                className="flex flex-row hover:cursor-pointer items-center w-[197px] h-[48px]  rounded-[16px] px-[12px] py-[16px] gap-[10px] "
                style={navActive}
              >
                <Dashboard stroke={navActive} />
                Dashboard
              </NavLink>
              <NavLink
                to="/Profile/Apprenticeships"
                className="flex flex-row hover:cursor-pointer items-center w-[197px] h-[48px]  rounded-[16px] px-[12px] py-[16px] gap-[10px] "
                style={navActive}
              >
                <Medalstar stroke={navActive} />
                Apprenticeships
              </NavLink>
              <NavLink
                to="/Profile/InterShips"
                className="flex flex-row hover:cursor-pointer items-center w-[197px] h-[48px]  rounded-[16px] px-[12px] py-[16px] gap-[10px] "
                style={navActive}
              >
                <Book stroke={navActive} />
                Internships
              </NavLink>
              <NavLink
                to="/Profile/Jop"
                className="flex flex-row hover:cursor-pointer items-center w-[197px] h-[48px]  rounded-[16px] px-[12px] py-[16px] gap-[10px] "
                style={navActive}
              >
                <Briefcase stroke={navActive} />
                Jobs
              </NavLink>
              <NavLink
                to="/Profile/Setting"
                className="flex flex-row hover:cursor-pointer items-center w-[197px] h-[48px]  rounded-[16px] px-[12px] py-[16px] gap-[10px] "
                style={navActive}
              >
                <Setting stroke={navActive} />
                Settings
              </NavLink>
            </div>
          </div>
          <div className="flex flex-row items-center p-0 gap-[10px] w-[152px] h-[50px]  ">
            <div className="w-[50px] h-[50px] bg-[#E2E6EB] rounded-[16px]"></div>
            Adam Scott
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
