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
            <nav className="navigation">
                <ul>
                    <li><IndexLink to="/data" activeClassName="active">Data</IndexLink></li>
                    <li><IndexLink to="/crypto" activeClassName="active">Top Crypto</IndexLink></li>
                    <li><IndexLink to="/blockchain" activeClassName="active">Blockchain</IndexLink></li>
                    <li><IndexLink to="/exchanges" activeClassName="active">Recommended Exchanges</IndexLink></li>
                    <li><IndexLink to="/discussion" activeClassName="active">Market Discussions</IndexLink></li>
                    <li><IndexLink to="/contact" activeClassName="active">Contact Us</IndexLink></li>
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