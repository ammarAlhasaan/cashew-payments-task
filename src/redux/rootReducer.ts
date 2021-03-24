import {combineReducers} from 'redux';
import auth from './Auth/auth.reducer';
import message from './Message/message.reducer';
import {reducer as formReducer} from 'redux-form'


const rootReducer = combineReducers({
    auth,
    message,
    form: formReducer
});
export default rootReducer;

