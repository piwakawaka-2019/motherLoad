import React , {Fragment} from 'react'
import {connect} from 'react-redux'

class Articles extends React.Component{
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div className='content'>
                    <h2 className='title is-2'>Articles</h2>
                    
                    <div className="box">
                        This is a article about the Power Supply.
                    </div>

                    <div className='box'>
                        This is an article about computer Peripherals.
                    </div>

                    <div className='box'>
                        This is an article about Graphics Cards 
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Articles