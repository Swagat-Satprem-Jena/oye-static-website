import React from "react";
import './FeedbackComponent.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

const FeedbackComponent = (props) => {
    return (
        <>
            <div className="feedback-component-div">
                <i className="fa-solid fa-quote-left quote-icon"></i>
                <p className="feedback-text">{props.cmt}</p>
                <h6 className="feedback-customer-name">{props.name}</h6>
            </div>
        </>
    );
}

export default FeedbackComponent;