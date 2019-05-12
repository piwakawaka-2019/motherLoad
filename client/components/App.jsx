import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'


import Header from './Header'
import Main from './Main'
import MenuBar from './MenuBar'
import Nav from './Nav'
import Login from './Login'
import Register from './Register'
import PCParts from './PCParts'
import Tutorials from './Tutorials'
import Tips from './Tips'
import Articles from './Articles'
import AdviceForm from './AdviceForm'

export function App({auth}) {
  return (
    <Router>
      <div className="container has-text-centered">
        <Header />
        <Nav />
        <MenuBar />
        <br />

        <div className=''>
          {!auth.isAuthenticated &&
            <Route exact path="/" component={Main} />
          }
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/pcparts" component={PCParts} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/tips" component={Tips} />
          <Route path="/articles" component={Articles} />
          <Route path="/addtip" component={AdviceForm} />
        </div>

      </div>
    </Router>
  )
}

const mapStateToProps = ({auth}) => {
  return {
    auth
  }
}

export default connect(mapStateToProps)(App)