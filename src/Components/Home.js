import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/home-banner-background.png'
import BannerImage from '../Assets/home-banner-image.png'
import { FiArrowRight } from 'react-icons/fi'

function Home() {
  return (
    <div className="home-container">
    <Navbar />
    <div className="home-banner-container">
      <div className="home-bannerImage-container">
        <img src={BannerBackground} alt="imagen para el background numero 12113421" />
      </div>
      <div className="home-text-section">
        <h1 className="primary-heading">
          Your Favourite Food Delivered Hot & Fresh
        </h1>
        <p className="primary-text">
          Healthy switcher chefs do all the prep work, like peeding, chopping
          & marinating, so you can cook a fresh food.
        </p>
        <button className="secondary-button">
          Order Now <FiArrowRight />{" "}
        </button>
      </div>
      <div className="home-image-section">
        <img src={BannerImage} alt="imagen para el baner de la home" />
      </div>
    </div>
  </div>
  )
}

export default Home