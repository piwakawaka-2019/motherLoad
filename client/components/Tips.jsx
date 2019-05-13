import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{fetchTips} from "../actions/receive"
 

class Tips extends React.Component {

    componentDidMount(){
        this.props.dispatch(fetchTips())
    }
    render() {
        return(
            <Fragment>
                <div className='content'>
                <h2 className='title is-2 has-text-centered	'>Tips</h2>
                    
                <p>Know something we don't? &nbsp;<span className='addtip'><a href="#/addtip"><i className='fas fa-plus' />&nbsp;Add a Tip</a></span></p>

                    {this.props.tips.map(tips => {
                        return(
                            <Fragment>
                                <h3>
                                <a href={tips.source_url} target='_blank'>{tips.title}</a>
                            </h3>
                            <p>{tips.description}</p>
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
        tips: state.tips
    }
}

export default connect(mapStateToProps)(Tips)