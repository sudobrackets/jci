import { combineReducers } from 'redux';

import commonReducers from '../reducers';
/* Example reducers -->
// import ExampleReducer from '../views/Example/ExampleReducers';
*/

export default combineReducers({
    Common: commonReducers,
});
