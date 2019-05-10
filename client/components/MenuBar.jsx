import React , {Fragment} from 'react'

class MenuBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div className='columns'>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/pcparts/'>PC Parts</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/tutorials'>Tutorials</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/tips'>Tips</a>
                </div>
            </div>
            <div className="column is-one-quarter label is-medium has-text-centered">
                <div className='menubar'>
                <a href='#/articles'>Articles</a>
                </div>
            </div>          
        </div>
            </Fragment>
        )
    }
}

export default MenuBar