import React from "react";
import success from "../image/icon-success.svg";

const Thanks = () => {
  return (
    <div className="thanksbox">
      <div className="thanksfotobox">
        <img src={success} alt="" />
      </div>
      <div className="thankstextbox">
        <h3> Thanks for subscribing!</h3>
        <p>
          A confirmation email has been sent to ash@loremcompany.com. Please
          open it and click the button inside to confirm your subscription.
        </p>
        <button> Dismiss message</button>
      </div>
    </div>
  );
};

export default Thanks;
