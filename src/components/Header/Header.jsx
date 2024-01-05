import React, { useEffect, useState } from 'react'
import './Header.scss'
function Header() {
  const [active,setActive]=useState(1);
  const [scrol,setScrol]=useState(0);
  
  useEffect(()=>
    {
      const handScroll=()=>setScrol(window.scrollY);
      window.addEventListener('scroll',handScroll);
      return ()=>{
        window.removeEventListener('scroll',handScroll);
      }
    }
  )

  return (
    <div className={scrol>=5?'Headers':'Header'}>
      <div className="container">
        <nav>
        <a href="#" className='nav__logo'>Karimov Hindolbek</a>
        <ul className='nav__list'>
          <li className='nav__item'><a href="#hero" onClick={()=> setActive(1)} className={active==1?'actives':null}>Home</a></li>
          <li className='nav__item' ><a href="#about" onClick={()=> setActive(2)} className={active==2?'actives':null}>About</a></li>
          <li className='nav__item' ><a href="#project" onClick={()=> setActive(3)} className={active==3?'actives':null}>Projects</a></li>
          <li className='nav__item'><a href="#contact" onClick={()=> setActive(4)} className={active==4?'actives':null}>Contact</a></li>
          <li className='nav__item'><a href="#skill" onClick={()=> setActive(5)} className={active==5?'actives':null}>Skills</a></li>
        </ul>
        </nav>
        
      </div>
      
    </div>
  )
}

export default Header