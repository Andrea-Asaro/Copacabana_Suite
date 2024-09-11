
import "./PartyPage.css";

import HeroP from "./HeroParty"
import PartyCards from "./PartyCards"


export default function PartyPage(){
    return(
    <>
        <div className="container-fluid p-0 bg2">
        
            <HeroP/>

            <div className="container">
                <div className="row justify-content-center">
                    <div className="col-12 col-lg-6 text-center px-5 px-lg-0 mb-4">
                        <h1 className="ristoranteTitle font1 text1 fw-bold text-center mt-5 pt-3 pt-lg-5 mb-4">I nostri party</h1>
                        <h3 className='font2 text3 fs-4'>Scopri i nostri party esclusivi al Copacabana Suite: feste eleganti, eventi indimenticabili e serate magiche in riva al mare. Prenota ora e vivi un'esperienza unica!</h3>
                    </div>
                </div>
            </div>
            
            <PartyCards/>
            
        </div>
    </>
    )
}