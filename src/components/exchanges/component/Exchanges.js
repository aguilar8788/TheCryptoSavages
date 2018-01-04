import React, { Component, PropTypes } from 'react'

class Exchanges extends Component {
    render() {
        return (
            <div className="exchanges">
                <h1>Exchanges</h1>
            </div>
        )
    }
}

Exchanges.propTypes = {
    children: PropTypes.object.isRequired
}

export default Exchanges
