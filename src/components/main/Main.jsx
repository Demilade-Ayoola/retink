import React from 'react'
import Content from './Content'
import './main.css'

function Main() {
  return (
    <>
<section className='flex justify-center align-center'>
<h2>EXPLAINER VIDEO</h2>
<div className='flex'>
    <img  className='flex-1' src='./explainervideo.png' alt ='explainer video'/>
</div>
<div className='flex flex-wrap justify-center'>
    <div className='main-box flex py-3 px-2 flex-column'>
<img src='./artificial-intelligence.png' alt='AI'/>
<h4>MakeAI-assisted Content Choices</h4>
<p>Access and Order from an extensive catalogue in any language and on your budget's terms. If unsure, our AI guides you to the best.</p>
    </div>
    <div className='main-box flex py-3 px-2 flex-column'>
<img src='./uploadicon.png' alt='upload'/>
<h4>Upload and Maintain your Brand Identity</h4>
<p>Add your preference and brand assets to ensure the contents is consistent with your bbrand identity. No brand asset? We can make for you!</p>
    </div>
    <div className='main-box flex py-3 px-2 flex-column'>
<img src='.Vector12.png' alt='information-icon'/>
<h4>Be informed as we create</h4>
<p>Your details are translated and sent to the AI, <a>FP,</a> or both (per your choice) as you relax and receive continuous updates.</p>
    </div>
    <div className='main-box flex py-3 px-2 flex-column'>
<img src='./group.png' alt='review'/>
<h4>Receive and Review</h4>
<p>The finished content is delivered and you can make connections that will effect to satisfy your requirements</p>
    </div>
    <div className='main-box flex py-3 px-2 flex-column'>
<img src='./Vector10.png' alt='publish'/>
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