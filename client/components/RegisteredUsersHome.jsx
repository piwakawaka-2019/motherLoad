import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'

class RegisteredUsersHome extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <Carousel />
                <h2 className='title is-2 has-text-centered has-text-white'>Saved resources:</h2>
                <div className='content has-text-left'>
            
                </div>
            </Fragment>

        )
    }
}

export default RegisteredUsersHome