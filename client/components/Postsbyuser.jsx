import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchPostsByUser, deletePostSavedToUser} from "../actions/usersposts"
 
class Postsbyuser extends React.Component {

  handleDelete(event){
    event.preventDefault()
    console.log("delete")
    const userName = this.props.auth.user.user_name
    this.props.dispatch(deletePostSavedToUser(userName, event.target.name))
  }
  componentDidMount(){
    const userName = this.props.auth.user.user_name
    this.props.dispatch(fetchPostsByUser(userName))
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
                <button name={post.id} onClick={this.handleDelete}>delete</button>
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