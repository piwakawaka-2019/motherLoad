import React , {Fragment} from 'react'
import {connect} from 'react-redux'
import Carousel from 'react-bootstrap/Carousel'

class AddTip extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return(


      <Fragment>
  <div className='content'>
              <h2 className="title is-2">
                  Tweet of advice 
              </h2>
              <form action="/addTip" method="POST">
                  <div className="field">

                      <label className="label">
                          Title
                      </label>
                      <div className="control">
                          <input className="input" type="text" placeholder='text' />
                      </div>

                      <label className="label"></label>
                      
                      <label className="label">
                          I'd like to give advice on:
                      </label>
                      <div className="control">
                          <label className="radio">
                              <input type="radio" name="part"/>
                              Category or part
                          </label>
                          <label className="radio">
                              <input type="radio" name="part"/>
                              Part
                          </label>
                      </div>
                      
                      <label className="label"></label>
                      
                      <label className="label">
                          Advice
                      </label>
                      <div className="control">
                          <textarea className="textarea" placeholder="Enter a tweet of advice"></textarea>
                      </div>

                      <label className="label"></label>
                      
                      <div className="control">
                          <label className="label">
                              <input className="input" type="submit"/>
                              Submit
                          </label>
                      </div>
                  </div>
              </form>
          </div>
      </Fragment>
    )
  }
}

export default AddTip
