import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'
//import {fetchSaved} from "../actions/receive"

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
                    {/* 
                    {this.props.saved.map(tips => {
                        return(
                            <Fragment>
                                <h3 className="has-text-white">
                                <a href={saved.source_url} target='_blank'>{saved.title}</a>
                                </h3>
                                <p>
                                    {saved.description}
                                </p>
                            </Fragment>
                        )
                    })}
                     */}
                </div>
            </Fragment>

        )
    }
}

export default RegisteredUsersHome