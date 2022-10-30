import React from 'react'
import './header.css'

function Header() {
  return (
 <>
  <div className='p-3'>
    <header className='flex'>
<div className='justify-start'>
<img className='retink-logo mb-2' src='./RetinkLogo.png' alt='retink logo'/>
<h3>Get Advanced AI</h3>
<div><h3>+ Expert Created</h3>
<h3>Logos</h3>
</div>
<p>Boost your sales <span>10x faster</span> with content customizedby our unique partnership of <span>human creativity and AI optimization</span></p>
<h3>Sign Up for BETA!</h3>
<div>
<input type='text' placeholder='Business Name'/><span>would like a beta invite sent to</span>
<input type='email' placeholder='@email address'/>
</div>
<div className='flex'>
  <button>Notify Me</button>
  <button>Sign up as a freelance partner</button>
</div>
</div>
<div className='justify-end'>
<img className='' src='./RetinkAvatar.png' alt='retink avatar'/>
</div>
    </header>
 
  </div>
 </>
     )
}

export default Header