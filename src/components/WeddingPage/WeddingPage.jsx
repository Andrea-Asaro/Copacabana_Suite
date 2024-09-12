
import "./WeddingPage.css";

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import HeroW from "./HeroWedding";
import CaroselloWedding from "./CaroselloWedding";
import WeddingCards from "./WeddingCards";


export default function WeddingPage(){

    // animazione matrimoni copacabana 
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });

    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(60px)',
        config: { mass: 1, tension: 120, friction: 14, duration: 800 },
    });
    // animazione matrimoni copacabana 

    return(
        <>
        
        <HeroW/>

        <div className="container">
            <div className="row justify-content-center">
                <animated.div ref={ref} style={fadeUpStyle} className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-5">
                    <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">I matrimoni Copacabana</h1>
                    <h3 className='font2 text3 fs-4'>(Nello slider e nelle card foto di repertorio di matrimoni nella struttura) <br /> <br /> (Nelle card due caratteristiche principali dei riti presso la struttura? ) <br />  <br /> I matrimoni al Lido Copacabana sono un sogno elegante che diventa realtà. Immersi in un'atmosfera raffinata e suggestiva, gli sposi vivranno un'esperienza indimenticabile tra il cielo e il mare, con scenari mozzafiato e dettagli curati nei minimi particolari.</h3>
                </animated.div>
            </div>
        </div>
        
        <div className="container-fluid bg0 pt-5 pb-1">
            <CaroselloWedding/>
        </div>

        <WeddingCards/>
        
        </>
    )
}