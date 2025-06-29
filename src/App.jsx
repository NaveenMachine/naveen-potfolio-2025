import React from 'react';
import NavBar from './components/NavBar.jsx';
import Banner from './components/Banner.jsx';
import About from './components/About.jsx';
import { Container } from 'react-bootstrap';
import './assets/css/App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Skills from './components/Skills.jsx';
import Experience from './components/Experience.jsx';
import Projects from './components/Projects.jsx';
import Contact from './components/Contact.jsx';
import Footer from './components/Footer.jsx';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <section className="body">
        <Container className="box">
          <About />
          <Skills />
          <Experience />
          <Projects />
        </Container>
      </section>
      <Contact />
      <Footer />
    </div>
  );
}

export default App;