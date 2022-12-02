import React from "react";
import { Link } from "react-router-dom";

const CreatJop = () => {
  return (
    <div>
      <Link
        to={"/Profile/Jop"}
        className="flex items-start absolute top-[50px] left-[50px]"
      >
        Back
      </Link>
      <div className="flex flex-row justify-center  items-center font-[800] text-[100px] p-4">
      Jops
      </div>
    </div>
  );
};

export default CreatJop;