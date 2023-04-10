import React from 'react'

function Suggestions() {
    const movies = [
        {
             src :"https://www.youtube.com/embed/o3IIobN4xR0", 
             name:"cours01 html css"
           
        },  
        
        {
         src : "https://www.youtube.com/embed/eCRbEILXXmE",
         name:"cours02 html css"
            
        },   
        {
            src : "https://www.youtube.com/embed/h3wVQJ6SNfY",
            name:"cours03 html css"
               
        },  
        {
            src :"https://www.youtube.com/embed/Q1Obtn29twk",
            name:"cours04 html css"
               
        }, 
            
    ];
  return (
    <div className="sugg" style={{width:"200px"}}>
      {movies.map((el)=>(
    <>
        <iframe 
        width="250px" 
        height="120px" 
        src={el.src}
        title={el.name}
        frameborder="0" allow="accelerometer; 
        autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; 
        web-share" allowfullscreen >
  
        </iframe>
        <h5>{el.name}</h5>
    </>
      ))}
    </div>
  );
}

export default Suggestions
