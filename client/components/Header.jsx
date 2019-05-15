import React, { Fragment } from "react";
import { HashRouter as Router, Route, Link } from "react-router-dom";

class Header extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="hero is-small" id="header">
          <div className="hero-body has-text-centered">
            <Link to="/" className="">
              <h1 className="has-text-weight-bold has-text-white has-text-weight-medium">
                MotherLoad
              </h1>
            </Link>
          </div>
        </div>
      </Fragment>
    );
  };
}

export default Header;
