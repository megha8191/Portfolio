import React from 'react'

const Projects = () => {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <div className='project-row'>
          {/* <div className='project-div'>
            <div className='project-left'>
              <img src='' />
            </div>
            <div className='project-right'>
              <h2>Rapville.net</h2>
              <a href='https://rapville.net/'>Demo Link</a>
            </div>
          </div> */}
           <div className="custom-card">
      <div className="img-box"><img src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div className="custom-content">
        <h2>Card 1</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!</p>
        <a href="">Read More</a>
      </div>
    </div>
    <div className="custom-card">
      <div className="img-box"><img src="https://images.unsplash.com/photo-1682685797507-d44d838b0ac7?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <div className="custom-content">
        <h2>Card 1</h2>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Architecto, hic? Magnam eum error saepe doloribus corrupti repellat quisquam alias doloremque!</p>
        <a href="">Read More</a>
      </div>
    </div>
        </div>
       
        {/* <div className=''>
          <h2 className='white heading'>Projects</h2>
          <div className='projects-list'>
            <a href='https://www.fusion.app '>https://www.fusion.app </a>
            <a href='https://go2.life/'>https://go2.life/</a>
            <a href='https://rapville.net'>https://rapville.net</a>
            <a href='https://www.vonettaetaylor.com'>https://www.vonettaetaylor.com</a>
            <a href='https://lumiplus.com/'>https://lumiplus.com/</a>
          </div>
        </div> */}
        <ul>
        </ul>
      </div>
    </section>
  )
}

export default Projects