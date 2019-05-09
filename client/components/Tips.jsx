import React from 'react'
import {connect} from 'react-redux'
import ListItem from './ListItem'


class Tips extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(
            <div className='content'>
                <h2 className='title is-2'>Tips</h2>
                <p>
                    <ListItem />
                    {/*       {props.articleDB.map(article => {
                        return (
                        <ListItem
                        key={article.id}
                        article={article}
                        />
                        )
                    })} */}
                </p>
            </div>
        )
    }
}

export default Tips