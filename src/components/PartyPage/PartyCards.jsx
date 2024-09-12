
import "./PartyCards.css";
import beach1 from "../../media/beachImg1.jpg"
import beach2 from "../../media/beachImg2.jpg"
import beach3 from "../../media/beachImg3.jpeg"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';
import { useState, useEffect } from 'react';

export default function PartyCards(){

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

    const { ref: ref2, inView: inView2 } = useInView({
        triggerOnce: true,
        threshold,
    });

    const slideInLeft = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? "translateX(0px)" : "translateX(-100px)",
        config: { tension: 210, friction: 16, duration: 500}
    });

   const slideInUp = useSpring({
        opacity: inView1 ? 1 : 0,
        transform: inView1 ? "translateY(0px)" : "translateY(130px)",
        config: { tension: 210, friction: 16, duration: 500}
    });

    const slideInRight = useSpring({
        opacity: inView2 ? 1 : 0,
        transform: inView2 ? "translateX(0px)" : "translateX(100px)",
        config: { tension: 210, friction: 16, duration: 500}
    });


    return(
        <>
        

        <div className="container-fluid p-lg-5 py-5 mt-5 bg0">
            <div className="row px-5 overflow-hidden">
                <animated.div ref={ref} style={slideInLeft} className="col-12 col-lg-4 my-4 d-flex justify-content-center">

                    <div className="card rounded-0 bg0 h-100" style={{ maxWidth:"500px" }} >
                        <img src={beach1} className="card-img-top h-50 rounded-0" alt="18esimo compleanno sulla spiaggia"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">18esimi Informali sulla Spiaggia</h5>
                            <p className="card-text font2 text3">Festeggia il tuo ingresso nell'età adulta con un party informale e divertente sulla spiaggia. Musica, cocktail analcolici, giochi sulla sabbia e un tramonto mozzafiato faranno da cornice al tuo giorno speciale. Un'atmosfera rilassata e giovane per un compleanno indimenticabile con i tuoi amici.</p>
                        </div>
                    </div>

                </animated.div>
                <animated.div ref={ref1} style={slideInUp} className="col-12 col-lg-4 my-4 d-flex justify-content-center">

                    <div className="card rounded-0 bg0 h-100" style={{ maxWidth:"500px" }}>
                        <img src={beach2} className="card-img-top h-50 rounded-0" alt="Ricevimento elegante al tramonto"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">Ricevimenti Eleganti al Tramonto</h5>
                            <p className="card-text font2 text3">Organizza un ricevimento sofisticato e romantico al tramonto. Il nostro lido si trasforma in una location esclusiva con tavoli elegantemente apparecchiati, luci soffuse e un menu gourmet. L'ambiente raffinato, unito alla brezza marina, creerà l'atmosfera perfetta per celebrare momenti importanti con stile ed eleganza.</p>
                        </div>
                    </div>

                </animated.div>
                <animated.div ref={ref2} style={slideInRight} className="col-12 col-lg-4 my-4 d-flex justify-content-center">

                    <div className="card rounded-0 bg0 h-100" style={{ maxWidth:"500px" }}>
                        <img src={beach3} className="card-img-top h-50 rounded-0" alt="Anniversario di matrimonio in riva al mare"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">Anniversari di Matrimonio in Riva al Mare</h5>
                            <p className="card-text font2 text3">Celebra il vostro amore con un anniversario di matrimonio sulla riva del mare. Offriamo un'ambientazione romantica con cena a lume di candela, musica dal vivo e la possibilità di rinnovare i vostri voti matrimoniali con i piedi nella sabbia. Un'esperienza intima e emozionante per ricordare il vostro giorno speciale.</p>
                        </div>
                    </div>

                </animated.div>
            </div>
        </div>
           
          
        </>
    )
}
