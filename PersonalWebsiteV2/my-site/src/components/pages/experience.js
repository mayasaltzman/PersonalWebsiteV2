import React from 'react'
import { Link } from "react-router-dom";
import "./experience.css"

const experience = () => {
  return (
    <div>
      <h1>Work Experience</h1>
      <div id='buttons-kenna'>
        <Link to="/kenna" class="link"><button class='button-kenna'><img src= {process.env.PUBLIC_URL +"/assets/kenna_logo.jpg"} alt="Kenna logo" id='kenna-logo' /><h3>Kenna</h3>Customer First Thinking</button></Link>
      </div>
      <div id='buttons-coop'>
        <Link to="/coop" class="link"><button class='button-coop'><img src= {process.env.PUBLIC_URL +"/assets/coop.png"} alt="Co-operators logo" id='coop-logo' /><h3>The Co-operators</h3>Purpose Vision Values</button></Link>
      </div>
    </div>
  )
}

export default experience