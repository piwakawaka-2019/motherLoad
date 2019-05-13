import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import ListItem from './ListItem'

class Articles extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <h2 className='title is-2 has-text-centered has-text-white'>Articles</h2>
                <div className='content' id="cleanUp">
            

        </div>
            </Fragment>

        )
    }
}

export default Articles