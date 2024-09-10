

import HeroR from "./HeroRistorante";
import CaroselloR from "./CaroselloRistorante";

export default function RistorantePage(){
    return(
        <>

        <HeroR/>

        <div className="container">
            <div className="row justify-content-center">
                <div className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                    <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">Il nostro ristorante</h1>
                    <h3 className='font2 text3 fs-4'>Il ristorante Copacabana accompagna gli sposi in un viaggio sensoriale tra sapori raffinati e atmosfere suggestive, creando emozioni che si intrecciano tra il cielo e il mare.</h3>
                </div>
            </div>
        </div>

        <CaroselloR/>



        </>
    )
}