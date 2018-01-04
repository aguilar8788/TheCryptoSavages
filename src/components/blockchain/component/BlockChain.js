import React, { Component, PropTypes } from 'react'

class BlockChain extends Component {
    render() {
        return (
            <div className="blockChain">
                        <h1>BlockChain</h1>
            </div>
        )
    }
}

BlockChain.propTypes = {
    children: PropTypes.object.isRequired
}

export default BlockChain
