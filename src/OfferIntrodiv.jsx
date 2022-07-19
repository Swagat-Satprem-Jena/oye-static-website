import React from "react";
import './OfferIntrodiv.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const OfferIntrodiv = (props) => {
    return (
        <>
        <div className="offer-div">
            <img className="offer-image item-focus" src={props.src} alt='offer-img' />
        </div>
        </>
    );
}

export default OfferIntrodiv;