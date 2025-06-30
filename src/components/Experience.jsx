import React, { useState, useEffect } from 'react'
import { MortarboardFill, BriefcaseFill, CalendarEvent, PeopleFill } from 'react-bootstrap-icons'
import data from '../assets/json/experience.json'
import '../assets/css/Experience.css'

const Experience = () => {
  const [open, setOpen] = useState('education')
  const [tempOpen, setTempOpen] = useState('education')
  const [changing, setChanging] = useState(false)
  const [isDeleting, setIsDeleting] = useState(false)
  const [opacity, setOpacity] = useState(1)

  useEffect(() => {
    if (!changing) return

    const interval = setInterval(() => {
      setOpacity(prev => {
        const step = 0.1
        const newOpacity = isDeleting ? prev - step : prev + step

        if (isDeleting && newOpacity <= 0) {
          clearInterval(interval)
          setOpen(tempOpen)
          setIsDeleting(false)
          return 0
        }

        if (!isDeleting && newOpacity >= 1) {
          clearInterval(interval)
          setChanging(false)
          return 1
        }

        return newOpacity
      })
    }, 25)

    return () => clearInterval(interval)
  }, [changing, isDeleting, tempOpen])

  const changeOpen = (id) => {
    if (open === id) return
    setTempOpen(id)
    setChanging(true)
    setIsDeleting(true)
  }

  const experience = Object.keys(data).map((sectionKey) => {
    const items = data[sectionKey]

    return (
      <div
        key={sectionKey}
        className={open === sectionKey ? 'experience-content experience-active' : 'experience-content'}
        id={sectionKey}
        style={{ opacity }}
      >
        {items.map((item, index) => (
          <div className="experience-data" key={`${item[0]}-${index}`}>
            {index % 2 === 1 && (
              <>
                <div />
                <div>
                  <span className="experience-rounder" />
                  {index !== items.length - 1 && <span className="experience-line" />}
                </div>
              </>
            )}
            <div className={index % 2 === 0 ? 'right' : 'left'}>
              <h3 className="experience-tittle">{item[0]}</h3>
              <span className="experience-subtitle">{item[1]}</span>
              <div className="experience-calendar">
                <CalendarEvent />
                <span>{item[2]}</span>
              </div>
            </div>
            {index % 2 === 0 && (
              <div>
                <span className="experience-rounder" />
                {index !== items.length - 1 && <span className="experience-line" />}
              </div>
            )}
          </div>
        ))}
      </div>
    )
  })

  return (
    <section className="experience" id="experience">
      <h2>Experience</h2>
      <div className="experience-container">
        {[
          { id: 'education', label: 'Education', icon: <MortarboardFill className="experience-icon" /> },
          { id: 'work', label: 'Work', icon: <BriefcaseFill className="experience-icon" /> },
          { id: 'projects', label: 'Projects', icon: <PeopleFill className="experience-icon" /> }
        ].map(({ id, label, icon }) => (
          <div
            key={id}
            className={tempOpen === id ? 'experience-button experience-active' : 'experience-button'}
            onClick={() => changeOpen(id)}
          >
            {icon}
            <span className="experience-name">{label}</span>
          </div>
        ))}

        <div className="experience-sections">{experience}</div>
      </div>
    </section>
  )
}

export default Experience
