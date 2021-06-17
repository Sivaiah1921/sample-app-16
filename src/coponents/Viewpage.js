import React from 'react'
import './Viewpage.css'
function Viewpage({file,list}) {

    console.log(list,"users")

    return (
        <>
        <div className="view-page" >
            <h1>view</h1>
            <h2>UserName : {file.x1}</h2>
            <h2>Password : {file.x2}</h2>
        </div>
        <div>
            {list.map((item,index)=>{
                return <li key={index}>{item.x1} ::: {item.x2}</li>
            })}
        </div>
        
        </>
    )
}

export default Viewpage
