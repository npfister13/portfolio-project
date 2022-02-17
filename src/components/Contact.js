import React, { useState } from "react";
import NavTab from "./NavTab";
import { init } from '@emailjs/browser'
import { send } from 'emailjs-com'
init("user_fWsJfb5HpUJl4vKgJHZi3");



// service_4av0u3s
export default function Contact() {

    const [contactInfo, setContactInfo] = useState({
        from_name: "",
        to_name: 'Nicholas Pfister',
        message: "",
        reply_to: "",
    });

    const handleChange = (event) => {
        setContactInfo({ ...contactInfo, [event.target.name]: event.target.value });
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        console.log(contactInfo);
        send(
            'service_4av0u3s',
            'template_fyb87tb',
            contactInfo,
            'user_fWsJfb5HpUJl4vKgJHZi3'
        )
            .then((response) => {
                console.log('SUCCESS!', response.status, response.text)
            })
            .catch((err) => {
                console.log('FAILED...', err);
            });
        setContactInfo({ from_name: "", reply_to: "", message: "" })
    }

    return(
        <React.Fragment>
            <NavTab/>
            <div className="contact">
                <div className="container">
                    <h1>Get in contact</h1>
                    <div className="row row-content">
                        <div className="col-6 m-auto">
                            <form id="contact-form" onSubmit={handleSubmit} method="POST">
                                <div className="form-group">
                                    <label htmlFor="name">Name</label>
                                    <input type="text" name="from_name" className="form-control" placeholder="Your Name" value={contactInfo.from_name} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="exampleInputEmail1">Email address</label>
                                    <input type="email" name="reply_to" className="form-control" placeholder="Your Email" aria-describedby="emailHelp" value={contactInfo.reply_to} onChange={handleChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="message">Message</label>
                                    <textarea className="form-control" name="message" rows="5" placeholder="Message" value={contactInfo.message} onChange={handleChange}></textarea>
                                </div>
                                <div className="subBtn col-span-2 align-self-end">
                                    <button type="submit" className="btn btn-primary btn-lg">Submit</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )

}