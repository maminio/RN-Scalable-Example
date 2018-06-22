import * as actionTypes from 'app/actions/constants';

export const initialState = {
    bootedSuccessful: false,
    bootTime: null,
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.APP_LOADED:
            return { ...state, bootedSuccessful: true };
        default:
            return state;
    }
};