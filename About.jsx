import React from 'react'
import logo from "../Images/logo.jpg"

function About() {
    return (
       <>
       <div className="about-part">
       <div className="row">
           <div className="col-6 col-md-6 col-sm-12 about-left">
               <h1>About Me</h1>
               <p className="about-text-top">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur ut culpa ipsa nobis tempora qui.</p>
               <p className="about-text-down">
                   Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dicta ad laboriosam officiis eligendi cum itaque a delectus iste, quos possimus dignissimos perspiciatis excepturi et quidem incidunt quam cumque vero molestias molestiae. Similique excepturi repellendus possimus esse perferendis, optio earum eos!
               </p>
               
               <button className="btn">Download CV</button>
           </div>
          
           <div className="col-6 col-md-6 col-sm-12 about-right">
           <img src={logo} alt="no"/>

           </div>
           </div>
       </div>
       </>
    )
}

export default About
