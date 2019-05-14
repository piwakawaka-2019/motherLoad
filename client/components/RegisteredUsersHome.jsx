import React, { Fragment } from "react";
import { connect } from "react-redux";
import Postsbyuser from "./Postsbyuser";

class RegisteredUsersHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <h2 className="title is-2 has-text-centered has-text-white">
          Saved resources:
        </h2>
        <div className="content has-text-left">
          <Postsbyuser />
        </div>
      </Fragment>
    );
  }
}

export default RegisteredUsersHome;
