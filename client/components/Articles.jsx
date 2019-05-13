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
                        <p>This is a article about the Power Supply.</p>
                    </div>

                    <div className='box'>
                        <p>This is an article about computer Peripherals.</p>
                    </div>

                    <div className='box'>
                        <p>This is an article about Graphics Cards</p>
                    </div>

                    <div className='box'>
                        <p>This is an article about how to use Windows 10</p>
                    </div>
                </div>
            </Fragment>

        )
    }
}

export default Articles