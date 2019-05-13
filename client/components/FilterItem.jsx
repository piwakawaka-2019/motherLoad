import React , {Fragment} from 'react'
import {connect} from 'react-redux'
class FilterItem extends React.Component {
  render() {
    return(
      <Fragment>
        {this.props.search.map(data=>{
          return(
            <Fragment>
              <div>
                <h1>{data.title}</h1><br/>
                <p>{data.description}</p>
              </div>
            </Fragment>
          )
        })}          
      </Fragment>
    )
  }
}
function mapStateToProps(state) {
    return{
        search: state.search,
    }
}
export default connect(mapStateToProps)(FilterItem)

