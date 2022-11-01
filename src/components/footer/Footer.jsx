import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div> <footer class="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-6 col-12 flecx col-md-6">
         <div><img className='retink-logo' src='./RetinkLogo.png' alt='retink logo'/>
 </div>
 <div className='addpad'>
<div className="addflex"> 
  <h5 className='footer-heading'>Product by Retink Media UG</h5>
 <h5 className='footer-heading'>Bonn, Germany</h5>
     </div>             
                  <div className="addflex">
                  <h5 className='footer-heading'>Get Early Access</h5>
 <h5 className='footer-heading'>Provide Feedbacks</h5>
          </div>
          </div>
          </div>

        <div className="col-sm-6 col-12 col-md-6 addicons">
         <h4 className='footer-connect'>Connect with us</h4>
          <div className='addpad'>
          <img className='icons' src='./Facebook.png' alt='icons'/>
          <img className='icons' src='./Twitter.png' alt='icons'/>
          <img className='icons' src='./instagram.png' alt='icons'/>
          <img className='icons' src='./Linkedin.png' alt='icons'/>
          <img className='icons' src='./Youtube.png' alt='icons'/>
          <img className='icons' src='./Pinterest.png' alt='icons'/>
        </div>
</div>
         </div>
    </div>
    <div className="footer-container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-12">
          <p className="copyright-text">Copyright &copy; 2021 Retink.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12 addpad">
        <p className="copyright-text">Privacy Policy
          </p>
          <p className="copyright-text">Terms of Service</p>
        </div>
      </div>
    </div>
</footer>
</div>
  )
}

export default Footer