import React from 'react'
import Content from './content/Content'
import './main.css'

function Main() {
  return (
    <>
<section className='main-section'>
<h2 className='brand'>EXPLAINER VIDEO</h2>
<div data-aos="zoom-in" className='exp-vid'>
    <img  className='exp-img' src='./explainervideo.png' alt ='explainer video'/>
</div>
<div className='box-div'>
    <div data-aos="zoom-in-up" className='main-box'>
<img className='main-box-img'src='./artificial-intelligence.png' alt='AI'/>
<h4>MakeAI-assisted Content Choices</h4>
<p>Access and Order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.</p>
    </div>
    <div data-aos="zoom-in-up" className='main-box'>
<img className='main-box-img' src='./uploadicon.png' alt='upload'/>
<h4>Upload and Maintain your Brand Identity</h4>
<p>Add your preference and brand assets to ensure the contents is consistent with your bbrand identity. No brand asset? We can make for you!</p>
    </div>
    <div className='main-box' data-aos="zoom-in-up">
<img className='main-box-img' src='./Vector12.png' alt='information-icon'/>
<h4>Be informed as we create</h4>
<p>Your details are translated and sent to the AI, <a>FP,</a> or both (per your choice) as you relax and receive continuous updates.</p>
    </div>
    <div className='main-box' data-aos="zoom-in-up">
<img className='main-box-img' src='./group.png' alt='review'/>
<h4>Receive and Review</h4>
<p>The finished content is delivered and you can make connections that will effect to satisfy your requirements</p>
    </div>
    <div className='main-box'data-aos="zoom-in-up">
<img className='main-box-img' src='./Vector10.png' alt='publish'/>
<h4>Publish and Monitor your contents' progress</h4>
<p>The finished content is delivered and you can make connections that will effect to satisfy your requirements</p>
    </div>
      </div>
</section>
<Content/>
    </>
  )
}

export default Main