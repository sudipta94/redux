import axios from 'axios';

export const UserLogin = (data: any) => {
  return axios.post('https://abcdefg.free.beeceptor.com/login', data);
};
