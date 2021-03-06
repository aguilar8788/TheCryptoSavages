import React, {Component} from 'react'
import PropTypes from 'prop-types'
import {Link, IndexLink} from 'react-router'
import {connect} from 'react-redux'

class NavBar extends Component {
    constructor(props, context) {
        super(props, context)
        this.showSocialDropDown = this.showSocialDropDown.bind(this)
    }

    componentWillMount() {
        this.setState({showSocial: false})
    }

    showSocialDropDown() {
        let showSocialBool = this.state.showSocial
        this.setState({showSocial: showSocialBool ? false : true})
    }

    render () {
        return (
            <nav className="navigation navbar fixed-top">
                <div className="logo">
                    <IndexLink className="logoLink" to="/" activeClassName="active"><h1>The Crypto Savages</h1></IndexLink>
                    <IndexLink className="logoLink" to="/" activeClassName="active"><h5>Cryptos Made Simple</h5></IndexLink>
                </div>
                <ul>
                    <li><IndexLink to="/data" activeClassName="active">Data</IndexLink></li>
                    <li><IndexLink to="/crypto" activeClassName="active">Crypto</IndexLink></li>
                    <li><IndexLink to="/blockchain" activeClassName="active">Blockchain</IndexLink></li>
                    <li><IndexLink to="/exchanges" activeClassName="active">Exchanges</IndexLink></li>
                    <li><IndexLink to="/discussions" activeClassName="active">Discussions</IndexLink></li>
                    <li><IndexLink to="/contact" activeClassName="active">Contact</IndexLink></li>
                    <li className="socialDropDown" onClick={this.showSocialDropDown}><a href="#">Social Media</a></li>
                    <ul className="socialMedia" onMouseLeave={this.showSocialDropDown} style={this.state.showSocial  == false ? {display: 'none'} : {display: 'flex'}}>
                        <li><a className="socialBrands" href="#" target="_blank">youtube</a></li>
                        <li><a className="socialBrands" href="#" target="_blank">facebook</a></li>
                        <li><a className="socialBrands" href="#" target="_blank">twitter</a></li>
                    </ul>
                </ul>
            </nav>
        )
    }
}

NavBar.propTypes = {

}

NavBar.contextTypes = {
    router: PropTypes.object
}

function mapStateToProps(state, ownProps) {
    return {
    }
}

export default connect(mapStateToProps)(NavBar)