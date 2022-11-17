import React, { useState, useRef, useEffect } from "react";
import { Bars } from 'react-loader-spinner'
import { AiOutlineCheck } from 'react-icons/ai'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import emailjs from '@emailjs/browser';

import '../../css/contact.css';

export default props => {
    const MySwal = withReactContent(Swal)
    const [loading, setLoading] = useState(false);

    const [nameError, setNameError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [phoneError, setPhoneError] = useState("");
    const [reasonError, setReasonError] = useState("");

    const form = useRef(null);
    const emailInput = useRef(null);
    const nameInput = useRef(null);
    const phoneInput = useRef(null);
    const reasonInput = useRef(null);

    function fieldValidations(isSubmit) {
        return new Promise((resolve, reject) => {
            // has email or phone 
            // has name 
            // has reason

            if (!nameInput.current.value) {
                if (isSubmit) {
                    setNameError("Necessary fill name field");
                    reject("Necessary fill name field");
                }
            } else {
                setNameError(null);
            }

            if (!emailInput.current.value && !phoneInput.current.value) {
                if (isSubmit) {
                    setEmailError("Necessary fill email or phone fields");
                    setPhoneError("Necessary fill email or phone fields");
                    reject("Necessary fill email or phone fields");
                }
            } else {
                setEmailError(null);
                setPhoneError(null);
            }

            if (!reasonInput.current.value) {
                if (isSubmit) {
                    setReasonError("Necessary fill reason of contact field");
                    reject("Necessary fill reason of contact field");
                }
            } else {
                setReasonError(null);
            }

            return resolve();
        });
    }

    const sendEmail = (e) => {
        setLoading(true);
        e.preventDefault();

        fieldValidations(true).then(() => {
            window.toggleElementVisibility([".contactBar"]);

            emailjs.sendForm('service_ys788vn', 'template_ceshjim', form.current, 'dM5K8HWGLqi-vJ91z')
                .then((result) => {
                    window.toggleElementVisibility([".contactBar"]);
                    setLoading(false);

                    
                    MySwal.fire({
                        title: <p>Email sent successfully!<br/>We will redirect you to the home page in 5 seconds..</p>,
                        icon: 'success',
                        timer: 5000
                    }).then(() => {
                        window.location.href = "/";
                    });
                }, (error) => {
                    window.toggleElementVisibility([".contactBar"]);
                    setLoading(false);

                    MySwal.fire({
                        title: <p>Sorry, some error occured trying to send the email</p>,
                        icon: 'error'
                    });

                });
        }).catch(() => {
            setLoading(false);
        })
    };

    return (<>
        <Bars height="100" width="100" radius="9" color='white' ariaLabel='three-dots-loading' visible={loading} />

        <div className="titleContact">
            <h1>Send us a message</h1>
            <hr />
        </div>
        <div className="divContact">
            <div className="container">
                <form ref={form} onSubmit={e => sendEmail(e)}>
                    <div className="row">
                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="txtName">Name</label>
                            <input onChange={e => { fieldValidations(false) }} ref={nameInput} className="form-control" type="text" id="txtName" name="from_name" placeholder="Your name.." />
                            {nameError ? <label className="error form-control" htmlFor="name">{nameError}</label> : ""}
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="txtEmail">Email</label>
                            <input onChange={e => { fieldValidations(false) }} ref={emailInput} className="form-control" type="text" id="txtEmail" name="from_mail" placeholder="Your best email.." />
                            {emailError ? <label className="error form-control" htmlFor="email">{emailError}</label> : ""}
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="pNumber">Phone Number</label>
                            <input onChange={e => { fieldValidations(false) }} ref={phoneInput} className="form-control" type="text" id="pNumber" name="phone_number"
                                placeholder="Only numbers" onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                            {phoneError ? <label className="error form-control" htmlFor="phone">{phoneError}</label> : ""}
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="reason">Reason of your contact:</label>
                            <select onChange={e => { fieldValidations(false) }} ref={reasonInput} className="form-control" id="sltTeason" name="contact_reason">
                                <option value="">Select..</option>
                                <option value="I want support">I want support</option>
                                <option value="I want talk about new projects">I want talk about new projects</option>
                                <option value="Other reason">Other (leave a explanation message)</option>
                            </select>
                            {reasonError ? <label className="error form-control" htmlFor="reason">{reasonError}</label> : ""}
                        </div>

                        <div className="col-12 column">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" placeholder="Write something.." ></textarea>
                        </div>

                        <input className="form-control submitForm" type="submit" value="Send" />

                    </div>
                </form>
            </div>
        </div>
    </>);
}