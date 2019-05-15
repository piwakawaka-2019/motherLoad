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
          <h2 className="title is-2 has-text-centered has-text-white">Articles</h2>
            {this.props.articles.map(article => {
                var urlParts = article.source_url.replace('http://','').replace('https://','').replace('www.','').replace('.com','').split(/[/?#]/)
                var url = urlParts[0]
                var domain = article.source_url

              return (
                <div className="box">
                  <h3><b>{article.title}</b></h3>
                  {article.description}<br />
                  Source: <a href={domain} target='_blank'>{url}</a>

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
