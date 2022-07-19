import React from "react";
import './FooterSection.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FooterSection = () => {
    return (
        <>
            <div className="footer-section-div">
                <div className="footer-section-related-service-div">
                    <h6 className="footer-section-related-service-heading">RELATED SERVICES</h6>
                    <p className="footer-section-related-service-para">Electrician  |  Plumber  |  Carpenter  |  Packers & Movers  |  Salon For Woman  |  Salon For Man  |  Electronic Appliances  |  CCTV Installation & Repair  |  Ro- repair & service  |  house Painter  |  Pest Control  |  Kitchen Cleaning  |  Bathroom Cleaning  |  Sofa Cleaning  |  Carpet Cleaning  |  Home Deep Cleaning </p>
                </div>

                <div className="footer-section-top-locations-div">
                    <h6 className="footer-section-top-locations-heading">TOP LOCATIONS</h6>
                    <p className="footer-section-top-locations-para">Delhi  |  Gurgaon  |  Noida  |  Ghaziabad  |  Faridhabad  |  Greater Noida</p>
                </div>

                <div className="other-features-of-the-website">
                    <div className="footer-section-about-text navbar-page-link">About</div>
                    <div className="footer-section-blog-text navbar-page-link">Blog</div>
                    <div className="footer-section-near-me-text navbar-page-link">Near me</div>
                    <div className="footer-section-careers-text navbar-page-link">Careers</div>
                    <div className="footer-section-term-condition-text navbar-page-link">Terms & Conditions</div>
                    <div className="footer-section-privacy-policy-text navbar-page-link">Privacy Policy</div>
                    <div className="footer-section-offers-gift-card-text navbar-page-link">Offers & Gift Cards</div>
                    <div className="footer-section-contact-us-text navbar-page-link">Contact Us</div>
                </div>

                <div className="footer-section-link-div">
                    <div className="footer-section-contact-us-link-div"><a className="footer-section-contact-us-link" href="#">Contact Us</a></div>
                    <div className="footer-section-download-app-link-div"><a className="footer-section-download-app-link" href="#">Download Oyebusy App</a></div>
                </div>

                <div className="footer-download-button-div">
                    <div className="footer-section-phone-email-div">
                        <p className="footer-section-phone-number">Phone : +91 9990001089</p>
                        <p className="footer-section-email">Email : support@oyebusy.com</p>
                    </div>
                    <div className="footer-section-play-store-download-button-div">
                        <button className="footer-section-play-store-download-button">
                            <i className="fa-brands fa-google-play"></i>
                            <div className="footer-section-play-store-download-button-text-allign">
                                <p className="footer-section-get-it-on">GET IT ON</p>
                                <h6 className="footer-section-play-store">PLAY STORE</h6>
                            </div>
                        </button>
                    </div>
                </div>

                <div className="footer-section-social-media-div">
                    <i className="fa-brands fa-instagram navbar-page-link"></i>
                    <i className="fa-brands fa-twitter navbar-page-link"></i>
                    <i className="fa-brands fa-linkedin navbar-page-link"></i>
                    <i className="fa-brands fa-facebook-square navbar-page-link"></i>
                    <i className="fa-brands fa-youtube navbar-page-link"></i>
                    <i className="fa-brands fa-pinterest navbar-page-link"></i>
                </div>

                <div className="footer-copyright-div">
                    <p className="footer-copyright-text">&#169; 2021 OyeBusy Technologies Pvt. Ltd.</p>
                </div>
                
            </div>
        </>
    );
}

export default FooterSection;