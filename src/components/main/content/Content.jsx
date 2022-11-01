import React from 'react'
import './content.css'

function Content() {
  return (
    <>
    <section className='content-section'>
<div className='content-div'>
    <div>
    <h3 className='content-heading brand'>Transform your Creation Process</h3>
    <p>With a new approach to odering content, you can now stop juggling multiple documents and meetings and start publishing content faster and in demand</p>
</div>
<div>
    <h3 className='content-heading brand'>Activate your business growth with RetinkContent</h3>
    <p>Save time and maintain your brand identity within your budget range or sign up for affordable plans an still access multiple content services like</p>
</div>
<div className='content-box'>
<div className='content-boxdiv'data-aos="zoom-in-up">
<img className='content-img' src='./logo-img.png'alt='logo'/>
<h4 className='content-box-heading'>Logos</h4>
<hr className='horizontal'/>
<p className='content-box-p'>Have a unique & creative logo designed to express and represent your brand identity</p>
</div>

<div className='content-boxdiv' data-aos="zoom-in-up">
<div><img className='content-img' src='./blog-img.png'alt='blog'/></div>
<h4 className='content-box-heading'>Blog Writing</h4>
<hr className='horizontal'/>
<p className='content-box-p'> Write SEO enriched blog posts as long or short articles on any topic of your choice</p>
</div>

<div className='content-boxdiv' data-aos="zoom-in-up">
<div><img  className='content-img' src='./anivid-img.png'alt='animated'/></div>
<h4 className='content-box-heading'>Animated Videos</h4>
<hr className='horizontal'/>
<p className='content-box-p'> Bring animated characters to life to keep your viewers engaged and entertained</p>
</div>

<div className='content-boxdiv'data-aos="zoom-in-up">
<div><img className='content-img' src='./product-img.png'alt='product'/></div>
<h4 className='content-box-heading'>Product Demo</h4>
<hr className='horizontal'/>
<p className='content-box-p'>Introduce your product to potential customers in a clear and creative video</p>
</div>

<div className='content-boxdiv'data-aos="zoom-in-up">
<div><img className='content-img' src='./copywriting.png'alt='copywriting'/></div>
<h4 className='content-box-heading'>Copywriting</h4>
<hr className='horizontal'/>
<p className='content-box-p'> Have creative and compelling copies writen to boost your product, brand, service or company</p>
</div>

<div className='content-boxdiv'data-aos="zoom-in-up">
    <div><img className='content-img' src='./social-media.png'alt='social-media'/></div>
<h4 className='content-box-heading'>Social Media Ads</h4>
<hr className='horizontal'/>
<p className='content-box-p'>Boost sales and awareness with tailor made ads from experts</p>
</div>

</div>
<div className='content-buttons'>
<h3 className='content-signup'>Sign Up for The BETA to see more</h3>
<div className='content-be'>
    <button className='business-button'>Business Name</button>
    <button className='email-button'>Email</button>
</div>
<button className='content-firstbutton'>Notify me</button>
    <button className='content-secondbutton'><a>Sign up as a freelance partner</a></button>
</div>
</div>
    </section>
    </>
  )
}

export default Content