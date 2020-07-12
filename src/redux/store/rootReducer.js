import allReducers from './combineReducers';

const rootReducer = (state, action) => {
    if (action.type === 'RESET_APP') {
        state = undefined;
    }
    return allReducers(state, action);
};

export default rootReducer;
