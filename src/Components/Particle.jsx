import Particles from 'react-particles-js';
import React from 'react';

const Paritcle = (props) => {
    
    const num=props.num;
    return (<>
        <Particles
            params={{
                particles: {
                    number: {
                        value: num, density: {
                            enable: true, value_area: 900
                        }
                    }
                }
            }}
        />

    </>);
}
export default Paritcle;