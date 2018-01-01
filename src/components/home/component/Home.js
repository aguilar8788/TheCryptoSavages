import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return(
            <div className="home">
                <h1>Home</h1>
            </div>
        )
    }
}

Home.propTypes = {

}

Home.contextTypes = {
    router: PropTypes.object
}

export default Home