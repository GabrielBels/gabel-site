import React from "react";

import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

import '../../css/socialmediasbar.css'

export default props => {
    return (
        <div className="contactBar">
            <h1 className="titleSocialMedia">Our Social Medias</h1><hr/>
            <div className="row">
                <a className="col-2 socialMediaLink" target="blank" href="https://www.facebook.com/people/gabeltech/100087523245890/" ><FaFacebook /></a>
                <a className="col-2 socialMediaLink" target="blank" href="https://instagram.com/gabeltech"><FaInstagram /></a>
                <a className="col-4 socialMediaLink" target="blank" href="mailto:gabriel@gabeltech.com"><HiOutlineMail /></a>
                <a className="col-2 socialMediaLink" target="blank" href="https://www.linkedin.com/company/gabeltech/"><FaLinkedin /></a>
                <a className="col-2 socialMediaLink" target="blank" href="https://api.whatsapp.com/send?phone=5531991433820"><FaWhatsapp /></a>
            </div>
        </div>
    )
}