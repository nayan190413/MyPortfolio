import React from 'react';
// import  {NavLink } from 'react-router-dom';
const Card = (props) => {
    return (<>
        <div className="col-md-4 col-sm-6 mx-auto pb-4">
        <div className="card ">
            <img className="card-img-top p-2" src={props.img} alt=""/>
            <div className="card-body">
                <h5 className="card-title text-center">{props.title}</h5>
                <p className="card-text"><div>{props.text1}</div>{props.text2}</p>
                <a className="btn btn-primary d-flex justify-content-center" href={props.link} rel="noreferrer" target="_blank" >Click here</a>
            </div>
        </div>
        </div>
    </>);
}
export default Card;