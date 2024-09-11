
import "./CaroselloWedding.css"

import { Swiper, SwiperSlide } from 'swiper/react';

import { Autoplay, Pagination } from 'swiper/modules';

export default function CaroselloWedding(){
    return(
        <>
        
        <div className="container px-5 mt-5 mb-3">
            
            <div id='CaroselloWedding'>
            
                <Swiper
                slidesPerView={1}
                spaceBetween={30}
                breakpoints={{
                    768: {
                        slidesPerView: 3,
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
                            <img src={`https://picsum.photos/400/400?random=${index}`} className="h-100" alt={`Slide ${index + 1}`} />
                        </SwiperSlide>
                    ))}
                </Swiper>


            </div>
        </div>
        
        </>
    )
}