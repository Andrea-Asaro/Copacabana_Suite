
import { NavLink } from 'react-router-dom';

// import React, { useRef, useState } from 'react';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import './HeroContatti.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//media
import hero1 from '../../media/hero1.jpg';
import hero2 from '../../media/hero2.jpg';
import hero3 from '../../media/hero3.jpg';


export default function HeroContatti(){

    return (

        <>
         <div id='HeroContatti' className='wholeHero z-2'>
           {/* <Swiper
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
                <button className='btn btn-lg herobtn text0 mt-2 font2'> <NavLink to="/GalleryPage">Gallery</NavLink></button>
            </div> */}


            <div className="parallax-bg">
                <div className="hero-content">
                    <h1 className="hero-title font1 fw-bold">Contatti</h1>
                    <button className='btn btn-lg herobtn text0 mt-2 font2'>
                        <a href="https://wa.me/3357728611" target="_blank" rel="noopener noreferrer">Whatsapp</a>
                    </button>
                </div>
            </div>

        </div> 

        
      </>

    )
}