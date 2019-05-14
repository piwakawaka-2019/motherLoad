import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchTips } from "../actions/receive";
import { savePostToUser } from "../actions/usersposts";
import Buttons from "./Buttons";
import Filter from "../components/Filter";

class Tips extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTips());
  }
  render() {
    return (
      <Fragment>
        <p id="contribute">
          Know something we don't? &nbsp;
          <span className="advice">
            <a href="#/advice">
              <i className="fas fa-plus" />
              &nbsp;Grow the base!
            </a>
          </span>
        </p>
        <Filter />
        <h2 className="title is-2 has-text-centered has-text-white">Tips</h2>

        <div className="content has-text-left" id="cleanUp">
          {this.props.tips.map(tips => {
            return (
              <Fragment key={tips.id}>
                <div id="adviceBox">
                  <h3 className="has-text-white">{tips.title}</h3>
                  <p>{tips.description}</p>

                  {this.props.auth.isAuthenticated && <Buttons id={tips.id} />}
                </div>
              </Fragment>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    postsbyuser: state.postsbyuser,
    tips: state.tips,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Tips);
