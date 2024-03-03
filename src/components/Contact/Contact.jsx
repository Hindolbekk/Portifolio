import React from 'react'
import './Contact.scss'
import telImg from "../../assets/img/phoneImage.png"
import telegramImg from "../../assets/img/telegramImg.svg"
import linkedImage from "../../assets/img/Linkedinimage.png"
import gmailImg from "../../assets/img/gmailImage.svg"
import VercelImg from "../../assets/img/vercelImage.png"
function Contact() {
  return (
    <div className='Contact' id='contact'>
      <div className="container Contact_inner">
        <div className="Contact__connect">
          <h2 className='Contact__title'>
          Connect with me:
          </h2>
          <p className='Contact__offer'>
          Satisfied with me? Please contact me
          </p>
          <ul className='contact__connect__list'>
            <li className='contact__connect__item'>
              <a href="tel:998931336461"><img src={telImg} alt="telegram" />+998931336461</a>
            </li>
            <li className='contact__connect__item'>
              <a href="https://t.me/HindolbekDeveloper" target='_blank'> <img src={telegramImg} alt="telegram" />TELEGRAM</a>
            </li>
            <li className='contact__connect__item'>
              <a href="" target='_blank'><img src={gmailImg} alt="" />gmail:hindolbekkarimov67@gmail.com</a>
            </li>
            <li className='contact__connect__item linkedin'>
              <a href="https://www.linkedin.com/in/hindolbek-karimov-20b44422b/"><img src={linkedImage} alt="" />LINKED IN</a>
            </li>
            <li className='contact__connect__item'>
              <a href="https://vercel.com/hks-projects-9f9cfb07"><img src={VercelImg} alt="" />Vercel</a>
            </li>
          </ul>
        </div>
        <div className="Contact__information__connect">
        <h3>Contact me, let’s make magic together</h3>
        <ul className='connect__list'>
          <li className='connect__item'>
            <input className="inp" type="text" placeholder='Name' />
          </li>
          <li className='connect__item'>
            <input  className="inp" type="text" placeholder='Email'/>
          </li>
          <li className='connect__big__item'>
          <input className='big__inp' type="text" placeholder='Message'/>
          </li>
        </ul>
        <button>Send</button>
        </div>
      </div>
       
    </div>
  )
}

export default Contact