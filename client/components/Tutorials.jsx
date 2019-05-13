import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchTutorials} from "../actions/receive"
 

class Tutorials extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTutorials())
    }
    render() {
        return(
            <Fragment>
                <div className='content'>
                <h2 className='title is-2 has-text-centered	'>Tutorials</h2>

                <p>Know something we don't? &nbsp;<span className='addtip'><a href="#/advice"><i className='fas fa-plus' />&nbsp;Add a Tip</a></span></p>

                    {this.props.tutorials.map(tutorials => {
                        return(
                            <Fragment>
                                <h3>
                                <a href={tutorials.source_url} target='_blank'>{tutorials.title}</a>
                            </h3>
                            <p>{tutorials.description}</p>
                            </Fragment>
                        )
                    })}

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

export default connect(mapStateToProps)(Tutorials)