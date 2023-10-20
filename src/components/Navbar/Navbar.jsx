import React from 'react'
import "./Navbar.scss"
import Facebook from '../../../public/img/facebook.png.png'
import Instagram from '../../../public/img/instagram.png.png'
import Github from '../../../public/img/github.png.png'
import Telegram from '../../../public/img/telegram.png.png'

function Navbar() {
  return (
    <div className='navbar'>
      {/* Sidebar */}
      <div className="wrapper">
        <span>Yamada Kim</span>
        <div className="social">
          <a href="Facebook"><img src={Facebook} alt="" /></a>
          <a href="Instagram"><img src={Instagram} alt="" /></a>
          <a href="Github"><img src={Github} alt="" /></a>
          <a href="Telegram"><img src={Telegram} alt="" /></a>
        </div>
      </div>
    </div>
  )
}

export default Navbar