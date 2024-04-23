import React from "react";

const Tabs = ({ tab, setTab }) => {
  return (
    <div className="max-w-[1224px] mt-[52px] md:mt-[48px] px-4 md:mx-[62px] lg:mx-[108px] flex gap-5 md:gap-8 overflow-x-auto no-scrollbar border-b border-solid border-indigo-900 align-self-center">
      <ul className="w-full text-white flex justify-between text-base md:text-xl font-light md:font-normal tracking-tighter">
        <li
          className={`min-w-[148px] lg:min-w-[245px] h-[40px] md:h-[52px] text-center ${
            tab == "live" && "border-b-[2px] border-[#0A8BEC]"
          }`}
        >
          <button onClick={() => setTab("live")} className="w-full flex justify-center items-center gap-[14px]">
            <div className="w-2 h-2 border rounded-[50%] bg-[#FB0000] border-none"></div>
            <span>Live</span>
          </button>
        </li>
        <li className="min-w-[148px] lg:min-w-[245px] h-[40px] md:h-[52px] text-center">
          <button>Startlist</button>
        </li>
        <li className="min-w-[148px] lg:min-w-[245px] h-[40px] md:h-[52px] text-center">
          <button>Schedule</button>
        </li>
        <li
          className={`min-w-[148px] lg:min-w-[245px] h-[40px] md:h-[52px] text-center ${
            tab == "results" && "border-b-[2px] border-[#0A8BEC]"
          }`}
        >
          <button onClick={() => setTab("results")}>Results</button>
        </li>
        <li className="min-w-[148px] lg:min-w-[245px] h-[40px] md:h-[52px] text-center">
          <button>Medals</button>
        </li>
      </ul>
    </div>
  );
};

export default Tabs;
