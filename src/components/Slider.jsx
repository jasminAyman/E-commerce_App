import React from 'react'
import slider from '../images/slider-bg.jpg'

function Slider() {
  return (
    <div className='hero'>
        <div className="card text-bg-dark border-0">
          <img src={slider} className="card-img" alt="Background" height={600}/>
          <div className="card-img-overlay d-flex flex-column justify-content-center">
            <div className="container">
              <h5 className="card-title display-3 fw-bolder mb-0">New Season Arrivals</h5>
              <p className="card-text lead fs-2">Check Out All The Trends</p>
            </div>
          
        </div>
    </div>
    </div>
  )
}

export default Slider