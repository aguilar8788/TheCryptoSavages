import React, { Component, PropTypes } from 'react'

class Crypto extends Component {
    render() {
        return (
            <div className="crypto">
                <h1>Crypto</h1>

            </div>
        )
    }
}

Crypto.propTypes = {
    children: PropTypes.object.isRequired
}

export default Crypto
