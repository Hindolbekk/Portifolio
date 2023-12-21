import React from 'react'
import './Skills.scss'
import Js from "../../assets/img/js.svg";
import ReactJs from "../../assets/img/react.svg";
import Gitt from "../../assets/img/Git.svg";
import figmaa from "../../assets/img/figma.svg";
import sass from "../../assets/img/sass.svg";
import bootstrapp from "../../assets/img/bootstrap.svg";
import mui from "../../assets/img/MuiImage.png";
import htmll from "../../assets/img/html.svg";
import csss from "../../assets/img/css.svg";
import uzbekFlag from "../../assets/img/UzbekFlag.jpg";
import englishFlag from "../../assets/img/englishFlag.svg";
import vercelImg from "../../assets/img/vercelImg.webp";
function Skills() {
  return (
    <div className='Skill' id='skill'>
      <div className="container">
        <h2 className='Skill__title'>SKILLS</h2>
        <ul className='skill__list'>
          <li className='list__item'>
            <img src={Js} alt="js" />
            <p className='list__item__title'>JAVASCRIPT</p>
          </li>
          <li className='list__item'>
            <img src={ReactJs} alt="react" />
            <p className='list__item__title'>REACT JS</p>
          </li>
          <li className='list__item'>
            <img src={Gitt} alt="git" />
            <p className='list__item__title'>GIT</p>
          </li>
          <li className='list__item'>
            <img src={figmaa} alt="figma" />
            <p className='list__item__title'>FIGMA</p>
          </li>
          <li className='list__item'>
            <img src={sass} alt="" />
            <p className='list__item__title'>SASS</p>
          </li>
          <li className='list__item'>
            <img src={bootstrapp} alt="bootstrap" />
            <p className='list__item__title'>BOOTSTRAP</p>
          </li>
          <li className='list__item'>
            <img src={mui} alt="" />
            <p className='list__item__title'>MATEARIAL UI</p>
          </li>
          <li className='list__item'>
            <img src={htmll} alt="" />
            <p className='list__item__title'>HTML</p>
          </li>
          <li className='list__item'>
            <img src={csss} alt="" />
            <p className='list__item__title'>CSS</p>
          </li>
          <li className='list__item'>
            <img src={vercelImg} alt="" />
            <p className='list__item__title'>VERCEL</p>
          </li>
              </ul>
              <div className="languagee">
                <h2 className='language__title'>LANGUAGE</h2>
                <ul className='language__list'>
                  <li className='list__item'>
                   <p> <img src={uzbekFlag} alt="uzbek" /> UZBEK(NATIVE)</p>
                  </li>
                  <li className='list__item'>
                    <p><img src={englishFlag} alt="english" /> ENGLISH(INTERMEDIATE)</p>
                  </li>
                </ul>
              </div>
      </div>
      
    </div>
  )
}

export default Skills