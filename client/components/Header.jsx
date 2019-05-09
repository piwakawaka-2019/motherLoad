import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'

const Header = () => {
    return (
        <div className="hero is-small is-primary">
            <div className="hero-body has-text-centered">
            <Link to='/' className="">
                <h1 className="title is-1 has-text-grey">MotherLoad</h1>
            </Link>
            </div>
        </div>        
    )
}

export default Header