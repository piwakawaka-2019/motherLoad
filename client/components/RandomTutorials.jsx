import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import{fetchTutorials} from "../actions/receive"

class RandomTutorials extends React.Component {
    componentDidMount(){
        this.props.dispatch(fetchTutorials())
    }
    render() {
        const randomPick = Math.floor(Math.random()* this.props.tutorials.length);
        return(
            <Fragment>
                <div>
                    {this.props.tutorials.length &&
                        <Fragment>
                            <h2 id="carouselHeader" className="is-size-3">
                                Tutorial: <a href={this.props.tutorials[randomPick].source_url} target='_blank'>{this.props.tutorials[randomPick].title}</a>
                            </h2>
                        <h4>{this.props.tutorials[randomPick].description}</h4>
                        </Fragment>
                    }
                </div>
            </Fragment>
        )
    }
}

function mapStateToProps(state) {
    return{
        tutorials: state.tutorials
    }
}

export default connect(mapStateToProps)(RandomTutorials)