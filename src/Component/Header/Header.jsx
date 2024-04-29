import React from 'react'
import './Header.css'

const Header = () => {
  return (
    <section className="h-wrapper">
        <div className="flexCenter .paddings .innerWidth h-container">
            <img src=".\log.png" alt="logo" witdh={100} />
            <div className="flexCenter h-menu">
                <a href="">Residencies</a>
                <a href="">Our value</a>
                <a href="">Contat us</a>
                <a href="">Get started</a>
                <button>
                    <a href="">Contact</a>
                </button>
            </div>
        </div>
    </section>
  )
}

export default Header