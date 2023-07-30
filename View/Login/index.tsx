import {View, Text} from 'react-native';
import React from 'react';
import {connect} from 'react-redux';
import {StoreState} from '../../Models/reduxModel';
import LoginView from './LoginView';
import {LoginAction} from '../../Store/actions/userAction';
import {userDetail} from '../../Models/User';

const Login = ({LoginAction, user}: LoginProps) => {
  const Login = (data: any) => {
    LoginAction(data);
  };

  return <LoginView Login={Login} />;
};

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
  };
};
const mapDispatchToProps = {
  LoginAction,
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
interface LoginProps {
  user?: userDetail;
  LoginAction?: any;
}
