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
                    <h2 className='title is-2'>Tips</h2>

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