import React, { Fragment } from "react";
import { connect } from "react-redux";

import { savePostToUser } from "../actions/usersposts";

class Buttons extends React.Component {
  constructor(props) {
    super(props);
    this.handleAdd = this.handleAdd.bind(this);
  }
  handleAdd() {
    event.preventDefault();
    this.props.dispatch(
      savePostToUser(this.props.auth.user.user_name, event.target.name)
    );
    alert("Saved!");
  }

  render() {
    return (
      <Fragment>
        <button id="addButton" name={this.props.id} onClick={this.handleAdd}>
          Add
        </button>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsbyuser: state.postsbyuser,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Buttons);
