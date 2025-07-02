import React from 'react'
import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from "../assets/img/cartoon_naveen.avif"
import emailjs from '@emailjs/browser'

import '../assets/css/Contact.css'

const Contact = () => {
    const formInitialDetails = {
        firstName: '',
        lastName: '',
        email: '',
        message: ''
    }

    const [formDetails, setFormDetails] = useState(formInitialDetails)
    const [buttonText, setButtonText] = useState('Send')
    const [status, setStatus] = useState({})

    const onFormUpdate = (key, value) => {
        setFormDetails({
            ...formDetails,
            [key]: value
        })
    }

    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault()
        setButtonText('Sending...')

        // Basic validation before sending
        if (!formDetails.firstName || !formDetails.lastName || !formDetails.email || !formDetails.message) {
            setStatus({ success: false, message: 'Please fill in all fields.' });
            setButtonText('Send');
            console.error('Validation Error: Please fill in all fields.');
            return;
        }

        // --- THE FIX IS HERE ---
        // Change import.meta.env.REACT_APP_... to import.meta.env.VITE_...
        const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;    // <--- Changed to VITE_
        const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;  // <--- Changed to VITE_
        const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;    // <--- Changed to VITE_

        // Add a check to ensure they are loaded (good practice)
        if (!serviceId || !templateId || !publicKey) {
            console.error("EmailJS environment variables are not loaded! Check .env file and VITE_ prefix.");
            setStatus({ success: false, message: 'Configuration error: Email service not set up.' });
            setButtonText('Send');
            return;
        }
        // --- END OF FIX ---


        emailjs.sendForm(serviceId, templateId, form.current, publicKey)
            .then((result) => {
                console.log("EmailJS Result:", result.text)
                setStatus({
                    success: true,
                    message: 'Message sent successfully!'
                })
                setButtonText('Send')
                setFormDetails(formInitialDetails)
            }).catch((error => {
                console.error("EmailJS Error:", error.text || error)
                setStatus({
                    success: false,
                    message: 'Something went wrong, please try again!'
                })
                setButtonText('Send')
            }))
    }

    return (
        <section className="contact-section" id="contact">
            <Container>
                <Row className="align-items-center">
                    <Col size={12} md={5}>
                        <img src = {contactImg} alt="Contact Me"></img>
                    </Col>
                    <Col>
                        <h1>Get In Touch</h1>
                        <form ref={form} onSubmit={sendEmail}>
                            <Row>
                                <Col size={12} sm={6} className="px-1">
                                    <input name="first_name" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} required/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input name="last_name" type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} required/>
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <input name="email" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)} required/>
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <textarea name="message" rows="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)} required/>
                                    <button type="submit">
                                        <span>
                                            {buttonText}
                                        </span>
                                    </button>
                                </Col>
                            </Row>
                            {/* Status message display (if you haven't added this from previous suggestions) */}
                            {
                                status.message &&
                                <Col>
                                    <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                                </Col>
                            }
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact