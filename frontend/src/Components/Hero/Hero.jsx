import React from 'react'
import './Hero.css'
import medicine from '../Assets/medicine.png'
import arrow_icon from '../Assets/arrow.png'
import hero_image from '../Assets/doctor_photo.png'
export const Hero = () => {
  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NOT FEELING YOUR BEST ?</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>Buy Doctor Prescribed Medicine at 20% off!!</p>
                    <img src={medicine} alt=""/>
                    
                </div>
                <p>Care for Mom and Baby – Nurturing Health and Comfort Together.</p>
            </div> 
            <div className="hero-latest-btn">
                <div>Medical Equipments</div>
                <img src={arrow_icon} alt=""/>
            </div>
        </div>
        <div className="hero-right">
            <img src={hero_image} alt=""/>
        </div>
    </div>
  )
}
export default Hero
