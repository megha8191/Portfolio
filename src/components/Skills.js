import React from 'react'
import bootstrap from "../assets/bootstrap.png"
import html from  "../assets/html.png"
import javascript from "../assets/javascript.png"
import react from "../assets/React.png"
import cssimg from "../assets/css.png"
import tailwind from "../assets/tailwind.png"
import jquery from "../assets/jquery.png"
import git from "../assets/git.png"
import wordpress from "../assets/wordpress.png"
import figma from "../assets/figma2.png"
import reduxToolkit from "../assets/redux-toolkit.png"
import other from "../assets/coding.png"



const skillSet = [
  {
    "img": html,
    "text":"HTML"
  },
  {
    "img": cssimg,
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
    "img": reduxToolkit,
    "text":"Redux Toolkit"
  },
  {
    "img": tailwind,  
    "text":"Tailwind CSS"
  },
  {
    "img": jquery,
    "text":"jQuery"
  },
  {
    "img": bootstrap,
    "text":"Bootstrap"
  },
  {
    "img": wordpress,
    "text":"Wordpress"
  },
  {
    "img": git,
    "text":"Git"
  },
  {
    "img": figma, 
    "text":"Figma(basic)"
  },
  {
    "img": other,
    "text":"Other CMS"
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
                return <div className='skill' key={skill.text}>
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