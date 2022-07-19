import React from "react";
import './OtherServicesDiv.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import OtherServicesComponent from "./OtherServicesComponent";
import OtherServiceArray from "./OtherServiceArray";

const OtherServicesDiv = (props) => {
    return (
        <>
             <div className="other-service-about-div">
                    <h2 className="other-service-about-div-heading-text">{props.serviceHeading}</h2>
                    <p className="other-service-about-div-sub-heading-text">Premium Home Services</p>
                    <div className="other-service-img-div">
                        {OtherServiceArray.map((value, index) => {
                            return <OtherServicesComponent sn={value.sn} e={value.e} key={index}></OtherServicesComponent>;
                        })}
                    </div>
                </div>
        </>
    );
}

export default OtherServicesDiv;