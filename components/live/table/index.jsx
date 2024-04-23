"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import ArrowBottom from "../../../assets/arrowBottom.svg";
import ArrowTop from "../../../assets/arrowTop.svg";
import FloorExercise from "../../../assets/sportsEquipment/FloorExercise.svg";
import PommelHorse from "../../../assets/sportsEquipment/PommelHorse.svg";
import Rings from "../../../assets/sportsEquipment/Rings.svg";
import VT from "../../../assets/sportsEquipment/VT.svg";
import ParalledBars from "../../../assets/sportsEquipment/ParallelBars.svg";
import HorizontalBars from "../../../assets/sportsEquipment/HorizontalBar.svg";
const Table = () => {
  const equipments = [
    FloorExercise,
    PommelHorse,
    Rings,
    VT,
    ParalledBars,
    HorizontalBars,
  ];
  const [isOpen, setIsOpen] = useState(Array(8).fill(false)); // Initialize an array with the same length as the number of dropdowns
  const [lives, setLives] = useState([])
  const handleChange = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };
  const getLives = async() => {
    const response = await fetch("http://localhost:8000/live");
    const data = await response.json()
    setLives(data)
  }
  useEffect(() => {
    getLives()
  },[])
  return (
    <div className="text-white mt-6 lg:mt-24 mb-6 lg:mb-[249.4px]">
      <div className="hidden lg:flex justify-end items-center mb-12">
        <div className="flex gap-6">
          <div className="w-[92px] text-center">App</div>
          <div className="w-[92px] text-center">AA</div>
          <div className="w-[92px] text-center">Total</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {lives.map((live, index) => {
          return (
            <div key={live?.id}>
              <div className="flex flex-col gap-[2px] lg:gap-2 pb-4">
                <div className="flex items-center flex-col lg:flex-row p-3 lg:p-0 rounded-lg lg:rounded-none gap-[2px] lg:gap-none">
                  <div className="flex justify-between items-center p-3 rounded-lg w-full lg:w-[35%] bg-indigo-900 lg:bg-transparent">
                    <div className="flex justify-center items-center gap-4 lg:gap-9">
                      <Image
                        src={equipments[index]}
                        width={48}
                        height={32}
                        alt="sport-equipment"
                      />
                      <div className="w-fit lg:w-[92px] flex items-center gap-2 justify-center">
                        <Image
                          width={20}
                          height={14}
                          src={live?.teamflag}
                          alt={live?.teamshort}
                          className="hidden lg:block"
                        />
                        <span>{live.teamshort}</span>
                      </div>
                      <div className="text-center w-fit lgw-[58px]">
                        {live?.bib}
                      </div>
                      <div>{live?.name}</div>
                    </div>
                    {live?.D ? (
                      <button
                        className="block lg:hidden"
                        onClick={() => handleChange(index)}
                      >
                        <Image
                          src={!isOpen[index] ? ArrowBottom : ArrowTop}
                          alt="arrow-bottom"
                        />
                      </button>
                    ) : (
                      <div
                        className={`flex lg:hidden items-center justify-center w-16 lg:w-[95px] h-8 rounded-lg ${
                          live?.message == "Go" && "bg-[#02D169]"
                        } ${live?.message == "Wait" && "bg-[#F5A100]"}`}
                      >
                        {live?.message}
                      </div>
                    )}
                  </div>
                  <div
                    className={`w-full lg:w-[65%] p-4 lg:p-0 rounded-lg ${
                      !isOpen[index] ? "hidden" : "flex"
                    } lg:flex flex-col lg:flex-row gap-4 lg:gap-none items-end justify-between bg-indigo-900 lg:bg-transparent`}
                  >
                    {live?.D && (
                      <>
                        <div className="flex gap-7">
                          <div>
                            <span>D:</span>
                            <span>{live?.D}</span>
                          </div>
                          <div>
                            <span>E:</span>
                            <span>{live?.E}</span>
                          </div>
                          <div>
                            <span>P:</span>
                            <span>{live?.P}</span>
                          </div>
                        </div>
                        <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-6 text-[#C4C4C4] justify-items-end">
                          <div className="flex items-center justify-between">
                            <span className="lg:hidden">App</span>
                            <div className="flex gap-[22px] lg:gap-3 items-center">
                              <span>{live?.App}</span>
                              <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                                {live?.AppNumber}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="lg:hidden">AA</span>
                            <div className="flex gap-[22px] lg:gap-3 items-center">
                              <span>{live?.AA}</span>
                              <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                                {live?.AANumber}
                              </div>
                            </div>
                          </div>
                          <div className="flex items-center justify-between">
                            <span className="lg:hidden">Team</span>
                            <div className="flex gap-[22px] lg:gap-3 items-center">
                              <span>{live?.Team}</span>
                              <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                                {live?.TeamNumber}
                              </div>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                    {live?.message && (
                      <div
                        className={`hidden lg:flex items-center justify-center w-16 lg:w-[95px] py-1 rounded-lg ${
                          live?.message == "Go" && "bg-[#02D169]"
                        } ${live?.message == "Wait" && "bg-[#F5A100]"}`}
                      >
                        {live?.message}
                      </div>
                    )}
                  </div>
                </div>
              </div>
              <div
                className="hidden lg:block bg-gradient-to-r from-transparent to-indigo-900 w-full h-[1px] mt-[6px] mb-[5px]"
                style={{
                  background:
                    "linear-gradient(90deg, rgba(106, 33, 244, 0) 0%, rgba(106, 33, 244, 0.9) 44.79%)",
                }}
              ></div>
            </div>
          );
        })}
      </div>
      <div>
        <div className="flex flex-col gap-[2px] lg:gap-2 pb-4">
          <div className="flex items-center flex-col lg:flex-row p-3 lg:p-0 rounded-lg lg:rounded-none gap-[2px] lg:gap-none">
            <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center p-3 rounded-lg w-full lg:w-[50%] bg-indigo-900 lg:bg-transparent gap-[10px] lg:gap-4">
              <div className="text-[#FF9C07] whitespace-nowrap">Inquiry Submitted</div>
              <div className="w-full lg:w-auto flex justify-between lg:justify-center items-center gap-4 lg:gap-9">
                <Image
                  src={equipments[5]}
                  width={48}
                  height={32}
                  alt="sport-equipment"
                />
                <div className="w-fit lg:w-[92px] flex items-center gap-2 justify-center">
                  <Image
                    width={20}
                    height={14}
                    src={lives[5]?.teamflag}
                    alt={lives[5]?.teamshort}
                    className="hidden lg:block"
                  />
                  <span>{lives[5]?.teamshort}</span>
                </div>
                <div className="text-center w-fit lgw-[58px]">
                  {lives[5]?.bib}
                </div>
                <div>{lives[5]?.name}</div>
              </div>
            </div>
            <div
              className={`w-full lg:w-[65%] p-4 lg:p-0 rounded-lg ${
                !isOpen[5] ? "hidden" : "flex"
              } lg:flex flex-col lg:flex-row gap-4 lg:gap-none items-end justify-between bg-indigo-900 lg:bg-transparent`}
            >
              {lives[5]?.D && (
                <>
                  <div className="flex gap-7">
                    <div>
                      <span>D:</span>
                      <span>{lives[5]?.D}</span>
                    </div>
                    <div>
                      <span>E:</span>
                      <span>{lives[5]?.E}</span>
                    </div>
                    <div>
                      <span>P:</span>
                      <span>{lives[5]?.P}</span>
                    </div>
                  </div>
                  <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-6 text-[#C4C4C4] justify-items-end">
                    <div className="flex items-center justify-between">
                      <span className="lg:hidden">App</span>
                      <div className="flex gap-[22px] lg:gap-3 items-center">
                        <span>{lives[5]?.App}</span>
                        <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                          {lives[5]?.AppNumber}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="lg:hidden">AA</span>
                      <div className="flex gap-[22px] lg:gap-3 items-center">
                        <span>{lives[5]?.AA}</span>
                        <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                          {lives[5]?.AANumber}
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="lg:hidden">Team</span>
                      <div className="flex gap-[22px] lg:gap-3 items-center">
                        <span>{lives[5]?.Team}</span>
                        <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                          {lives[5]?.TeamNumber}
                        </div>
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Table;
