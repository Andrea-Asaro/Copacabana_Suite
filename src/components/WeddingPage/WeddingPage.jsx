
import "./WeddingPage.css";

import HeroW from "./HeroWedding";
import CaroselloWedding from "./CaroselloWedding";
import WeddingCards from "./WeddingCards";



export default function WeddingPage(){
    return(
        <>
        
        <HeroW/>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                    <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">I matrimoni Copacabana</h1>
                    <h3 className='font2 text3 fs-4'>I matrimoni al Lido Copacabana sono un sogno elegante che diventa realtà. Immersi in un'atmosfera raffinata e suggestiva, gli sposi vivranno un'esperienza indimenticabile tra il cielo e il mare, con scenari mozzafiato e dettagli curati nei minimi particolari.</h3>
                </div>
            </div>
        </div>
        
        <CaroselloWedding/>
        <WeddingCards/>
        
        </>
    )
}