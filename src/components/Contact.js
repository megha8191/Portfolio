import React from 'react'
import myImg from "../assets/megha2.jpeg"
import contactIcon from '../assets/msg-icon.png'
const Contact = () => {
  return (
    <section className='contact' id='contact'>
      <div className='container'>
        <div className='contact-row'>
            <div className="contact-img">
              <img src={contactIcon} className='contactIcon'/>
              {/* <span className='my-img'></span>
              <img src={myImg} alt="" className='myimg' /> */}
            </div>
              {/* <a href="" class="btn">Download CV</a> */}
          <div className=''>
            <h2 className='heading ' style={{
              marginBottom:"5px"
            }}>Let's Talk, Contact Me.</h2>
            <p style={{
              marginBottom:"40px"}
            }>Let's create something together </p>
            <div className='contact-box'>
              <div className='icon-contact'>
                 <i class='bx bx-envelope'></i>
              </div>
              <div>
              <h3 className='contact-subtitle'>I'm Just an Email Away!</h3>
              <a href='mailto:meghachhabra819@gmail.com' target='_blank'>meghachhabra819@gmail.com</a>
              </div>
            </div>
            <div className='contact-box'>
              <div className='icon-contact'>
              <i class='bx bxl-linkedin'></i>
              </div>
              <div>
              <h3 className='contact-subtitle'>Let's Connect!</h3>
              <a href='https://www.linkedin.com/in/megha-chhabra-2a59b71ba/' target='_blank'>linkedin@megha-chhabra-2a59b71ba/</a>
              </div>
            </div>
            {/* <div className='contact-box'>
              <div className='icon-contact'>
              <i class='bx bx-phone'></i>
              </div>
              <div>
              <h3 className='contact-subtitle'>Feel Free to Reach Out!</h3>
              <a href=''>+91 9896870219</a>
              </div>
            </div> */}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact