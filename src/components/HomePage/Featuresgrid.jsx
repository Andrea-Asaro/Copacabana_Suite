import './Featuresgrid.css';

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function Featuresgrid(){

    // animazione il nostro lido 
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.9,
    });

    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(60px)',
        config: { mass: 1, tension: 120, friction: 14, duration: 800 },
    });
    // animazione il nostro lido 

    // animazione elementi grid 
    const [threshold, setThreshold] = useState(0.4);

    useEffect(() => {
        const handleResize = () => {
            setThreshold(window.innerWidth > 1080 ? 0.7 : 0.4);
        };

        handleResize(); // Imposta il valore iniziale
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const { ref: ref1, inView: inView1 } = useInView({ triggerOnce: true, threshold });
    const { ref: ref2, inView: inView2 } = useInView({ triggerOnce: true, threshold });
    const { ref: ref3, inView: inView3 } = useInView({ triggerOnce: true, threshold });

    const fadeInFromLeft = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 500 },
    });

    const fadeInFromRight = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? 'translateX(0)' : 'translateX(100px)',
        config: { duration: 500 },
    });

    const fadeInFromLeft2 = useSpring({
        opacity: inView3 ? 1 : 0,
        transform: inView3 ? 'translateX(0)' : 'translateX(-100px)',
        config: { duration: 500 },
    });
    // animazione elementi grid 


    return (
        <>
        <div className="container-fluid">
            <div className="row bg2 overflow-hidden">
                <div className="col-12">
                    <div className="row mt-5 pb-4 pt-3 pt-lg-5 justify-content-center gradientColor">
                        <animated.div ref={ref} style={fadeUpStyle} className='col-12 col-lg-6 mb-4 text-center px-4 px-lg-0'>
                            <h2 className='font1 fw-bold text1 mb-4'>Il nostro lido</h2>
                            <p className='font2 fs-5'>Il Copacabana Suite rappresenta la fusione di sfere sensoriali che guidano gli sposi in un suggestivo gioco di emozioni che si snodano tra le stelle e il mare.</p>
                        </animated.div>
                    </div>
                </div>
                <div className="col-12">
                    <animated.div ref={ref1} style={fadeInFromLeft} className="row bg2">
                        <div className="col-12 col-lg-6 p-0 text-center">
                            <img src="https://picsum.photos/700/300" className='gridImg' alt="" />
                        </div>
                        <div className="col-12 col-lg-6 p-5 order-1">
                            <h3 className='font1 text1'>Ristorante</h3>
                            <p className='font2 fs-5'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quae accusamus rerum saepe sit magnam quo eveniet quibusdam, repudiandae et, autem commodi, porro vel ad tempora explicabo nihil quos rem! Adipisci!</p>
                            <button className='btn gridbtn'>
                                Scopri di più
                            </button>
                        </div>
                    </animated.div>
                </div>
                <div className="col-12">
                    <animated.div ref={ref2} style={fadeInFromRight} className="row bg2 ">
                        <div className="col-12 col-lg-6 p-0 order-lg-3">
                            <img src="https://picsum.photos/700/301" className='gridImg' alt="" />
                        </div>
                        <div className="col-12 col-lg-6 p-5 order-lg-2 text-end">
                            <h3 className='font1 text1'>Party</h3>
                            <p className='font2 fs-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus perspiciatis dolore inventore molestiae voluptatem libero recusandae quasi iure esse rerum cumque ducimus dolorem, laborum atque quam amet officiis. Fugiat, voluptatum!</p>
                            <button className='btn gridbtn'>
                                Scopri di più
                            </button>
                        </div>
                    </animated.div>
                </div>
                <div className="col-12">
                    <animated.div ref={ref3} style={fadeInFromLeft2} className="row bg2">
                        <div className="col-12 col-lg-6 p-0">
                            <img src="https://picsum.photos/700/302" className='gridImg' alt="" />
                        </div>
                        <div className="col-12 col-lg-6 p-5">
                            <h3 className='font1 text1'>Wedding</h3>
                            <p className='font2 fs-5'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Modi repudiandae esse nobis doloremque, totam nihil ut deserunt rerum repellendus, voluptas cupiditate assumenda ipsa optio nulla voluptatibus iusto nam obcaecati tempore.</p>
                            <button className='btn gridbtn'>
                                Scopri di più
                            </button>
                        </div>
                    </animated.div>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}