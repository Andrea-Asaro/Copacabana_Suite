import "./WeddingCards.css";
import weddingImg1 from '../../media/weddingimg1.jpg';
import weddingImg2 from '../../media/weddingImg2.jpg';


export default function WeddingCards(){
    return(
        <>
        <div className="container-fluid p-lg-5 py-5 bg0">
            <div className="row px-lg-5 px-2 py-lg-2">
                <div className="col-12 col-lg-6 my-4 d-flex justify-content-center">
                    <div className="card rounded-0 bg0 h-100 wedding-card" style={{backgroundImage: `url(${weddingImg1})`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth:"800px"}}>
                        <div className="card-body p-4 d-flex flex-column justify-content-end" style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
                            <h5 className="card-title text0 font1 mb-3 fs-3">Creare Esperienze Matrimoniali</h5>
                            <p className="card-text font2 text0">Trasformiamo il vostro giorno speciale in un'esperienza indimenticabile. Dal primo incontro all'ultimo ballo, curiamo ogni dettaglio per creare un matrimonio che rifletta la vostra storia d'amore unica.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12 col-lg-6 my-4 d-flex justify-content-center">
                    <div className="card rounded-0 bg0 h-100 wedding-card" style={{backgroundImage: `url(${weddingImg2})`, backgroundSize: 'cover', backgroundPosition: 'center', maxWidth:"800px"}}>
                        <div className="card-body p-4 d-flex flex-column justify-content-end" style={{backgroundColor: 'rgba(0,0,0,0.25)'}}>
                            <h5 className="card-title text0 font1 mb-3 fs-3">Design che Ispira e Stupisce</h5>
                            <p className="card-text font2 text0">Il nostro approccio al design matrimoniale va oltre la semplice decorazione. Creiamo ambienti mozzafiato che catturano l'essenza della vostra relazione e stupiscono i vostri ospiti.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </>
    )
}