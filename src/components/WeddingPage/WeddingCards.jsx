import "./WeddingCards.css";

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

import weddingImg1 from '../../media/weddingimg1.jpg';
import weddingImg2 from '../../media/weddingImg2.jpg';


export default function WeddingCards(){

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
        transform: inView ? "translate(0px, 0px)" : "translate(-90px, 90px)",
        config: { mass: 1, tension: 120, friction: 14, duration: 800 }
    });

    const slideInRight = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? "translate(0px, 0px)" : "translate(90px, 90px)",
        config: { mass: 1, tension: 120, friction: 14, duration: 800 }
    });


    return(
        <>
        <div className="container-fluid p-lg-5 py-5 bg0">
            <div className="row px-lg-5 px-2 py-lg-2 overflow-hidden">
                <animated.div ref={ref} style={slideInLeft} className="col-12 col-lg-6 my-4 d-flex justify-content-center">
                    <div className="card rounded-0 bg0 h-100 wedding-card" style={{backgroundImage: `url(${weddingImg1})`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth:"800px"}}>
                        <div className="card-body p-4 d-flex flex-column justify-content-end" style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
                            <h5 className="card-title text0 font1 mb-3 fs-3">Creare Esperienze Matrimoniali</h5>
                            <p className="card-text font2 text0">Trasformiamo il vostro giorno speciale in un'esperienza indimenticabile. Dal primo incontro all'ultimo ballo, curiamo ogni dettaglio per creare un matrimonio che rifletta la vostra storia d'amore unica.</p>
                        </div>
                    </div>
                </animated.div>
                <animated.div ref={ref1} style={slideInRight} className="col-12 col-lg-6 my-4 d-flex justify-content-center">
                    <div className="card rounded-0 bg0 h-100 wedding-card" style={{backgroundImage: `url(${weddingImg2})`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth:"800px"}}>
                        <div className="card-body p-4 d-flex flex-column justify-content-end" style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
                            <h5 className="card-title text0 font1 mb-3 fs-3">Design che Ispira e Stupisce</h5>
                            <p className="card-text font2 text0">Il nostro approccio al design matrimoniale va oltre la semplice decorazione. Creiamo ambienti mozzafiato che catturano l'essenza della vostra relazione e stupiscono i vostri ospiti.</p>
                        </div>
                    </div>
                </animated.div>
            </div>
        </div>
        </>
    )
}