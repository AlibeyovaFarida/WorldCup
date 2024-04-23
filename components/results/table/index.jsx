"use client"
import Image from 'next/image';
import React, { useEffect, useState } from 'react'
import Russia from "../../../assets/countries/russia.svg"
import Estonia from "../../../assets/countries/Estonia.svg"
import Portugalia from "../../../assets/countries/Portugalia.svg"
import Israil from "../../../assets/countries/Israil.svg"
import Polonia from '../../../assets/countries/Polonia.svg'
import Nederlands from "../../../assets/countries/Nederlands.svg"
import England from "../../../assets/countries/England.svg"
import ArrowBottom from "../../../assets/arrowBottom.svg"
import ArrowTop from "../../../assets/arrowTop.svg";
const Table = () => {
  const [isOpen, setIsOpen] = useState(Array(8).fill(false)); // Initialize an array with the same length as the number of dropdowns
  const [results, setResults] = useState([])
  const getResultsData = async() => {
    const response = await fetch("http://localhost:8000/results");
    const data = await response.json()
    setResults(data);
  }
  const handleChange = (index) => {
    const updatedOpenState = [...isOpen];
    updatedOpenState[index] = !updatedOpenState[index];
    setIsOpen(updatedOpenState);
  };
  useEffect(() => {
    getResultsData();
  },[])
  return (
    <div className="text-white mt-6 lg:mt-24 mb-6 lg:mb-[249.4px]">
      <div className="hidden lg:flex justify-between items-center mb-12">
        <div className="flex">
          <div className="w-[92px]">Rank</div>
          <div className="w-[92px]">Team</div>
          <div className="w-[130px] text-center mr-3">Bib</div>
          <div className="w-[142px]">Name</div>
        </div>
        <div className="flex gap-6">
          <div className="w-[92px] text-center">D</div>
          <div className="w-[92px] text-center">E</div>
          <div className="w-[92px] text-center">Pen</div>
          <div className="w-[92px] text-center">Total</div>
        </div>
      </div>
      <div className="flex flex-col gap-4">
        {results?.map((result, index) => {
          return (
            <div key={result?.id}>
              <div className="flex flex-col gap-[2px] lg:gap-2 pb-4">
                <div className="flex justify-between items-center bg-indigo-900 lg:bg-transparent p-3 lg:p-0 rounded-lg lg:rounded-none">
                  <div className="flex gap-[24.33px] lg:gap-12 items-center">
                    <div className="w-8 h-8 bg-[#0A8BEC] flex justify-center items-center">
                      {result?.id}
                    </div>
                    <div className="w-fit lg:w-[92px] flex items-center gap-2 justify-center">
                      <Image
                        width={20}
                        height={14}
                        src={result.teamflag}
                        alt="flag"
                        className="hidden lg:block"
                      />
                      <span>{result?.teamshort}</span>
                    </div>
                    <div className="text-center w-fit lgw-[58px]">
                      {result?.bib}
                    </div>
                    <div className="hidden lg:inline-block">{result?.name}</div>
                    <div className="inline-block lg:hidden">{result?.nameshort}</div>
                  </div>
                  <div className="hidden lg:flex gap-6 text-[#C4C4C4]">
                    <div className="w-[92px] text-center">{result?.D}</div>
                    <div className="w-[92px] text-center">{result?.E}</div>
                    <div className="w-[92px] text-center">{result?.Pen}</div>
                    <div className="w-[92px] text-center">{result?.Total}</div>
                  </div>
                  <button
                    className="block lg:hidden"
                    onClick={() => handleChange(index)}
                  >
                    <Image
                      src={!isOpen[index] ? ArrowBottom : ArrowTop}
                      alt="arrow-bottom"
                    />
                  </button>
                </div>
                <div
                  className={`${
                    !isOpen[index] ? "hidden" : "flex"
                  } lg:flex justify-start lg:justify-end bg-indigo-900 lg:bg-transparent p-4 lg:p-0 rounded-lg lg:rounded-none`}
                >
                  <div className="w-full flex flex-col lg:flex-row justify-end gap-6 text-[#C4C4C4]">
                    <div className="w-full lg:w-[92px] flex justify-between lg:justify-center">
                      <span className="lg:hidden text-white">D</span>
                      <span>{result?.D}</span>
                    </div>
                    <div className="w-full lg:w-[92px] flex justify-between lg:justify-center">
                      <span className="lg:hidden text-white">E</span>
                      <span>{result?.E}</span>
                    </div>
                    <div className="w-full lg:w-[92px] flex justify-between lg:justify-center">
                      <span className="lg:hidden text-white">P</span>
                      <span>{result?.Pen}</span>
                    </div>
                    <div className="w-full lg:w-[92px] flex justify-between lg:justify-center">
                      <span className="lg:hidden text-white">T</span>
                      <span>{result?.Total}</span>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:flex justify-end">
                  <div className="w-[92px] text-center text-[#FF9C07]">
                    {result?.Total}
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
    </div>
  );
}

export default Table