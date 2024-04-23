import Image from "next/image";
import React from "react";
import BackIcon from "@/assets/backIcon.svg";
const Header = () => {
  return (
    <header className="mt-[52px] md:mt-[180px] px-4 md:px-[62px] lg:px-[108px] flex gap-5 md:gap-8">
      <div>
        <Image src={BackIcon} alt="back" />
      </div>
      <div className="text-white flex flex-col gap-4 md:gap-8 tracking-tighter">
        <h1 className="text-2xl md:text-4xl">
          FIG ARTISTIC GYMNASTICS WORLD CUP
        </h1>
        <div className="flex gap-3 md:gap-4 items-center text-base md:text-xl text-[#9598B1] md:text-[#F2F2F2] ">
          <h3>Doha, Qatar</h3>
          <div className="w-[1px] h-6 bg-white"></div>
          <p>12/03/2023 - 13/02/2023</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
