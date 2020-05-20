import React from 'react'


function Card({username,image, history}) {
  
        return (
         <div className="card text-left">
           <img className="card-img-top" alt={image} src={image}/>  
                  <div className="card-body">
             <h4 className="card-title">{username}</h4>
             <p className="card-text">{history}</p>
           </div>
         </div>
        )
    }

export default Card 