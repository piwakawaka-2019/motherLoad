import React , {Fragment} from 'react'
import {connect} from 'react-redux'

class Articles extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <h2 className='title is-2 has-text-centered'>Articles</h2>
                <div className='content' id="cleanUp">
            

        </div>
            </Fragment>

        )
    }
}

export default Articles