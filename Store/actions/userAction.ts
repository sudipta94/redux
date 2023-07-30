import {UserLogin} from '../../Service/userService';

export enum UserActionTypes {
  Login_Success_Action = '[USER] Login Success Action',
}

export const LoginAction = (payload: any) => {
  return (dispatch: any, getState: any) => {
    //Loding Strat
    console.log('called');

    return UserLogin(payload)
      .then(response => {
        if (response.data) {
          //success Action
          dispatch(LoginSuccess(response.data));
        }
        //Loding Stop
      })
      .catch(error => {
        //Error Action
      });
  };
};

export const LoginSuccess = (payload: any) => {
  return {
    type: UserActionTypes.Login_Success_Action,
    payload: payload,
  };
};
