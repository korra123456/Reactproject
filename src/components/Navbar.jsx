import React from 'react'

function Navbar() {
  return (
    <nav className="navbar">
    <div className="logo">
      <div className="logoimages"></div>
      <p>
        <strong>Silicon</strong>
      </p>
    </div>
    <div className="menu">
      <p>Features</p>
    </div>


    <div className="switch">
      <h4 id="heading">Darkmode</h4>

      <label className='toggle' htmlFor='darkmode-switch' aria-label='darkmode switch'>
        <input type='checkbox' id='darkmode-switch' />
        <span className='slider'></span>
      </label>

    </div>

    
    <div className="btn">
      <button className="navbarbutton">
        <img className="btn-icon" src="/images/btn-icon.jpg" alt="icon" />
        <p>Sign in / up</p>
      </button>
    </div>
  </nav>
  )
}

export default Navbar