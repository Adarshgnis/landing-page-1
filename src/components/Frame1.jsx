import React from 'react'
import Banner from "../assets/img/banner-car.png"
import logo from "../assets/img/Asset 3@4x-8.png"
import icon1 from "../assets/img/Group 194.png"
import icon2 from "../assets/img/Group 195.png"
import icon3 from "../assets/img/Asset 2ne.png"
import "./Frame1.css"
let style={
    background:`url(${Banner})`,
    height:"100vh",
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition:"center",
    // backgroundAttachment:"center"
  }
const Frame1 = () => {
  return (
    <div style={style}>
      <div className='HomeContent'>
          <img src={logo} className='logo' alt="logo"  />
          <h1>Take your graphics protection to the next level with DOL Max overlaminates</h1>
          <h4>Pair with MPI 1105 wrapping film for ramped up protection</h4>
          <div className='homeSpecification'>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={icon1} alt="Quality" />
                  </div>
                  <p>Maximum Durability</p>
              </div>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={icon2} alt="Quality" />
                  </div>
                  <p>Enhanced Appearance</p>
              </div>
              <div className='specChild'>
                  <div className='cirlce'>
                    <img src={icon3} alt="Quality" />
                  </div>
                  <p>High Gloss Finish</p>
              </div>
          </div>
      </div>
    </div>
  )
}

export default Frame1