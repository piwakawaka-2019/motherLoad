import React from 'react'
import {connect} from 'react-redux'
import {Link} from 'react-router-dom'
import {logoutUser} from '../actions/logout'

class Nav extends React.Component {
    constructor(props) {
      super(props)
      this.state = {
        showBurger: false
      }
      this.toggleBurger = this.toggleBurger.bind(this)
    }
    toggleBurger() {
      this.setState({showBurger: !this.state.showBurger})
    }
    render() {
      const {auth, logout} = this.props
      const {showBurger} = this.state
      return <nav className="navbar is-fixed-top">
        <div className="container">
          <div className="navbar-brand">
            <span onClick={this.toggleBurger} className={`navbar-burger burger ${showBurger ? 'is-active': ''}`} data-target="navbarMenuHeroA">
              <span></span>
              <span></span>
              <span></span>
            </span>
          </div>
          <div id="navbarMenuHeroA" className={`navbar-menu ${showBurger ? "is-active" : ''}`}>
            <div className="navbar-end">
              {auth.isAuthenticated
                ? [
                // Logged in only.
                  // <Link to='#' className="navbar-item is-large" >{this.state.user_name}</Link>,
                  <Link to='/' className="navbar-item is-large" onClick={() => logout()}><i class="fas fa-sign-out-alt" />&nbsp;Logout</Link>
                ]
                : [ //Logged out only.
                  <Link onClick={this.toggleBurger} className="navbar-item is-large" to='/login'><i class="fas fa-sign-in-alt" />&nbsp;Login</Link>,
                  <Link onClick={this.toggleBurger} className="navbar-item" to='/register'><i class="fas fa-user-plus" />&nbsp;Register</Link>
                ] //Display in either logged in or out.
              } 
              <Link onClick={this.toggleBurger} to='/' className="navbar-item is-large" ><i class="fas fa-home" />&nbsp;Home</Link>
            </div>
            
          </div>
        </div>
      </nav>
    }
  }
  
  const mapDispatchToProps = (dispatch) => {
    return {
      logout: () => dispatch(logoutUser())
    }
  }
  
  const mapStateToProps = ({auth}) => {
    return {auth}
  }
  
  export default connect(mapStateToProps, mapDispatchToProps)(Nav)