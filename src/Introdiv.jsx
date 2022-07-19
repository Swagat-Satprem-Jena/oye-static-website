import React, { useState } from "react";
import './Introdiv.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import DesktopServiceIntrodiv from "./DesktopServiceIntrodiv";
import DesktopServiceIntrodivArray from "./DesktopServiceIntrodivArray";
import OfferIntrodiv from "./OfferIntrodiv";
import OfferIntrodivArr from "./OfferIntrodivArr";

const Introdiv = () => {
    const [searchTask, updSearch] = useState('');
    const searchTaskUpdated = (event) => {
        updSearch(event.target.value);
    }
    const searchInitiated = () => {
        console.log(searchTask);
    }

    const displayServices = (value, index) => {
        return <DesktopServiceIntrodiv src={value} key={index} ></DesktopServiceIntrodiv>;
    }

    return (
        <>
            <div className="desktop-intro-div">
                <div className="desktop-left-side">
                    <h2 className="desktop-left-side-text">Home services,</h2>
                    <h2 className="desktop-left-side-text">on demand</h2>
                    <div className="desktop-search-div">
                        <div className="desktop-search-icon navbar-page-link" onClick={searchInitiated}><i className="fa-solid fa-magnifying-glass" style={{ color: "#636363" }}></i></div>
                        <input className="desktop-search-bar" type="text" placeholder="Search For A Service" onChange={searchTaskUpdated} name='searchTask' value={searchTask} />
                    </div>
                    <p className="left-side-search-bar-example-text"><span className="not-underline">Examples:</span> <span className="underline">Salon, Women's hair, Men's grooming & Many more..</span></p>
                </div>
                <div className="desktop-right-side">
                    <div className="desktop-right-top">
                        <h2 className="desktop-right-services-heading-text">What are you looking for?</h2>
                    </div>
                    <div className="desktop-right-middle desktop-right-services">
                        {DesktopServiceIntrodivArray.map(displayServices)}
                    </div>
                    <div className="desktop-right-bottom">
                        {OfferIntrodivArr.map((value, index) => {
                            return <OfferIntrodiv src={value} key={index}></OfferIntrodiv>;
                        })}
                    </div>
                </div>
            </div>



            <div className="mobile-intro-div">
                <h2 className="mobile-services-heading-text">Top Offers</h2>
                <div className="mobile-offers">
                    {OfferIntrodivArr.map((value, index) => {
                        return <OfferIntrodiv src={value} key={index}></OfferIntrodiv>;
                    })}
                </div>
                <div className="mobile-services">
                    {DesktopServiceIntrodivArray.map(displayServices)}
                </div>
            </div>
        </>
    );
}

export default Introdiv;