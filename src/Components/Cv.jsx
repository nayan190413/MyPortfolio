import React from 'react';
import {Carousel} from 'react-bootstrap';
import resume1 from '../Images/resume1.png';
import resume2 from '../Images/resume2.png';
const Cv = () => {
    return (<>
    <div className="mediacoro">
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={resume1}
                        alt="First slide"
                    />
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={resume2}
                        alt="Second slide"
                    />
                </Carousel.Item>
                
            </Carousel>
            </div>
    </>);

}

export default Cv;