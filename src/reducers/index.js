import { combineReducers } from 'redux';
import { bankReducers } from './bankReducers';

export default combineReducers({
    banks: bankReducers
})