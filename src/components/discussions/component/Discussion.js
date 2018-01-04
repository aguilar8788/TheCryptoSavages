import React, { Component, PropTypes } from 'react'

class Discussion extends Component {
    render() {
        return (
            <div className="discussion">
                <h1>Discussion</h1>
            </div>
        )
    }
}

Discussion.propTypes = {
    children: PropTypes.object.isRequired
}

export default Discussion
