import React, { useEffect, useState, useRef } from "react";

import emailjs from '@emailjs/browser';

import '../../css/contact.css';

export default props => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_ys788vn', 'template_ceshjim', form.current, 'dM5K8HWGLqi-vJ91z')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            });
    };

    return (<>
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
                            <input className="form-control" type="text" id="txtName" name="from_name" placeholder="Your name.." />
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="txtEmail">Email</label>
                            <input className="form-control" type="text" id="txtEmail" name="from_mail" placeholder="Your best email.." />
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="pNumber">Phone Number</label>
                            <input className="form-control" type="text" id="pNumber" name="phone_number"
                                placeholder="Only numbers" onKeyPress={(event) => {
                                    if (!/[0-9]/.test(event.key)) {
                                        event.preventDefault();
                                    }
                                }} />
                        </div>

                        <div className="col-md-6 col-12 column">
                            <label className="form-label" htmlFor="reason">Reason of your contact:</label>
                            <select className="form-control" id="sltTeason" name="contact_reason">
                                <option value="">Select..</option>
                                <option value="I want support">I want support</option>
                                <option value="I want talk about new projects">I want talk about new projects</option>
                                <option value="Other reason">Other (leave a explanation message)</option>
                            </select>
                        </div>

                        <div className="col-12 column">
                            <label className="form-label" htmlFor="message">Message</label>
                            <textarea className="form-control" id="message" name="message" placeholder="Write something.." ></textarea>
                        </div>

                        <input className="form-control" type="submit" value="Send" />

                    </div>
                </form>
            </div>
        </div>
    </>);
}