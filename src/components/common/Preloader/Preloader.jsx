import React from 'react';
import './preloader.scss';

const Preloader = (props) => {
    return (
        <div className="wrapper-preloader">
            <div class="lds-ripple"><div></div><div></div></div>
        </div>
    )
}

export default Preloader;