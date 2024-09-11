import React, { useState, useEffect } from "react";
import "./ContactsMap.css"

import { useSpring, animated } from '@react-spring/web';
import { useInView } from 'react-intersection-observer';

import landline from "../../media/landlineicon.png"
import mobile from "../../media/mobilephoneicon.png"
import mail from "../../media/mailicon.png"
import location from "../../media/locationicon.png"

export default function ContactsMap(){

   

    // Animazione per i contatti (flip da sinistra a destra)
    const [contactRef, contactInView] = useInView({ triggerOnce: true, threshold: 1 });
    const contactFlip = useSpring({
        transform: contactInView ? 'rotateY(0deg)' : 'rotateY(-90deg)',
        opacity: contactInView ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 400 },
    });

    // Animazione per i campi del form (flip da destra a sinistra)
    const [formRef, formInView] = useInView({ triggerOnce: true, threshold: 1 });
    const formFlip = useSpring({
        transform: formInView ? 'rotateY(0deg)' : 'rotateY(90deg)',
        opacity: formInView ? 1 : 0,
        config: { mass: 5, tension: 500, friction: 80, duration: 400 },
    });

   
    
    return(
        <>
        <div className="container pt-5">
            <div className="row justify-content-between">

                {/* Contact Handles */}
                <animated.div className="col-lg-4 ps-4 ps-lg-1 mb-lg-0 text3" ref={contactRef} style={contactFlip}>
                    <h3 className="mb-4 pb-3 pb-lg-0 text1 fw-bold font1 fs-2">Contatti</h3>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={landline} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Telefono</p>
                            <p className="font2 fs-4">123456789
                            </p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={mobile} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Cellulare</p>
                            <p className="font2 fs-4">123456789</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={mail} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">E-mail</p>
                            <p className="font2 fs-4">info@copacabanahoteldesign.com</p>
                        </div>
                    </div>

                    <div className="d-flex flex-column flex-lg-row">
                        <span className="mb-2 mb-lg-0"><img src={location} className="contactsIcons p-1 me-3" alt=""/></span>
                        <div className="d-flex flex-column mb-2">
                            <p className="h4 text1 font2">Copacabana Colors</p>
                            <p className="font2 fs-4">via mario rossi 123
                            </p>
                        </div>
                    </div>
                </animated.div>
                {/* contact handles  */}



                {/* Form */}
                <animated.div className="col-lg-7 mb-lg-0" ref={formRef} style={formFlip}>
                    <div className="ps-1 ps-lg-0">
                        <h3 className="mb-4 p-3 p-lg-0 text1 mt-4 mt-lg-0 fw-bold ps-2 ps-lg-0 font1 fs-2">Scrivici</h3>
                    </div>

                    <div className="form-floating mb-3">
                        <input type="text" className="form-control" id="floatingInput" placeholder="Enter your name" />
                        <label htmlFor="floatingInput">Nome</label>
                    </div>
                    <div className="form-floating mb-3">
                        <input type="mail" className="form-control" id="floatingInput" placeholder="Enter your email" />
                        <label htmlFor="floatingInput">Email</label>
                    </div>
                    <div className="form-floating mb-3">
                        <textarea className="form-control emailMessage" style={{ resize: 'none' }} placeholder="Leave a message here" id="floatingTextarea"></textarea>
                        <label htmlFor="floatingTextarea">Messaggio</label>
                    </div>
                    <button className="btn formbtn">
                        Invia
                    </button>
                </animated.div>
                {/* form  */}


                


            </div>
        </div>
        </>
    )
} 

