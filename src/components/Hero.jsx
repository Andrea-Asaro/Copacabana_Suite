
import { NavLink } from 'react-router-dom';

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import '../components/Hero.css';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

//media
import hero1 from '../media/hero1.jpg';
import hero2 from '../media/hero2.jpg';
import hero3 from '../media/hero3.jpg';
import hero4 from '../media/hero4.jpg';


export default function Hero(){

    return (

        <>
        <div className='wholeHero'>
            <Swiper
            spaceBetween={30}
            centeredSlides={true}
            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            modules={[Autoplay, Pagination, Navigation]}
            className="mySwiper"
            >
            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero1} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero2} alt="" className='heroimg2' />
            </SwiperSlide>

            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero3} alt="" />
            </SwiperSlide>

            <SwiperSlide>
                <div className="imgShade"></div>
                <img src={hero4} alt="" />
            </SwiperSlide>
            
            </Swiper>
            <div className='heroContent'>
                <h3 className='text0 font1'>Welcome to</h3>
                <h1 className='fw-bold font1 text0 titletext '>COPACABANA COLORS</h1>
                <button className='btn herobtn text0 mt-2 font2'> <NavLink to="/GalleryPage">Gallery</NavLink></button>
            </div>
        </div>
      </>

    )
}