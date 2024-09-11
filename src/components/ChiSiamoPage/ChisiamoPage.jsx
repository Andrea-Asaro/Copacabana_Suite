import React from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import "./ChisiamoPage.css";

import image1 from "../../media/lidoPiscinaGiorno.jpg";
import image2 from "../../media/contattiHero.jpeg";
import image3 from "../../media/lidoPiscinaGiorno.jpg";
import image4 from "../../media/weddingHero.jpg";

import HeroChiSiamo from "./HeroChiSiamo";


export default function ChisiamoPage() {

    // Animazione per il div dei paragrafi
    const [textRef, textInView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const textSlideIn = useSpring({
        opacity: textInView ? 1 : 0,
        transform: textInView ? 'translateX(0)' : 'translateX(-50px)',
        config: { duration: 500 },
    });

    // Animazione per l'immagine principale (image1)
    const [img1Ref, img1InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const img1Zoom = useSpring({
        transform: img1InView ? 'scale(1)' : 'scale(0.8)',
        opacity: img1InView ? 1 : 0,
        config: { duration: 500 },
    });

    // Animazioni per le altre immagini (slide up)
    const [img2Ref, img2InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp2 = useSpring({
        opacity: img2InView ? 1 : 0,
        transform: img2InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 500 },
    });

    const [img3Ref, img3InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp3 = useSpring({
        opacity: img3InView ? 1 : 0,
        transform: img3InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 650 },
    });

    const [img4Ref, img4InView] = useInView({ triggerOnce: true, threshold: 0.3 });
    const slideUp4 = useSpring({
        opacity: img4InView ? 1 : 0,
        transform: img4InView ? 'translateY(0px)' : 'translateY(35px)',
        config: { duration: 800 },
    });

    return (
        <>
            <HeroChiSiamo/>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                        <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">Per le tue occasioni più speciali</h1>
                    </div>
                </div>
            </div>

            <div className="container">
                <div className="row">

                    <animated.div
                        className="col-12 col-lg-6 lh-lg fs-5 mb-5 order-2 order-lg-1"
                        ref={textRef}
                        style={textSlideIn}
                    >
                        <p>Il Lido Copacabana Suite a Margherita di Savoia è la scelta ideale per chi desidera organizzare ricevimenti, matrimoni e feste in una location esclusiva sul mare. Il lido offre un'esperienza unica e indimenticabile.</p>
                        <p>
                        Il ristorante del Lido Copacabana propone piatti raffinati e deliziosi, perfetti per ogni occasione speciale. La struttura è attrezzata per accogliere eventi di ogni tipo, garantendo un servizio impeccabile e un'atmosfera suggestiva. Prenota ora il tuo evento al Lido Copacabana Suite e vivi momenti indimenticabili in riva al mare!
                        </p>
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-6 mb-5 order-1 order-lg-2"
                        ref={img1Ref}
                        style={img1Zoom}
                    >
                        <img src={image1} className="imageWidth ps-lg-4" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-3"
                        ref={img2Ref}
                        style={slideUp2}
                    >
                        <img src={image2} className="imageWidth" id="longimg" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-4"
                        ref={img3Ref}
                        style={slideUp3}
                    >
                        <img src={image3} className="imageWidth" alt="" />
                    </animated.div>

                    <animated.div
                        className="col-12 col-lg-4 mb-5 order-5"
                        ref={img4Ref}
                        style={slideUp4}
                    >
                        <img src={image4} className="imageWidth" alt="" />
                    </animated.div>
                </div>
            </div>
        </>
    );
}
