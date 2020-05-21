import React from "react";
import "./LandingPage.css";
import { Link } from "react-router-dom";

function LandingPage(props) {
  const { setAuthType } = props;

  const handleClick = (signUpMethod) => {
    setAuthType(signUpMethod);
  };

  return (
    <div className="landing-page">
      <section className="main-landing-page">
        <h1 className="title-landing-page">HomeQuarters</h1>
        <h2 className="subtitle-landing-page">connect with your housemates</h2>
        <div className="button-auth-container">
          <Link to="/HomeQuarters/auth" className="link-button">
            <button
              className="button button-auth"
              onClick={() => handleClick("sign in")}
            >
              sign in
            </button>
          </Link>
          <Link to="/HomeQuarters/auth">
            <button
              className="button button-auth"
              onClick={() => handleClick("sign up")}
            >
              sign up
            </button>
          </Link>
        </div>
      </section>
    </div>
  );
}

export default LandingPage;
