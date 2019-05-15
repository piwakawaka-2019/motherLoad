import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import { fetchArticleData } from '../actions/receive';

class Articles extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            
        }
    }

    componentDidMount () {
        this.props.dispatch(fetchArticleData())
    }

    render(){
      return(
        <Fragment>
          <div className='content'>
            <h2 className='title is-2'>Articles</h2>
            {this.props.articles.map(article => {
              return (
                <div className="box">
                  <a href={article.source_url} target='_blank'><h3><b>{article.title}</b></h3></a>
                  {article.description}

                  </div>
              )
            })}
                  
          </div>
        </Fragment>

      )
    }
}

function mapStateToProps(state) {
  return {
    articles: state.articles
  };
}

export default connect(mapStateToProps)(Articles);
