import React, { Fragment } from "react";
import { connect } from "react-redux";

import { fetchTutorials } from "../actions/receive";
import Filter from "./Filter";
import Buttons from "./Buttons";
import { saveLocation} from '../actions/location'

class Tutorials extends React.Component {
  componentDidMount() {
    this.props.dispatch(fetchTutorials());
    this.props.dispatch(saveLocation({location: 'tutorial', url: '/tutorials'}))

  }
  render() {
    return (
      <Fragment>
        <Filter filter={false} />

        <p id="contribute">
          Know something we don't? &nbsp;
          <span className="advice">
            <a href="#/advice">
              <i className="fas fa-plus" />
              &nbsp;Grow the base!
            </a>
          </span>
        </p>

        <h2 className="title is-2 has-text-white has-text-centered">
          Tutorials
        </h2>

        <div className="content has-text-left" id="cleanUp">
          {this.props.tutorials.map(tutorials => {
            return (
              <Fragment>
                <div id="adviceBox">
                  <h3 className="has-text-white">{tutorials.title}</h3>
                  <p>{tutorials.description}</p>

                  {this.props.auth.isAuthenticated && (
                    <Buttons id={tutorials.id} />
                  )}
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
    tutorials: state.tutorials,
    auth: state.auth
  };
}

export default connect(mapStateToProps)(Tutorials);
