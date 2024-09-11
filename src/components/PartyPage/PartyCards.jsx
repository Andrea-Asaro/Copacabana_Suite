
import "./PartyCards.css";
import beach1 from "../../media/beachImg1.jpg"
import beach2 from "../../media/beachImg2.jpg"
import beach3 from "../../media/beachImg3.jpeg"

export default function PartyCards(){
    return(
        <>
        

        <div className="container-fluid p-lg-5 py-5 mt-5 bg0">
            <div className="row px-5">
                <div className="col-12 col-lg-4 my-4">

                    <div className="card rounded-0 bg0 h-100">
                        <img src={beach1} className="card-img-top h-50 rounded-0" alt="18esimo compleanno sulla spiaggia"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">18esimi Informali sulla Spiaggia</h5>
                            <p className="card-text font2 text3">Festeggia il tuo ingresso nell'età adulta con un party informale e divertente sulla spiaggia. Musica, cocktail analcolici, giochi sulla sabbia e un tramonto mozzafiato faranno da cornice al tuo giorno speciale. Un'atmosfera rilassata e giovane per un compleanno indimenticabile con i tuoi amici.</p>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-4 my-4">

                    <div className="card rounded-0 bg0 h-100">
                        <img src={beach2} className="card-img-top h-50 rounded-0" alt="Ricevimento elegante al tramonto"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">Ricevimenti Eleganti al Tramonto</h5>
                            <p className="card-text font2 text3">Organizza un ricevimento sofisticato e romantico al tramonto. Il nostro lido si trasforma in una location esclusiva con tavoli elegantemente apparecchiati, luci soffuse e un menu gourmet. L'ambiente raffinato, unito alla brezza marina, creerà l'atmosfera perfetta per celebrare momenti importanti con stile ed eleganza.</p>
                        </div>
                    </div>

                </div>
                <div className="col-12 col-lg-4 my-4">

                    <div className="card rounded-0 bg0 h-100">
                        <img src={beach3} className="card-img-top h-50 rounded-0" alt="Anniversario di matrimonio in riva al mare"/>
                        <div className="card-body p-4">
                            <h5 className="card-title text1 font1 mb-3 fs-4">Anniversari di Matrimonio in Riva al Mare</h5>
                            <p className="card-text font2 text3">Celebra il vostro amore con un anniversario di matrimonio sulla riva del mare. Offriamo un'ambientazione romantica con cena a lume di candela, musica dal vivo e la possibilità di rinnovare i vostri voti matrimoniali con i piedi nella sabbia. Un'esperienza intima e emozionante per ricordare il vostro giorno speciale.</p>
                        </div>
                    </div>

                </div>
            </div>
        </div>
           
        
        
        
        
        </>
    )
}
