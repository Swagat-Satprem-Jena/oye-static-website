import React from "react";
import './Advantage.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Advantage = () => {
    return (
        <>
        {/* Desktop View  */}
            <div className="desktop-advantage-section">
                <img className="desktop-advantage-image" src={`${process.env.PUBLIC_URL}images/advantage-1 no_back.png`} alt='advantage-img' />
                <div className="desktop-advantage-points-div">
                <h4 className="desktop-advantage-heading">Why People Choose Us</h4>
                    <li>Affordable Rates</li>
                    <li>On Time Service</li>
                    <li>Verified Professionals</li>
                    <li>Excellent Service</li>
                </div>
            </div>

            {/* Mobile View  */}

            <div className="mobile-advantage-section">
                <div className="mobile-advantage-points-div">
                <h4 className="mobile-advantage-heading">Why Choose Us?</h4>
                    <li className="mobile-advantage-points">Affordable Rates</li>
                    <li className="mobile-advantage-points">On Time Service</li>
                    <li className="mobile-advantage-points">Verified Professionals</li>
                    <li className="mobile-advantage-points">Excellent Service</li>
                </div>
                <img className="mobile-advantage-image" src={`${process.env.PUBLIC_URL}images/advantage-2 no_back.png`} alt='advantage-img' />
            </div>
        </>
    );
}

export default Advantage;