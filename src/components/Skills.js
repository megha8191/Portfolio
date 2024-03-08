import React from 'react'
import bootstrap from "../assets/bootstrap.png"
import html from  "../assets/html.png"
import javascript from "../assets/javascript.png"
import react from "../assets/React.png"


const skillSet = [
  {
    "img": html,
    "text":"HTML"
  },
  {
    "img": bootstrap,
    "text":"CSS"
  },
  {
    "img": react,
    "text":"React"
  },
  {
    "img": javascript,
    "text":"Javascript"
  },
  {
    "img": bootstrap,
    "text":"Redux Toolkit"
  },
  {
    "img": bootstrap,
    "text":"Tailwind CSS"
  },
  {
    "img": bootstrap,
    "text":"jQuery"
  },
  {
    "img": bootstrap,
    "text":"Bootstrap"
  },
  {
    "img": bootstrap,
    "text":"Wordpress"
  },
  {
    "img": bootstrap,
    "text":"Git"
  },
  {
    "img": bootstrap,
    "text":"Figma(basic)"
  },
  {
    "img": bootstrap,
    "text":"CMS builders frontend"
  },
]

const Skills = () => {
  return (
    <section className='' id='skills'>
        <div className='container'>
          <div className='skills-row'>
            <div className='skills-title'>
              <h3>Skills</h3>
              <h2 className='heading'>Skills & Expertise</h2>
            </div>
            <div className='skills-columns'>
              {skillSet.map(function(skill){
                return <div className='skill'>
                  <img src={skill.img} alt={skill.text}></img>
                  <p className=''>{skill.text}</p>
                </div>
                })
              }
              </div>
          </div>
        </div>
    </section>
  )
}

export default Skills