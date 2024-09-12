import "./ContattaciBand.css"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
// import { useState, useEffect } from 'react';

export default function ContattaciBand(){

// animazione 
const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.6,
});

const zoomIn = useSpring({
    opacity: inView ? 1 : 0,
    transform: inView ? "scale(1)" : "scale(0.8)",
    config:{ tension: 120, friction: 13, duration: 600 }
});
// animazione 


return(
    <>
    <div className="container-fluid">
        <div className="row contattaciImage">
            <div className="col-12 contattaciShade text-center">
                <animated.h2 ref={ref} style={zoomIn} className="text0 font1 fw-bold">Entra nel mondo Copacabana!</animated.h2>
                <animated.button ref={ref} style={zoomIn} className="btn btn-lg btnContattaci mt-4">
                    <a href="https://wa.me/3357728611" target="_blank" rel="noopener noreferrer">Contattaci</a>
                </animated.button>
            </div>
        </div>
    </div>


    </>
    )
}