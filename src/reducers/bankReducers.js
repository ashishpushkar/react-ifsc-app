import { GET_BANKS, GET_STATES, UPDATE_BANK_NAME, GET_CITIES } from '../constants';

export function bankReducers(state = {
    banksList: [], statesList: [],
    bankName: '', citiesList: []
}, action) {

    switch (action.type) {

        case GET_BANKS:
            return {
                banksList: action.payload
            }
            break;

        case GET_STATES:
            return {
                bankName: state.bankName,
                banksList: state.banksList,
                statesList: action.payload
            }
            break;

        case UPDATE_BANK_NAME:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                bankName: action.payload
            }
            break;

        case GET_CITIES:
            return {
                banksList: state.banksList,
                statesList: state.statesList,
                bankName: state.bankName,
                citiesList: action.payload
            }
            break;
    }

    return state;
}