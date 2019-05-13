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
                <h2 className='title is-2 has-text-centered has-text-white' >Tips</h2>
                <div className='content has-text-left' id="cleanUp">
                    
                    {this.props.tips.map(tips => {
                        return(
                            <Fragment>
                                <h3 className="has-text-white">
                                    {tips.title}
                                </h3>
                                <p>
                                    {tips.description}
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
        tips: state.tips
    }
}

export default connect(mapStateToProps)(Tips)