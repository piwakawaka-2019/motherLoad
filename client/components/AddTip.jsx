import React , {Fragment} from 'react'
import {connect} from 'react-redux'

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

                      <label className="label is-large">
                          Title
                      </label>
                      <div className="control">
                          <input className="input" type="text" placeholder='text' />
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
                          <textarea className="textarea" placeholder="Enter a tweet of advice"></textarea>
                      </div>

                      <label className="label is-large has-text-centered"></label>
                      
                      <div className="control has-text-centered">
                          <label className="label is-large has-text-centered">
                              <input className="button is-success is-large is-fullwidth" type="submit" name='Submit' />
                              
                              
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
