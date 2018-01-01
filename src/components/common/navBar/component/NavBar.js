import React, {Component} from 'react'
import PropTypes from 'prop-types'
import { Link, IndexLink } from 'react-router'
import {connect} from 'react-redux'

class NavBar extends Component {
    constructor(props, context) {
        super(props, context)
    }

    componentWillMount() {
    }

    render () {
        return (
            <nav className="navigation">
                <ul>
                    <li><IndexLink to="/" activeClassName="active">Home</IndexLink></li>
                    <li><IndexLink to="/work" activeClassName="active">Market Overview</IndexLink></li>
                    <li><IndexLink to="/blog" activeClassName="active"></IndexLink></li>
                    <li className="socialDropDown" ><a href="#"></a></li>
                    <ul className="socialMedia" >
                        <li><a className="socialBrands" href="https://www.youtube.com/channel/UCvaMlquFLO6rmDiu4c7uUmA" target="_blank">youtube</a></li>
                        <li><a className="socialBrands" href="https://www.facebook.com/Aguilar-Web-Development-1690308347937446/" target="_blank">facebook</a></li>
                        <li><a className="socialBrands" href="https://www.twitter.com/AguilarWebDev" target="_blank">twitter</a></li>
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