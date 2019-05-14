import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchTutorials} from "../actions/receive"
import Filter from "./Filter"
 

class Tutorials extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTutorials())
    }
    render() {
        return(
            <Fragment>
                <Filter />
                <p id="contribute">Know something we don't?<br /><span className='advice'><a href="#/advice"><i className='fas fa-plus' />&nbsp;Add a Tip</a></span></p>
                <h2 className='title is-2 has-text-white has-text-centered'>Tutorials</h2>
                
                <div className='content has-text-left' id="cleanUp">
                    

                    {this.props.tutorials.map(tutorials => {
                        return(
                            <Fragment>
                                <h3 className="has-text-white">
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