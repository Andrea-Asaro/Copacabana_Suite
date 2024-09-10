
import "./NostriEventi.css"

import exibit from "../media/eventImageExibition.jpg"
import apericena from "../media/eventImgApericena.jpg"

export default function NostriEventi(){
    return (
    <>
        <div className="container-fluid ">
            <div className="row px-5 bg0 pb-5 justify-content-evenly">
                <div className="col-12 my-5">
                    <h2 className="pt-5 text-center fw-bold text1 font1">I nostri eventi </h2>
                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-end pe-lg-4">

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

                </div>
                <div className="col-12 col-lg-6 d-flex justify-content-center justify-content-lg-start ps-lg-4">
                    
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
                </div>
            </div>
        </div>

        


        
        
    </>
    )
}