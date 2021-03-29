import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react' 
import {faEye} from "@fortawesome/free-solid-svg-icons"
import {faCode} from "@fortawesome/free-solid-svg-icons"
import {faLaptopCode} from "@fortawesome/free-solid-svg-icons"
import {faVirus} from "@fortawesome/free-solid-svg-icons"
import {faDirections} from "@fortawesome/free-solid-svg-icons"
import {faSmile} from "@fortawesome/free-solid-svg-icons"

function Servediv() {
    return (
        <>
        <div className="row">
            <div className="col-lg-4 col-md-2 serve-all">
            <div className="icons">

            
            <FontAwesomeIcon icon={faEye}/>
            </div>
            <div className="serv-text">

            
            <h1>Amazing Design</h1>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
            </div>
            </div>
            <div className="col-lg-4 col-md-2  serve-all">
            <div className="icons">

            
            <FontAwesomeIcon icon={faCode}/>
            </div>
            <div className="serv-text">

                <h1>Fix Codes</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
            </div>
                </div>
                <div className="col-lg-4 col-md-2  serve-all">
                <div className="icons">

            
            <FontAwesomeIcon icon={faLaptopCode}/>
            </div>
            <div className="serv-text">

                <h1>Front End for you</h1>
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
            </div>
                </div>
        </div>
        <div className="row">
        <div className="col-lg-4 col-md-2 serve-all">
        <div className="icons">

            
            <FontAwesomeIcon icon={faVirus}/>
            </div>
            <div className="serv-text">
        <h1>Bug Fixes</h1>
      

        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
        </div>
            </div>


        
        <div className="col-lg-4 col-md-2 serve-all ">
        <div className="icons">

            
            <FontAwesomeIcon icon={faDirections}/>
            </div>
            <div className="serv-text">

        <h1>React Advance Projects</h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
            </div>
        


        </div>
        <div className="col-lg-4 col-md-2 serve-all">
        <div className="icons">

            
            <FontAwesomeIcon icon={faSmile}/>
            </div>
            <div className="serv-text">

        <h1>Satisfaction </h1>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis atque soluta labore ipsa saepe, cumque itaque exercitationem voluptate rerum consequuntur?</p>
            </div>
          


        </div>
        </div>

        
        </>
    )
}

export default Servediv
