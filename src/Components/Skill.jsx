import React from 'react';
import Sdata from '../Data/Sdata';
import Fdata from '../Data/Fdata';
import Tdata from '../Data/Tdata';
import Accodion from './Accodion';
const Skill = () => {
  return (
    <>
      <div className="py-5" style={{backgroundColor :"currentcolor"}}>
      <div className="container">
        <h4 style={{color:"#ffff"}}>Programming Language</h4>{
        Sdata.map((val,ind)=>{
          return(<Accodion key={ind}
          name={val.name}
          text={val.text}
          />);
        })
        }
        </div>
        <div className="container my-3">
        <h4 style={{color:"#ffff"}}>Framework</h4>
        {
        Fdata.map((val,ind)=>{
          return(<Accodion key={ind}
          name={val.name}
          text={val.text}
          />);
        })
        }
        </div>
        <div className="container my-3">
        <h4 style={{color:"#ffff"}}>Tools</h4>
        {
         Tdata.map((val,ind)=>{
          return(<Accodion key={ind}
          name={val.name}
          text={val.text}
          />);
        })
        }
        </div>
        
      </div>
    </>);
}
export default Skill;