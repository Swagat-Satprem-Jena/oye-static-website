import React from "react";
import './DesktopServiceIntrodiv.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const DesktopServiceIntrodiv = (props) => {
    return (
        <>
            <div className="service-div">
                <img className="service-img item-focus" src={props.src} alt="service-img-name"/>
            </div>
        </>
    );
}

export default DesktopServiceIntrodiv;
