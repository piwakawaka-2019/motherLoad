import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchPostsByUser} from "../actions/usersposts"
 

class Postsbyuser extends React.Component {

  componentDidMount(){
    this.props.dispatch(fetchPostsByUser(this.props.auth.user.user_name))
  }
  render() {
    return(
      <Fragment>
        <div>
          {this.props.postsbyuser.map(post => {
            return(
              <Fragment key={post.id}>
                <h3 className="has-text-white">
                    {post.title}
                </h3>
                <p>
                    {post.description}
                </p>
              </Fragment>
            )
          })}

          </div>
      </Fragment>
        
    )
  }
}

function mapStateToProps(state) {
    return{
      postsbyuser: state.postsbyuser,
      auth: state.auth
    }
}

export default connect(mapStateToProps)(Postsbyuser)