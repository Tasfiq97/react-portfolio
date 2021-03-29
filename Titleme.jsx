import React from 'react'
import {faCoffee} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Titleme() {
    return (
        <>
         <div className="row">
                <div className="col-8 col-md-18 started-one">
                <h5>Start Working with  Me</h5>
                    <h1>So That Is Me.Thats the only way to put It For You</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam culpa delectus corporis eveniet, provident corrupti.</p>
                 <button className="btn-two">Contact Me</button>                
                 </div>
                 <div className="col-4 col-md-4 started-two">
                 <FontAwesomeIcon icon={faCoffee} className="icons"/>

                 </div>
            </div>
        </>
    )
}

export default Titleme
