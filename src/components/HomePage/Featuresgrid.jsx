import './Featuresgrid.css';


export default function Featuresgrid(){
    return (
        <>
        <div className="container-fluid">
            <div className="row bg2">
                <div className="col-12">
                    <div className="row mt-5 pb-4 pt-3 pt-lg-5 justify-content-center gradientColor">
                        <div className='col-12 col-lg-6 mb-4 text-center px-4 px-lg-0'>
                            <h2 className='font1 fw-bold text1 mb-4'>Il nostro lido</h2>
                            <p className='font2 fs-5'>Il Copacabana Suite rappresenta la fusione di sfere sensoriali che guidano gli sposi in un suggestivo gioco di emozioni che si snodano tra le stelle e il mare.</p>
                        </div>
                    </div>
                </div>
                <div className="col-12">
                    <div className="row bg2">
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
                    </div>
                </div>
                <div className="col-12">
                    <div className="row bg2">
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
                    </div>
                </div>
                <div className="col-12">
                    <div className="row bg2">
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
                    </div>
                </div>
            </div>
        </div>
        
        
        
        </>
    )
}