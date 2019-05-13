import React , {Fragment} from 'react'
import {connect} from 'react-redux'

import{ fetchCategories } from "../actions/categories"
import { fetchSearch } from '../actions/search';

import FilterItem from './FilterItem'

class Form extends React.Component {
    constructor(props){
        super(props)
        this.state={

        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    componentDidMount(){
        this.props.dispatch(fetchCategories())
    }
    handleSubmit(event){
        event.preventDefault()
        let values = Object.values(this.state)
        this.props.dispatch(fetchSearch(values))
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
          })

    }
    render() {
        return(

            <Fragment>
                <div>
                <form onSubmit={this.handleSubmit}>
                    {this.props.categories.map(category =>{
                        return(
                            <Fragment>
                            <input type="checkbox" name={category.id} value={category.id} onChange={this.handleChange} />
                            <h2>{category.name}</h2>
                        </Fragment>  
                        )   
                    })}
                    <button type='submit'>Filter</button>
                </form>
                </div>
                <div>
                    {this.props.search && <FilterItem/>}
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

