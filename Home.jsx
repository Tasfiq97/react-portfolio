import React from 'react'
import {faFacebook, faLinkedinIn} from "@fortawesome/free-brands-svg-icons"
import {faGithub} from "@fortawesome/free-brands-svg-icons"
import {faLinkedin} from "@fortawesome/free-brands-svg-icons"
import {faTwitter} from "@fortawesome/free-brands-svg-icons"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Link } from 'react-router-dom'
function Home() {
    return (
        <>
        <div className="homepage">
        <div className="hero">
            <div className="hero-text">
                <h1>Hello, I am Tasfiqul Azad</h1>
                <p className="hero-p">Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur quis corporis exercitationem doloremque, natus rerum iusto, rem earum fuga quaerat cumque aperiam itaque assumenda repudiandae repellendus, quia voluptatibus. Distinctio, inventore.</p>
            </div>
            <div className="icons">
            <Link className="icon-hold fb">
            <FontAwesomeIcon icon={faFacebook}/>
            </Link>
            <Link className="icon-hold gt">
            <FontAwesomeIcon icon={faGithub}/>
            </Link>
            <Link className="icon-hold lid">
            <FontAwesomeIcon icon={faLinkedin}/>
            </Link>
            <Link className="icon-hold twt">
            <FontAwesomeIcon icon={faTwitter}/>
            </Link>

            </div>
        </div>

        </div>
        </>
    )
}

export default Home
