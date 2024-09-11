//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// bootstrap 

/* miei font installati nel progetto  */

import './App.css'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componenti
import ScrollToTop from "./components/ScrollToTop";


import Navbar from "./components/Navbar";
import Whatsapp from './components/Whatsapp';
import Home from './components/HomePage/Home';
import RistorantePage from './components/RistorantePage/RistorantePage';
import PartyPage from './components/PartyPage/PartyPage';
import WeddingPage from './components/WeddingPage/WeddingPage';
import GalleryPage from './components/GalleryPage';
import ChisiamoPage from './components/ChisiamoPage';
import Footer from './components/Footer';

// componenti

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Copacabana_Suite' : '';

  return (
    <Router basename={basename}>
      <ScrollToTop />
      <div className="fade-in"> 
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ristorantePage" element={<RistorantePage />} />
            <Route path="/PartyPage" element={<PartyPage />} />
            <Route path="/WeddingPage" element={<WeddingPage />} />

            <Route path="/galleryPage" element={<GalleryPage />} />
            <Route path="/chisiamoPage" element={<ChisiamoPage />} />
        </Routes>

        <Whatsapp/>
        <Footer/>
      </div> 
    </Router>
  )
}

export default App
