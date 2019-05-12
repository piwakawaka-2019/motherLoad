import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'


class Main extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <Fragment>
                <div className='content'>
            <Carousel />
        </div>
            </Fragment>
            
        )
    }
}

export default Main