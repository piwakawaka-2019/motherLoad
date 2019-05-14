import React, { Fragment } from "react";
import Carousel from "./Carousel"

class NonRegisteredHome extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Fragment>
        <Carousel />
        <h2 className="title is-2 has-text-centered has-text-white">
          Welcome:
        </h2>
        <div id="cleanUp">
          <div className="content has-text-left">
            <p>Some text</p>
          </div>
        </div>
      </Fragment>
    );
  }
}

export default NonRegisteredHome;
