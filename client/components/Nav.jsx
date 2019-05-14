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

      return <div className="navbar ">
        {/* <div className="container">
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
                //   <Link to='/registerpet' className="navbar-item is-large" >Contribute</Link>,
                  <Link key="logout" to='/' className="navbar-item is-large" onClick={() => logout()}>Logout</Link>
                ]
                : [
                  <Link key= "login" onClick={this.toggleBurger} className="navbar-item is-large" to='/login'><i className='fas fa-sign-in-alt' />Login</Link>,
                  <Link key= "register" onClick={this.toggleBurger} className="navbar-item" to='/register'><i className='fas fa-user-plus' />Register</Link>
                ]
              }
            </div>
            
          </div>
        </div> */}
        <div className="navbar-end">
              {auth.isAuthenticated
                ? [
                //   <Link to='/registerpet' className="navbar-item is-large" >Contribute</Link>,
                  <Link key="logout" to='/' className="navbar-item is-large has-text-grey-lighter" onClick={() => logout()}>Logout</Link>
                ]
                : [
                  <Link key= "login" onClick={this.toggleBurger} className="navbar-item is-large has-text-grey-lighter	" to='/login'><i className='fas fa-sign-in-alt' />Login</Link>,
                  <Link key= "register" onClick={this.toggleBurger} className="navbar-item has-text-grey-lighter	" to='/register'><i className='fas fa-user-plus' />Register</Link>
                ]
              }
            </div>
      </div>
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