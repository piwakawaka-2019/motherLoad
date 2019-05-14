import React , {Fragment} from 'react'

class MenuBar extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <Fragment>
                <div id="menuSlider" className="wrapper">
                    <div key="navbar" className="tabs">
                        <div className="selector"></div>
                        <a href="#" >&nbsp;&nbsp;<i className="fas fa-home"></i>Home</a>
                        <a href='#/pcparts/'>&nbsp;&nbsp;<i className="fas fa-desktop"></i>PC Parts</a>
                        <a href='#/tips'>&nbsp;&nbsp;<i className="fas fa-hands-helping"></i>Tips</a>
                        <a href='#/tutorials'>&nbsp;&nbsp;<i className="fas fa-chalkboard-teacher"></i>Tutorials</a>
                        <a href='#/articles'>&nbsp;&nbsp;<i className="far fa-newspaper"></i>Articles</a>
                    </div>
                </div>
    
            </Fragment>
        )
    }
}

export default MenuBar