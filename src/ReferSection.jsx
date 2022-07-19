import React, { useState } from "react";
import './ReferSection.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const ReferSection = () => {
    const [mobileNumber, updMobileNumber] = useState('');
    const mobileNumberUpdated = (event) => {
        updMobileNumber(event.target.value);
    }
    const mobileNumberInputed = () => {
        console.log(mobileNumber);
        updMobileNumber('');
    }
    return (
        <>
            <div className="refer-section-div">
                <div className="refer-section-details-div">
                    <h4 className="refer-section-heading-text">Refer and or get link</h4>
                    <p className="refer-section-para">Invite your friends</p>
                    <div className="refer-section-mobile-number-div">
                        <input className="mobile-number-bar" type="tel" placeholder="Enter your 10 digit mobile number" onChange={mobileNumberUpdated} name='mobileNumber' value={mobileNumber} />
                        <div className="mobile-number-go-icon-div navbar-page-link" onClick={mobileNumberInputed}><i className="fa-solid fa-arrow-right-long"></i></div>
                    </div>
                    <div className="refer-section-download-btn-div">
                        <button className="play-store-download-button">
                            <i className="fa-brands fa-google-play"></i>
                            <div className="play-store-download-button-text-allign">
                                <p className="get-it-on">GET IT ON</p>
                                <h6 className="play-store">PLAY STORE</h6>
                            </div>
                        </button>
                        <button className="app-store-download-button">
                            <i className="fa-brands fa-apple"></i>
                            <div className="play-store-download-button-text-allign">
                                <p className="get-it-on">GET IT ON</p>
                                <h6 className="play-store">APP STORE</h6>
                            </div>
                        </button>
                    </div>

                </div>
                <div className="refer-section-image-div">
                    <img src={`${process.env.PUBLIC_URL}images/oye_mob_app.png`} alt='oye_mob_app' className="refer-section-oye-mobile-image-1"/>
                    <img src={`${process.env.PUBLIC_URL}images/oye_mob_app.png`} alt='oye_mob_app' className="refer-section-oye-mobile-image-2"/>
                </div>
            </div>
        </>
    );
}

export default ReferSection;