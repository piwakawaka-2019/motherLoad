import React, { Fragment } from "react";
import { connect } from "react-redux";
import Filter from './Filter'
class FilterItem extends React.Component {
  render() {
    return (
      <Fragment>
        <Filter filter='true' />
        {this.props.search.map(data => {
          return (
            <Fragment>
              <div>
                <h2 className="title is-2 has-text-centered has-text-white">
                  Type: {data.type}
                </h2>
                <h2 className="title is-2 has-text-centered has-text-white">
                  {data.title}
                </h2>
                <br />
                <p>{data.description}</p>
              </div>
            </Fragment>
          );
        })}
      </Fragment>
    );
  }
}
function mapStateToProps(state) {
  return {
    search: state.search
  };
}
export default connect(mapStateToProps)(FilterItem);
