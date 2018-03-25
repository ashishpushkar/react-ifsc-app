import {
    GET_BANKS, GET_STATES,
    UPDATE_BANK_NAME, GET_CITIES,
    UPDATE_STATE_NAME, UPDATE_CITY_NAME
} from '../constants';

export function getBanks() {
    return {
        type: GET_BANKS,
        payload: [
            {
                key: 'Axis Bank',
                text: 'Axis Bank',
                value: 'Axis Bank'
            },
            {
                key: 'SBI Bank',
                text: 'SBI Bank',
                value: 'SBI Bank'
            }
        ]
    }
}

export function getStates(bankName) {
    return {
        type: GET_STATES,
        payload: [
            {
                key: 'Maharashtra',
                text: 'Maharashtra',
                value: 'Maharashtra'
            },
            {
                key: 'Goa',
                text: 'Goa',
                value: 'Goa'
            }
        ]
    }
}

export function updateBankName(bankName) {
    return {
        type: UPDATE_BANK_NAME,
        payload: bankName
    }
}

export function getCities(bankName, state) {
    return {
        type: GET_CITIES,
        payload: [
            {
                key: 'Pune',
                text: 'Pune',
                value: 'Pune'
            }
        ]
    }
}

export function updateStateName(stateName) {
    return {
        type: UPDATE_STATE_NAME,
        payload: stateName
    }
}

export function updateCityName(cityName) {
    return {
        type: UPDATE_CITY_NAME,
        payload: cityName
    }
}