import React from 'react'
import { Link } from 'react-router-dom'
import Add from "../images/Add";


const ViewJop = () => {
  return (
    <div className="flex flex-col   p-0 gap-[32px] absolute  left-[311px] top-[57px] right-[66px] w-[auto]">
      <div className="flex flex-row justify-between  text-center items-center p-0  h-[44px]">
        <div className="flex  tracking-[0.3px] text-[#1E1E1E] w-[241px] h-[24px] text-[32px] font-[600] leading-[24px]">
          Jops
        </div>
        <Link
          to="/CreatJop"
          className="flex flex-row   justify-center text-center items-center px-[12px] py-[16px] gap-[8px] w-auto h-[44px] rounded-[12px] bg-[#793EF5]"
        >
          <Add className="w-[20px] h-[20px]" />
          <div className="text-[14px] font-[200] text-white leading-[20px] text-center tracking-[0.4px] w-[auto] h-[20px]">
            Add New Jop
          </div>
        </Link>
      </div>
      </div>
  )
}

export default ViewJop;