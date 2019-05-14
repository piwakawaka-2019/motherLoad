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
                        <a href="#" ><i className="fas fa-home"></i> Home</a>
                        <a href='#/pcparts/'><i className="fas fa-desktop"></i> PC Parts</a>
                        <a href='#/tips'><i class="fas fa-edit"></i> Tips</a>
                        <a href='#/tutorials'><i class="fas fa-video"></i> Tutorials</a>
                        <a href='#/articles'><i className="far fa-newspaper"></i> Articles</a>
                    </div>
                </div>
    
            </Fragment>
        )
    }
}

export default MenuBar