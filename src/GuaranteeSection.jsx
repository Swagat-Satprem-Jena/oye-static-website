import React from "react";
import './GuaranteeSection.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const GuaranteeSection = () => {
    return (
        <>
            <div className="guarantee-section-div">
                <img src={`${process.env.PUBLIC_URL}images/oye_hapiness_guarantee no_back.png`} alt='guaranteee-image' className="guarantee-section-image"/>
                <div className="guarantee-section-text-div">
                    <h2 className="guarantee-section-text">Hassle free services</h2>
                    <h2 className="guarantee-section-text">with OyeBusy</h2>
                </div>
            </div>
        </>
    );
}

export default GuaranteeSection;