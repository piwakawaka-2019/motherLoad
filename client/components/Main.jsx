import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'
// import RegisteredUsersHome from './RegisteredUserHome';


class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <Fragment>

                <Carousel />
            </Fragment>
            
        )
    }
}

export default Main