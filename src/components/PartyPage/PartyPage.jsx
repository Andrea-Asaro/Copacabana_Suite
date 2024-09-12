
import "./PartyPage.css";

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import HeroP from "./HeroParty"
import PartyCards from "./PartyCards"


export default function PartyPage(){

    // animazione i nostri party 
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });

    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(60px)',
        config: { mass: 1, tension: 120, friction: 14, duration: 800 },
    });
    // animazione i nostri party 

    return(
    <>
        <div className="container-fluid p-0 bg2">
        
            <HeroP/>

            <div className="container">
                <div className="row justify-content-center">
                    <animated.div ref={ref} style={fadeUpStyle} className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                        <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">I nostri party</h1>
                        <h3 className='font2 text3 fs-4'>Scopri i nostri party esclusivi al Copacabana Suite: feste eleganti, eventi indimenticabili e serate magiche in riva al mare. Prenota ora e vivi un'esperienza unica!</h3>
                    </animated.div>
                </div>
            </div>
            
            <PartyCards/>
            
        </div>
    </>
    )
}