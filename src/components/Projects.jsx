import React from 'react'
import '../assets/css/Projects.css'
import data from '../assets/json/projects.json'
import { ArrowRightShort, ChevronLeft, ChevronRight } from 'react-bootstrap-icons'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper';

const images = require.contect('../assets/img/projects', true)

const Projects = () => {

    const projects = Object.keys(data).map((key) => {
        return (
            <SwiperSlide key={key}>
                <div className="project-content">
                    {/* size of image should be 1280 x 720 */}
                    <img src={images(data[key].imagePath)} alt={key} className="project-img" />
                    <div className="project-data">
                        <h3 className="project-title">{key}</h3>
                        <span className="project-subtitle">{data[key].tools}</span>
                        <p className="project-description">{data[key].description}</p>
                        <a className="button-link project-button" href={data[key].link} target="_blank" rel="noreferrer">
                            <span>
                                GitHub
                                <ArrowRightShort className="button-icon" />
                            </span>
                        </a>
                    </div>
                </div>
            </SwiperSlide>
        )
    })

  return (
    <section className="projects" id="projects">
        <h2>Projects</h2>
        <div className="project-container">
            <Swiper 
                modules={[Navigation, Pagination]}
                navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
                pagination={{ clickable: true, el: '.swiper-pagination' }}
                spaceBetween={50}
                slidesPerView={1}
                loop={true}
            >
                <div className="swiper-button-prev">
                    <ChevronLeft />
                </div>
                {projects}
                <div className="swiper-button-next">
                    <ChevronRight />
                </div>
                <div className="swiper-pagination">
                    
                </div>
            </Swiper>  
        </div>
    </section>
  )
}

export default Projects

