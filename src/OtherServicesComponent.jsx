import React from "react";
import './OtherServicesComponent.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'; 

const OtherServicesComponent = (props) => {
    return (
        <>
            <div className="other-service-component-div">
                <div className="other-service-component-fit item-focus">
                    <div className="other-service-component-img"></div>
                    <p className="other-service-component-para">{props.sn}</p>
                    <p className="other-service-component-explanation">{props.e}</p>
                </div>
            </div>
        </>
    );
}

export default OtherServicesComponent;