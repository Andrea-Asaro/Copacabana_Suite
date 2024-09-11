
import { NavLink } from 'react-router-dom';

// import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//media
import hero1 from '../../media/ristoranteHero.jpg';
import hero2 from '../../media/heroSpiaggia.jpg';
import hero3 from '../../media/heroPiscina.jpeg';


export default function Hero(){

    return (

        <>
        <div className='wholeHero'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3700,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero1} alt="" />
                <h2 className="slideTitle font1 fw-bold">Beach wedding & cerimonie</h2>
            </SwiperSlide>

            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero2} alt="" className='heroimg2' />
                <h2 className="slideTitle font1 fw-bold">Beach Club</h2>
            </SwiperSlide>

            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero3} alt="" />
                <h2 className="slideTitle font1 fw-bold">Una bella vita è una collezione di bei momenti</h2>
            </SwiperSlide>
            
            </Swiper>
            <div className='heroContent'>
                {/* <h3 className='text0 font1'>Welcome to</h3>
                <h1 className='fw-bold font1 text0 titletext '>COPACABANA COLORS</h1> */}
                <button className='btn btn-lg herobtn text0 mt-2 font2'> <NavLink to="/GalleryPage">Gallery</NavLink></button>
            </div>
        </div>
      </>

    )
}