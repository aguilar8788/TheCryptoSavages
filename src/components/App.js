import React, { Component, PropTypes } from 'react'
import  NavBar from './common/navBar/component/NavBar'

class App extends Component {
    render() {
        return (
            <div className="app">
                <div className="head">
                    <div className="logo">
                        <h1>The Crypto Savages</h1>
                        <h5>Cryptos Made Simple</h5>
                    </div>
                    <NavBar/>

                </div>

                {this.props.children}
            </div>
        )
    }
}

App.propTypes = {
    children: PropTypes.object.isRequired
}

export default App
