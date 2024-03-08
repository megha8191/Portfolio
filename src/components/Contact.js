import React from 'react'
import myImg from "../assets/megha2.jpeg"

const Contact = () => {
  return (
    <section className='' id='contact'>
      <div className='container'>
        <div className='contact-row'>
            <div className="contact-img">
              <span className='my-img'></span>
              <img src={myImg} alt="" className='myimg' />
            </div>
              {/* <a href="" class="btn">Download CV</a> */}
          <div className=''>
            <h2 className='heading'>Contact Me</h2>
            {/* <div className='contact-box'>
              <h3 className='contact-subtitle'>Feel Free to Reach Out!</h3>
              <a href=''>+91 9896870219</a>
            </div> */}
            <div className='contact-box'>
              <h3 className='contact-subtitle'>"I'm Just an Email Away!</h3>
              <a href='mailto:meghachhabra819@gmail.com' target='_blank'>meghachhabra819@gmail.com</a>
            </div>
            <div className='contact-box'>
              <h3 className='contact-subtitle'>Let's Connect!</h3>
              <a href='https://www.linkedin.com/in/megha-chhabra-2a59b71ba/' target='_blank'>linkedin@megha-chhabra-2a59b71ba/</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact