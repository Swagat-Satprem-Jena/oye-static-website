import React from "react";
import './ServiceComponent.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ServiceComponent = (props) => {
    return (
        <>
            <div className="service-component-fit">
                <div className="service-component-div item-focus">
                    <img className="service-component-img" src={props.src} alt='service-component-img' />
                    <p className="service-component-para">{props.sn}</p>
                    <p className="service-component-expl">{props.exp}</p>
                </div>
            </div>
        </>
    );
}

export default ServiceComponent;