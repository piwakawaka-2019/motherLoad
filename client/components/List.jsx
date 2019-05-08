import React from 'react'
import {connect} from 'react-redux'
import Carousel from './Carousel'
import ListItem from './ListItem'

const List = () => {
    return (
        <div className='content'>
            <Carousel />
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

export default List