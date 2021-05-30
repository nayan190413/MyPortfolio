import React from 'react';
import Card from './Card';
import Pdata from '../Data/Pdata';
import '../App.css';
const Projects = () => {
    return (<>
        <div>
            <br></br>
            <h1 className="text-center projtitle">My Project</h1>
            <br></br>
            <div className="container-fluid mb-auto">
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            {
                                Pdata.map((val,ind)=>{
                                    return <Card 
                                    key={ind}
                                    img={val.img} 
                                    title={val.title}
                                    text1={val.text1}
                                    text2={val.text2}
                                    link={val.link}/>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>);

}
export default Projects;