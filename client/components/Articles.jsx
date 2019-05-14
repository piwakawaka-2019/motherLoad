import React, { Fragment } from "react";
import { connect } from "react-redux";
import {
  fetchPureinfotechData,
  fetchTomshardwareData,
  fetchExtremetechData,
  fetchFurenexoData,
  fetchPcgamerData,
  fetchLaptopmagData
} from "../actions/receive";

class Articles extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  // urls () {

  // }

  // titles () {

  // }

  componentDidMount() {
    this.props.dispatch(fetchPureinfotechData());
    // this.props.dispatch(fetchTomshardwareData())
    this.props.dispatch(fetchExtremetechData());
    this.props.dispatch(fetchFurenexoData());
    // this.props.dispatch(fetchPcgamerData())
    this.props.dispatch(fetchLaptopmagData());
  }

  render() {
    return (
      <Fragment>
        <div className="content">
          <h2 className="title is-2 has-text-centered has-text-white">
            Articles
          </h2>

          {this.props.articles.map(article => {
            return (
              <div className="box">
                <a href={article[article.length - 2]} target="_blank">
                  <h3>{article[article.length - 1]}</h3>
                </a>
                {article.slice(0, 1).map(p => (
                  <p>{p}</p>
                ))}
              </div>
            );
          })}
        </div>
      </Fragment>
    );
  }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Articles);
