import {View, Text, TextInput, TouchableOpacity} from 'react-native';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';

const LoginView = ({Login}: LoginViewProps) => {
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm({
    defaultValues: {
      user_name: '',
      password: '',
    },
  });
  const submit = (data: any) => {
    Login(data);
  };
  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      <Text>Login</Text>
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View style={{borderWidth: 1, borderColor: 'red', width: '80%'}}>
            <TextInput
              placeholder="Enter User Name"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}></TextInput>
          </View>
        )}
        name="user_name"
      />
      {errors.user_name && <Text>This is required.</Text>}
      <Controller
        control={control}
        rules={{
          required: true,
        }}
        render={({field: {onChange, onBlur, value}}) => (
          <View
            style={{
              borderWidth: 1,
              borderColor: 'red',
              width: '80%',
              marginTop: 20,
            }}>
            <TextInput
              placeholder="Enter Password"
              onBlur={onBlur}
              onChangeText={onChange}
              value={value}></TextInput>
          </View>
        )}
        name="password"
      />
      {errors.password && <Text>This is required.</Text>}
      <TouchableOpacity
        onPress={handleSubmit(submit)}
        style={{backgroundColor: 'blue', padding: 10, marginTop: 10}}>
        <Text style={{color: '#fff'}}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginView;
interface LoginViewProps {
  Login?: any;
}
