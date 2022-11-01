import React from 'react'
import './header.css'

function Header() {
  return (
 <>
  <div className=''>
    <header className='heading'>
<div data-aos="zoom-in" className='header-container'>
<img className='retink-logo' src='./RetinkLogo.png' alt='retink logo'/>
<h3 className='header-text'>Get Advanced AI</h3>
<div><h3 className='header-text'>+ Expert Created<span className='brand'>Logos</span></h3>
</div>
<p className='header-p'>Boost your sales <span className='brand'>10x faster</span> with content customized by our unique partnership of <span className='brand'>human creativity and AI optimization</span></p>
<h3 className='header-signup'>Sign Up for BETA!</h3>
<div>
<span className='header-span'>&nbsp;&nbsp;&nbsp;&nbsp;Business Name&nbsp;&nbsp;&nbsp;&nbsp;</span><span className='heading-span'>would like a beta invite sent to</span>
<span className='header-span'>&nbsp;&nbsp;&nbsp;&nbsp;@email address &nbsp;&nbsp;&nbsp;&nbsp;</span>
</div>
<div className='header-buttons'>
  <button className='header-firstbutton'>Notify Me</button>
  <button className='header-secondbutton'><a>Sign up as a freelance partner</a></button>
</div>
</div>
<div data-aos="fade-right" className='header-img'>
<img className='avatar' src='./RetinkAvatar.png' alt='retink avatar'/>
</div>
    </header>
 
  </div>
 </>
     )
}

export default Header