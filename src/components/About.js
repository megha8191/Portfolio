import React from 'react'

const About = () => {
  return (
    <section className="about" id="about">
    <h2 className="heading">About <span>Me</span></h2>
    <div className="about-img">
      <img src="./assets/Avatar.jpg" alt="" />
      <span className="circle-spin"></span>
    </div>
    <div className="about-content">
      <h3>Frontend Developer!</h3>
      <p>
        I'm always excited to connect with fellow developers, designers, and
        enthusiasts. Whether it's discussing new ideas, collaborating on
        projects, or exploring opportunities, feel free to reach out to me.
        Together, we can make the web a more delightful and accessible place.
      </p>

      <p>
        Thank you for visiting my portfolio, and I look forward to sharing my
        journey with you!
      </p>

      <div className="btn-box btns">
        <a href="" className="btn" id="downloadCV" target="_blank">Download CV</a>
      </div>
    </div>
  </section>
  )
}

export default About