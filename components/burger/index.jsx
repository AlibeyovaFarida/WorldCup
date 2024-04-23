import Image from 'next/image'
import React from 'react'
import BurgerIcon from "@/assets/burger.svg"
const Burger = () => {
  return (
    <div className='w-full flex justify-end'>
      <div className="px-[18px] py-6 block md:hidden w-fit">
        <Image src={BurgerIcon} alt="burger" />
      </div>
    </div>
  );
}

export default Burger