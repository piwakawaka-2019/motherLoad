import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import { addDataToDB } from '../apis/resources'
import{ fetchCategories } from "../actions/categories"


class AdviceForm extends React.Component {
  constructor(props){
    super(props)
    this.state ={
        categories: []
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleCategory = this.handleCategory.bind(this)
}
  componentDidMount(){
    this.props.dispatch(fetchCategories())
}
handleSubmit(event){
    event.preventDefault()
    addDataToDB(this.state)
}
handleChange(event){
    this.setState({
        [event.target.name]: event.target.value
    })
}
handleCategory(event){
    const arr = this.state.categories
    const thing = event.target.value
    const index = arr.indexOf(thing)
    return(index > -1 ? arr.splice(index, 1) : this.setState({
        categories: [...this.state.categories, event.target.value]
     }))
    
    // if it exists in array then remove it else add it

    
}
  render(){
      console.log(this.state)
    return(


      <Fragment>
          <h2 className='title is-2 has-text-centered has-text-white'>
                  Tweet of advice 
              </h2>
              <form onSubmit={this.handleSubmit}>
                  <div className="field">

                      <label className="label is-large">
                          Title
                      </label>
                      <div className="control">
                          <input className="input" type="text" name="title" placeholder='title'onChange={this.handleChange} />
                      </div>

                      <label className="label"></label>
                      
                      <label className="label is-large">
                          I'd like to give advice on:
                      </label>
                      <div className="control has-text-centered">
                          <label className="radio">
                              <input type="radio" name="part"/>
                              &nbsp;Category or part&nbsp;&nbsp;
                          </label>
                          <label className="radio ">
                              <input type="radio" name="part"/>
                              &nbsp;Part
                          </label>
                      </div>
                      
                      <label className="label"></label>
                      
                      <label className="label is-large">
                          Advice
                      </label>
                      <div className="control">
                          <textarea className="textarea" name="description" placeholder="Enter a tweet of advice" onChange={this.handleChange}></textarea>
                      </div>

                      <label className="label is-large has-text-centered"></label>
                      
                      <div className="control has-text-centered">
                          <label className="label is-large has-text-centered">
                              <input className="button is-success is-large is-fullwidth" type="submit" name='Submit' />
                              
                              
                          </label>
                      </div>
                  </div>
              </form>
      </Fragment>
    )
  }
}

function mapStateToProps(state) {
    return{
        categories: state.categories,
    }
}
export default connect(mapStateToProps)(AdviceForm)
