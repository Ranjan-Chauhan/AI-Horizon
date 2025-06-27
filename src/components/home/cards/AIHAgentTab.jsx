import React, { useState } from "react";
import { MdOutlineArrowForward, MdOutlineArrowUpward } from "react-icons/md";

const AIHAgentTab = () => {
  const [activeTab, setActiveTab] = useState("FUNCTION");
  const [activeSubTab, setActiveSubTab] = useState("Marketing");

  const functionTabs = ["Marketing", "Sales", "Customer", "Sceaper", "HR"];

  return (
    <div className="mt-10 flex items-center justify-center px-4 py-10 text-white font-sans w-[765px] h-[472px]">
      <div
        className={`flex items-start gap-10 relative transition-all duration-500 ${
          activeTab === "FUNCTION" ? "flex-row" : "flex-row-reverse"
        }`}
      >
        {/* Top Tabs */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-[588px] h-[42px] flex border-2 border-white rounded-xl overflow-hidden z-10">
          {["FUNCTION", "INDUSTRY"].map((tab) => (
            <button
              key={tab}
              className={`w-1/2 px-8 py-2 text-sm font-semibold transition-all duration-300 ${
                activeTab === tab
                  ? "bg-linear-to-r from-[#F6A11F] to-[#17BCBC] text-black"
                  : "text-white"
              }`}
              onClick={() => {
                setActiveTab(tab);
                if (tab === "FUNCTION") setActiveSubTab("Marketing");
              }}
            >
              {tab}
            </button>
          ))}
        </div>

        {/* Panel */}
        <div className="flex justify-center items-center bg-[#000000] p-5 rounded-xl w-[765px] h-[365px] border-[1px] border-white mt-10 transition-all duration-500">
          {/* Sub Tabs */}
          <div>
            <div className="flex gap-2 flex-wrap mb-4 w-[435px] h-[41px]">
              {functionTabs.map((item) => (
                <button
                  key={item}
                  onClick={() => setActiveSubTab(item)}
                  className={` px-4 rounded-full text-sm font-medium ${
                    activeSubTab === item
                      ? "bg-linear-to-bl from-violet-500 to-fuchsia-500 text-black"
                      : "text-white"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>

            {/* List Items */}
            <div className="w-[371px] h-[210px] space-y-[19px]">
              {Array(4)
                .fill("LOREM IPSUM")
                .map((text, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center border-t border-white/20 pt-3"
                  >
                    <span className="text-sm">{text}</span>
                    <span className="text-lg rotate-[30deg]">
                      <MdOutlineArrowUpward size={24} />
                    </span>
                  </div>
                ))}
            </div>
          </div>

          {/* INDUSTRY Panel */}
          <div className="bg-[#FFFFFF] rounded-[12.15px] w-[316px] h-[405px]  shadow-lg transition-all duration-500">
            <div className="flex justify-center items-center mt-10">
              <div className="flex flex-col justify-between items-center w-[246px] h-[265.5px] space-y-[22px]">
                <h2 className="text-[46.08px] font-medium text-[#000000]">
                  INDUSTRY
                </h2>

                <div className="w-[273px] h-[189px] text-[#000000]">
                  <p className="font-normal leading-relaxed text-center">
                    Our Industry AI Agents are tailored for the nuances and
                    regulations of specific sectors. Powered by industry-trained
                    LLMs and contextual data, they deliver insights and
                    automation uniquely suited to each domain.
                  </p>
                </div>
                <button
                  className="flex justify-center items-center gap-2 w-[111px] h-[40px] px-5 py-3 rounded-full text-black text-[12px] font-medium transition 
  bg-gradient-to-r from-[#F6A11F80] from-10% to-[#FF950080] to-50% hover:from-[#F6A11F] hover:to-[#FF9500]"
                >
                  Try Once <MdOutlineArrowForward />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIHAgentTab;
