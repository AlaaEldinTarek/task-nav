import React from "react";
import { Link } from "react-router-dom";

const CreatInterShips = () => {
  return (
    <div>
      <Link
        to={"/Profile/InterShips"}
        className="flex items-start absolute top-[50px] left-[50px]"
      >
        Back
      </Link>
      <div className="flex flex-row justify-center  items-center font-[800] text-[100px] p-4">
      InterShips
      </div>
    </div>
  );
};

export default CreatInterShips;