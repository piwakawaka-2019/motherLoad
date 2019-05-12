import React from 'react'
import {HashRouter as Router, Route, Link} from 'react-router-dom'
import {connect} from 'react-redux'
import Header from './Header'
import List from './List'
import MenuBar from './MenuBar'
import Nav from './Nav'

import Login from './Login'
import Register from './Register'

import PCParts from './PCParts'
import Tutorials from './Tutorials'
import Tips from './Tips'
import Articles from './Articles'
import AddTip from './AddTip'

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
            <Route exact path="/" component={List} />
          }
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/pcparts" component={PCParts} />
          <Route path="/tutorials" component={Tutorials} />
          <Route path="/tips" component={Tips} />
          <Route path="/articles" component={Articles} />
          <Route path="/addtip" component={AddTip} />
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