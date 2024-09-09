//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import 'bootstrap-icons/font/bootstrap-icons.css';
// bootstrap 

/* miei font installati nel progetto  */

import './App.css'



import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// componenti
import Navbar from "./components/Navbar";
import Topbar from "./components/Topbar";
import Whatsapp from './components/Whatsapp';
import Home from './components/Home';
import GalleryPage from './components/GalleryPage';
import ChisiamoPage from './components/ChisiamoPage';
import Footer from './components/Footer';

// componenti

function App() {
  const basename = process.env.NODE_ENV === 'production' ? '/Copacabana_Colors__React' : '';

  return (
    <Router basename={basename}>
      <div className="fade-in"> 
        {/* <Topbar/> */}
        <Navbar/>
        
        <Routes>
            <Route path="/" element={<Home />} />
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
