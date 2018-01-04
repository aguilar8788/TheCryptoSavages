import React, {Component} from 'react'
import PropTypes from 'prop-types'

class Home extends Component {
    constructor(props, context) {
        super(props, context)
    }

    render() {
        return(
            <div className="home">
                <div className="section1">
                    <div className="jumbotron one">
                        <h1 className="display-4">Hello!</h1>
                        <p className="lead">something to call attention.</p>
                        <hr className="my-4"/>
                        <p>some data.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
                <div className="section2">
                    <div className="jumbotron">
                        <h1 className="display-4">Hello!</h1>
                        <p className="lead">something to call attention.</p>
                        <hr className="my-4"/>
                        <p>some data.</p>
                        <p className="lead">
                            <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
                        </p>
                    </div>
                </div>
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