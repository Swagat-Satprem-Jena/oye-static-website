import React, { useState } from "react";
import './Navbar.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const Navbar = () => {
    const [searchTask, updSearch] = useState('');
    const searchTaskUpdated = (event) => {
        updSearch(event.target.value);
    }
    const searchInitiated = () => {
        console.log(searchTask);
        updSearch('');
    }

    return (
        <>
            {/* Laptop And Desktop Navbar */}
            <div className="navbar-desktop-div">
                <div className="navbar-desktop-left-item-div">
                    <div className="navbar-desktop-left-brand">
                        <img className="navbar-desktop-brand-img" src={`${process.env.PUBLIC_URL}images/logo_no_back.png`} alt="brand-logo" />
                    </div>
                    <div className="navbar-desktop-left-location">
                        <i className="fa-solid fa-location-dot"></i>
                        <p className="navbar-desktop-left-location-details">1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
                        <i className="fa-solid fa-caret-down navbar-page-link"></i>
                    </div>
                </div>
                <div className="navbar-desktop-right-item-div">
                    <div className="navbar-desktop-right-pages">
                        <div className="navbar-desktop-right-blog navbar-page-link">Blog</div>
                        <div className="navbar-desktop-right-career navbar-page-link">Career</div>
                        <div className="navbar-desktop-right-myAccount navbar-page-link" style={{marginRight: '30px'}}>My Account</div>
                    </div>
                    <div className="navbar-desktop-right-download">
                        <div className="navbar-desktop-right-cart-icon-div navbar-page-link">
                            <i className="fa-solid fa-cart-shopping"></i>
                        </div>
                        <div className="navbar-desktop-right-play-store-download-div navbar-page-link">
                            <div className="navbar-desktop-right-playstore-icon-div"><i className="fa-brands fa-google-play"></i></div>
                            <div className="navbar-desktop-right-playstore-download-btn-div"><p className="navbar-desktop-right-playstore-download-btn">Download App</p></div>
                        </div>
                    </div>
                </div>
            </div>




            {/* Mobile View Navbar */}

            {/* Mobile View Top Portion */}

            <div className="navbar-mobile-top-div">
                <div className="navbar-mobile-top-location">
                    <i className="fa-solid fa-location-dot"></i>
                    <p className="navbar-mobile-top-location-details">1st Floor, H 356, Block B, Sector 22, Noida, Uttar Pradesh 201301</p>
                    <i className="fa-solid fa-caret-down navbar-page-link"></i>
                </div>

                <div className="navbar-mobile-top-search-div">
                    <div className="navbar-mobile-top-search-icon navbar-page-link" onClick={searchInitiated}><i className="fa-solid fa-magnifying-glass"></i></div>
                    <input className="navbar-mobile-top-search-bar" type="text" placeholder="Search For A Service" onChange={searchTaskUpdated} name='searchTask' value={searchTask}/>
                </div>
            </div>

            

            {/* Mobile View Bottom Portion */}

            <div className="navbar-mobile-bottom-div">
                <div className="navbar-mobile-bottom-home navbar-mobile-bottom-allignment navbar-page-link"><i className="fa-solid fa-house"></i><p className="navbar-mobile-bottom-icon-name">Home</p></div>
                <div className="navbar-mobile-bottom-bookings navbar-mobile-bottom-allignment navbar-page-link"><i className="fa-solid fa-book-open"></i><p className="navbar-mobile-bottom-icon-name">Bookings</p></div>
                <div className="navbar-mobile-bottom-favourite navbar-mobile-bottom-allignment navbar-page-link"><i className="fa-solid fa-heart"></i><p className="navbar-mobile-bottom-icon-name">Favourite</p></div>
                <div className="navbar-mobile-bottom-Accounts navbar-mobile-bottom-allignment navbar-page-link"><i className="fa-solid fa-circle-user"></i><p className="navbar-mobile-bottom-icon-name">Accounts</p></div>
            </div>
        </>
    );
}


export default Navbar;