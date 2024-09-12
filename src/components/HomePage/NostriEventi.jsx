
import "./NostriEventi.css"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import exibit from "../../media/eventImageExibition.jpg"
import apericena from "../../media/eventImgApericena.jpg"

export default function NostriEventi(){
    const [threshold, setThreshold] = useState(0.4);

    useEffect(() => {
        const handleResize = () => {
            setThreshold(window.innerWidth > 1080 ? 0.7 : 0.4);
        };

        handleResize();
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold,
    });

    const { ref: ref1, inView: inView1 } = useInView({
        triggerOnce: true,
        threshold,
    });

    const slideInLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0px)" : "translateX(-100px)",
        config: { duration: 700 }
    });

    const slideInRight = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? "translateX(0px)" : "translateX(100px)",
        config: { duration: 700 }
    });

    return (
    <>
        <div className="container-fluid ">
            <div className="row px-5 bg0 pb-5 justify-content-evenly overflow-hidden">
                <div className="col-12 my-5">
                    <h2 className="pt-5 text-center fw-bold text1 font1">I nostri eventi </h2>
                </div>
                <animated.div ref={ref} style={slideInLeft} className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end pe-lg-4">

                    <div className="card bg0 mb-5 mb-lg-3 rounded-0" style={{maxWidth: "540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 order-md-1">
                                <img src={apericena} class="img-fluid h-100" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title font1 text1 fs-4">L'apericena</h5>
                                    <p class="card-text font2">Un'occasione speciale per farsi coccolare dalla nostra location sul mare e vivere un'esperienza culinaria unica.</p>
                                    <button className="btn eventbtn font2">Scopri di più </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </animated.div>
                <animated.div ref={ref1} style={slideInRight} className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start ps-lg-4">
                    
                    <div className="card bg0 mb-5 mb-lg-3 rounded-0" style={{maxWidth: "540px"}}>
                        <div class="row g-0">
                            <div class="col-md-4 order-md-1">
                                <img src={exibit} class="img-fluid h-100" alt="..."/>
                            </div>
                            <div class="col-md-8">
                                <div class="card-body">
                                    <h5 class="card-title font1 text1 fs-4">Il National Exibition Center</h5>
                                    <p class="card-text font2">Un'occasione speciale per farsi coccolare dalla nostra location sul mare e vivere un'esperienza culinaria unica.</p>
                                    <button className="btn eventbtn font2">Scopri di più </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
    </>
    )
}