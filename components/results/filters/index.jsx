import Image from 'next/image';
import React from 'react'
import FloorExercise from "../../../assets/sportsEquipment/FloorExercise.svg"
import PommelHorse from "../../../assets/sportsEquipment/PommelHorse.svg"
import Rings from "../../../assets/sportsEquipment/Rings.svg"
import VT from '../../../assets/sportsEquipment/VT.svg'
import ParalledBars from '../../../assets/sportsEquipment/ParallelBars.svg'
import HorizontalBars from '../../../assets/sportsEquipment/HorizontalBar.svg'
import Filter from "../../../assets/Filter.svg"
import Cancel from '../../../assets/Cancel.svg'
const Filters = () => {
  return (
    <div className="mt-[56px] flex flex-col gap-6 lg:gap-12">
      <div className="w-fit flex lg:hidden gap-2 items-center py-2 px-4 bg-indigo-900 rounded-lg self-end">
        <Image src={Filter} alt="filter-icon" className="block lg:hidden" />
        <span className="text-white">Filter</span>
      </div>
      <div className="w-full text-white flex flex-wrap justify-start lg:justify-center gap-4 lg:gap-5">
        <div className="flex border-none lg:border lg:border-solid border-indigo-900 rounded-lg">
          <div className="w-auto lg:w-24 px-3 lg:px-0 h-[30px] lg:h-12 flex gap-2 justify-center items-center bg-[#0A8BEC] lg:bg-indigo-900 rounded-[78px] lg:rounded-lg">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span className="text-sm lg:text-base">MAG</span>
          </div>
          <div className="w-24 h-12 hidden lg:flex gap-2 justify-center items-center">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>WAG</span>
          </div>
        </div>
        <div className="flex border-none lg:border lg:border-solid border-indigo-900 rounded-lg">
          <div className="w-[120px] h-12 hidden lg:flex gap-2 justify-center items-center">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Qualification</span>
          </div>
          <div className="w-auto lg:w-[120px] px-3 lg:px-0 h-[30px] lg:h-12 flex gap-2 justify-center items-center bg-[#0A8BEC] lg:bg-indigo-900 rounded-[78px] lg:rounded-lg">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Final</span>
          </div>
        </div>
        <div className="flex border-none lg:border lg:border-solid border-indigo-900 rounded-lg">
          <div className="w-auto lg:w-28 px-3 lg:px-0 h-[30px] lg:h-12 flex gap-2 justify-center items-center  bg-[#0A8BEC] lg:bg-indigo-900 rounded-[78px] lg:rounded-lg">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Apparatus</span>
          </div>
          <div className="w-28 h-12 hidden lg:flex gap-2 justify-center items-center">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Team</span>
          </div>
          <div className="w-28 h-12 hidden lg:flex gap-2 justify-center items-center">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>All-around</span>
          </div>
        </div>
        <div className="flex border-none lg:border lg:border-solid border-indigo-900 rounded-lg">
          <div className="w-auto lg:w-[84px] px-3 lg:px-0 h-[30px] lg:h-12 flex gap-2 justify-center items-center  bg-[#0A8BEC] lg:bg-indigo-900 rounded-[78px] lg:rounded-lg">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Seniors</span>
          </div>
          <div className="w-[84px] h-12 hidden lg:flex gap-2 justify-center items-center">
            <Image src={Cancel} alt="cancel" className="block lg:hidden" />
            <span>Juniors</span>
          </div>
        </div>
        <div className="w-auto px-3 h-[30px] flex lg:hidden gap-2 justify-center items-center bg-[#0A8BEC] rounded-[78px]">
          <Image src={Cancel} alt="cancel" className="block lg:hidden" />
          <span>Floor exercise</span>
        </div>
      </div>
      <div className="hidden lg:block">
        <div className="flex justify-center gap-14">
          <div>
            <Image src={FloorExercise} alt="floor-exercise" />
            <span className="text-white hidden">Floor Exercise</span>
          </div>
          <div>
            <Image src={PommelHorse} alt="pommel-horse" />
            <span className="text-white hidden">Pommel Horse</span>
          </div>
          <div>
            <Image src={Rings} alt="rings" />
            <span className="text-white hidden">Rings</span>
          </div>
          <div className="flex flex-col items-center gap-2 px-[19.5px]">
            <Image src={VT} alt="vault" />
            <span className="text-white hidden lg:inline-block">Vault</span>
          </div>
          <div>
            <Image src={ParalledBars} alt="ParalledBars" />
            <span className="text-white hidden">Paralled Bars</span>
          </div>
          <div>
            <Image src={HorizontalBars} alt="horizontal-bars" />
            <span className="text-white hidden">Horizontal Bars</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Filters