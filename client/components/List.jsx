import React , {Fragment} from 'react'
import CarouselDetail from './CarouselDetail'
import ListItem from './ListItem'
import resources from '../../data/resources'

class List extends React.Component {
    constructor(props){
        super(props)
    }
    render(){
        return(

            <Fragment>
                <div className='content'>
            <CarouselDetail />
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