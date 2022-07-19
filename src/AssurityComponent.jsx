import React from "react";
import './AssurityComponent.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const AssurityComponent = (props) => {
    return (
        <>
            <div className="assurity-component-fit">
                <div className="assurity-image-div">
                    <img className="assurity-image" src={props.src} alt='assurity-img'/>
                </div>
                <div className="assurity-text-div">
                    <h3 className="assurity-quality-text">{props.head}</h3>
                    <p className="assurity-para">{props.para}</p>
                </div>
            </div>
        </>
    );
}

export default AssurityComponent;