import React from 'react'
import {connect} from 'react-redux'

const Articles = () => {
    return (
        <div className='content'>
            <h2>Articles</h2>
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

export default Articles