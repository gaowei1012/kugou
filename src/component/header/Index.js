import React from 'react'
import {Link} from 'react-router-dom'
import {Icon} from 'antd-mobile'
import {connect} from 'react-redux'
import * as playerAction from '../../redux/action/Index'
import {bindActionCreators} from 'redux'

import {bindActionCreators} from 'redux'

import './index.css'

class Header extends React.Component {
    toggleQuery() {

    }
    hideQuery() {
        this.props.changeSongActions.query()
    }

    render() {
        return(
            <div className="header">
                <div className="logo-container">
                    <Link classNmae="home" to="/" onClick={this.hideQuery.bind(this)}>
                        <img src={logo} alt="" />
                    </Link>
                    <div className="query-icon" onClick={this.toggleQuery.bind(this)}>
                        <Icon type="search"/>
                    </div>
                </div>
            </div>
        );
    }
}


function mapStateToProps(state) {
    
}

function mapDispatchToProps(dispatch) {

}

export default connect (
    mapStateToProps,
    mapDispatchToProps
)(Header)