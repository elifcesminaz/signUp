import React, { useState } from "react";
import Thanks from "./component/Thanks";
import foto from "./image/illustration-sign-up-desktop.svg";
import list from "./image/icon-list.svg";

const App = () => {
  const [email, setEmail] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateEmail(email)) {
      setIsSubscribed(true);
      console.log("It is ok");
    } else {
      setErrorMessage("Wrong email!");
      console.log("Wrong email!");
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  return (
    <div className="box">
      <div className="fotobox">
        <img src={foto} alt="" />
      </div>
      <div className="textbox">
        {isSubscribed ? (
          <Thanks />
        ) : (
          <>
            <h1>Stay updated!</h1>
            <p>Join 60,000+ product managers receiving monthly updates on:</p>
            <div className="lists">
              <img src={list} alt="" />
              Product discovery and building what matters
            </div>
            <div className="lists">
              <img src={list} alt="" />
              Measuring to ensure updates are a success
            </div>
            <div className="lists">
              <img src={list} alt="" />
              And much more!
            </div>
            <div>
              <form className="formStyle" onSubmit={handleSubmit}>
                <div className="label-container">
                  <label>Email address</label>
                  <div className="input-container">
                    {errorMessage && (
                      <div className="error">{errorMessage}</div>
                    )}
                    <input
                      type="text"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setIsValidEmail(validateEmail(e.target.value));
                        setErrorMessage("");
                      }}
                      placeholder="email@company.com"
                    />
                  </div>
                </div>
                <button type="submit">Subscribe to monthly newsletter</button>
              </form>
            </div>
          </>
        )}
      </div>
    </div>
  );
};
export default App;
