import React from 'react';
import Edata from '../Data/Edata';
import '../App.css';
const Qualification = () => {
    return (<>
    <div  style={{backgroundColor :"currentcolor"}}>
        <div className="container" style={{zIndex:"3"}}>
            <h2 className="text-center text-info pt-3"><strong>Education</strong></h2>

            <div className="container p-3">
            {
            Edata.map((val,ind)=>{
                
                return(
                <div className="panel panel-default p-2 m-2">
                <div className="panel-heading ph p-2" style={{color:"#f9ab00",fontSize:"20px"}}>
                    {val.name}</div>
                <div className="panel-body pb p-3 text-success" key={ind}>{val.text}<br></br>{val.year}<br></br>{val.marks}</div>
            </div>
                );
            })
        }
        </div>
        </div>
        </div>
    </>);
}
export default Qualification;