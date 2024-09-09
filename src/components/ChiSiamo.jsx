import './ChiSiamo.css';
import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

export default function ChiSiamo() {
    // Utilizza il hook useInView per rilevare quando l'elemento entra nel viewport
    const { ref, inView } = useInView({
        triggerOnce: true, // L'animazione si attiva solo una volta
        threshold: 0.2, // Scatta quando il 20% dell'elemento è visibile
    });

    // Crea l'animazione con useSpring
    const fadeUpStyle = useSpring({
        opacity: inView ? 1 : 0,
        transform: inView ? 'translateY(0px)' : 'translateY(50px)',
        config: { mass: 1, tension: 180, friction: 12 }, // Personalizza la velocità e la tensione dell'animazione
    });

    return (
        <div className="container-fluid">
            <div className="row whiteBand" ref={ref}>
                <div className="col-12 py-5 imageBand">
                    {/* Applica l'animazione ai componenti */}
                    <animated.h2 style={fadeUpStyle} className="z-2 animatedh2 pt-5 text-center fw-bold text1 font1">
                        Chi siamo
                    </animated.h2>
                    <animated.p style={fadeUpStyle} className="text3 z-2 mt-4 mb-5 text-center fs-4 lorem font2">
                        Scopri il fascino del Copacabana Colors, il B&B che porta la Puglia nella tua vacanza. A due passi dal mare, ti accoglie con camere luminose e curate nei dettagli, dove ogni comfort è pensato per farti sentire come a casa, con un tocco di stile e autenticità.
                    </animated.p>
                </div>
            </div>
        </div>
    );
}
