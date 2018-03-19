import { GET_BANKS } from '../constants';

export function bankReducers(state = { banksList: [] }, action) {

    switch (action.type) {
        case GET_BANKS:
            console.log('inside this reducer');
            return {
                banksList: action.payload
            }
            break
    }

    return state;
}