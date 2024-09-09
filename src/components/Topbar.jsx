import './Topbar.css'
import facebook25 from '../media/facebook25.png';
import instagram25 from '../media/instagram25.png';


export default function Topbar(){

    return (



        <div className="topbar container-fluid bg2 d-flex align-content-center px-5 d-none d-lg-block ">
            <div className="row mx-5 px-5 gx-0 align-items-center justify-content-between">

                <div className="col-lg-3 ms-3 mb-lg-0 d-flex flex-wrap align-items-center">
                    <a href="#" className="me-1">
                        <img src={facebook25} alt="" />
                    </a>
                    <a href="#" className="ms-1">
                        <img src={instagram25} alt="" />
                    </a>
                </div>

                <div className='col-lg-3 d-flex justify-content-center  text-lg-start mb-lg-0'>
                    <a href="#" className="text1 font2 pe-lg-2">+01234567890</a>
                </div>

                <div className='col-lg-3 me-3 d-flex justify-content-end text-lg-start mb-lg-0'>
                    <a href="#" className="text1 font2 me-0 pe-lg-2">Example@gmail.com</a>
                </div>


            </div>
        </div>

    )
}
