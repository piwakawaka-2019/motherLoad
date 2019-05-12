import React , {Fragment} from 'react'
import {connect} from 'react-redux'


class ListItem extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <p><a href='#'>Articles go here.</a></p>
                <p><a href='#'>Articles go here.</a></p>
                <p><a href='#'>Articles go here.</a></p>
                {/* {this.props.listAll.map(listAll => {
                        return(
                            <Fragment>
                                <h3>
                                <a href={listAll.source_url} target='_blank'>{listAll.title}</a>
                                </h3>
                            <p>{listAll.description}</p>
                            </Fragment>
                        )
                    })} */}
            </Fragment>
        )
    }
}



export default ListItem