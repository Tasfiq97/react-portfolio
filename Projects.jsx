
import React from 'react'
import Allprojects from "../components/Allprojects"

function Projects() {
    return (
        <>
        <div className="full-project">
        <div className="head-sec">

       
            <h1>Latest Works of Mine</h1>
            <p>The works That i Have done For months</p>
</div>
<div className="project-sec">
    {
        Allprojects.map((project)=>{
            return <div className="project-one" key={project.id}>
                <div className="pro-content">
                    <img src={project.image} alt="no"/>
                    <div className="pro-text">
                        {project.title}
                        <p>Photos</p>
                    </div>
                </div>
            </div>
        })

    }
</div>
        </div>
        </>
    )
}

export default Projects
