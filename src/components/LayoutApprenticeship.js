import React from "react";
import copy from "../images/copy.svg";
import edit from "../images/edit.svg";
import trash from "../images/trash.svg";

const LayoutApprenticeship = (Props) => {
  return (
    <div className="flex flex-row items-start p-0  w-[auto] h-[auto]  ">
      <div className="flex flex-col items-start p-[20px] gap-[20px] w-[365px] h-[222px] bg-white border-[#CFD3D9] border-[1px] rounded-[20px]">
        <div className="flex flex-col items-start p-0 gap-[20px] w-[325px] h-[100px]">
          <div className="flex flex-row   justify-between items-start p-0 gap-[11] w-[325PX] h-[20px]">
            <div className="w-[auto] h-[18px] font-[500] text-[18px] space-[0.3px] text-[#1E1E1E]">
              {Props.title}
            </div>
            <div className="flex flex-row items-center p-0 gap-[8px] w-[76px] h-[20px]">
              <img src={copy} alt="" />
              <img src={edit} alt="" />
              <img src={trash} alt="" />
            </div>
          </div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magaliqua.
          </p>
        </div>
        <div className="flex flex-wrap  p-0 gap-[8px] w-[auto]  h-[27px]">
          <div className="flex flex-row items-center px-[6px] py-[10px]   w-[auto] h-[27px] bg-[#EDEAFF] rounded-[8px] border-[1px] border-[#793EF5]">
            <div className="font-[500] text-[#793EF5] items-center flex text-[12px] leading-[15px]  ">
              Product Manager
            </div>
          </div>
          <div className="flex flex-row items-center px-[6px] py-[10px]   w-[auto] h-[27px] bg-[#EDEAFF] rounded-[8px] border-[1px] border-[#793EF5]">
            <div className="font-[500] text-[#793EF5] items-center flex text-[12px] leading-[15px]  ">
              Product Designer{" "}
            </div>
          </div>
          <div className="flex flex-row items-center px-[6px] py-[10px]   w-[auto] h-[27px] bg-[#EDEAFF] rounded-[8px] border-[1px] border-[#793EF5]">
            <div className="font-[500] text-[#793EF5] items-center flex text-[12px] leading-[15px]  ">
              Backend Developer{" "}
            </div>
          </div>
          <div className="flex flex-row items-center px-[6px] py-[10px]   w-[auto] h-[27px] bg-[#EDEAFF] rounded-[8px] border-[1px] border-[#793EF5]">
            <div className="font-[500] text-[#793EF5] items-center flex text-[12px] leading-[15px]  ">
              Frontend Developer{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LayoutApprenticeship;
