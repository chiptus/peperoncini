import hello from 'hellojs';

import axios from 'axios';

import { FACEBOOK_CLIENT_ID, SERVER_URL } from '../config';

hello.init({
  facebook: FACEBOOK_CLIENT_ID,
});

export default () => {
  return hello('facebook')
    .login()
    .then(response => {
      return axios
        .post(`${SERVER_URL}/auth/facebook`, {
          socialToken: response.authResponse.access_token,
        })
        .then(response => response.data);
    });
};
