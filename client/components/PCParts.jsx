import React, {Fragment} from 'react'
import {connect} from 'react-redux'
import ListItem from './ListItem'


class PCParts extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <h2 className='title is-2'>PC Parts &mdash; What Do They Do?</h2> 
                <span>
                    <h3>CPU (Central Processing Unit)</h3>
                    <p>The CPU is the brain of the computer it runs all of the calculations for the computer.</p>
                </span>
            </Fragment>
        )
    }
}
export default PCParts