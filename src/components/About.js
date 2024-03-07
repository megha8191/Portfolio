import React from 'react'
import myImg from "../assets/megha.jpg"

const About = () => {
  return (
    <section className="about white-section" id="about">
      <div className='container'>
        <div className='about-row '>
          <div>
            {/* <h2 className="heading" style={{ marginBottom: "2px" }}>About <span>Me</span></h2> */}
            
          </div>
          {/* <div className="about-img">
            <img src={myImg} alt="" />
            <span className="circle-spin"></span>
          </div> 
            <div className="about-content">
              <a href="" className="btn" id="downloadCV" target="_blank">Download CV</a>
          </div>*/}
        </div>
        <div className='timeline-row'>
        <div className='timeline-col'>
          <p className='title' >Experience</p>
          <ul className="timeline">
            <li className="timeline-event">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">Nov 2022 - Dec 2023</p>
                <h3>Frontend Developer</h3>
                <h4>Swap IT Hub, Mohali, India</h4>
                <ul>
                  {/* <li>Implementing HTML to establish core structure with a focus on SEO best practices</li> */}
                  <li>Styling web pages using CSS and CSS frameworks Bootstrap and Tailwind .</li>
                  <li>Creating interactive user interfaces using JavaScript and jQuery.</li>
                  <li>Demonstrate familiarity with collaboration tools like Git and Filezilla.</li>
                  <li>Basic understanding of Figma and Photoshop for design  and image editing.</li>
                  <li>Implementing responsive and scalable dashboard layouts for admin panels.</li>
                </ul>
              </div>
            </li>
            <li className="timeline-event">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">Feb 2021 - Nov 2022</p>
                <h3>Web Designer</h3>
                <h4>TecHangouts, Mohali, India</h4>
                <ul>
                  <li>Implementing HTML to establish core structure with a focus on SEO best practices</li>
                  <li>Styling web pages using CSS and CSS frameworks Bootstrap and Tailwind .</li>
                  <li>Creating interactive user interfaces using JavaScript and jQuery.</li>
                  <li>Demonstrate familiarity with collaboration tools like Git and Filezilla.</li>
                  <li>Basic understanding of Figma and Photoshop for design  and image editing.</li>
                  <li>Implementing responsive and scalable dashboard layouts for admin panels.</li>
                </ul>
              </div>
            </li>
            <li className="timeline-event">
              <label className="timeline-event-icon"></label>
              <div className="timeline-event-copy">
                <p className="timeline-event-thumbnail">Aug 2020 - Jan 2021</p>
                <h3>Frontend Development Internship</h3>
                <h4>RSWEBS Technologies, Remote</h4>
              </div>
            </li>

          </ul>
        </div>
        <div className='timeline-col'>
          <p className='title'>Education</p>
          <ul className='timeline education-timeline'>
            <li>
              <p className="timeline-event-thumbnail">2021-2024</p>
              <h3>Bachelor of Computer Applications (BCA)</h3>
              <p>Indira Gandhi National University, IGNOU</p>
            </li>
            <li>
              <p className="timeline-event-thumbnail">2020</p>
              <h3>High School, CBSE</h3>
              <p>SD Public School, Yamunanagar, Haryana</p>
            </li>
          </ul>
        </div>
        </div>


      </div>

    </section>
  )
}

export default About