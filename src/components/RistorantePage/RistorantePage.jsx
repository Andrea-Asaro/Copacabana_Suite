import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import HeroR from "./HeroRistorante";
import CaroselloRistorante from "./CaroselloRistorante";

export default function RistorantePage(){

      // animazione il nostro ristorante 
      const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });

    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(60px)',
        config: { mass: 1, tension: 120, friction: 14, duration: 800 },
    });
    // animazione il nostro ristorante 

    return(
        <>

        <HeroR/>

        <div className="container">
            <div className="row justify-content-center">
                <animated.div ref={ref} style={fadeUpStyle} className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                    <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">Il nostro ristorante</h1>
                    <h3 className='font2 text3 fs-4'>Nello slider si possono inserire primi piani di piatti del ristorante. <br /><br /> Il ristorante Copacabana accompagna gli sposi in un viaggio sensoriale tra sapori raffinati e atmosfere suggestive, creando emozioni che si intrecciano tra il cielo e il mare.</h3>
                </animated.div>
            </div>
        </div>

        <CaroselloRistorante/>



        </>
    )
}