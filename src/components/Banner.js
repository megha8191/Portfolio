import React from 'react'
import bannerImg from "./../assets/banner.png"

const Banner = () => {
    return (
        <section className="home" id="home">
             <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>

            </ul>
            
            <div className="home-content">
                <h1>Hi , I'm <span>Megha</span></h1>
                <div className="text-animate">
                    <h3>Frontend Developer</h3>
                </div>
                <p>
                    Hello there! I'm Megha Chhabra, a passionate frontend developer on a mission to craft beautiful and
                    user-friendly digital experiences. With a deep-rooted love for web
                    development, I find joy in bringing creative designs to life through
                    code.
                </p>

                <div className="btn-box">
                    <a href="#contact" className="btn">Hire Me</a>
                    <a href="#about" className="btn">Let's Talk</a>
                </div>
                <div className="home-sci">
                {/* <a href="https://github.com/megha8191" target="_blank"
                ><i className="bx bxl-github"></i>
                </a> */}
                <a href="https://www.linkedin.com/in/megha-chhabra-2a59b71ba/" target="_blank"
                ><i className="bx bxl-linkedin"></i>
                </a>
                <a href="mailto:meghachhabra819@gmail.com" target="_blank"
                ><i className="bx bx-envelope"></i>
                </a>
            </div>
            </div>
            

            <div className="dev-pic">
                <img src={bannerImg} alt="developer_image" />
            </div>
        </section>
    )
}

export default Banner