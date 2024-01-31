import React from 'react'
import './Hero.scss'
import rasm from '../../assets/img/rass.svg'
import DownloadIcon from '@mui/icons-material/Download';
import resume2 from '../../assets/doc/resumee.pdf'
function Hero() {
  return (
    <div className='Hero' id='hero'>
      <div className="container Hero__inner">
        <div className="Hero__info">
          <h3>Hello, I am</h3>
          <h2>Karimov Hindolbek</h2>
          <p>Frontent Web developer</p>
          <span>
            <button><a href={resume2} download={'file.pdf'}>download CV <DownloadIcon/> </a></button>
          </span>
        </div>
        <div className="Hero__img">
        <img src={rasm} alt="" />
        
        </div>
       
      </div>
      
    </div>
  )
}

export default Hero