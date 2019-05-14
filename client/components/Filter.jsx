import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{ fetchCategories } from "../actions/categories"
import { fetchSearch } from '../actions/search';

import FilterItem from './FilterItem'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={
            tips: true
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(fetchCategories())
        this.setState({
            tips: true,
        })
    }
    handleSubmit(event){
        event.preventDefault()
        let values = Object.values(this.state)
        this.props.dispatch(fetchSearch(values))
        this.setState({
            tips: false
        })
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          })
    }
    handleClear(){
        this.setState({
            tips: true
        })
    }
    render() {
        return(

            <Fragment>
                <input type="checkbox" id="navcheck" role="button" title="menu"></input>

                <label for="navcheck" aria-hidden="true" title="menu">
                    <span className="burger">
                        <span className="bar">
                            <span className="filter has-text-grey-lighter">Filter</span>
                        </span>
                    </span>
                </label>

                <nav id="menu">
                    <h2 className="title is-2">Filter:</h2>
                    <div>
                        
                        
                        <form className="filterForm" onSubmit={this.handleSubmit}>
                            {this.state.tips && this.props.categories.map(category =>{
                                return(
                                    <Fragment> 
                                    <ul>
                                    <li>
                                    <label>
                                        <input type="checkbox" name={category.id} value={category.id} onChange={this.handleChange} />
                                        <span>{category.name}</span>
                                    </label>
                                    </li>
                                    </ul>
                                </Fragment>  
                                )   
                            })}
                            <button type='submit'>Filter</button><button type="clear" >Clear</button>
                        </form>
                    </div>           
                </nav>

                <div>
                    {this.props.search && <FilterItem />}
                </div> 

                
                

            </Fragment>
            

        )
    }
}
function mapStateToProps(state) {
    return{
        search: state.search,
        categories: state.categories,
        tips: state.tips
    }
}
export default connect(mapStateToProps)(Form)

