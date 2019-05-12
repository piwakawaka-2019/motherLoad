import React , {Fragment} from 'react'


class Form extends React.Component {
    constructor(props){
        super(props)
    }
    render() {
        return(

            <Fragment>
                <form onSubmit={this.handleSubmit}>
                    <input type="checkbox" name="category" />
                 </form>
            </Fragment>

        )
    }
}

export default Form