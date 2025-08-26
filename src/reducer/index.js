import {combineReducers} from 'redux';
import loginReducer from './loginReducer';
import cartReducer from './cart';
import CheckModalReducer from "./checkModal"
const allReducers = combineReducers({
    loginReducer,
    cartReducer,
    CheckModalReducer,
});
export default allReducers;