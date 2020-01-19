import {
    GET_USER_LIST,
    ADD_USER
} from '../../../redux/ActionTypes';

export const RegisterNewUser = (user) => {
    try {
        return {type : ADD_USER, payload : user };
    }
    catch(e) {
        console.log(e);
    }
}

export const GetUsersInfo = () => {
    try{
        return {type : GET_USER_LIST }
    }
    catch(e) {
        console.log(e);
    }
}