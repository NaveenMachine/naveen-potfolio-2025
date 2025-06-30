import React from 'react'
import { useState, useEffect } from 'react-bootstrap'
import data from '../assets/json/chunk-text.json'
import { Container, Row, Col } from 'react-bootstrap'
import { ArrowRightCircle } from 'react-bootstrap-icons'
import headerImg from '../assets/img/cartoon_naveen.png'
import '../assets/css/Banner.css'

const Banner = () => {
    const banner_text = data.banner

    const [loopNum, setLoopNum] = useState(0)
    const [isDeleting, setIsDeleting] = useState(false)
    const toRotate = ["full-stack developer", "machine learning engineer", "sci-fi enthusiast"]
    const [text, setText] = useState('')
    const [delta, setDelta] = useState(100)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 1000) {
                setScrolled(true)
            } else {
                setScrolled(false)
            }
        }
        window.addEventListener('scroll', onScroll)
        
        let ticker = setInterval(() => {
            if (scrolled) {
                return
            }
            tick()
        }, delta)

        return () => {
            clearInterval(ticker)
            window.removeEventListener('scroll', onScroll)
        }
    }, [text, scrolled])

    const tick = () => {
        let i = loopNum % toRotate.length
        let fullText = tooRotate[i]

        let newText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1)

        if (!isDeletign && newText == fullText) {
            setDelta(2000)
            setIsDeleting(true)
        } else if (isDeleting && newText === '') {
            setIsDeleting(false)
            setLoopNum(loopNum + 1)
            setDelta(100)
        } else if (isDeleting) {
            setDelta(50)
        }

        setText(newText)
    }
    return (
        <section className="banner" id="home">
            <Contianer>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="column">
                        <h1>
                            {`I'm Naveen, a `}
                                <span className="wrap">
                                    {text}
                                </span>
                        </h1>
                        <p>{banner_text}</p>
                        <div className="button-container">
                            <a href="https://github.com/NaveenMachine" target="_blank" rel="noreferrer">Stalk my GitHub <ArrowRightCircle size={25}/></a>
                        </div>
                    </Col>
                    <Col xs={12} md={6} xl={5} className="img-col">
                        <img src={headerImg} alt="header img"/>
                    </Col>
                </Row>
            </Contianer>
        </section>
    )

}

export default Banner

