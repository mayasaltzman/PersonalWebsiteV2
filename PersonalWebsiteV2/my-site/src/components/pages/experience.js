import React from 'react'
import { Link } from "react-router-dom";
import "./experience.css"

const experience = () => {
  return (
    <div>
      <h1>Work Experience</h1>
      <div id='buttons-kenna'>
        <Link to="/kenna" class="link"><button class='button'><img src= {process.env.PUBLIC_URL +"/assets/kenna_logo.jpg"} alt="Kenna logo" id='kenna-logo' /><h3>Kenna</h3>Customer First Thinking</button></Link>
      </div>
    </div>
  )
}

export default experience