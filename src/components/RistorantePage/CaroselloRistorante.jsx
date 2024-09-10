
import "./CaroselloRistorante.css"

import 'swiper/css';
import 'swiper/css/pagination';

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';



export default function CaroselloRistorante(){
    return(
    <>
    <div className="container px-5 my-5">
        <div id='CaroselloRistorante'>
        
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


        </div>
    </div>

    </>       
    )
}