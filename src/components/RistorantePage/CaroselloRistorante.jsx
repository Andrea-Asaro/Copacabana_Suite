
import "./CaroselloRistorante.css"

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
// import { useState, useEffect } from 'react';

export default function CaroselloRistorante(){

    // animazione 
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.6,
    });
    
    const zoomIn = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "scale(1)" : "scale(0.8)",
        config:{ tension: 210, friction: 20, duration: 400 }
    });
    // animazione 


    return(
    <>
    <div className="container px-5 my-5">
        <animated.div ref={ref} style={zoomIn} id='CaroselloRistorante'>
        
            <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{
                768: {
                    slidesPerView: 4,
                },
            }}
            autoplay={{
                delay: 2800,
                disableOnInteraction: false,
            }}
            pagination={true}
            loop={true}
            modules={[Autoplay, Pagination]}
            className="mySwiper"
            >
                {[...Array(8)].map((_, index) => (
                    <SwiperSlide key={index}>
                        <img src={`https://picsum.photos/400/300?random=${index}`} className="h-100" alt={`Slide ${index + 1}`} />
                    </SwiperSlide>
                ))}
            </Swiper>


        </animated.div>
    </div>

    </>       
    )
}