import React from 'react'
import { MortarboardFill, BreifcaseFill, CalenderEvent, PeopleFill } from 'react-bootstrap-icons'
import data from '../assets/json/experience.json'
import '../assets/css/Experience.css'
import { useState, useEffect } from 'react'

const Experience = () => {

    const [open, setOpen] = useState("education")
    const [tempOpen, setTempOpen] = useState("education")
    const [changing, setChanging] = useState(false)
    const [isDeleting, setIsDeleting] = useState(false)
    const [opacity, setOpacity] = useState(1)

    useEffect(() => {
        if (changing) {
            let interval
            if (isDeleting) {
                interval = setInterval(() => {
                    let newOpacity = opacity - 0.1
                    setOpacity(newOpacity)
                    if (newOpacity <= 0) {
                        setOpacity(0)
                        clearInterval(interval)
                        setOpen(tempOpen)
                        setIsDeleting(false)
                    }
                }, 25)
            } else {
                interval = setInterval(() => {
                    let newOpacity = opacity + 0.1
                    setOpacity(newOpacity)
                    if (newOpacity >= 1) {
                        setOpacity(1)
                        clearInterval(interval)
                        setChanging(false)
                    }
                }, 25)
            }
            return () => {
                clearInterval(interval)
            }
        }
    }, [changing, opacity])

    const changeOpen = (id) => {
        if(open === id) {
            return;
        }
        setTempOpen(id)
        setChanging(true)
        setIsDeleting(true)
    }

    const experience = Object.keys(data).map((item) => {
        const length = data[item].length
        const section = data[item].map((item, index) => {
            return (
                <div className="experience-data" key={item+index}>
                    {index % 2 === 1 ? (
                        <>
                            <div />
                            <div>
                                <span className="experience-rounder" />
                                { index !== length-1 ? <span className="experience-line" /> : null}
                            </div>
                        </>
                    ) : null}
                    <div className={index % 2 === 0 ? "right" : "left"}>
                        <h3 className="experience-tittle">{item[0]}</h3>
                        <span className="experience-subtitle">{item[1]}</span>
                        <div className="experience-calendar">
                            <CalenderEvent/>
                            <span>{item[2]}</span>
                        </div>
                    </div>
                    {index % 2 === 0 ? (
                        <div>
                            <span className="experience-rounder" />
                            { index != length-1 ? <span className="experience-line" /> : null}
                        </div>
                    ) : null}
                </div>
            )
        })

        return (
            <div 
                className={open === item ? "experience-content experience-active" : "experience-content"}
                data-content id={item}
                style={{opacity: opacity}}
                key={item}
            >
                {section}
            </div>
        )
    })

    return (
        <section className="experience" id="experience">
            <h2>Experience</h2>
            <div className="experience-container">
                <div
                    className={tempOpen === "education" ? "experience-button experience-active" : "experience-button"}
                    onClick={() => {
                        changeOpen("education")
                }}>
                    <MortarboardFill className="experience-icon" />
                    <span className="experience-name">Education</span>
                </div>
                <div
                    className={tempOpen === "work" ? "experience-button experience-active" : "experience-button"}
                    onClick={() => {
                        changeOpen("work")
                }}>
                    <MortarboardFill className="experience-icon" />
                    <span className="experience-name">Work</span>
                </div>
                <div
                    className={tempOpen === "projects" ? "experience-button experience-active" : "experience-button"}
                    onClick={() => {
                        changeOpen("projects")
                }}>
                    <MortarboardFill className="experience-icon" />
                    <span className="experience-name">Projects</span>
                </div>
                <div className="experience-sections">
                    {experience}
                </div>
            </div>
        </section>
    )

}

export default Experience




