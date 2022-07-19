import React from "react";
import './Services.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import ServiceComponent from "./ServiceComponent";
import TrendingServicesArray from "./TrendingServicesArray";
import SameDayServiceArray from "./SameDayServiceArray";
import OtherServicesDiv from "./OtherServicesDiv";
import AssurityComponent from "./AssurityComponent";
import AssurityTraitsArray from "./AssurityTraitsArray";
import HomeApplianceArray from "./HomeApplianceArray";
import ElectricianServiceArray from './ElectricianServiceArray';
import PlumberServiceArray from './PlumberServiceArray';
import CarpenterServiceArray from './CarpenterServiceArray';
const Services = () => {

    const scrollElectricRight = () => {
        const x = document.querySelector('#electrician-scroll');
        x.scrollLeft += 100;
    }

    const scrollElectricLeft = () => {
        const x = document.querySelector('#electrician-scroll');
        x.scrollLeft -= 100;
    }

    const scrollPlumberRight = () => {
        const x = document.querySelector('#plumber-scroll');
        x.scrollLeft += 100;
    }

    const scrollPlumberLeft = () => {
        const x = document.querySelector('#plumber-scroll');
        x.scrollLeft -= 100;
    }

    const scrollCarpenterRight = () => {
        const x = document.querySelector('#carpenter-scroll');
        x.scrollLeft += 100;
    }

    const scrollCarpenterLeft = () => {
        const x = document.querySelector('#carpenter-scroll');
        x.scrollLeft -= 100;
    }

    return (
        <>
            <div className="services-section-div">

                {/* Trending Service  */}

                <div className="trending-service-about-div">
                    <h2 className="service-about-div-heading-text">Trending Services</h2>
                    <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    <div className="trending-service-img-div">
                        {TrendingServicesArray.map((value, index) => {
                            return <ServiceComponent src={value.url} sn={value.sn} key={index} exp=''></ServiceComponent>;
                        })}
                    </div>
                </div>

                {/* Same Day Service  */}

                <div className="same-day-service-about-div">
                    <h2 className="service-about-div-heading-text">Same Day Services</h2>
                    <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    <div className="same-day-service-img-div">
                        {SameDayServiceArray.map((value, index) => {
                            return <ServiceComponent src={value.url} sn={value.sn} key={index} exp=''></ServiceComponent>;
                        })}
                    </div>
                </div>

                {/* Safety Service  */}

                <div className="safety-service-div">
                    <div className="safety-service-fit">
                        <div className="safety-text-div">
                            <h4 className="safety-headline">100% Safe Services</h4>
                            <div className="safety-points-div">
                                <div className="safety-points-left">
                                    <li className="safety-points-text">Masks</li>
                                    <li className="safety-points-text">Gloves</li>
                                </div>
                                <div className="safety-points-left">
                                    <li className="safety-points-text">Temperature Checks</li>
                                    <li className="safety-points-text">Sanitized Tools</li>
                                </div>
                            </div>
                        </div>
                        <div className="safety-image-div">
                            <img className="safety-person-image" src={`${process.env.PUBLIC_URL}images/delivery-man-red-uniform-medical-mask-gloves-pointing-fingers-away-looking-confident_1-no-back.png`} alt='safety-person-img' />
                        </div>
                    </div>
                </div>

                <OtherServicesDiv serviceHeading='Professional Deep Cleaning'></OtherServicesDiv>

                <OtherServicesDiv serviceHeading='Most Used Services'></OtherServicesDiv>

                <div className="assurity-section-div">
                    <h2 className="assurity-heading">Assured Peace of Mind</h2>
                    <div className="assurity-traits-div">
                        {AssurityTraitsArray.map((value, index) => {
                            return <AssurityComponent src={value.src} head={value.head} para={value.para} key={index}></AssurityComponent>
                        })}
                    </div>
                </div>

                <OtherServicesDiv serviceHeading='Trending Services'></OtherServicesDiv>

                <div className="home-appliance-service-about-div">
                    <h2 className="service-about-div-heading-text">Home Appliances Services</h2>
                    <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    <div className="home-appliance-service-img-div">
                        {HomeApplianceArray.map((value, index) => {
                            return <ServiceComponent src={value.url} sn={value.sn} key={index} exp=''></ServiceComponent>;
                        })}
                    </div>
                </div>

                <div className="ad-section-div">
                    <img className="advertise-image" src={`${process.env.PUBLIC_URL}images/ad_boy no_back.png`} alt='ad-boy' />
                    <div className="ad-text-div">
                        <h4 className="ad-heading-1">TRY OUR TRENDING SERVICES</h4>
                        <h4 className="ad-heading-1">WITH UPTO 50% OFF!</h4>
                        <p className="ad-para"><hr className="line" />On any service you book<hr className="line" /></p>
                        <button className="advertise-btn">BOOK A SERVICE</button>
                    </div>
                </div>

                {/* Electrician Service  */}
                <div className="single-row-service-about-div">
                    <div className="single-row-service-heading-div">
                        <h2 className="service-about-div-heading-text">Electrician Services</h2>
                        <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    </div>
                    <div className="single-row-service-img-and-icon-div">
                        <i className="fa-solid fa-circle-arrow-left single-row-service-left-arrow-btn item-focus" onClick={scrollElectricLeft} style={{ color: '#025B5D' }}></i>
                        <div className="single-row-service-img-div" id="electrician-scroll">
                            {ElectricianServiceArray.map((value, index) => {
                                return <ServiceComponent src={value.url} sn={value.sn} key={index} exp={value.exp}></ServiceComponent>;
                            })}
                        </div>
                        <i className="fa-solid fa-circle-arrow-right single-row-service-right-arrow-btn item-focus" onClick={scrollElectricRight} style={{ color: '#025B5D' }}></i>
                    </div>
                </div>

                {/* Plumber Service  */}

                <div className="single-row-service-about-div">
                    <div className="single-row-service-heading-div">
                        <h2 className="service-about-div-heading-text">Plumber Services</h2>
                        <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    </div>
                    <div className="single-row-service-img-and-icon-div">
                        <i className="fa-solid fa-circle-arrow-left single-row-service-left-arrow-btn item-focus" onClick={scrollPlumberLeft} style={{ color: '#025B5D' }}></i>
                        <div className="single-row-service-img-div" id="plumber-scroll">
                            {PlumberServiceArray.map((value, index) => {
                                return <ServiceComponent src={value.url} sn={value.sn} key={index} exp={value.exp}></ServiceComponent>;
                            })}
                        </div>
                        <i className="fa-solid fa-circle-arrow-right single-row-service-right-arrow-btn item-focus" onClick={scrollPlumberRight} style={{ color: '#025B5D' }}></i>
                    </div>
                </div>

                {/* Carpenter Services  */}

                <div className="single-row-service-about-div">
                    <div className="single-row-service-heading-div">
                        <h2 className="service-about-div-heading-text">Carpenter Services</h2>
                        <p className="service-about-div-sub-heading-text">Premium Home Services</p>
                    </div>
                    <div className="single-row-service-img-and-icon-div">
                        <i className="fa-solid fa-circle-arrow-left single-row-service-left-arrow-btn item-focus" onClick={scrollCarpenterLeft} style={{ color: '#025B5D' }}></i>
                        <div className="single-row-service-img-div" id="carpenter-scroll">
                            {CarpenterServiceArray.map((value, index) => {
                                return <ServiceComponent src={value.url} sn={value.sn} key={index} exp={value.exp}></ServiceComponent>;
                            })}
                        </div>
                        <i className="fa-solid fa-circle-arrow-right single-row-service-right-arrow-btn item-focus" onClick={scrollCarpenterRight} style={{ color: '#025B5D' }}></i>
                    </div>
                </div>

            </div>
        </>
    );
}

export default Services;