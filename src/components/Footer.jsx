import './Footer.css'
import logo from "../media/logo.png"
import { NavLink } from 'react-router-dom'

export default function Footer(){

    return(

        <>
        
        <div className="container-fluid px-5 bg1" id='footer'>
            <footer className="row row-cols-1 row-cols-sm-2 row-cols-md-4 py-5 my-5 px-lg-5 font2">
                <div className="col mb-3">
                    <NavLink to="/" className="d-flex align-items-center mb-3 link-body-emphasis text-decoration-none">
                        <img src={logo} alt="Logo"/>
                    </NavLink>
                    <p className="text3 ps-3">© 2024</p>
                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Copacabana Colors</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <NavLink to="/" className="nav-link p-0 text3 fs-6 ">Home</NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/galleryPage" className="nav-link p-0 text3 fs-6 ">Gallery</NavLink>
                        </li>
                        <li className="nav-item mb-2">
                            <NavLink to="/chisiamoPage" className="nav-link p-0 text3 fs-6 ">Chi siamo</NavLink>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Hotel Design</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanahoteldesign.com/" className="nav-link p-0 text3 fs-6 ">Home</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanahoteldesign.com/bike-hotel/" className="nav-link p-0 text3 fs-6 ">Bike hotel</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanahoteldesign.com/gallery/" className="nav-link p-0 text3 fs-6 ">Gallery</a>
                        </li>
                    </ul>
                </div>

                <div className="col mb-3">
                    <h5 className='h4 mb-4 text3'>Copacabana Suite</h5>
                    <ul className="nav flex-column">
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanasuite.com/" className="nav-link p-0 text3 fs-6 ">Home</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanasuite.com/?page_id=173" className="nav-link p-0 text3 fs-6 ">Ristorante</a>
                        </li>
                        <li className="nav-item mb-2">
                            <a target="blank" href="https://www.copacabanasuite.com/wedding/" className="nav-link p-0 text3 fs-6 ">Wedding</a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
        
        
        </>
    )

}
