import React from "react";
import SuccessStoryCard from "./cards/SuccessStoryCard";

const SuccessStory = () => {
  return (
    <div className="flex justify-center items-center">
      <div className="w-[1024px] h-[832px] flex justify-between items-center">
        <div className="flex flex-col justify-center items-start gap-2.5">
          <div className="w-[65px] h-[6px] rounded items-start bg-gradient-to-r from-[#F6A11F] to-[#AD10FF]"></div>
          <div className="w-[430px] text-black font-medium text-[51px]">
            <h1>OUR SUCCESS STORIES</h1>
          </div>
          <div className="w-[430px] h-[140px] text-black  font-normal text-2xl">
            we have many songs and stories to tell just be with us we have many
            songs and stories to tell just be with us we have many songs and
            stories to tell just be with us
          </div>
        </div>

        <div className="">
          <SuccessStoryCard />
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
