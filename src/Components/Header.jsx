import React from 'react';
import Typed from 'react-typed';
import pp from '../Images/pp.jpeg';
const Header = () => {
    return (
        <>
            <div className="header-wrap">
                <div className="main-info">
                    <br></br>
                    <h1><Typed className='type-string' strings={["Welcome to My Website."]}
                        typeSpeed={40}
                        backSpeed={60}
                        loop />
                    </h1>   
                    <div>
                        <img className="responsive img-pp" src={pp} alt="" height="200px" width="200px" />
                    </div>
                    <div className="my-info" style={{color:"white"}}>
                        <p>Hello! I am Nayan Lambat currently in my 3rd year of electronics and communication engineering at Shri. Ramdeobaba college of engineering and management.<br/>I am a web developer, App developer and Game developer. technologies I use are MERN(MongoDb, Express, React, NodeJS ), Unity, Android Studio.</p>        
                    </div>             
                </div>
            </div>
        </>
    );
}
export default Header;