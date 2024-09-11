import React, { useState, useEffect } from "react";

import "./ContactsMap.css"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function Map(){

    const [dimensions, setDimensions] = useState(getIframeDimensions());

    useEffect(() => {
        const handleResize = () => {
            setDimensions(getIframeDimensions());
        };

        window.addEventListener("resize", handleResize);

        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    // handleresize viene chiamata ogni volta la finestra cambia di width, e nel caso setta le dimensions

    function getIframeDimensions() {
        const width = window.innerWidth;
        if (width < 576) {
            return { width: "400", height: "200" };
        } else if (width < 767) {
            return { width: "600", height: "300" };
        } else if (width < 992) {
            return { width: "850", height: "400" };
        } else {
            return { width: "1300", height: "600" };
        }
    }
    // vede la width della pagina e in base a quella setta le dimensioni desiderate per la mappa

    // Animazione per la mappa 
    const [mapRef, mapInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const mapFlip = useSpring({
        from: { opacity: 0, transform: 'rotateX(180deg)' },
        to: { 
            opacity: mapInView ? 1 : 0, 
            transform: mapInView ? 'rotateX(0deg)' : 'rotateX(180deg)'
        },
        config: { mass: 5, tension: 500, friction: 80 },
    });


    return(
    <>
        
        <div className="container-fluid my-5 pt-lg-5 bg0-onlyDesktop">
            <div className="row justify-content-between pb-5 pt-3">

                {/* map */}
                <animated.div className="col-12 d-flex flex-column align-items-center" ref={mapRef} style={mapFlip}>
                    <div className="ps-1 ps-lg-0">
                        <h3 className="mb-5 text1 mt-4 mt-lg-0 fw-bold font1 fs-2">Dove siamo</h3>
                    </div>
                    
                    <div className="pe-lg-5 mapResponsive pb-2 pb-lg-5 ">
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5988.290646282114!2d16.15517938754379!3d41.37092728609005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x133820282f38259f%3A0xea6c4f0f79dbf496!2sB%20%26%20B%20Copacabana%20Colors!5e0!3m2!1sen!2sit!4v1725457084473!5m2!1sen!2sit" 
                            width={dimensions.width} 
                            height={dimensions.height}  
                            allowFullScreen="" 
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade">
                        </iframe>
                    </div>
                </animated.div>
                {/* map */}

            </div> 
        </div>
        
        
    </>
    )
}