import { GET_BANKS } from '../constants';

export function getBanks() {
    console.log('inside this action');
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