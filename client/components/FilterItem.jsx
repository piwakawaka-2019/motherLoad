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
                <h5 className='title is-5 has-text-centered has-text-white'>Type: {data.type}</h5>
                <h4 className='title is-4 has-text-centered has-text-white'><a href={data.source_url} target='_blank'>{data.title}</a></h4>
                <p>{data.description}</p><hr />
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

