import React from 'react'
import heroBannar from "../assets/hero_bannar.png"

const HeroArea = () => {
  return (
    <div className='container'>
      <img className='w-full h-[30vh] md:h-[55vh] mt-5' src={heroBannar} alt="Hero bannar" />
    </div>
  )
}

export default HeroArea
