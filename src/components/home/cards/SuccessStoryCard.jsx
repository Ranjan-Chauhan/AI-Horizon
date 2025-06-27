import React from "react";
import { FiUser } from "react-icons/fi";

const SuccessStoryCard = () => {
  return (
    <div className="border-[0.8px] border-[#B3B3B3]">
      <div className="w-[311px] h-[311px] flex justify-center items-center bg-primary-background rounded-[31px] ">
        <div className="text-white w-[198px] h-[205px] flex flex-col justify-center items-center gap-[47px] ">
          <div className="flex flex-col justify-center items-center w-[100px] h-[76px] gap-[8.8px] ">
            <FiUser size={26} />
            <h1 className="text-3xl font-bold">1000+</h1>
          </div>
          <p className="h-[82px] font-semibold text-3xl text-center">
            People are using our AI
          </p>
        </div>
      </div>
    </div>
  );
};

export default SuccessStoryCard;
