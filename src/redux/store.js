import { createStore, combineReducers } from 'redux';
import UserRegistrationRecuder from './reducers/UserRegistrationReducer';

const reducers = combineReducers({
    UserRegistration : UserRegistrationRecuder
})

const store = createStore(reducers);

export default store;