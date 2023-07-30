import {userMain} from '../../Models/User';
import {UserActionTypes} from '../actions/userAction';
import InitialState from './initialState';

const initialState: userMain = InitialState.user;

export default function UserReducer(
  state: userMain = initialState,
  action: any,
) {
  switch (action.type) {
    case UserActionTypes.Login_Success_Action:
      return {...state, user_detail: action.payload};
    default:
      return state;
  }
}
