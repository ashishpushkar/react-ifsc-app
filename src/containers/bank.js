import React, { Component } from 'react';
import { AppHeader, Banks, States, Cities, GetDataBtn } from '../components';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import {
    getBanks, getStates,
    updateBankName, getCities,
    updateStateName, updateCityName,
    getBankDetails
} from '../actions';
import { Grid } from 'semantic-ui-react';

const optSelectStates =
    [
        {
            key: 'Select State',
            text: 'Select State',
            value: 'Select State'
        }
    ];

const optSelectCities =
    [
        {
            key: 'Select City',
            text: 'Select City',
            value: 'Select City'
        }
    ];


class Bank extends Component {

    // retrieve states for banks
    bankChange(e, data) {
        this.props.updateBankName(data.value);
        this.props.getStates(data.value);
    }

    // retrieve cities
    stateChange(e, data) {
        this.props.updateStateName(data.value);
        this.props.getCities(this.props.bankName, data.value);
    }

    cityChange(e, data) {
        this.props.updateCityName(data.value);
    }

    getData() {
        console.log('get button data called ---', this.props);
        this.props.getBankDetails(
            this.props.bankName,
            this.props.selectedName,
            this.props.selectedCityName
        );
    }

    componentDidMount() {
        this.props.getBanks();
    }

    render() {
        return (
            <div>
                <AppHeader />
                <Banks banks={this.props.banks} onBankChange={this.bankChange.bind(this)} />
                <States states={
                    typeof this.props.states != 'undefined' ?
                        this.props.states : optSelectStates
                } onStateChange={this.stateChange.bind(this)}
                />
                <Cities cities={
                    typeof this.props.cities != 'undefined' ?
                        this.props.cities : optSelectCities
                } onCityChange={this.cityChange.bind(this)} />
                <GetDataBtn
                    getData={this.getData.bind(this)}
                />
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {
        banks: state.banks.banksList,
        states: state.banks.statesList,
        bankName: state.banks.selectedBankName,
        cities: state.banks.citiesList,
        selectedName: state.banks.selectedName,
        selectedCityName: state.banks.selectedCityName,
        data: state.banks.data
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({
        getBanks: getBanks,
        getStates: getStates,
        updateBankName: updateBankName,
        getCities: getCities,
        updateStateName: updateStateName,
        updateCityName: updateCityName,
        getBankDetails: getBankDetails
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Bank);