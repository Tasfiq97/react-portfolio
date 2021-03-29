import React from 'react'

function Tellme() {
    return (
       <>
       <div className="info-box">
           <div className="row">
           <div className="col-lg-8 col-md-6 input-right">
               <input type="text" name="" id="name" placeholder="Name"/>
               <input type="email" name="" id="email" placeholder="E-mail"/>
               <input type="number" name="" id="number" placeholder="Phone"/>
               

               </div>
               <div className="col-lg-4 col-md-4 input-left">

                   <textarea name="" id="message" cols="50" rows="20" placeholder="Message"></textarea>
               </div>
           </div>
           <div className="btn">
               <button className="btn-three">
                   Submit
               </button>
           </div>
       </div>
       </>
    )
}

export default Tellme
