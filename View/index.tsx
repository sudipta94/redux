import {View, Text} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Login from './Login';
import Dashboard from './Dashboard';
import {connect} from 'react-redux';
import {StoreState} from '../Models/reduxModel';
import {userDetail} from '../Models/User';
const Stack = createNativeStackNavigator();
const MainRoute = ({user}: MainProps) => {
  return (
    <Stack.Navigator>
      {!user ? (
        <Stack.Screen name="login" component={Login} />
      ) : (
        <Stack.Screen name="dashboard" component={Dashboard} />
      )}
    </Stack.Navigator>
  );
};

const mapStateToProps = (state: StoreState, ownProps: any) => {
  return {
    user: state.user.user_detail,
  };
};
const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(MainRoute);

interface MainProps {
  user?: userDetail;
}
