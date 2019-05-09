import React , {Fragment} from 'react'
import {connect} from 'react-redux'



class ListItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <p><a href='#'>Articles go here.</a></p>
                <p><a href='#'>Articles go here.</a></p>
                <p><a href='#'>Articles go here.</a></p>
            </Fragment>
        )
    }
}



export default ListItem