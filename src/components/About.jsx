import React, { useState, useEffect } from 'react';
import { Row, Col } from 'react-bootstrap';
import '../assets/css/About.css';
import data from '../assets/json/chunk-text.json';
import resume from '../assets/resume.pdf';

const images = import.meta.glob('../assets/img/naveen/*.{png,jpg,jpeg,svg}', { eager: true });

const About = () => {
  const about_text = data.about;
  const toRotate = Object.values(images).map(module => module.default);

  const [opacity, setOpacity] = useState(0);
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [delta, setDelta] = useState(100);

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => clearInterval(ticker);
  }, [opacity, loopNum, isDeleting, delta]); // added missing dependencies

  const tick = () => {
    let newOpacity = isDeleting ? opacity - 0.1 : opacity + 0.1;
    newOpacity = Math.min(1, Math.max(0, newOpacity)); // clamp between 0 and 1

    if (!isDeleting && newOpacity >= 1) {
      setDelta(2000);
      setIsDeleting(true);
    } else if (isDeleting && newOpacity <= 0) {
      setIsDeleting(false);
      setLoopNum(prev => (prev + 1) % toRotate.length);
      setDelta(100);
    } else if (isDeleting) {
      setDelta(50);
    }

    setOpacity(newOpacity);
  };

  return (
    <section className="about" id="about">
      <h2>Hello World!</h2>
      <Row className="align-items-center">
        <Col xs={12} lg={6} className="img-col">
          <img
            className="abt-img"
            src={toRotate[loopNum]}
            alt="Naveen"
            style={{ opacity: opacity }}
          />
        </Col>
        <Col xs={12} lg={5}>
          <p>{about_text}</p>
          <a className="button-link" href={resume} download>
            <span>Resume</span>
          </a>
        </Col>
      </Row>
    </section>
  );
};

export default About;
