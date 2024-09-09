import './Navbar.css';
import { NavLink } from 'react-router-dom';
import { useState } from "react";
import logo from '../media/copacabanaSuite-logo.png';

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    const handleLinkClick = () => {
        if (window.innerWidth < 992) {
            setIsOpen(false); // Chiudi la navbar su mobile
        }
    };

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg2 px-4 px-lg-5 py-3 py-lg-0">
            <div className="container-fluid">
                <NavLink to="/" className="navbar-brand">
                    <img src={logo} alt="Logo" className='navLogo'/>
                </NavLink>
                <button 
                    onClick={() => setIsOpen(!isOpen)} 
                    className={`navbar-toggler border-0 ${isOpen ? "navbar-togglerOpen" : ""}`} 
                    type="button" 
                    aria-controls="navbarCollapse"
                    aria-expanded={isOpen}
                    aria-label="Toggle navigation"
                >
                    <i className="bi bi-list-nested fs-1 text-a"></i>
                </button>
                <div 
                    className={`navbar-collapse ${isOpen ? 'show' : ''}`} 
                    id="navbarCollapse"
                >
                    <div className="navbar-nav w-100 justify-content-between">
                        <div className="nav-section">
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/" end onClick={handleLinkClick}>Home</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/ristorantePage" onClick={handleLinkClick}>Ristorante</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/partyPage" onClick={handleLinkClick}>Party</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/weddingPage" onClick={handleLinkClick}>Wedding</NavLink>
                        </div>
                        <div className="nav-section">
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/serviziPage" onClick={handleLinkClick}>Servizi</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/contattiPage" onClick={handleLinkClick}>Contatti</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/chisiamoPage" onClick={handleLinkClick}>Chi siamo</NavLink>
                            <NavLink className="nav-item nav-link text3 font2 mx-lg-1" to="/galleryPage" onClick={handleLinkClick}>Gallery</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}