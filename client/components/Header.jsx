import React , {Fragment} from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

class Header extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(

            <Fragment>
                <div className="hero is-small is-white">
            <div className="hero-body has-text-centered">
            <Link to='/' className="">
                <h1 className="title is-1 has-text-dark-grey has-text-weight-medium">MotherLoad</h1>
            </Link>
            </div>
        </div>  
            </Fragment>

        )
    }
}

export default Header