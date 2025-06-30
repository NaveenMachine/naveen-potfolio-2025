import React from 'react'
import { useState, useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import contactImg from "../assets/img/cartoon_naveen.png"
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

        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, form.current, process.env.REACT_APP_PUBLIC_KEY)
            .then((result) => {
                console.log(result.text)
                setStatus({
                    success: true,
                    message: 'Message sent successfully!'
                })
                setButtonText('Send')
                setFormDetails(formInitialDetails)
            }).catch((error => {
                console.log(error.text)
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
                                    <input name="first_name" type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)}/>
                                </Col>
                                <Col size={12} sm={6} className="px-1">
                                <input name="last_name" type="text" value={formDetails.firstName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <input name="email" type="email" value={formDetails.email} placeholder="Email" onChange={(e) => onFormUpdate('email', e.target.value)}/>
                                </Col>
                            </Row>
                            <Row>
                                <Col size={12} className="px-1">
                                    <textarea name="message" row="6" value={formDetails.message} placeholder="Message" onChange={(e) => onFormUpdate('message', e.target.value)}/>
                                    <button type="submit">
                                        <span>
                                            {buttonText}
                                        </span>
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}

export default Contact

