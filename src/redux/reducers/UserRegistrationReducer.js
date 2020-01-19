import { GET_USER_LIST, ADD_USER } from '../ActionTypes';
let user = {
    ID : 1,
    Name : 'Divesh',
    Phone : '908090933',
    Email : 'dvshsahu010@gmail.com',
    Password : 'pass',
    Time : '2 min ago'
}
let initialState = {
    UserList : []
};
// initialState.UserList.push(user);

 const UserRegistrationRecuder = (state = initialState, action) => {
     switch(action.type) {
         case GET_USER_LIST : {
             return {...state};
         }
         case ADD_USER : {
             let users = [...state.UserList];
             action.payload.Id = state.UserList.length + 1;
            let dateObj = new Date();
             action.payload.Time = dateObj.toISOString();
             users.push(action.payload);
             return {...state,UserList: users};
         }
         default : {
             return {...state};
         }
     }
 }

 export default UserRegistrationRecuder;