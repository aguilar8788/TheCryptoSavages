import React, { Component, PropTypes } from 'react'

class Data extends Component {
    render() {
        return (
            <div className="data">
                        <h1>Data</h1>
            </div>
        )
    }
}

Data.propTypes = {
    children: PropTypes.object.isRequired
}

export default Data
