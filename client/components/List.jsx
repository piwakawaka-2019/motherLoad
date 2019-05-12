import React , {Fragment} from 'react'
import Carousel from './Carousel'
import ListItem from './ListItem'

class List extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(
            <Fragment>
                <div className='content'>
                <Carousel />
                <p>
                    <ListItem />
                    {/*
                    {props.resources.map(resource => {
                    return (
                    <ListItem
                    key={resource.id}
                    resource={resource}
                    />
                    )
                    })} */}
                </p>
                </div>
            </Fragment>
            
        )
    }
}

export default List