import React , {Fragment} from 'react'

class MenuBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div className="wrapper">
                    <nav className="tabs">
                        <div className="selector"></div>
                        <a href="#" className="active"><i className="fas fa-home"></i>Home</a>
                        <a href="#/pcparts/"><i className="fas fa-desktop"></i>PC Parts</a>
                        <a href="#"><i className="fas fa-hands-helping"></i>Tips</a>
                        <a href="#"><i className="fas fa-robot"></i>Tutorials</a>
                        <a href="#"><i className="far fa-newspaper"></i>Articles</a>
                    </nav>
                </div>
                {/* <div className='columns'>
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
        </div> */}
            </Fragment>
        )
    }
}

export default MenuBar