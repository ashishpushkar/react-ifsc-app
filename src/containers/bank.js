import React, { Component } from 'react';
import { AppHeader, BanksList } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getBanks } from '../actions';

class Bank extends Component {

    componentDidMount() {
        this.props.getBanks();
    }

    render() {
        return (
            <div>
                <AppHeader />
                <BanksList banks={this.props.banks} />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        banks: state.banks.banksList
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBanks: getBanks
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bank);