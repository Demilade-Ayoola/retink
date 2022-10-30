import React from 'react'
import './footer.css'

function Footer() {
  return (
    <div> <footer class="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-sm-12 col-12 flecx col-md-3">
         <div> </div>
                  </div>
                  <div className=" col-sm-6 col-12 col-md-3 addpad"><h6>COMPANY</h6>
          <ul className="footer-links">
            <li><a href="">Cinemas</a></li>
            <li><a href="">Ticket Prices</a></li>
            <li><a href="">Experie</a></li>
            </ul>
          </div>


        <div className="col-sm-6 col-12 col-md-3">
          <h6>TERMS</h6>
          <ul className="footer-links">
            <li><a href="">General</a></li>
            <li><a href="">Online Booking</a></li>
            <li><a href="">Ticket Sales</a></li>
            <li><a href="">Dreamcinemas</a></li>
           </ul>
        </div>

        <div className="col-sm-6 col-md-3 col-12">
          <h6>Quick Links</h6>
          <ul className="footer-links">
            <li><a href="">Contact Us</a></li>
            <li><a href="">Contribute</a></li>
            <li><a href="">Privacy Policy</a></li>
            <li><a href="">Sitemap</a></li>
          </ul>
        </div>
      </div>
      <hr className='brand-color'/>
    </div>
    <div className="container">
      <div className="row">
        <div className="col-md-8 col-sm-6 col-12">
          <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by Demilade Ayoola.
          </p>
        </div>

        <div className="col-md-4 col-sm-6 col-12">
          <ul className="social-icons">
            <li><a className="facebook" href="#"><i className="fa fa-facebook"></i></a></li>
            <li><a className="twitter" href="#"><i className="fa fa-twitter"></i></a></li>
            <li><a className="dribbble" href="#"><i className="fa fa-dribbble"></i></a></li>
            <li><a className="linkedin" href="#"><i className="fa fa-linkedin"></i></a></li>   
          </ul>
        </div>
      </div>
    </div>
</footer>
</div>
  )
}

export default Footer