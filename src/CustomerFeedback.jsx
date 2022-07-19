import React from "react";
import './CustomerFeedback.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import FeedbackComponent from "./FeedbackComponent";
import FeedbackArray from "./FeedbackArray";

const CustomerFeedback = () => {
    return (
        <>
            <div className="customer-feedback-section">
                <h4 className="customer-feedback-heading-text">What our customer say</h4>
                <div className="customer-feedback-image-div">
                    {FeedbackArray.map((v, i) => {
                        return <FeedbackComponent cmt={v.cmt} name={v.name} key={i}></FeedbackComponent>;
                    })}
                </div>
            </div>
        </>
    );
}

export default CustomerFeedback;