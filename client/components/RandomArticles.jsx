import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import {
    fetchPureinfotechData,
    fetchTomshardwareData,
    fetchExtremetechData,
    fetchFurenexoData,
    fetchPcgamerData,
    fetchLaptopmagData
  } from "../actions/receive";

class RandomArticles extends React.Component {
    componentDidMount() {
        this.props.dispatch(fetchPureinfotechData());
        // this.props.dispatch(fetchTomshardwareData())
        this.props.dispatch(fetchExtremetechData());
        this.props.dispatch(fetchFurenexoData());
        // this.props.dispatch(fetchPcgamerData())
        this.props.dispatch(fetchLaptopmagData());
    }
    render() {
        const randomPick = Math.floor(Math.random()* this.props.articles.length);
        return(
            <Fragment>
                <div>
                    {this.props.articles.length &&
                        <Fragment>
                            <h2>
                                Article: <a href={this.props.articles[randomPick].source_url} target='_blank'>{this.props.articles[randomPick].title}</a>
                            </h2>
                        <h4>{this.props.articles[randomPick].description}</h4>
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        articles: state.articles
    }
}

export default connect(mapStateToProps)(RandomArticles)