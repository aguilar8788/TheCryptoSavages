import React, { Component, PropTypes } from 'react'

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <h1>Contact</h1>
            </div>
        )
    }
}

Contact.propTypes = {
    children: PropTypes.object.isRequired
}

export default Contact
